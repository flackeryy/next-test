import { Table, Typography } from '@mui/material'
import useModifier from 'hooks/api/modifiers/useModifier'
import t from 'locales/en/translations.json'
import dynamic from 'next/dynamic'
import * as React from 'react'
import { useEffect } from 'react'
import {
  Controller,
  FormProvider,
  useFieldArray,
  useForm,
  useFormContext,
  useWatch
} from 'react-hook-form'
import { parseOptions } from 'utils/api/modifiers'

import FormLabel from '../FormLabel'
import DescriptionInput from './DescriptionInput'
import HeaderRow from './HeaderRow'
import ModifierButtonsSection from './ModifierButtonsSection'
import NameInput from './NameInput'
import SelectQuantityInput from './SelectQuantityInput'

const ModifierList = dynamic(() => import('./ModifierList'), { ssr: false })

const classes: any = {
  alert: {
    marginBottom: '0.75rem',
    color: 'error.main'
  },
  container: { display: 'flex', flexDirection: 'column' },
  toggles: { display: 'flex', alignItems: 'center' },
  toggle: { display: 'flex', alignItems: 'center' },
  addOption: { alignSelf: 'center', cursor: 'pointer', m: 2 }
}

const EditModifiers = ({
  editId,
  onBack,
  onClearId
}: {
  editId?: number
  onBack: () => void
  onClearId: () => void
}) => {
  const modifier = useModifier({ id: editId })

  const productForm = useFormContext()
  const [productModifiers] = useWatch({
    control: productForm.control,
    name: ['modifiers']
  })

  const methods = useForm<any>({
    defaultValues: {
      name: '',
      description: '',
      min_options: 0,
      max_options: 0,
      options: []
    }
  })

  const optionsArray = useFieldArray({
    control: methods.control,
    name: 'options'
  })

  const [min_options, max_options] = useWatch({
    control: methods.control,
    name: ['min_options', 'max_options']
  })

  useEffect(() => {
    return () => {
      onClearId()
      methods.reset()
    }
  }, [])

  useEffect(() => {
    if (modifier.group.id) {
      const { group } = modifier
      methods.reset({
        name: group.name,
        description: group.description,
        min_options: group.min_options,
        max_options: group.max_options,
        options: parseOptions(group.options)
      })
    }
  }, [modifier.group.id])

  const handleSubmit = (values: any) => {
    if (editId) {
      modifier.onEdit(editId, values, onBack)
    } else {
      modifier.onAdd(values, (id: number) => {
        productForm.setValue('modifiers', [...productModifiers, id])
        onBack()
      })
    }
  }

  return (
    <FormProvider {...methods}>
      {editId && (
        <Typography sx={classes.alert}>
          Use an existing modifier group. Note that any changes made to a shared
          modifier group will be applied against all products.
        </Typography>
      )}

      <div style={{ display: 'flex' }}>
        <NameInput
          placeholderText={
            t.tabs_drawer.modifiers.edit.modifier_placeholder_text
          }
          {...methods.register('name')}
        />
        {/*<SKUInput />*/}
      </div>
      <DescriptionInput {...methods.register('description')} />

      <Table>
        <HeaderRow />

        <ModifierList optionsArray={optionsArray} />
      </Table>

      <Typography
        color="primary"
        sx={classes.addOption}
        onClick={() =>
          optionsArray.append({
            group: '',
            name: '',
            price: 0,
            in_stock: false
          })
        }
      >
        {t.tabs_drawer.modifiers.edit.add_option}
      </Typography>

      <FormLabel text={'How many options can customers choose?'} />

      <div style={classes.container}>
        <div style={classes.toggles}>
          <Controller
            render={({ field: { value, name } }) => (
              <div style={classes.toggle}>
                <FormLabel text={'Min'} style={{ marginRight: 16 }} />
                <SelectQuantityInput
                  quantity={value}
                  onAdd={() => {
                    const newValue = value + 1
                    if (max_options < newValue) {
                      methods.setValue('max_options', newValue)
                    }
                    methods.setValue(name, newValue)
                  }}
                  onSubtract={() => methods.setValue(name, value - 1)}
                />
              </div>
            )}
            name="min_options"
          />
        </div>
        <div style={classes.toggles}>
          <Controller
            render={({ field: { value, name } }) => (
              <div style={classes.toggle}>
                <FormLabel text={'Max'} style={{ marginRight: 16 }} />
                <SelectQuantityInput
                  quantity={value}
                  onAdd={() => methods.setValue(name, value + 1)}
                  onSubtract={() => {
                    const newValue = value - 1
                    if (min_options > newValue) {
                      methods.setValue('min_options', newValue)
                    }
                    methods.setValue(name, value - 1)
                  }}
                />
              </div>
            )}
            name="max_options"
          />
        </div>
      </div>
      <ModifierButtonsSection
        config={{
          ctaBtnText: t.tabs_drawer.modifiers.edit.cta_button_text,
          ctaOnClick: () => methods.handleSubmit(handleSubmit)(),
          secondaryBtnText: t.tabs_drawer.modifiers.edit.secondary_button_text,
          secondaryOnClick: onBack
        }}
      />
    </FormProvider>
  )
}

export default EditModifiers

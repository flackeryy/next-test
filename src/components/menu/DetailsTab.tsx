import { Grid, Switch } from '@mui/material'
import t from 'locales/en/translations.json'
import * as React from 'react'
import { useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'

import FormLabel from '../FormLabel'
import DescriptionInput from './DescriptionInput'
import ImageInput from './ImageInput'
import NameInput from './NameInput'
import PriceInput from './PriceInput'

interface DetailsTabProps {
  menu: any
  onEdit: any
  isMenu?: boolean
  isCategory?: boolean
  onClose: () => void
  onEditSubmitRef: (ref: any) => void
}

const DetailsTab = ({
  menu,
  onEdit,
  isCategory,
  isMenu,
  onClose,
  onEditSubmitRef
}: DetailsTabProps) => {
  const [price, setPrice] = useState('')

  const methods = useForm({
    defaultValues: {
      name: '',
      description: '',
      file: null
    }
  })

  useEffect(() => {
    if (menu.id) {
      methods.setValue('name', menu.name)
      methods.setValue('description', menu.description)
      methods.setValue('file', menu.file)
    }
  }, [menu.id])

  const handleSubmit = (values: any) => {
    onEdit(menu.id, values, onClose)
  }

  onEditSubmitRef(methods.handleSubmit(handleSubmit))

  return (
    <>
      <form onSubmit={(event) => event.preventDefault()}>
        <NameInput placeholderText="" {...methods.register('name')} />
        <DescriptionInput
          placeholderText=""
          {...methods.register('description')}
        />
        {isCategory ? (
          <Grid>
            <FormLabel text={t.tabs_drawer.details.available_switch_text} />
            <Switch
              sx={{ mt: -1 }}
              color="primary"
              edge="start"
              name="isAvailable"
            />
          </Grid>
        ) : (
          <>
            <Grid
              item
              xs={12}
              lg={12}
              sx={{
                display: 'flex',
                justifyContent: 'space-between'
              }}
            >
              {!isMenu ? (
                <PriceInput
                  value={price}
                  setValue={(newPrice) => {
                    if (newPrice) setPrice(newPrice)
                  }}
                />
              ) : null}
              {/*<SKUInput />*/}
            </Grid>
            {/*<SwitchesSection />*/}

            <Controller
              name="file"
              control={methods.control}
              render={({ field: { name, value } }) => (
                <ImageInput
                  file={value}
                  onChange={(file) => methods.setValue(name, file)}
                />
              )}
            />
          </>
        )}
      </form>
    </>
  )
}

export default DetailsTab

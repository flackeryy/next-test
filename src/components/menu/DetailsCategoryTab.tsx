import { Grid, Switch } from '@mui/material'
import t from 'locales/en/translations.json'
import { useEffect } from 'react'
import { Controller, useForm } from 'react-hook-form'

import FormLabel from '../FormLabel'
import DescriptionInput from './DescriptionInput'
import NameInput from './NameInput'

interface DetailsCategoryTabProps {
  id?: number
  category: any
  onEdit: any
  onClose: () => void
  onEditSubmitRef: (ref: any) => void
}

const DetailsCategoryTab = ({
  category,
  onClose,
  onEdit,
  onEditSubmitRef
}: DetailsCategoryTabProps) => {
  const methods = useForm({
    defaultValues: {
      name: '',
      description: '',
      available: false
    }
  })

  useEffect(() => {
    if (category.id) {
      methods.setValue('name', category.name)
      methods.setValue('description', category.description)
      methods.setValue('available', category.available)
    }
  }, [category.id])

  const handleSubmit = (values: any) => {
    onEdit(category.id, values, onClose)
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
        <Grid>
          <FormLabel text={t.tabs_drawer.details.available_switch_text} />
          <Controller
            control={methods.control}
            name="available"
            render={({ field: { value, name } }) => (
              <Switch
                sx={{ mt: -1 }}
                color="primary"
                edge="start"
                name="isAvailable"
                checked={value}
                onChange={() => methods.setValue(name, !value)}
              />
            )}
          />
        </Grid>
      </form>
    </>
  )
}

export default DetailsCategoryTab

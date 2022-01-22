import { Grid } from '@mui/material'
import * as React from 'react'
import { Controller, useFormContext } from 'react-hook-form'

import DescriptionInput from './DescriptionInput'
import ImageInput from './ImageInput'
import NameInput from './NameInput'
import PriceInput from './PriceInput'

const DetailsProductTab = () => {
  const methods = useFormContext()
  return (
    <>
      <form onSubmit={(event) => event.preventDefault()}>
        <NameInput placeholderText="" {...methods.register('name')} />
        <DescriptionInput
          placeholderText=""
          {...methods.register('description')}
        />
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
            <Controller
              render={({ field: { value, name } }) => (
                <PriceInput
                  value={String(value)}
                  setValue={(newPrice) => {
                    methods.setValue(name, newPrice || 0)
                  }}
                />
              )}
              control={methods.control}
              name="price"
            />
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
      </form>
    </>
  )
}

export default DetailsProductTab

import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import { Box, Button, Grid, IconButton, Typography } from '@mui/material'
import Colors from 'assets/colors'
import useModifier from 'hooks/api/modifiers/useModifier'
import useModifiers from 'hooks/api/modifiers/useModifiers'
import t from 'locales/en/translations.json'
import { useState } from 'react'
import * as React from 'react'
import { Controller, useFormContext, useWatch } from 'react-hook-form'

import DeleteModal from '../dialogs/DeleteModal'
import LoadingPlaceholder from '../placeholders/LoadingPlaceholder'

const classes = {
  modifier: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    p: 2,
    borderBottom: `1px solid ${Colors.GREY['200']}`,
    cursor: 'default',

    '&:last-child': {
      borderBottom: 0
    }
  },
  removeBtn: {
    marginLeft: '1.25rem',
    color: 'error.main',

    '& svg': {
      width: 20
    }
  }
}

const SelectModifiers = ({
  onBack,
  submitForm
}: {
  onBack: () => void
  submitForm: () => void
}) => {
  const { groups, isLoading, revalidate } = useModifiers()
  const modifier = useModifier()
  const methods = useFormContext()
  const [confirmDelete, setConfirmDelete] = useState<number | null>(null)

  const [productModifiers] = useWatch({
    control: methods.control,
    name: ['modifiers']
  })

  const handleDelete = () => {
    modifier.onDeleteGroup(confirmDelete as number, () => {
      setConfirmDelete(null)
      methods.setValue(
        'modifiers',
        productModifiers.filter(
          (mod: number) => mod !== (confirmDelete as number)
        )
      )
      revalidate()
    })
  }

  return (
    <>
      <Typography color="textSecondary" variant="body2" sx={{ mb: 1 }}>
        {t.tabs_drawer.modifiers.select.description}
      </Typography>
      <Typography color="textSecondary" variant="subtitle2" sx={{ mb: 1.5 }}>
        {t.tabs_drawer.modifiers.column_names.group.toLocaleUpperCase()}
      </Typography>

      <Controller
        render={({ field: { value, name } }) => (
          <Box boxShadow={1} sx={{ borderRadius: 0.5 }}>
            {isLoading ? (
              <LoadingPlaceholder />
            ) : !groups.length ? (
              <Typography sx={{ p: 2 }}>No modifiers yet...</Typography>
            ) : (
              groups.map((modifier, index) => (
                <Grid key={index} sx={classes.modifier}>
                  <Typography color="textSecondary" variant="subtitle2">
                    {modifier.name}
                  </Typography>
                  <Grid
                    sx={{ display: 'flex', alignItems: 'center' }}
                    style={{
                      cursor: value.includes(modifier.id)
                        ? 'default'
                        : 'pointer'
                    }}
                  >
                    <Typography
                      color={
                        value.includes(modifier.id)
                          ? 'textSecondary'
                          : 'primary'
                      }
                      variant="subtitle2"
                      onClick={() => {
                        methods.setValue(
                          name,
                          value.includes(modifier.id)
                            ? value
                            : [...value, modifier.id]
                        )
                      }}
                    >
                      {value.includes(modifier.id)
                        ? t.tabs_drawer.modifiers.select.already_added
                        : t.tabs_drawer.modifiers.select.add_group_to_product}
                    </Typography>

                    <IconButton
                      size="small"
                      sx={classes.removeBtn}
                      onClick={() => setConfirmDelete(modifier.id)}
                    >
                      <DeleteOutlineIcon />
                    </IconButton>
                  </Grid>
                </Grid>
              ))
            )}
          </Box>
        )}
        name="modifiers"
      />

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          paddingTop: 16
        }}
      >
        <Button variant="contained" onClick={submitForm}>
          Save Changes
        </Button>

        <Button variant="outlined" onClick={onBack} color="secondary">
          {t.tabs_drawer.modifiers.edit.secondary_button_text}
        </Button>
      </div>

      <DeleteModal
        open={!!confirmDelete}
        header="Delete Group"
        description="Are you sure you want to delete modifier group?"
        buttonText="Delete"
        onClose={() => setConfirmDelete(null)}
        onCta={handleDelete}
      />
    </>
  )
}

export default SelectModifiers

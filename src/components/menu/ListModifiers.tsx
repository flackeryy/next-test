import {
  DeleteForever,
  ImportExport,
  KeyboardArrowRight
} from '@mui/icons-material'
import {
  Box,
  Button,
  Grid,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography
} from '@mui/material'
import Colors from 'assets/colors'
import useModifiers from 'hooks/api/modifiers/useModifiers'
import t from 'locales/en/translations.json'
import * as React from 'react'
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult
} from 'react-beautiful-dnd'
import { useFormContext, useWatch } from 'react-hook-form'
import { formatOptionsText } from 'utils/api/modifiers'
import { reorder } from 'utils/obj'

import FormLabel from '../FormLabel'

const MAX_OPTION_LENGTH = 40

const classes: any = {
  tableContainer: {
    display: 'flex',
    flexDirection: 'column'
  },
  row: (isDragging: boolean) => ({
    ...(isDragging && {
      width: '100%',
      border: '1px solid rgba(224, 224, 224, 1)',
      backgroundColor: '#fff',

      '& td': {
        width: '20%'
      }
    })
  })
}

const ListModifiers = ({
  onCreateNew,
  onUseExisting,
  onEdit,
  submitForm
}: {
  onEdit: (id: number) => void
  onCreateNew: () => void
  onUseExisting: () => void
  submitForm: () => void
}) => {
  const { groups } = useModifiers()
  const methods = useFormContext()

  const [modifiers] = useWatch({
    control: methods.control,
    name: ['modifiers']
  })

  const handleDrop = (res: DropResult) => {
    if (!res.destination) return
    if (res.destination.index === res.source.index) return
    methods.setValue(
      'modifiers',
      reorder(modifiers, res.source.index, res.destination.index)
    )
  }

  const modifiersList = groups.length
    ? modifiers
        .map((modifierId: number) =>
          groups.find((modifierGroup) => modifierGroup.id === modifierId)
        )
        .filter(Boolean)
    : []

  return (
    <>
      <Typography color="textSecondary" variant="body2" sx={{ mb: 1 }}>
        {t.tabs_drawer.modifiers.description}
      </Typography>

      <DragDropContext onDragEnd={handleDrop}>
        <Droppable droppableId="MODIFIER_DROP">
          {(provided) => (
            <Grid
              container
              sx={classes.tableContainer}
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              <Table sx={{ mb: 1, tableLayout: 'fixed' }}>
                <TableHead>
                  <TableRow>
                    <TableCell align="left">&nbsp;</TableCell>
                    <TableCell>
                      <Typography variant="caption">
                        {t.tabs_drawer.modifiers.column_names.group.toLocaleUpperCase()}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="caption">
                        {t.tabs_drawer.modifiers.column_names.options.toLocaleUpperCase()}
                      </Typography>
                    </TableCell>
                    <TableCell align="right">&nbsp;</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {!modifiersList?.length ? (
                    <TableRow>
                      <TableCell colSpan={4}>
                        <Typography sx={{ textAlign: 'center' }}>
                          No groups yet
                        </Typography>
                      </TableCell>
                    </TableRow>
                  ) : (
                    modifiersList.map((modifier: any, index: number) => (
                      <Draggable
                        key={index}
                        draggableId={`${modifier.id}`}
                        index={index}
                      >
                        {(provided, snapshot) => (
                          <TableRow
                            sx={classes.row(snapshot.isDragging)}
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                          >
                            <TableCell align="left">
                              <div {...provided.dragHandleProps}>
                                <ImportExport />
                              </div>
                            </TableCell>
                            <TableCell>
                              <Typography
                                color="textSecondary"
                                variant="subtitle2"
                              >
                                {modifier.name || '-'}
                              </Typography>
                            </TableCell>
                            <TableCell>
                              <Typography
                                variant="subtitle2"
                                color="textSecondary"
                                onClick={() => {}}
                              >
                                {formatOptionsText(modifier.options || [])
                                  .length > MAX_OPTION_LENGTH
                                  ? `${formatOptionsText(
                                      modifier.options || []
                                    ).substr(0, MAX_OPTION_LENGTH)}...`
                                  : formatOptionsText(modifier.options || [])}
                              </Typography>
                            </TableCell>

                            <TableCell align="right">
                              <Grid
                                sx={{
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'flex-end'
                                }}
                              >
                                <Typography
                                  color={'primary'}
                                  onClick={() => onEdit(modifier.id)}
                                  sx={{ cursor: 'pointer', mr: 2 }}
                                  variant="subtitle2"
                                >
                                  Edit
                                </Typography>

                                <IconButton
                                  onClick={() => {
                                    methods.setValue(
                                      'modifiers',
                                      modifiers.filter(
                                        (mod: any) => mod !== modifier.id
                                      )
                                    )
                                  }}
                                >
                                  <DeleteForever />
                                </IconButton>
                              </Grid>
                            </TableCell>
                          </TableRow>
                        )}
                      </Draggable>
                    ))
                  )}
                  {provided.placeholder}
                </TableBody>
              </Table>
            </Grid>
          )}
        </Droppable>
      </DragDropContext>

      <FormLabel text={t.tabs_drawer.modifiers.list.label} />
      <Box boxShadow={1} sx={{ borderRadius: 0.5 }}>
        {t.tabs_drawer.modifiers.buttons.map((choice, index) => (
          <div
            key={index}
            onClick={index === 0 ? onCreateNew : onUseExisting}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              cursor: 'pointer',
              padding: 16,
              borderBottom: index === 0 ? `1px solid ${Colors.GREY['200']}` : ''
            }}
          >
            <Typography color="textPrimary" variant="subtitle2">
              {choice.text}
            </Typography>
            <KeyboardArrowRight />
          </div>
        ))}
      </Box>

      <Grid sx={{ my: 2 }}>
        <Button variant="contained" onClick={submitForm}>
          Save Changes
        </Button>
      </Grid>
    </>
  )
}

export default ListModifiers

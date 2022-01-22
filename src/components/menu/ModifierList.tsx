import { TableBody, TableCell, TableRow, Typography } from '@mui/material'
import useModifier from 'hooks/api/modifiers/useModifier'
import * as React from 'react'
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult
} from 'react-beautiful-dnd'

import ModifierRow from './ModifierRow'

const classes = {
  emptyText: {
    display: 'flex',
    justifyContent: 'center'
  },
  container: {
    display: 'flex',
    flexDirection: 'column'
  }
}

const ModifierList = ({ optionsArray }: { optionsArray: any }) => {
  const modifier = useModifier()

  const handleDrop = (res: DropResult) => {
    if (!res.destination) return
    if (res.destination.index === res.source.index) return
    optionsArray.move(res.source.index, res.destination.index)
  }

  return (
    <DragDropContext onDragEnd={handleDrop}>
      <Droppable droppableId="MODIFIER_DROP">
        {(provided) => (
          <TableBody ref={provided.innerRef} {...provided.droppableProps}>
            {optionsArray.fields.length ? (
              <>
                {optionsArray.fields.map((row: any, index: number) => (
                  <Draggable
                    key={row.id}
                    draggableId={`${row.id}`}
                    index={index}
                  >
                    {(provided, snapshot) => (
                      <ModifierRow
                        snapshot={snapshot}
                        provided={provided}
                        name={`options.${index}`}
                        onDelete={() => {
                          if (row.apiId) {
                            modifier.onDelete(row.apiId, () => {
                              optionsArray.remove(index)
                            })
                          } else {
                            optionsArray.remove(index)
                          }
                        }}
                      />
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </>
            ) : (
              <TableRow>
                <TableCell colSpan={4}>
                  <Typography sx={classes.emptyText}>No options yet</Typography>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        )}
      </Droppable>
    </DragDropContext>
  )
}

export default ModifierList

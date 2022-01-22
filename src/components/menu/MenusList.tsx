import { Reorder } from '@mui/icons-material'
import {
  Button,
  FormControlLabel,
  Grid,
  Switch,
  Typography
} from '@mui/material'
import Colors from 'assets/colors'
import useMenusReorder from 'hooks/api/menus/useMenusReorder'
import t from 'locales/en/translations.json'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult
} from 'react-beautiful-dnd'
import { reorder } from 'utils/obj'

import { PageNames } from '../../../pages/_document'

interface MenusListProps {
  menus: any[]
  onEdit: any
}

const DROP_ID_ACTIVE = `menus-active-${Date.now()}`
const DROP_ID_INACTIVE = `menus-inactive-${Date.now()}`

export default function MenusList({ menus, onEdit }: MenusListProps) {
  const [innerMenus, setInnerMenus] = useState<any[]>([])
  const menusReorder = useMenusReorder()

  const menusKey = JSON.stringify(menus)

  useEffect(() => {
    setInnerMenus(menus)
  }, [menusKey])

  const activeMenus = innerMenus.filter((menu) => menu.available)
  const inactiveMenus = innerMenus.filter((menu) => !menu.available)

  const onDragEnd = (active: boolean, res: DropResult) => {
    if (!res.destination) return
    if (res.destination.index === res.source.index) return

    let newMenus

    if (active) {
      newMenus = [
        ...reorder(activeMenus, res.source.index, res.destination!.index),
        ...inactiveMenus
      ]
    } else {
      newMenus = [
        ...activeMenus,
        ...reorder(inactiveMenus, res.source.index, res.destination!.index)
      ]
    }

    newMenus = newMenus.map((menu, index) => ({
      ...menu,
      sort_order: index
    }))

    menusReorder.onReorder(newMenus)
    setInnerMenus(newMenus)
  }

  const renderMenus = (menus: any[], dndId: string, active: boolean) => (
    <DragDropContext onDragEnd={(result) => onDragEnd(active, result)}>
      <Droppable droppableId={dndId}>
        {(droppableProvided) => (
          <Grid
            container
            sx={{ flexDirection: 'column' }}
            ref={droppableProvided.innerRef}
            {...droppableProvided.droppableProps}
          >
            {menus.map((menu, index) => (
              <Draggable key={menu.id} draggableId={`${menu.id}`} index={index}>
                {(draggableProvided) => (
                  <div
                    {...draggableProvided.draggableProps}
                    ref={draggableProvided.innerRef}
                  >
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        backgroundColor: Colors.WHITE,
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        width: '98%',
                        padding: 16,
                        margin: 8,
                        borderRadius: 8
                      }}
                    >
                      <Grid sx={{ display: 'flex', alignItems: 'center' }}>
                        <div {...draggableProvided.dragHandleProps}>
                          <Reorder />
                        </div>

                        <div
                          style={{
                            display: 'flex',
                            flexDirection: 'column',
                            margin: '0 1.25rem'
                          }}
                        >
                          <Typography variant="h6" color="primary">
                            {menu.name}
                          </Typography>
                          <Typography variant="caption" color="textSecondary">
                            {t.menus.last_updated}{' '}
                            {new Date(menu.created).toDateString()}
                          </Typography>
                          <Typography variant="caption" color="textSecondary">
                            {t.menus.created}{' '}
                            {new Date(menu.modified).toDateString()}
                          </Typography>
                        </div>
                      </Grid>

                      <div>
                        <FormControlLabel
                          style={{ marginRight: 8 }}
                          disableTypography
                          label={
                            <Typography variant="body2" sx={{ mr: 0.3 }}>
                              Status
                            </Typography>
                          }
                          labelPlacement={'start'}
                          control={
                            <Switch
                              color="primary"
                              checked={menu.available}
                              onChange={() => {
                                onEdit(menu.id, { available: !menu.available })
                              }}
                              edge="start"
                              name="isMenuActive"
                            />
                          }
                        />
                        <Link href={`${PageNames.MENUS}/${menu.id}`}>
                          <a>
                            <Button
                              color="secondary"
                              size="medium"
                              sx={{ mr: 3 }}
                              variant="outlined"
                            >
                              {t.menus.edit_menu}
                            </Button>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </Draggable>
            ))}
            {droppableProvided.placeholder}
          </Grid>
        )}
      </Droppable>
    </DragDropContext>
  )

  return (
    <>
      {renderMenus(activeMenus, DROP_ID_ACTIVE, true)}
      {renderMenus(inactiveMenus, DROP_ID_INACTIVE, false)}
    </>
  )
}

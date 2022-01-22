import { Grid } from '@mui/material'
import SortableProductList from 'components/menu/SortableProductList'
import useCategory from 'hooks/api/categories/useCategory'
import React, { useEffect, useState } from 'react'
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult
} from 'react-beautiful-dnd'
import { addOrder, reorder } from 'utils/obj'

interface CategoriesListProps {
  categories: any[]
  setIsAddProductModalOpen: any
  setIsEditProductModalOpen: any
  setIsEditCategoryModalOpen: any
}

const classes: any = {
  root: {
    display: 'flex',
    flexDirection: 'column'
  },
  drop: {
    display: 'flex',
    flexDirection: 'column'
  }
}

const DROP_ID = 'drop-categories'

export default function CategoriesList({
  categories,
  setIsAddProductModalOpen,
  setIsEditCategoryModalOpen,
  setIsEditProductModalOpen
}: CategoriesListProps) {
  const [innerCategories, setInnerCategories] = useState<any[]>([])
  const category = useCategory()

  const categoriesKey = JSON.stringify(categories)

  useEffect(() => {
    setInnerCategories(categories)
  }, [categoriesKey])

  const handleReorder = (res: DropResult) => {
    if (!res.destination) {
      return
    }
    if (res.destination.index === res.source.index) {
      return
    }
    setInnerCategories((categories) => {
      const newCategories = addOrder(
        reorder(categories, res.source.index, res.destination!.index)
      )
      category.onReorder(newCategories)
      return newCategories
    })
  }

  return (
    <Grid container sx={classes.root}>
      <DragDropContext onDragEnd={handleReorder}>
        <Droppable droppableId={DROP_ID}>
          {(provided) => (
            <Grid
              container
              sx={classes.drop}
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {innerCategories.map((row: any, index) => (
                <Draggable key={row.id} draggableId={`${row.id}`} index={index}>
                  {(provided) => (
                    <div ref={provided.innerRef} {...provided.draggableProps}>
                      <SortableProductList
                        key={row.id}
                        provided={provided}
                        onAddProduct={() => setIsAddProductModalOpen(row.id)}
                        onEditProduct={(id) => setIsEditProductModalOpen(id)}
                        onEditCategory={(id) => setIsEditCategoryModalOpen(id)}
                        category={row}
                      />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </Grid>
          )}
        </Droppable>
      </DragDropContext>
    </Grid>
  )
}

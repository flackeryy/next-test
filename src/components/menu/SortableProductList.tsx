import { Create, Reorder } from '@mui/icons-material'
import {
  Box,
  Card,
  CircularProgress,
  Grid,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography
} from '@mui/material'
import useProduct from 'hooks/api/products/useProduct'
import useProducts from 'hooks/api/products/useProducts'
import React, { useEffect, useState } from 'react'
import {
  DragDropContext,
  Draggable,
  DraggableProvided,
  DraggableStateSnapshot,
  Droppable,
  DroppableProvided,
  DropResult
} from 'react-beautiful-dnd'
import { addOrder, reorder } from 'utils/obj'

import LoadingPlaceholder from '../placeholders/LoadingPlaceholder'
import ActiveStateCell from './ActiveStateCell'
import AddProductFullWidthButton from './AddProductFullWidthButton'
import CTTableHead from './CTTableHead'
import EditButtonCell from './EditButtonCell'
import ImageCell from './ImageCell'
import ModifierGroupCell from './ModifierGroupCell'
import PopularCheckboxStarCell from './PopularCheckboxStarCell'
import PriceCell from './PriceCell'

interface SortableProductListProps {
  category: any
  provided: DraggableProvided
  onAddProduct: () => void
  onEditProduct: (id: number) => void
  onEditCategory: (id: number) => void
}

const classes: any = {
  root: {
    marginBottom: 2,
    position: 'relative'
  },
  loading: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    zIndex: 11
  },
  container: {
    alignItems: 'center',
    display: 'flex',
    flexWrap: 'wrap',
    m: -1,
    p: 2
  },
  nameContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer'
  },
  emptyText: {
    display: 'flex',
    justifyContent: 'center',
    my: 1
  },
  reorderBtn: {
    display: 'flex',
    alignItems: 'center',
    margin: '0 0.75rem',
    cursor: 'grab'
  }
}

const SortableProductList = ({
  category,
  provided,
  onAddProduct,
  onEditProduct,
  onEditCategory
}: SortableProductListProps) => {
  const [localItems, setLocalItems] = useState<Array<any>>([])

  const { products, revalidate, isReorderLoading, onReorder, isLoading } =
    useProducts({
      categoryId: category.id
    })
  const { onEdit } = useProduct({ revalidate })

  const prodKeys = JSON.stringify(products)

  useEffect(() => {
    setLocalItems(products)
  }, [prodKeys])

  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) return
    if (result.destination.index === result.source.index) return

    setLocalItems((prev: any) => {
      const newItems = addOrder(
        reorder(prev, result.source.index, result.destination!.index)
      )
      onReorder(newItems)
      return newItems
    })
  }

  return (
    <Card sx={classes.root}>
      {isReorderLoading && (
        <Grid sx={classes.loading}>
          <CircularProgress />
        </Grid>
      )}

      <Box sx={classes.container}>
        <Grid sx={classes.reorderBtn} {...provided.dragHandleProps}>
          <Reorder />
        </Grid>

        <div
          onClick={() => onEditCategory(category.id)}
          style={classes.nameContainer}
        >
          <Typography variant="h6" sx={{ ml: 1 }}>
            {category.name}
          </Typography>
          <IconButton>
            <Create fontSize="small" />
          </IconButton>
        </div>

        <TableContainer>
          {isLoading ? (
            <LoadingPlaceholder />
          ) : !localItems.length ? (
            <Typography sx={classes.emptyText}>Add products</Typography>
          ) : (
            <Table>
              <CTTableHead />
              <DragDropContext onDragEnd={handleDragEnd}>
                <Droppable droppableId="droppable" direction="vertical">
                  {(droppableProvided: DroppableProvided) => (
                    <TableBody
                      ref={droppableProvided.innerRef}
                      {...droppableProvided.droppableProps}
                    >
                      {localItems.map((product: any, index: number) => (
                        <Draggable
                          key={product.id}
                          draggableId={`${product.id}`}
                          index={index}
                        >
                          {(
                            draggableProvided: DraggableProvided,
                            snapshot: DraggableStateSnapshot
                          ) => {
                            return (
                              // <CTTableRow product={product}
                              //           key={product.id}
                              //           draggableProvided={draggableProvided}
                              //           style={{
                              //             ...draggableProvided.draggableProps.style,
                              //             background: snapshot.isDragging
                              //               ? 'rgba(245,245,245, 0.75)'
                              //               : 'none',
                              //           }}
                              // />
                              <TableRow
                                ref={draggableProvided.innerRef}
                                {...draggableProvided.draggableProps}
                                style={{
                                  ...draggableProvided.draggableProps.style,
                                  background: snapshot.isDragging
                                    ? 'rgba(245,245,245, 0.75)'
                                    : 'none'
                                }}
                              >
                                <TableCell align="left" width={75}>
                                  <div {...draggableProvided.dragHandleProps}>
                                    <Reorder />
                                  </div>
                                </TableCell>
                                <ImageCell
                                  key={product.image}
                                  image={product.image}
                                  name={product.name}
                                />
                                <ModifierGroupCell
                                  modifiers={product.modifiers.length}
                                />
                                <PopularCheckboxStarCell
                                  isPopular={product.popular}
                                  onChange={(e) =>
                                    onEdit(product.id, { popular: e })
                                  }
                                />
                                <ActiveStateCell
                                  isAvailable={product.available}
                                  onChange={(e) =>
                                    onEdit(product.id, { available: e })
                                  }
                                />
                                <PriceCell price={product.price} />
                                <EditButtonCell
                                  onClick={() => onEditProduct(product.id)}
                                />
                              </TableRow>
                            )
                          }}
                        </Draggable>
                      ))}
                      {droppableProvided.placeholder}
                    </TableBody>
                  )}
                </Droppable>
              </DragDropContext>
            </Table>
          )}
        </TableContainer>
      </Box>
      <AddProductFullWidthButton onClick={() => onAddProduct()} />
    </Card>
  )
}

export default SortableProductList

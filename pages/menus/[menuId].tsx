import { Box, Button, Grid } from '@mui/material'
import Layout from 'components/layout'
import CategoryModal from 'components/menu/CategoryModal'
import EditCategoryDrawer from 'components/menu/EditCategoryDrawer'
import EditMenuDrawer from 'components/menu/EditMenuDrawer'
import EditProductDrawer from 'components/menu/EditProductDrawer'
import MenuHeader from 'components/menu/MenuHeader'
import ProductModal from 'components/menu/ProductModal'
import LoadingPlaceholder from 'components/placeholders/LoadingPlaceholder'
import CategoriesProvider from 'contexts/CategoriesContext'
import useAuth from 'hooks/api/auth/useAuth'
import useMenuCategories from 'hooks/api/categories/useMenuCategories'
import useMenu from 'hooks/api/menus/useMenu'
import t from 'locales/en/translations.json'
import authMiddleware from 'middlewares/authMiddleware'
import { GetServerSidePropsContext } from 'next'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import Api from 'services/Api'
import { AuthProps, getId, withAuth } from 'utils/axios'

import { PageNames } from '../_document'

// reference: https://github.com/atlassian/react-beautiful-dnd/issues/1854#issuecomment-889857209
const CategoriesList = dynamic(() => import('components/menu/CategoriesList'), {
  ssr: false
})

const classes: any = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'background.default',
    p: 3
  },
  header: {
    display: 'flex',
    justifyContent: 'flex-end',
    paddingBottom: 8
  }
}

interface MenuCreatorProps {
  menu: any
  categories: any
}

export default function MenuCreator(props: MenuCreatorProps & AuthProps) {
  useAuth({ ...props })

  const router = useRouter()

  const [isEditProductModalOpen, setIsEditProductModalOpen] = useState<
    number | undefined
  >(undefined)
  const [isEditCategoryModalOpen, setIsEditCategoryModalOpen] = useState<
    number | undefined
  >(undefined)
  const [isEditMenuModalOpen, setIsEditMenuModalOpen] = useState(false)
  const [isAddProductModalOpen, setIsAddProductModalOpen] = useState<
    number | undefined
  >(undefined)
  const [isAddCategoryModalOpen, setIsAddCategoryModalOpen] = useState(false)

  const onEditMenu = () => setIsEditMenuModalOpen(!isEditMenuModalOpen)
  const onAddCategory = () => setIsAddCategoryModalOpen(!isAddCategoryModalOpen)

  const menuId = router.query.menuId as string
  const { menu, isMenuLoading } = useMenu({ id: menuId, menu: props.menu })
  const { menuCategories, revalidate } = useMenuCategories({
    id: menuId,
    categories: props.categories
  })

  if (isMenuLoading) {
    return (
      <Layout>
        <Grid container sx={{ p: 3 }}>
          <LoadingPlaceholder />
        </Grid>
      </Layout>
    )
  }

  return (
    <CategoriesProvider revalidate={revalidate}>
      <Layout>
        <MenuHeader
          hasIcon
          name={menu.name}
          buttonText={'Go back'}
          onButtonClick={() => router.push(PageNames.MENUS)}
          onClick={onEditMenu}
        />
        <Box sx={classes.root}>
          <div style={classes.header}>
            <Button
              onClick={onAddCategory}
              sx={{ mb: 2 }}
              variant="contained"
              color="primary"
            >
              {t.common.create_category}
            </Button>
          </div>

          <CategoriesList
            categories={menuCategories}
            setIsEditCategoryModalOpen={setIsEditCategoryModalOpen}
            setIsAddProductModalOpen={setIsAddProductModalOpen}
            setIsEditProductModalOpen={setIsEditProductModalOpen}
          />
        </Box>

        <EditMenuDrawer isOpen={isEditMenuModalOpen} onEditMenu={onEditMenu} />
        <EditProductDrawer
          productId={isEditProductModalOpen}
          isOpen={!!isEditProductModalOpen}
          onEditProduct={() => setIsEditProductModalOpen(undefined)}
        />
        <EditCategoryDrawer
          id={isEditCategoryModalOpen}
          isOpen={!!isEditCategoryModalOpen}
          onEditCategory={() => setIsEditCategoryModalOpen(undefined)}
        />
        {isAddProductModalOpen && (
          <ProductModal
            categoryId={isAddProductModalOpen}
            open={!!isAddProductModalOpen}
            onClose={() => setIsAddProductModalOpen(undefined)}
          />
        )}
        {isAddCategoryModalOpen && (
          <CategoryModal
            open={isAddCategoryModalOpen}
            onClose={() => setIsAddCategoryModalOpen(false)}
          />
        )}
      </Layout>
    </CategoriesProvider>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  return authMiddleware(context, async (token, me) => {
    const response = await Api.server(
      withAuth(token, {
        method: 'GET',
        url: `/restaurant/${getId(me)}/menus/${context.params?.menuId}`
      })
    )

    const categoriesResponse = await Api.server(
      withAuth(token, {
        method: 'GET',
        url: `/restaurant/${getId(me)}/menus/${
          context.params?.menuId
        }/categories/`
      })
    )

    return {
      props: {
        menu: response.data,
        categories: categoriesResponse.data,
        token,
        me
      }
    }
  })
}

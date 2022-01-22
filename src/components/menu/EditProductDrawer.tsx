import { Box, Drawer, Tab, Tabs, Typography } from '@mui/material'
import useProduct from 'hooks/api/products/useProduct'
import t from 'locales/en/translations.json'
import * as React from 'react'
import { useEffect, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import stringTemplateParser from 'utils/stringTemplateParser'

import DeleteTab from './DeleteTab'
import DetailsProductTab from './DetailsProductTab'
// import TagsAndAllergensTab from './TagsAndAllergensTab';
import ModifierButtonsSection from './ModifierButtonsSection'
import ModifiersTab from './ModifiersTab'

interface TabOptions {
  label: TabNames
  disabled?: boolean
  isDestructive?: boolean
}

enum TabNames {
  DETAILS = 'Details',
  // TAGS_AND_ALLERGENS = 'Tags & Allergens',
  MODIFIERS = 'Modifiers',
  DELETE = 'Delete'
}

const tabOptions: TabOptions[] = [
  { label: TabNames.DETAILS },
  // { label: TabNames.TAGS_AND_ALLERGENS }, // disabled: true
  { label: TabNames.MODIFIERS },
  { label: TabNames.DELETE, isDestructive: true }
]

const EditProductDrawer = ({
  productId,
  isOpen,
  onEditProduct
}: {
  productId?: number
  isOpen: boolean
  onEditProduct: () => void
}) => {
  const [selectedTab, setSelectedTab] = useState<TabNames>(TabNames.DETAILS)

  const handleChange = (_e: any, newTab: TabNames) => setSelectedTab(newTab)
  const { onRemove, onEdit, product } = useProduct({ id: productId })

  const methods = useForm({
    defaultValues: {
      name: '',
      description: '',
      price: 0,
      category: 0,
      file: null,
      modifiers: []
    }
  })

  useEffect(() => {
    if (product.id) {
      methods.reset({
        name: product.name,
        description: product.description,
        price: product.price,
        category: product.category,
        modifiers: product.modifiers
      })
    }
  }, [product.id])

  const handleSubmit = (values: any) => {
    onEdit(product.id, values, onEditProduct)
  }

  const submitForm = () => {
    methods.handleSubmit(handleSubmit)()
  }

  const handleConfirm = () => {
    if (selectedTab === TabNames.DELETE) {
      onRemove(productId as number, product.category, onEditProduct)
    } else {
      submitForm()
    }
  }

  const tabContent = () => {
    switch (selectedTab) {
      case TabNames.DETAILS:
        return <DetailsProductTab />
      // case TabNames.TAGS_AND_ALLERGENS:
      //   return <TagsAndAllergensTab />;
      case TabNames.MODIFIERS:
        return <ModifiersTab submitForm={submitForm} />
      case TabNames.DELETE:
        return (
          <DeleteTab
            description={stringTemplateParser(
              t.tabs_drawer.delete.product.description,
              { product: product.name }
            )}
          />
        )
      default:
        break
    }
  }

  return (
    <FormProvider {...methods}>
      <Drawer
        anchor="right"
        open={isOpen}
        onClose={() => {
          setSelectedTab(TabNames.DETAILS)
          onEditProduct()
        }}
      >
        <Box
          role="presentation"
          sx={{ display: 'flex', flexDirection: 'column', m: 3, width: 550 }}
        >
          <Typography variant="h6">
            {t.tabs_drawer.edit_product_header}
          </Typography>
          <Tabs
            value={selectedTab}
            onChange={handleChange}
            textColor="primary"
            indicatorColor="primary"
            aria-label="product tabs"
            sx={{ mb: 2 }}
          >
            {tabOptions.map((tab, index) => (
              <Tab
                key={index}
                label={tab.label}
                value={tab.label}
                disabled={tab.disabled}
              />
            ))}
          </Tabs>
          {tabContent()}

          {selectedTab !== TabNames.MODIFIERS && (
            <ModifierButtonsSection
              config={{
                ctaBtnText:
                  selectedTab === TabNames.DELETE ? t.common.delete : undefined,
                ctaBtnDestructive: selectedTab === TabNames.DELETE,
                secondaryBtnText:
                  selectedTab === TabNames.DELETE ? t.common.close : undefined,
                ctaOnClick: handleConfirm,
                secondaryOnClick: onEditProduct
              }}
            />
          )}
        </Box>
      </Drawer>
    </FormProvider>
  )
}

export default EditProductDrawer

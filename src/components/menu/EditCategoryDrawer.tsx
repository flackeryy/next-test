import { Box, Drawer, Tab, Tabs, Typography } from '@mui/material'
import useCategory from 'hooks/api/categories/useCategory'
import t from 'locales/en/translations.json'
import * as React from 'react'
import { useRef, useState } from 'react'
import stringTemplateParser from 'utils/stringTemplateParser'

import DeleteModal from '../dialogs/DeleteModal'
import DeleteTab from './DeleteTab'
import DetailsCategoryTab from './DetailsCategoryTab'
import ModifierButtonsSection from './ModifierButtonsSection'

interface TabOptions {
  label: TabNames
  disabled?: boolean
  isDestructive?: boolean
}

enum TabNames {
  DETAILS = 'Details',
  DELETE = 'Delete'
}

const tabOptions: TabOptions[] = [
  { label: TabNames.DETAILS },
  { label: TabNames.DELETE, isDestructive: true }
]

const EditCategoryDrawer = ({
  id,
  isOpen,
  onEditCategory
}: {
  id?: number
  isOpen: boolean
  onEditCategory: () => void
}) => {
  const [deleteConfirm, setDeleteConfirm] = useState(false)
  const [selectedTab, setSelectedTab] = useState<TabNames>(TabNames.DETAILS)
  const handleChange = (_e: any, newTab: TabNames) => setSelectedTab(newTab)
  const editSubmitRef = useRef<any>()

  const { category, onEdit } = useCategory({ id: Number(id) })

  const { onRemove } = useCategory()

  const handleDelete = () => {
    onRemove(id as number, () => {
      setDeleteConfirm(false)
      onEditCategory()
    })
  }

  const handleConfirm = () => {
    if (selectedTab === TabNames.DELETE) {
      setDeleteConfirm(true)
    } else {
      editSubmitRef.current?.()
    }
  }

  const tabContent = () => {
    switch (selectedTab) {
      case TabNames.DETAILS:
        return (
          <DetailsCategoryTab
            onEdit={onEdit}
            category={category}
            onClose={onEditCategory}
            onEditSubmitRef={(ref) => (editSubmitRef.current = ref)}
          />
        )
      case TabNames.DELETE:
        return (
          <DeleteTab
            description={stringTemplateParser(
              t.tabs_drawer.delete.category.description,
              { category: category.name }
            )}
          />
        )
      default:
        break
    }
  }

  return (
    <>
      <Drawer
        anchor="right"
        open={isOpen}
        onClose={() => {
          setSelectedTab(TabNames.DETAILS)
          onEditCategory()
        }}
      >
        <Box
          role="presentation"
          sx={{ display: 'flex', flexDirection: 'column', m: 3, width: 550 }}
        >
          <Typography variant="h6">
            {t.tabs_drawer.edit_category_header}
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
          <ModifierButtonsSection
            config={{
              ctaBtnText:
                selectedTab === TabNames.DELETE ? t.common.delete : undefined,
              ctaBtnDestructive: selectedTab === TabNames.DELETE,
              secondaryBtnText:
                selectedTab === TabNames.DELETE ? t.common.close : undefined,
              ctaOnClick: handleConfirm,
              secondaryOnClick: onEditCategory
            }}
          />
        </Box>
      </Drawer>

      <DeleteModal
        open={deleteConfirm}
        onClose={() => setDeleteConfirm(false)}
        onCta={handleDelete}
        header="Confirm"
        description="Are you sure you want to delete a category?"
        buttonText="Delete"
      />
    </>
  )
}

export default EditCategoryDrawer

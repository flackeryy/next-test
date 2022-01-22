import { Box, Drawer, Tab, Tabs, Typography } from '@mui/material'
import useMenu from 'hooks/api/menus/useMenu'
import t from 'locales/en/translations.json'
import { useRouter } from 'next/router'
import * as React from 'react'
import { useRef, useState } from 'react'
import stringTemplateParser from 'utils/stringTemplateParser'

import DeleteModal from '../dialogs/DeleteModal'
import DeleteTab from './DeleteTab'
import DetailsTab from './DetailsTab'
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

const EditMenuDrawer = ({
  isOpen,
  onEditMenu
}: {
  isOpen: boolean
  onEditMenu: () => void
}) => {
  const router = useRouter()
  const [deleteConfirm, setDeleteConfirm] = useState(false)
  const [selectedTab, setSelectedTab] = useState<TabNames>(TabNames.DETAILS)
  const handleChange = (_e: any, newTab: TabNames) => setSelectedTab(newTab)
  const editSubmitRef = useRef<any>()
  const { onRemove } = useMenu()

  const { menu, onEdit } = useMenu({ id: router.query.menuId as string })

  const handleDelete = () => {
    onRemove(router.query.menuId as any, () => {
      onEditMenu()
      router.push('/menus')
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
          <DetailsTab
            isMenu
            menu={menu}
            onEdit={onEdit}
            onClose={onEditMenu}
            onEditSubmitRef={(ref: any) => {
              editSubmitRef.current = ref
            }}
          />
        )
      case TabNames.DELETE:
        return (
          <DeleteTab
            description={stringTemplateParser(
              t.tabs_drawer.delete.menu.description,
              { menu: menu.name }
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
          onEditMenu()
        }}
      >
        <Box
          role="presentation"
          sx={{ display: 'flex', flexDirection: 'column', m: 3, width: 550 }}
        >
          <Typography variant="h6">{t.tabs_drawer.edit_menu_header}</Typography>
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
              secondaryOnClick: onEditMenu
            }}
          />
        </Box>
      </Drawer>

      <DeleteModal
        open={deleteConfirm}
        onClose={() => setDeleteConfirm(false)}
        onCta={handleDelete}
        header="Confirm"
        description="Are you sure you want to delete a menu?"
        buttonText="Delete"
      />
    </>
  )
}

export default EditMenuDrawer

import dynamic from 'next/dynamic'
import { useState } from 'react'
import * as React from 'react'

import EditModifiers from './EditModifiers'
import SelectModifiers from './SelectModifiers'

const ListModifiers = dynamic(() => import('./ListModifiers'), { ssr: false })

enum ModifierScreen {
  LIST,
  SELECT,
  EDIT // edit and new are interchangeable for now
}

interface ModifiersTabProps {
  submitForm: () => void
}

const ModifiersTab = ({ submitForm }: ModifiersTabProps) => {
  const [editId, setEditId] = useState<undefined | number>(undefined)
  const [modifierScreen, setModifierScreen] = useState<ModifierScreen>(
    ModifierScreen.LIST
  )

  const screenContent = () => {
    switch (modifierScreen) {
      case ModifierScreen.LIST:
        return (
          <ListModifiers
            onEdit={(id) => {
              setEditId(id)
              setModifierScreen(ModifierScreen.EDIT)
            }}
            onCreateNew={() => setModifierScreen(ModifierScreen.EDIT)}
            onUseExisting={() => setModifierScreen(ModifierScreen.SELECT)}
            submitForm={submitForm}
          />
        )
      case ModifierScreen.SELECT:
        return (
          <SelectModifiers
            submitForm={submitForm}
            onBack={() => setModifierScreen(ModifierScreen.LIST)}
          />
        )
      case ModifierScreen.EDIT:
        return (
          <EditModifiers
            editId={editId}
            onClearId={() => setEditId(undefined)}
            onBack={() => setModifierScreen(ModifierScreen.LIST)}
          />
        )
      default:
        break
    }
  }
  return <>{screenContent()}</>
}

export default ModifiersTab

import AreasProvider from 'contexts/AreasContext'
import useAreas from 'hooks/api/venus/useAreas'
import { useRef, useState } from 'react'

import AddAreaModal from './AddAreaModal'
import AddTableModal from './AddTableModal'
import DeleteAreaModal from './DeleteAreaModal'
import DeleteTableModal from './DeleteTableModal'
import TableManager from './TableManager'

interface VenueManagerProps {
  areas: any
}

export default function VenueManager(props: VenueManagerProps) {
  const areas = useAreas({ areas: props.areas })

  const [selectedArea, setSelectedArea] = useState<number | undefined>(
    undefined
  )
  const [isAddAreaModalOpen, setIsAddAreaModalOpen] = useState(false)
  const [isAddTableModalOpen, setIsAddTableModalOpen] = useState<
    number | undefined
  >(undefined)
  const [isDeleteAreaModalOpen, setIsDeleteAreaModalOpen] = useState<
    number | undefined
  >(undefined)
  const [isDeleteTableModalOpen, setIsDeleteTableModalOpen] = useState<
    number | undefined
  >(undefined)

  const clearSelectedAreaRef = useRef<any>()
  const clearSelectedTableRef = useRef<any>()

  const onAddArea = () => setIsAddAreaModalOpen(!isAddAreaModalOpen)

  return (
    <AreasProvider revalidate={areas.revalidate}>
      <TableManager
        areas={areas.areas}
        onAddArea={onAddArea}
        onAddTable={(areaId: number) => setIsAddTableModalOpen(areaId)}
        onDeleteArea={(areaId: number) => setIsDeleteAreaModalOpen(areaId)}
        onDeleteTable={(tableId: number) => setIsDeleteTableModalOpen(tableId)}
        onClearAreaRef={(ref) => (clearSelectedAreaRef.current = ref)}
        onClearTableRef={(ref) => (clearSelectedTableRef.current = ref)}
        onSelectedArea={setSelectedArea}
      />
      <AddAreaModal open={isAddAreaModalOpen} onClose={onAddArea} />
      <AddTableModal
        areaId={isAddTableModalOpen as number}
        open={!!isAddTableModalOpen}
        onClose={() => setIsAddTableModalOpen(undefined)}
      />
      <DeleteAreaModal
        areaId={isDeleteAreaModalOpen as number}
        open={!!isDeleteAreaModalOpen}
        onClose={() => setIsDeleteAreaModalOpen(undefined)}
        onClearArea={() => clearSelectedAreaRef.current?.()}
      />
      <DeleteTableModal
        areaId={selectedArea as number}
        tableId={isDeleteTableModalOpen as number}
        open={!!isDeleteTableModalOpen}
        onClose={() => setIsDeleteTableModalOpen(undefined)}
        onClearTable={() => clearSelectedTableRef.current?.()}
      />
    </AreasProvider>
  )
}

import DeleteModal from 'components/dialogs/DeleteModal'
import useTable from 'hooks/api/venus/useTable'
import t from 'locales/en/translations.json'

interface DeleteTableModalProps {
  open: boolean
  onClose: () => void
  tableId: number
  areaId: number
  onClearTable: () => void
}

export default function DeleteTableModal({
  tableId,
  areaId,
  open,
  onClose,
  onClearTable
}: DeleteTableModalProps) {
  const table = useTable()
  return (
    <DeleteModal
      onCta={() =>
        table.onRemove(areaId, tableId, () => {
          onClearTable()
          onClose()
        })
      }
      open={open}
      header={t.venue.delete_table_modal.header}
      description={t.venue.delete_table_modal.description}
      buttonText={t.venue.delete_table_modal.button_text}
      onClose={onClose}
    />
  )
}

import DeleteModal from 'components/dialogs/DeleteModal'
import useArea from 'hooks/api/venus/useArea'
import t from 'locales/en/translations.json'

interface DeleteAreaModalProps {
  areaId: number
  open: boolean
  onClose: () => void
  onClearArea: () => void
}

export default function DeleteAreaModal({
  areaId,
  open,
  onClose,
  onClearArea
}: DeleteAreaModalProps) {
  const area = useArea()
  return (
    <DeleteModal
      open={open}
      header={t.venue.delete_area_modal.header}
      description={t.venue.delete_area_modal.description}
      buttonText={t.venue.delete_area_modal.button_text}
      onClose={onClose}
      onCta={() =>
        area.onRemove(areaId, () => {
          onClearArea()
          onClose()
        })
      }
    />
  )
}

// import NameInput from '../menu/NameInput';
import t from '../../locales/en/translations.json'
import DescriptionInput from '../menu/DescriptionInput'

const VenueSettings = () => (
  <>
    {/*<NameInput*/}
    {/*  label={t.venue.settings.label}*/}
    {/*  description={t.venue.settings.description}*/}
    {/*  placeholderText={t.venue.settings.placeholder_text}*/}
    {/*/>*/}
    <DescriptionInput
      isShort
      label={t.venue.settings.label2}
      description={t.venue.settings.description2}
      placeholderText={t.venue.settings.placeholder_text_2}
    />
  </>
)

export default VenueSettings

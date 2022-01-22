import { Switch, Typography } from '@mui/material'
import * as React from 'react'

import FormLabel from '../FormLabel'

const allergensArr = [
  'Celery',
  'Gluten',
  'Crustaceans',
  'Fish',
  'Eggs',
  'Lupin',
  'Milk',
  'Molluscs',
  'Mustard',
  'Nuts',
  'Peanuts',
  'Sesame',
  'Soya',
  'Sulphites',
  'Almonds',
  'Barley',
  'Brazil Nuts',
  'Cashew',
  'Hazlenuts',
  'Kamut',
  'Macadamia',
  'Oats',
  'Pecan',
  'Pistachio',
  'Rye',
  'Spelt',
  'Walnuts',
  'Wheat'
]
const tagsArr = [
  'Alcohol',
  'Halal',
  'Kosher',
  'Vegan',
  'Vegetarian',
  'Gluten Free'
]

const RenderSwitchColumn = ({
  title,
  stringArr
}: {
  title: string
  stringArr: string[]
}) => (
  <>
    <FormLabel text={title} />
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
      {stringArr.map((option, index) => (
        <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
          <Switch
            color="primary"
            // defaultChecked={menu.active}
            edge="start"
            name={title}
          />
          <Typography color="textPrimary" variant="subtitle2">
            {option}
          </Typography>
        </div>
      ))}
    </div>
  </>
)

const TagsAndAllergensTab = () => (
  <>
    <RenderSwitchColumn title={'Allergen'} stringArr={allergensArr} />
    <RenderSwitchColumn title={'Tags'} stringArr={tagsArr} />
  </>
)

export default TagsAndAllergensTab

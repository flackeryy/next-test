import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import {
  Box,
  Button,
  Card,
  Container,
  Divider,
  MenuItem,
  Select,
  Typography
} from '@mui/material'
import FormLabel from 'components/FormLabel'
import Layout from 'components/layout'
import DescriptionInput from 'components/menu/DescriptionInput'
import NameInput from 'components/menu/NameInput'
import LoadingPlaceholder from 'components/placeholders/LoadingPlaceholder'
// import {
//   aliPay,
//   amex,
//   applePay,
//   googlePay,
//   jcb,
//   mastercard,
//   unionPay,
//   visa,
//   wechat,
// } from '../src/assets/generalAssets';
// import OpeningHours from '../../components/settings/OpeningHours'
import useAuth from 'hooks/api/auth/useAuth'
import useRestaurant from 'hooks/api/restaurants/useRestaurant'
import useWorkingDays from 'hooks/api/schedule/useWorkingDays'
import useWorkingHours from 'hooks/api/schedule/useWorkingHours'
import t from 'locales/en/translations.json'
import authMiddleware from 'middlewares/authMiddleware'
import { GetServerSidePropsContext } from 'next'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import Api from 'services/Api'
import { formatValues, parseWorkingDays } from 'utils/api/settings'
import { AuthProps, getId, withAuth } from 'utils/axios'

enum Countries {
  HONG_KONG = 'Hong Kong'
}

const classes = {
  link: {
    textDecoration: 'none'
  }
}

const defaultValues = {
  name: '',
  description: '',
  email: '',
  phone_number: '',
  website: '',
  street: '',
  building: '',
  country: '',
  city: '',
  postal_code: '',
  image: '',
  workingDays: []
}

interface GeneralProps {
  restaurant: any
  days: any
}

export default function General(props: GeneralProps & AuthProps) {
  const auth = useAuth({ ...props })
  const { restaurant, isLoading, onEdit } = useRestaurant({
    id: auth.id,
    restaurant: props.restaurant
  })
  const { workingDays, ...wDay } = useWorkingDays({
    id: auth.id,
    days: props.days
  })
  const wHours = useWorkingHours({ revalidate: wDay.revalidate })

  const methods = useForm({
    defaultValues
  })

  const handleSubmit = (values: any) => {
    const formatted = formatValues(values)
    onEdit(auth.id, formatted.settingsValues)
    wDay.onEdit(auth.id, formatted.workingDays)
    wHours.onEdit(auth.id, formatted.workingHours)
  }

  useEffect(() => {
    if (restaurant.id) {
      Object.keys(defaultValues).forEach((key: any) => {
        if (key !== 'workingDays') methods.setValue(key, restaurant[key] || '')
      })

      methods.setValue(
        'phone_number',
        restaurant.phone_number || auth.me.phone_number
      )
      methods.setValue('email', restaurant.email || auth.me.email)
    }
  }, [restaurant.id])

  useEffect(() => {
    methods.setValue('workingDays', parseWorkingDays(workingDays) as any)
  }, [workingDays.length])

  return (
    <FormProvider {...methods}>
      <Layout>
        {isLoading ? (
          <LoadingPlaceholder />
        ) : (
          <Container sx={{ py: '40px' }}>
            <Link href="/settings">
              <a style={classes.link}>
                <Typography
                  onClick={() => {}}
                  color="secondary"
                  sx={{
                    cursor: 'pointer',
                    '&:hover': { textDecoration: 'underline' }
                  }}
                >
                  <ArrowBackIosIcon sx={{ fontSize: '0.75rem' }} />
                  Settings
                </Typography>
              </a>
            </Link>

            <Typography sx={{ fontSize: '2rem', fontWeight: 500, mb: 2 }}>
              General
            </Typography>

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div style={{ width: '35%', paddingRight: '3rem' }}>
                <FormLabel text={t.settings.tile1.label} isHeader />
                <Typography variant="body2" color="textSecondary">
                  {t.settings.tile1.description}
                </Typography>
              </div>
              <Card sx={{ p: 2, width: '100%' }}>
                <NameInput
                  label={t.settings.tile1.store_name}
                  placeholderText={t.settings.tile1.store_name_placeholder}
                  {...methods.register('name')}
                />
                <DescriptionInput
                  label={t.settings.tile1.about_name}
                  disclaimerText={t.settings.tile1.about_disclaimer_text}
                  {...methods.register('description')}
                />
              </Card>
            </div>
            <Divider variant="fullWidth" sx={{ my: 2 }} />
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div style={{ width: '35%', paddingRight: '3rem' }}>
                <FormLabel text={t.settings.tile2.label} isHeader />
                <Typography variant="body2" color="textSecondary">
                  {t.settings.tile2.description}
                </Typography>
              </div>
              <Card sx={{ p: 2, width: '100%' }}>
                <NameInput
                  label={t.settings.tile2.email_name}
                  placeholderText={t.settings.tile2.email_placeholder}
                  {...methods.register('email')}
                />
                <NameInput
                  label={t.settings.tile2.phone_name}
                  placeholderText={t.settings.tile2.phone_placeholder}
                  {...methods.register('phone_number')}
                />
                <NameInput
                  label={t.settings.tile2.website_name}
                  placeholderText={t.settings.tile2.website_placeholder}
                  {...methods.register('website')}
                />
              </Card>
            </div>
            <Divider variant="fullWidth" sx={{ my: 2 }} />
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div style={{ width: '35%', paddingRight: '3rem' }}>
                <FormLabel text={t.settings.tile3.label} isHeader />
                <Typography variant="body2" color="textSecondary">
                  {t.settings.tile3.description}
                </Typography>
              </div>
              <Card sx={{ p: 2, width: '100%' }}>
                <NameInput
                  label={t.settings.tile3.street_name}
                  placeholderText={t.settings.tile3.street_placeholder}
                  {...methods.register('street')}
                />
                <NameInput
                  label={t.settings.tile3.building_name}
                  placeholderText={t.settings.tile3.building_placeholder}
                  {...methods.register('building')}
                />
                <NameInput
                  label={t.settings.tile3.city_name}
                  placeholderText={t.settings.tile3.city_placeholder}
                  {...methods.register('city')}
                />
                <NameInput
                  label={t.settings.tile3.postcode_name}
                  placeholderText={t.settings.tile3.postcode_placeholder}
                  {...methods.register('postal_code')}
                />
                <FormLabel text={t.settings.tile3.country} />
                <Box>
                  <Select
                    fullWidth
                    defaultValue={Countries.HONG_KONG}
                    label={t.settings.tile3.country}
                  >
                    <MenuItem value={Countries.HONG_KONG}>
                      {Countries.HONG_KONG}
                    </MenuItem>
                  </Select>
                </Box>
              </Card>
            </div>
            {/*<Divider variant="fullWidth" sx={{ my: 2 }} />*/}
            {/*<div style={{ display: 'flex', justifyContent: 'space-between' }}>*/}
            {/*  <div style={{ width: '35%', paddingRight: 8 }}>*/}
            {/*    <FormLabel text={t.settings.tile4.label} isHeader />*/}
            {/*    <Typography*/}
            {/*      variant="body2"*/}
            {/*      color="textSecondary"*/}
            {/*      gutterBottom*/}
            {/*    >*/}
            {/*      {t.settings.tile4.description}*/}
            {/*    </Typography>*/}
            {/*    <Typography variant="body2" color="textSecondary">*/}
            {/*      {t.settings.tile4.description2}*/}
            {/*    </Typography>*/}
            {/*  </div>*/}
            {/*  <div style={{ width: '100%' }}>*/}
            {/*    <OpeningHours />*/}
            {/*  </div>*/}
            {/*</div>*/}
            {/*<Divider variant='fullWidth' sx={{ my: 2 }} />*/}
            {/*<div style={{ display: 'flex', justifyContent: 'space-between' }}>*/}
            {/*  <div style={{ width: '35%', paddingRight: 8, }}>*/}
            {/*    <FormLabel text={t.settings.tile5.label} />*/}
            {/*    <Typography variant='body2' color='textSecondary'>*/}
            {/*      {t.settings.tile5.description}*/}
            {/*    </Typography>*/}
            {/*  </div>*/}
            {/*  <Card sx={{ p: 2, width: '100%' }}>*/}
            {/*    <Typography variant='body2' color='textSecondary'>*/}
            {/*      {t.settings.tile5.payment_info}*/}
            {/*    </Typography>*/}
            {/*    <FormLabel text={t.settings.tile5.rate_label} />*/}
            {/*    <Typography variant='body2' color='textSecondary'>*/}
            {/*      {t.settings.tile5.rate_description}*/}
            {/*    </Typography>*/}
            {/*    <FormLabel text={t.settings.tile5.supported_payment_providers} />*/}
            {/*    <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>*/}
            {/*      {[googlePay, applePay, amex, mastercard, visa, jcb, aliPay, wechat, unionPay].map((icon, index) => (*/}
            {/*        <Image key={index} alt={`${icon}-icon`} src={icon} />*/}
            {/*      ))}*/}
            {/*    </div>*/}
            {/*  </Card>*/}
            {/*</div>*/}
            {/*<Divider variant='fullWidth' sx={{ my: 2 }} />*/}
            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'flex-end',
                margin: '1.25rem 0'
              }}
            >
              <Button
                variant="contained"
                onClick={() => methods.handleSubmit(handleSubmit)()}
              >
                {t.common.save}
              </Button>
            </div>
          </Container>
        )}
      </Layout>
    </FormProvider>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  return authMiddleware(context, async (token, me) => {
    const response = await Api.server(
      withAuth(token, {
        method: 'GET',
        url: `/restaurant/${getId(me)}/`
      })
    )
    const daysResponse = await Api.server(
      withAuth(token, {
        method: 'GET',
        url: `/restaurant/${getId(me)}/working_days/`
      })
    )

    return {
      props: {
        restaurant: response.data,
        days: daysResponse.data,
        token,
        me
      }
    }
  })
}

import { Box, Card } from '@mui/material'
import Header from 'components/Header'
import Layout from 'components/layout'
import VenueManager from 'components/venues/VenueManager'
import VenueSettings from 'components/venues/VenueSettings'
import useAuth from 'hooks/api/auth/useAuth'
import authMiddleware from 'middlewares/authMiddleware'
import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next'
import React, { useState } from 'react'
import Api from 'services/Api'
import { AuthProps, getId, withAuth } from 'utils/axios'

enum TablesTabs {
  TABLES = 'Tables',
  SETTINGS = 'Settings'
}

interface VenueProps {
  areas: any
}

export default function Venue(props: VenueProps & AuthProps) {
  useAuth({ ...props })

  const [selectedTab] = useState<TablesTabs>(TablesTabs.TABLES)
  // const handleChange = (_event: React.SyntheticEvent, newValue: string) =>
  //   setSelectedTab(newValue as TablesTabs)

  const tabContent = () => {
    switch (selectedTab) {
      case TablesTabs.TABLES:
        return <VenueManager areas={props.areas} />
      case TablesTabs.SETTINGS:
        return <VenueSettings />
      default:
        break
    }
  }

  return (
    <Layout>
      <Header name={'Venue'} />
      <Box sx={{ p: 3 }}>
        <Card sx={{ p: 3, width: '100%' }}>
          <Box sx={{ width: '100%', pb: 1 }}>
            {/*<Tabs*/}
            {/*  value={selectedTab}*/}
            {/*  onChange={handleChange}*/}
            {/*  textColor="primary"*/}
            {/*  indicatorColor="primary"*/}
            {/*  aria-label="tables tabs"*/}
            {/*  sx={{ pb: 3 }}*/}
            {/*>*/}
            {/*  <Tab value={TablesTabs.TABLES} label={TablesTabs.TABLES} />*/}
            {/*  <Tab value={TablesTabs.SETTINGS} label={TablesTabs.SETTINGS} />*/}
            {/*</Tabs>*/}
            {tabContent()}
          </Box>
        </Card>
      </Box>
    </Layout>
  )
}

export async function getServerSideProps(
  context: GetServerSidePropsContext
): Promise<GetServerSidePropsResult<{}>> {
  return authMiddleware(context, async (token, me) => {
    const response = await Api.server(
      withAuth(token, {
        method: 'GET',
        url: `/restaurant/${getId(me)}/areas/`
      })
    )

    return {
      props: {
        areas: response.data,
        token,
        me
      }
    }
  })
}

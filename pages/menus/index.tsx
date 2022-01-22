import { Box } from '@mui/material'
import Layout from 'components/layout'
import MenuHeader from 'components/menu/MenuHeader'
import MenuModal from 'components/menu/MenuModal'
import LoadingPlaceholder from 'components/placeholders/LoadingPlaceholder'
import MenusProvider from 'contexts/MenusContext'
import useAuth from 'hooks/api/auth/useAuth'
import useMenus from 'hooks/api/menus/useMenus'
import t from 'locales/en/translations.json'
import authMiddleware from 'middlewares/authMiddleware'
import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next'
import dynamic from 'next/dynamic'
import React, { useState } from 'react'
import Api from 'services/Api'
import { AuthProps, getId, withAuth } from 'utils/axios'

// reference: https://github.com/atlassian/react-beautiful-dnd/issues/1854#issuecomment-889857209
const MenusList = dynamic(() => import('components/menu/MenusList'), {
  ssr: false
})

interface MenuProps {
  menus: any
}

export default function Menu(props: MenuProps & AuthProps) {
  const auth = useAuth({ ...props })
  const { isLoading, menus, revalidate, onEdit } = useMenus({
    id: auth.id,
    menus: props.menus
  })

  const [open, setOpen] = useState(false)

  return (
    <MenusProvider revalidate={revalidate}>
      <Layout>
        <MenuHeader
          isMain
          name={'Menus'}
          buttonText={t.menus.create_menu}
          onButtonClick={() => setOpen(true)}
        />

        <Box sx={{ p: 3 }}>
          {!auth.id ? (
            <p>{`You don't have a restaurant yet`}</p>
          ) : isLoading ? (
            <LoadingPlaceholder />
          ) : !menus.length ? (
            <p>{'Click "Create a Menu" to get started!'}</p>
          ) : (
            <MenusList menus={menus} onEdit={onEdit} />
          )}
        </Box>

        {open ? (
          <MenuModal
            isMenu
            open={open}
            onClose={() => setOpen(false)}
            header={t.menus.create_menu}
            buttonText={t.common.create}
          />
        ) : null}
      </Layout>
    </MenusProvider>
  )
}

export async function getServerSideProps(
  context: GetServerSidePropsContext
): Promise<GetServerSidePropsResult<{}>> {
  return authMiddleware(context, async (token, me) => {
    const response = await Api.server(
      withAuth(token, {
        method: 'GET',
        url: `/restaurant/${getId(me)}/menus/`
      })
    )

    return {
      props: {
        menus: response.data,
        token,
        me
      }
    }
  })
}

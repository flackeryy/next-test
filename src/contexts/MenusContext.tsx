import { createContext, PropsWithChildren, useContext } from 'react'

interface MenusContextProps {
  revalidate: any
}

export const MenusContext = createContext<MenusContextProps>({
  revalidate: () => {}
})

export default function MenusProvider({
  children,
  ...props
}: PropsWithChildren<MenusContextProps>) {
  return <MenusContext.Provider value={props}>{children}</MenusContext.Provider>
}

export function useMenusContext() {
  return useContext(MenusContext)
}

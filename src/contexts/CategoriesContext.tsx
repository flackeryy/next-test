import { createContext, PropsWithChildren, useContext } from 'react'

interface CategoriesContextProps {
  revalidate: any
}

export const CategoriesContext = createContext<CategoriesContextProps>({
  revalidate: () => {}
})

export default function CategoriesProvider({
  children,
  ...props
}: PropsWithChildren<CategoriesContextProps>) {
  return (
    <CategoriesContext.Provider value={props}>
      {children}
    </CategoriesContext.Provider>
  )
}

export function useCategoriesContext() {
  return useContext(CategoriesContext)
}

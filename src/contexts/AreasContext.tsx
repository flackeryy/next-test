import { createContext, PropsWithChildren, useContext } from 'react'

interface AreasContextProps {
  revalidate: any
}

export const AreasContext = createContext<AreasContextProps>({
  revalidate: () => {}
})

export default function AreasProvider({
  children,
  ...props
}: PropsWithChildren<AreasContextProps>) {
  return <AreasContext.Provider value={props}>{children}</AreasContext.Provider>
}

export function useAreasContext() {
  return useContext(AreasContext)
}

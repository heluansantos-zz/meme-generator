import { ReactNode } from 'react'

export interface ContextProviderProps {
  children: ReactNode
}

export interface ContextData {
  darkTheme: boolean
  updateTheme: (value: number) => void
}

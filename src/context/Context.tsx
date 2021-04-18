import React, { createContext, useEffect, useState } from 'react'
import { ContextData, ContextProviderProps } from './interfaces'
export const Context = createContext({} as ContextData)

const ContextProvider = ({ children }: ContextProviderProps) => {
  const [darkTheme] = useState(false)

  useEffect(() => {
    console.log('')
  }, [])
  const updateTheme = (index: number) => {
    console.log(darkTheme)
  }

  return (
    <Context.Provider value={{ darkTheme, updateTheme }}>
      {children}
    </Context.Provider>
  )
}

export default ContextProvider

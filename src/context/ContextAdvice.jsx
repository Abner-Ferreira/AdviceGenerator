import React, { createContext, useEffect, useState } from 'react'
import { api } from '../api/axios'

export const ContextAdvice = createContext({})
export default function ContextAdviceProvider({ children }) {

  const [quote, setQuote] = useState({})
  const [loading, setLoading] = useState(false)

  useEffect(async () => {
    setLoading(true)
    await api.get('/advice')
      .then(resp => {
        if (resp.status === 200) {
          return setQuote(resp.data.slip), setLoading(false)
        }
      })
      .catch(err => alert("Error: ", err))
  }, [])


  const changeAdvice = async () => {
    setLoading(true)
    await api.get('/advice')
      .then(resp => {
        if (resp.status === 200) {
          return setQuote(resp.data.slip), setLoading(false)
        }
      })
      .catch(err => alert("Error: ", err))
  }


  return (
    <ContextAdvice.Provider value={{ changeAdvice, quote, loading }}>
      {children}
    </ContextAdvice.Provider>
  )
}

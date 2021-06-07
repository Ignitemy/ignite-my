import React, { useState, useEffect, useContext, createContext } from 'react'
import nookies from 'nookies'
import FirebaseContext from '../context/firebase'

const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const { firebase } = useContext(FirebaseContext)

  useEffect(() => {
    return firebase.auth().onIdTokenChanged(async (authUser) => {
      if (authUser) {
        const token = await authUser.getIdToken()
        // we have a user...therefore we can store the user in cookies
        nookies.set(undefined, 'token', token, {})
        setUser(authUser)
      } else {
        setUser(null)
        nookies.set(undefined, 'token', '', {})
        return
      }
    })
  }, [firebase])
  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext)

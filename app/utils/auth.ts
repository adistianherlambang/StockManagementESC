import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../firebase'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const login = async (username: string, password: string) => {
  const q = query(
    collection(db, 'users'),
    where('usernams', '==', username),
    where('password', '==', password)
  )

  const querySnapshot = await getDocs(q)

  if (!querySnapshot.empty) {
    const user = querySnapshot.docs[0].data()
    await AsyncStorage.setItem('user', JSON.stringify(user))
    await AsyncStorage.setItem('isLoggedIn', 'true')
    return true
  }

  return false
}

export const logout = async () => {
  await AsyncStorage.removeItem('isLoggedIn')
  await AsyncStorage.removeItem('user')
}

export const getCurrentUser = async () => {
  const stored = await AsyncStorage.getItem('user')
  return stored ? JSON.parse(stored) : null
}

export const isLoggedIn = async () => {
  const stored = await AsyncStorage.getItem('user')
  return !!stored
}
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../lib/firebase'

export async function doesEmailExist(email) {
  // const result = await firebase.firestore().collection('users').where('email', '==', email).get()
  const userQuery = query(collection(db, 'users'), where('email', '==', email))
  const result = await getDocs(userQuery)

  return result.docs.length > 0
}

// export async function getUserByUsername(username) {
//   const result = await firebase
//     .firestore()
//     .collection('users')
//     .where('username', '==', username)
//     .get()

//   return result.docs.map((item) => ({
//     ...item.data(),
//     docId: item.id
//   }))
// }

// get user from the firestore where userId === userId (passed from the auth)
export async function getUserByUserId(userId) {
  // const result = await firebase
  //   .firestore()
  //   .collection('ignitemy23')
  //   .where('userId', '==', userId)
  //   .get()
  const userQuery = query(collection(db, 'users'), where('userId', '==', userId))
  const result = await getDocs(db, userQuery)
  const user = result.docs.map((item) => ({
    ...item.data(),
    docId: item.id
  }))

  return user
}

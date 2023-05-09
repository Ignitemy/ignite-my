import { firebase } from '../lib/firebase'

export async function doesEmailExist(email) {
  const result = await firebase.firestore().collection('users').where('email', '==', email).get()

  return result.docs.length > 0
}

export async function getUserByUsername(username) {
  const result = await firebase
    .firestore()
    .collection('users')
    .where('username', '==', username)
    .get()

  return result.docs.map((item) => ({
    ...item.data(),
    docId: item.id
  }))
}

// get user from the firestore where userId === userId (passed from the auth)
export async function getUserByUserId(userId) {
  const result = await firebase.firestore().collection('ignitemy23').where('userId', '==', userId).get()
  const user = result.docs.map((item) => ({
    ...item.data(),
    docId: item.id
  }))

  return user
}

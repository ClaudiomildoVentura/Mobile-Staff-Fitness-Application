import api from '../Configs/api'
import { AsyncStorage } from 'react-native'
let USER_EMAIL = ''
let EMAIL = ''
let TOKEN = ''

export async function getUser() {
  try {
    const valor = await AsyncStorage.getItem("EMAIL")
    return valor
  } catch (error) {
    console.log(error)
    return error.message
  }
}

export async function getToken() {
  try {
    const valor = await AsyncStorage.getItem("TOKEN")
    return valor
  } catch (error) {
    console.log(error)
    return error.message
  }
}
export async function setUser(email) {
  try {
    await AsyncStorage.setItem('EMAIL', email).catch(error => { console.log(error) })
  } catch (error) {
    console.log(error)
  }
}

export async function setToken(token) {
  try {
    await AsyncStorage.setItem('TOKEN', token).catch(error => { console.log(error) })
  } catch (error) {
    console.log(error)
  }
}
const carregarPerfilPersonal = async () => {
  try {
    const user = await getUser()
    const response = await api.post('student/profile', { email: user })
    if (response.data) {
      const personal = response.data
      return personal
    }
  } catch (error) {
    console.log(error)
    return error.message
  }
}
export default carregarPerfilPersonal
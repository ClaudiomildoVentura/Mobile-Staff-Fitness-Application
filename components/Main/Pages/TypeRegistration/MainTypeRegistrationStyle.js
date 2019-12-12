import { StyleSheet } from 'react-native'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize"
import Constants from 'expo-constants'
import globalStyles from '../../../Shared/Styles/globalStyles'

const MainTypeRegistrationStyles = StyleSheet.create({
  ...globalStyles,
  texto: {
    justifyContent: 'center',
    padding: 10,
    color: 'white',
    fontSize: 20,
    alignSelf: 'center',
  },
  touchable: {
    height: 50,
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
    justifyContent: 'center',
    margin: 20
  }
})
export default MainTypeRegistrationStyles
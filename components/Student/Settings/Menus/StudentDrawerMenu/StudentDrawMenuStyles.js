import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'

const StudentDrawerMenuStyles = StyleSheet.create({
  principal: {
    flex: 1,
    backgroundColor: 'rgba(34,45,50,0.9)',
    marginTop: Constants.statusBarHeight
  },
  btnT: {
    width: '100%',
    padding: 20,
    elevation: 50,
    backgroundColor: 'rgba(34,45,50)'
  },
  iconUsers: {
    color: 'white',
    justifyContent: 'center',
    alignSelf: 'center',
    textAlign: 'center',
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 40
  },
  viewTxt: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 18
  },
  iconTxt: {
    color: 'white',
    fontSize: 23,
  },
  txt: {
    color: 'white',
    fontSize: 23
  }
})
export default StudentDrawerMenuStyles
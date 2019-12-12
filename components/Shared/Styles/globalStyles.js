import { StyleSheet } from 'react-native'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize"
import Constants from 'expo-constants'

const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: "rgba(34,45,50,0.9)",
        marginTop: Constants.statusBarHeight
    },
    textTitle: {
        fontSize: RFValue(28),
        color: 'white',
        fontWeight: '900',
    },
    inputForm: {
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0,0,0,0.5)',
        borderStyle: 'solid',
        paddingTop: 5,
        borderRadius: 5,
        margin: 2,
        backgroundColor: 'white',
        alignSelf: 'center',
    },
    input: {
        width: '90%'
    },
    containerMsgs: {
        marginTop: 10,
        paddingHorizontal: 10,
        alignItems: 'center',
        textAlignVertical: 'center'
    },
    msgError: {
        color: 'red'
    },
    msgSuccess: {
        color: 'green',
        textAlign: 'center',
        textAlignVertical: 'center'
    }
})
export default globalStyles
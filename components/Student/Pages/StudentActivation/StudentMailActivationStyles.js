import { StyleSheet } from 'react-native'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize"
import globalStyles from '../../../Shared/Styles/globalStyles'

const MailActivationStyles = StyleSheet.create({
    containerMSgs: {
        ...globalStyles.containerMsgs,
    },
    msgError: {
        ...globalStyles.msgError,
    },
    msgSuccess: {
        ...globalStyles.msgSuccess,
    },
    input: {
        ...globalStyles.input,
        width: '71%'
    },
    inputForm: {
        ...globalStyles.inputForm
    },
    container: {
        ...globalStyles.container,
        justifyContent: 'flex-start'
    },
    progressCheckIcon: {
        color: '#00FF00',
        fontSize: RFValue(200),
        alignSelf: 'center'
    },
    textTitle: {
        ...globalStyles.textTitle,
        paddingVertical: 25,
        textAlign: 'center'
    },
    textSubtitle: {
        ...globalStyles.textTitle,
        paddingVertical: 5,
        textAlign: 'center'
    },
    text: {
        paddingHorizontal: 25,
        fontSize: RFValue(18),
    },
    containerInputs: {
        marginBottom: 10,
    },
    touchableEnviar: {
        justifyContent: 'center',
        paddingHorizontal: 10,
        marginBottom: 2,
        borderLeftWidth: 0.5,
        borderLeftColor: 'black',
        borderStyle: 'solid'
    },
    textTouchableEnviar: {
        textAlign: 'center',
        textAlignVertical: 'center'
    }
})
export default MailActivationStyles
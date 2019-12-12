import { StyleSheet } from 'react-native'
import globalStyles from '../../../Shared/Styles/globalStyles'

const StudentRegistrationStyles = StyleSheet.create({
    ...globalStyles,
    logo: {
        flex: 0.5,
        width: undefined,
        height: undefined
    },
    containerRegister: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    },
    containerInputs: {
        flex: 4,
        justifyContent: 'space-between',
        alignContent: 'center',
        flexDirection: 'column',
        fontSize: 14,
        backgroundColor: 'rgba(255,255,255,0.9)',
        paddingVertical: 25,
        paddingHorizontal: 20,
        alignSelf: 'center',
        borderRadius: 5
    },
    inputForm: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0,0,0,0.5)',
        borderStyle: 'solid',
        paddingTop: 5,
        borderRadius: 5,
        margin: 2
    },
    containerInputsInline: {
        flexDirection: 'row'
    },
    inputFormInline: {
        width: '48.5%',
        flexDirection: 'row',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0,0,0,0.5)',
        borderStyle: 'solid',
        paddingTop: 5,
        borderRadius: 5,
        margin: 2
    },
    input: {
        flex: 1,
        width: undefined,
        height: undefined,
        padding: 5,
        fontSize: 14
    },
    icon: {
        color: '#000',
        fontSize: 40,
    },
    iconTitle: {
        color: 'white',
        fontSize: 50,
    },
    iconCPF: {
        fontSize: undefined,
        padding: 3,
        borderWidth: 1.5,
        borderRadius: 5,
        textAlign: 'center',
        textAlignVertical: 'center',
        borderStyle: 'solid',
        borderColor: "rgba(0,0,0,0.5)",
        height: 40,
        width: 40,
        marginBottom: 3
    },
    containerSubtitle: {
        paddingVertical: 10,
        paddingLeft: 5,
        borderColor: "#000",
        borderWidth: 2,
        borderStyle: 'solid',
        textAlignVertical: 'center',
        flexDirection: 'row',
        textAlignVertical: 'center'
    },
    Subtitle: {
        fontSize: 20,
        paddingVertical: 5,
        paddingLeft: 10,
        textAlignVertical: 'center'
    },
    containerTitle: {
        flex: 1,
        justifyContent: 'center',
        textAlign: 'center'
    },
    Title: {
        fontSize: 20,
        fontWeight: '900',
        textAlign: 'center',
        textAlignVertical: 'center'
    },
    Text: {
        padding: 2,
        fontSize: 14,
        textAlign: 'center',
        textAlignVertical: 'center'
    },
    Touchable: {
        padding: 10,
        backgroundColor: 'white',
        color: 'black',
        margin: 5
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
    },
    containerTouchables: {
        justifyContent: 'space-around'
    }
})
export default StudentRegistrationStyles
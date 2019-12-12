import { StyleSheet } from 'react-native'
import { RFValue } from "react-native-responsive-fontsize"
import globalStyles from '../../../Shared/Styles/globalStyles'

const MainHomeStyles = StyleSheet.create({
    ...globalStyles,
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 10,
        width: '100%'
    },
    containerLogo: {
        flex: 15,
        flexDirection: 'row',
        justifyContent: 'center',
        textAlign: 'center'
    },
    containerButton: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 0
    },
    containerInputs: {
        flex: 3,
        width: '80%'
    },
    button: {
        elevation: 4,
        backgroundColor: '#007bff',
        flex: 1,
        alignItems: 'center',
        height: 40,
        margin: 10,
        justifyContent: 'center'
    },
    containerLogin: {
        flex: 25,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerInfo: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingBottom: 10
    },
    textSenha: {
        textAlign: 'center',
        padding: 10,
        marginTop: 10,
        color: 'white'
    },
    textEmail: {
        textAlign: 'center',
        padding: 5,
        color: 'white'
    },
    textTitle: {
        fontSize: RFValue(28),
        color: 'white',
        fontWeight: '900'
    },
    textSubtitle: {
        fontSize: RFValue(24),
        textAlign: 'center',
        color: 'white'
    },
    textCadastro: {
        fontSize: RFValue(18),
        textAlign: 'center',
        padding: 10,
        borderTopWidth: 1,
        borderStyle: 'solid',
        marginTop: 15,
        color: 'white'
    },
    logo: {
        resizeMode: 'contain',
        width: 300,
        height: 300,
        justifyContent: 'center'
    },
    containerMsgs: {
        flex: 1,
        padding: 5,
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',
        color: '#fff'
    },
    error: {
        padding: 10,
        color: 'red',
        fontWeight: 'bold',
        fontSize: 14,
        textAlign: 'center',
    },
    success: {
        padding: 10,
        color: 'green',
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center'
    }
})
export default MainHomeStyles
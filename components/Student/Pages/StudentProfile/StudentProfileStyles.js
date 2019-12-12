import { StyleSheet } from 'react-native'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize"
import globalStyles from '../../../Shared/Styles/globalStyles'

const StudentProfileStyles = StyleSheet.create({
    ...globalStyles,
    containerButton: {
        flexDirection: 'row'
    },
    container: {
        ...globalStyles.container,
        backgroundColor: "rgba(34,45,50,0.4)",
        justifyContent: 'flex-end'
    },
    containerStudentInfo: {
        flex: 3,
        paddingHorizontal: 10
    },
    containerStaffInfo: {
        flex: 1,
        backgroundColor: '#6c757d'
    },
    secondaryContainer: {
        flex: 1
    },
    row: {
        width: '100%',
        flexDirection: 'row'
    },
    textLabel: {
        fontSize: RFValue(12),
        color: 'rgba(0,0,0,0.7)'
    },
    textValue: {
        fontSize: RFValue(18),
        color: '#000000',
        paddingBottom: 4
    },
    username: {
        fontSize: RFValue(24),
        color: '#000000',
        paddingBottom: 10,
        textAlign: 'center'
    },
    accessCode: {
        fontSize: RFValue(10),
        color: '#000000',
        textAlign: 'center'
    },
    containerPhoto: {
        flexDirection: 'row',
        margin: 0,
        padding: 0,
        flex: 2,
        justifyContent: 'flex-end'
    },
    userIcon: {
        color: '#232d32',
        justifyContent: 'center',
        alignSelf: 'center',
        textAlign: 'center',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#232d32',
        flex: 1,
        alignItems: 'center',
        height: 40,
        justifyContent: 'center',
        color: '#fff',
        elevation: 5,
    },
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 10,
        width: '100%'
    }
})
export default StudentProfileStyles
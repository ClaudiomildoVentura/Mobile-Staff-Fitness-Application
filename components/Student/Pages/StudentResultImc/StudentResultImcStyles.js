import { StyleSheet } from 'react-native'
import globalStyles from '../../../Shared/Styles/globalStyles'
import { RFValue } from "react-native-responsive-fontsize"

const StudentResultImcStyles = StyleSheet.create({
    ...globalStyles,
    container: {
        flex: 1,
        backgroundColor: "rgba(34,45,50,0.4)"
    },
    listItem: {
        flex: 1,
        borderColor: '#000000',
        borderWidth: 2,
        borderRadius: 5,
        backgroundColor: '#EEE',
        padding: 15,
        marginTop: 8,
        marginBottom: 8
    },
    viewLine: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0.8,
        borderColor: '#DCDCDC',
        borderStyle: 'dashed',
        margin: 0.2,
        width: '100%'
    },
    viewLineSmall: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0.8,
        borderColor: '#DCDCDC',
        borderStyle: 'dashed',
        margin: 0.2,
        marginTop: 5,
        marginBottom: 5,
        width: '50%'
    },
    viewLineTwo: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        marginTop: 10
    },
    viewTbl: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10
    },
    txtTitleLine: {
        fontSize: RFValue(32),
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 8,
        marginBottom: 8,
    },
    txtSubTitleLine: {
        fontSize: RFValue(22),
        textAlign: 'left',
        fontWeight: 'bold',
        marginTop: 5,
        marginBottom: 5,
        paddingRight: 8
    },
    txtTbl: {
        fontSize: RFValue(20),
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 3
    },
    txtInfo: {
        fontSize: RFValue(20),
        textAlign: 'center',
        color: '#808080',
    },
    list: {
        paddingHorizontal: 7,
       // backgroundColor: "rgba(34,45,50,0.4)"

    }
})
export default StudentResultImcStyles
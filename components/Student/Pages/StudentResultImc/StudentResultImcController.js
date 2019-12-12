import api from '../../../Shared/Configs/api'

const StudentResultImcController = async () => {
    try {
        const res = await api.post('/imcHistory')
        if (res.data) {
            const resultImc = res
            return resultImc
        }
    } catch (error) {
        return error.message
    }
}
export default StudentResultImcController
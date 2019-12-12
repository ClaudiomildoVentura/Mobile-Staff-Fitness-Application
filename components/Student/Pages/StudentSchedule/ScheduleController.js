import api from '../../../Shared/Configs/api'

const scheduleStudent = async () => {
    try {
        const res = await api.post('/scheduleStudent')
        if (res.data) {
            const schedule = res.data
            return schedule
        }
    } catch (error) {
        return error.message
    }
}
export default scheduleStudent
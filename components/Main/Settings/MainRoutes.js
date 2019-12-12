import { createStackNavigator, createAppContainer } from 'react-navigation'
import MainHomeScreen from '../Pages/Home/MainHomeScreen'
import StudentStackRoutes from '../../Student/Settings/StudentRoutes'
import StudentMailActivationScreen from '../../Student/Pages/StudentActivation/StudentMailActivationScreen'
import MainStudentRegistrationScreen from '../../Main/Pages/StudentRegistration/MainStudentRegistrationScreen'

const MainRoutes = createStackNavigator({
  'Login': MainHomeScreen,
  'Cadastro do Aluno': MainStudentRegistrationScreen,
  'Ativação do Email Aluno': StudentMailActivationScreen,
  'Rotas do Aluno': StudentStackRoutes
},
  {
    defaultNavigationOptions: {
      header: null
    },
    initialRouteName: "Login"
  })
export default createAppContainer(MainRoutes)
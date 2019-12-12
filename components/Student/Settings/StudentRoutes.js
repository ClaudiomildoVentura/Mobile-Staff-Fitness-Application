import * as React from 'react'
import { createAppContainer, createStackNavigator, createDrawerNavigator, DrawerActions } from 'react-navigation'
import { Image, TouchableOpacity } from 'react-native'
import StudentDrawerMenuScreen from './Menus/StudentDrawerMenu/StudentDrawMenuScreen'
import StudentProfileScreen from '../Pages/StudentProfile/StudentProfileScreen'
import ScheduleScreen from '../Pages/StudentSchedule/ScheduleScreen'
import StudentResultImcScreen from '../Pages/StudentResultImc/StudentResultImcScreen'

const leftArrow = require('../../Shared/Assets/left-arrow.png')
const menuBar = require('../../Shared/Assets/menu-button.png')

const StudentDrawerNavigator = createDrawerNavigator(
  {
    "Página Inicial": StudentProfileScreen,
    "Agenda": ScheduleScreen,
    "Alunos": StudentProfileScreen,
    "Imc": StudentResultImcScreen
  },
  {
    initialRouteName: 'Página Inicial',
    contentComponent: StudentDrawerMenuScreen,
    drawerWidth: 300,
    style: {
      drawerShadow: true,
      contentOverlayColor: 'rgba(0,0,0,0.2)'
    },
    type: 'MMDrawer',
    animationType: 'parallax'
  }
)

const MenuImage = ({ navigation }) => {
  if (!navigation.state.isDrawerOpen) {
    return <Image style={{ marginLeft: 10 }} source={menuBar} />
  } else {
    return <Image style={{ marginLeft: 10 }} source={leftArrow} />
  }
}

const StudentStackRoutes = createStackNavigator({
  StudentHome: StudentDrawerNavigator
}, {
  defaultNavigationOptions: ({ navigation }) => ({
    header: (navigation.state.isDrawerOpen) && null,
    headerLeft: (
      <TouchableOpacity onPress={() => { navigation.dispatch(DrawerActions.toggleDrawer()) }}>
        <MenuImage style="styles.bar" navigation={navigation} />
      </TouchableOpacity>
    ),
    headerStyle: {
      backgroundColor: 'rgba(34,45,50,0.8)'
    },
    headerTintColor: 'black',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }),
},
  {
    initialRouteName: 'StudentDrawerNavigator',
  },
)
export default createAppContainer(StudentStackRoutes)
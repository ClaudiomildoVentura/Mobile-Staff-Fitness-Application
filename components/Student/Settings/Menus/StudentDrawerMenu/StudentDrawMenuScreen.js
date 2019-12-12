import * as React from 'react'
import { ScrollView, TouchableOpacity, Text, View, } from 'react-native'
import { NavigationActions, DrawerActions } from 'react-navigation'
import PropTypes from 'prop-types'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import StudentDrawerMenuStyles from './StudentDrawMenuStyles'

export default class StudentDrawerMenuScreen extends React.Component {
  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
    this.props.navigation.dispatch(DrawerActions.closeDrawer())
  }

  render() {
    return (
      <View style={StudentDrawerMenuStyles.principal}>
        <ScrollView>
          <View>
            
              <View>
                <TouchableOpacity style={{ alignItems: 'center' }} onPress={this.navigateToScreen('Página Inicial')}>
                  <MaterialCommunityIcons name="account-circle" size={150} style={StudentDrawerMenuStyles.iconUsers} />
                </TouchableOpacity>
              </View>

              <View style={StudentDrawerMenuStyles.viewTxt}>
              <MaterialCommunityIcons name="account-circle" style={StudentDrawerMenuStyles.iconTxt} />
              <TouchableOpacity style={StudentDrawerMenuStyles.btnT} onPress={this.navigateToScreen('Página Inicial')}>
                <Text style={StudentDrawerMenuStyles.txt}>Aluno</Text>
              </TouchableOpacity>
            </View>

            <View style={StudentDrawerMenuStyles.viewTxt}>
            <MaterialCommunityIcons name="calculator" style={StudentDrawerMenuStyles.iconTxt} />
              <TouchableOpacity style={StudentDrawerMenuStyles.btnT} onPress={this.navigateToScreen('Imc')}>
                <Text style={StudentDrawerMenuStyles.txt}>Histórico IMC</Text>
              </TouchableOpacity>
            </View>

            <View style={StudentDrawerMenuStyles.viewTxt}>
            <MaterialCommunityIcons name="calendar-text" style={StudentDrawerMenuStyles.iconTxt} />
              <TouchableOpacity style={StudentDrawerMenuStyles.btnT} onPress={this.navigateToScreen('Agenda')}>
                <Text style={StudentDrawerMenuStyles.txt}>Agenda de Treino</Text>
              </TouchableOpacity>
            </View>

          </View>
        </ScrollView>
      </View>
    )
  }
}
StudentDrawerMenuScreen.propTypes = {
  navigation: PropTypes.object
}
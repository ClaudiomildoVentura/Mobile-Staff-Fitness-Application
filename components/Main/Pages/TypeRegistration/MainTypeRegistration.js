import React, { Component } from 'react'
import { Text, Image, View, TouchableOpacity } from 'react-native'
import MainTypeRegistrationStyles from './MainTypeRegistrationStyle'
import logoPath from '../../../Shared/Configs/globalVars'

export default class MainTypeRegistrationScreen extends Component {
    render() {
        return (
            <View style={MainTypeRegistrationStyles.container}>
                <Image source={logoPath} />
                <Text style={MainTypeRegistrationStyles.texto} >Selecione seu tipo de cadastro: </Text>
                <TouchableOpacity
                    style={MainTypeRegistrationStyles.touchable}
                    onPress={() => this.props.navigation.navigate('StudentRegistrationUserScreen')} >
                    <Text>Personal</Text>
                </TouchableOpacity>
                <Text style={MainTypeRegistrationStyles.texto} >OU </Text>
                <TouchableOpacity style={MainTypeRegistrationStyles.touchable}>
                    <Text>Aluno</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
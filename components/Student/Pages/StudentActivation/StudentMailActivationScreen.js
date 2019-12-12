import React from 'react'
import { TouchableOpacity, TextInput, Text, View, } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import MailActivationStyles from './StudentMailActivationStyles'

export default class StudentMailActivationScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            error: '',
            success: ''
        }
    }


    render() {
        return (
            <View style={MailActivationStyles.container}>
                <View style={{ flex: 3 }}>
                    <MaterialCommunityIcons name="progress-check" style={MailActivationStyles.progressCheckIcon} />
                    <Text style={MailActivationStyles.textTitle}>Cadastro Realizado!</Text>
                    <Text style={MailActivationStyles.text}>Realizamos seu cadastro no sistema, por favor verifique seu e-mail cadastrado para ativar sua conta! </Text>
                </View>
                <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                    <Text style={MailActivationStyles.textSubtitle}>Não chegou?</Text>
                    <Text style={MailActivationStyles.text}>Não se preocupe, nos informe abaixo o e-mail cadastrado e reenviaremos o link para você. </Text>
                    <View style={MailActivationStyles.containerInputs}>
                        <View style={MailActivationStyles.inputForm}>
                            <MaterialCommunityIcons name="mail-ru" size={30} style={{ padding: 5 }} />
                            <TextInput placeholder="Insira seu email" style={MailActivationStyles.input} />
                            <TouchableOpacity style={MailActivationStyles.touchableEnviar}>
                                <Text style={MailActivationStyles.textTouchableEnviar}>Enviar</Text>
                            </TouchableOpacity>
                            <View style={MailActivationStyles.containerMsgs}>
                                <Text style={MailActivationStyles.msgSuccess}>{this.state.success}</Text>
                                <Text style={MailActivationStyles.msgError}>{this.state.error}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}
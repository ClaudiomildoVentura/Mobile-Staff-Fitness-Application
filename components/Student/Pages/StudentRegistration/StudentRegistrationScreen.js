import * as React from 'react'
import { TouchableOpacity, TextInput, Text, View, Image, ScrollView } from 'react-native'
import StudentRegistrationStyles from './StudentRegistrationStyles'
import { MaterialCommunityIcons } from '@expo/vector-icons'
const placeholderTextColor = 'gray'

export default class StudentRegistrationScreen extends React.Component {
  constructor(props) {
    super(props);
    state = {
      cpf: '',
      username: '',
      password: '',
      confirmapassword: '',
      email: '',
      confirmaemail: '',
      nome: '',
      cref: '',
      datanascimento: '',
      error: '',
    }
  }

  handleCPFChange = (cpf) => {
    this.setState({ cpf })
  };
  handleUsernameChange = (username) => {
    this.setState({ username })
  };
  handlePasswordChange = (password) => {
    this.setState({ password })
  };
  handleConfirmPasswordChange = (confirmapassword) => {
    this.setState({ confirmapassword })
  };
  handleEmailChange = (email) => {
    this.setState({ email })
  };
  handleConfirmEmailChange = (confirmaemail) => {
    this.setState({ confirmaemail })
  };
  handleNomeChange = (nome) => {
    this.setState({ nome })
  };
  handleCREFChange = (cref) => {
    this.setState({ cref })
  };
  handleDataNascimentoChange = (datanascimento) => {
    this.setState({ datanascimento })
  };


  handleRegistrationPress = async () => {
    if (this.state.datanascimento != '' && this.state.cref != '' && this.state.nome != '' && this.state.username != '' && this.state.email != '' && this.state.password != '') {
      try {
        const response = await api.post('Student/registration', {
          username: this.state.username,
          cpf: this.state.cpf,
          email: this.state.email,
          email_confirmation: this.state.confirmaemail,
          password: this.state.password,
          password_confirmation: this.state.confirmapassword,
          nome: this.state.nome,
          cref: this.state.cref,
          datadnascimento: this.state.datanascimento
        })
        this.setState({ error: response.data.message })
        if (response.data.user.accesslevel === 2) {
          const resetAction = StackActions.reset({
            index: 0,
            actions: [
              NavigationActions.navigate({ routeName: 'StudentRoutes', params: { user: response.data.user } }),
            ],
          })
          this.props.navigation.dispatch(resetAction)
        }
      } catch (_err) {
        this.setState({ error: _err.message })
      }
    } else {
      this.setState({ error: "Todos os campos precisam ser preenchidos" })
    }
  }


  render() {
    return (
      <View
        style={[StudentRegistrationStyles.container, StudentRegistrationStyles.containerRegister]}
      >
        <ScrollView maintainVisibleContentPosition={true} overScrollMode='always'>
          <View>
            <View style={StudentRegistrationStyles.containerTitle}>
              <Text style={StudentRegistrationStyles.Title}>CADASTRO PERSONAL</Text>
              <Text style={StudentRegistrationStyles.Text}>Para cadastrar é super fácil, basta preencher essas informações e depois as informações de acesso.</Text>
            </View>
            <View style={StudentRegistrationStyles.containerInputs}>
              <View style={StudentRegistrationStyles.containerSubtitle}>
                <MaterialCommunityIcons
                  name="home-account"
                  style={StudentRegistrationStyles.icon}
                />
                <Text style={StudentRegistrationStyles.Subtitle}>Informações Pessoais </Text>
              </View>
              <View style={StudentRegistrationStyles.inputForm}>
                <TextInput
                  style={StudentRegistrationStyles.input}
                  placeholder={"Nome"}
                  autoFocus={true}
                  clearButtonMode={"while-editing"}
                  onChangeText={this.handleNomeChange}
                  inputAccessoryViewID={"Nome"}
                  returnKeyType={"next"}
                  placeholderTextColor={placeholderTextColor}
                />
              </View>

              <View style={StudentRegistrationStyles.containerInputsInline}>
                <View style={StudentRegistrationStyles.inputFormInline}>
                  <TextInput
                    style={StudentRegistrationStyles.input}
                    placeholder={"CPF"}
                    clearButtonMode="while-editing"
                    onChangeText={this.handleCPFChange}
                    inputAccessoryViewID={"CPF"}
                    placeholderTextColor={placeholderTextColor}
                    returnKeyType={"next"}
                    textContentType="emailAddress"
                  />
                </View>
                <View style={StudentRegistrationStyles.inputFormInline}>
                  <TextInput
                    style={StudentRegistrationStyles.input}
                    placeholder={"Data de Nascimento"}
                    autoFocus={true}
                    clearButtonMode={"while-editing"}
                    onChangeText={this.handleDataNascimentoChange}
                    inputAccessoryViewID={"Data de Nascimento"}
                    returnKeyType={"next"}
                    placeholderTextColor={placeholderTextColor}
                  />
                </View>
              </View>

              <View style={StudentRegistrationStyles.inputForm}>
                <TextInput
                  style={StudentRegistrationStyles.input}
                  placeholder={"E-mail"}
                  clearButtonMode="while-editing"
                  onChangeText={this.handleEmailChange}
                  inputAccessoryViewID={"E-mail"}
                  placeholderTextColor={placeholderTextColor}
                  returnKeyType={"next"}
                  textContentType="emailAddress"
                />
              </View>
              <View style={StudentRegistrationStyles.inputForm}>
                <TextInput
                  style={StudentRegistrationStyles.input}
                  placeholder={"CREF"}
                  clearButtonMode="while-editing"
                  onChangeText={this.handleCREFChange}
                  inputAccessoryViewID={"CREF"}
                  returnKeyType={"next"}
                  textContentType="emailAddress"
                  placeholderTextColor={placeholderTextColor}
                  onFocus={() => this.placeholderTextColor = 'green'}
                />
              </View>
              <View style={StudentRegistrationStyles.inputForm}>
                <TextInput
                  style={StudentRegistrationStyles.input}
                  placeholder={"Confirmar email"}
                  clearButtonMode="while-editing"
                  onChangeText={this.handleConfirmEmailChange}
                  inputAccessoryViewID={"Confirmar Email"}
                  returnKeyType={"next"}
                  textContentType="emailAddress"
                  placeholderTextColor={placeholderTextColor}
                  onFocus={() => this.placeholderTextColor = 'green'}
                />
              </View>

              <View style={StudentRegistrationStyles.containerInputsInline}>
                <View style={StudentRegistrationStyles.inputFormInline}>
                  <TextInput
                    style={StudentRegistrationStyles.input}
                    placeholder={"Senha de acesso"}
                    clearButtonMode="while-editing"
                    onChangeText={this.handlePasswordChange}
                    inputAccessoryViewID={"Senha"}
                    returnKeyType={"next"}
                    placeholderTextColor={placeholderTextColor}
                    onFocus={() => this.placeholderTextColor = 'green'}
                    secureTextEntry={true}
                    textContentType='password'
                  />
                </View>
                <View style={StudentRegistrationStyles.inputFormInline}>
                  <TextInput
                    style={StudentRegistrationStyles.input}
                    placeholder={"Confirmar senha de acesso"}
                    clearButtonMode="while-editing"
                    onChangeText={this.handleConfirmPasswordChange}
                    inputAccessoryViewID={"Confirmar senha"}
                    returnKeyType={"next"}
                    placeholderTextColor={placeholderTextColor}
                    onFocus={() => this.placeholderTextColor = 'green'}
                    secureTextEntry={true}
                    textContentType='password'
                  />
                </View>
              </View>
            </View>
            <View style={StudentRegistrationStyles.containerMsgs}>
              <Text style={StudentRegistrationStyles.msgSuccess}></Text>
              <Text style={StudentRegistrationStyles.msgError}></Text>
            </View>
            <View style={StudentRegistrationStyles.containerTouchables}>
              <TouchableOpacity
                style={StudentRegistrationStyles.Touchable}
                onPress={this.handleRegistrationPress}>
                <Text>Fazer Cadastro</Text>
              </TouchableOpacity>
              <TouchableOpacity style={StudentRegistrationStyles.Touchable}>
                <Text>Voltar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    )
  }
}
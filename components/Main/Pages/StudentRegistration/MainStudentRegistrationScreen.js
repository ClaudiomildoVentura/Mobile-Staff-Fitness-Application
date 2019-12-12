import * as React from 'react'
import { Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import PropTypes from 'prop-types'
import MainStudentRegistrationStyles from './MainStudentRegistrationStyles'

export default class MainStudentRegistrationScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: '',
      accessKey: '',
      password: '',
      password_confirmation: '',
      validations: [{
        email: false,
        username: false,
        accessKey: false,
        password: false,
        password_confirmation: false
      }],
      errors: {
        email: '',
        username: '',
        accessKey: '',
        password: '',
        password_confirmation: ''
      },
      errorMessage: '',
      successMessage: ''
    }
    this.handleEmailChange = this.handleEmailChange.bind(this)
  }

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
      dispatch: PropTypes.func,
    }).isRequired,
  }

  handleAccessKeyChange = (newText) => { this.setState({ accessKey: newText }) };
  handleUsernameChange = (newText) => { this.setState({ username: newText }) };
  handleEmailChange = (newText) => {
    console.log(this.state.email)
    this.setState({ email: newText })
    this.setState(prevState => ({ validations: [...prevState.validations, { email: true }] }))
  };
  handlePasswordChange = (newText) => {
    this.setState({ password: newText })
    if (this.state.password != '' && (this.state.password !== this.state.password_confirmation)) {
      this.setState({ errorMessage: 'Os campos de password não coincidem' })
    }
  };
  handlePassword_ConfirmationChange = (newText) => { this.setState({ password_confirmation: newText }) };

  render() {
    return (
      <View style={MainStudentRegistrationStyles.container}>
        <ScrollView MaintainVisibleContentPosition={true} overScrollMode='always'>
          <Text style={MainStudentRegistrationStyles.textTitle}>Cadastro de Aluno</Text>
          <Text style={[MainStudentRegistrationStyles.inputLabel, { paddingBottom: 10 }]}>Preencha abaixo</Text>
          {this.state.accessKey !== '' && <Text style={MainStudentRegistrationStyles.inputLabel}>Código de Acesso</Text>}
          <TextInput
            style={MainStudentRegistrationStyles.input}
            placeholder="Código de Acesso"
            value={this.state.accessKey}
            onChangeText={this.handleAccessKeyChange}
          />
          {this.state.username !== '' && <Text style={MainStudentRegistrationStyles.inputLabel}>Username</Text>}
          <TextInput
            style={MainStudentRegistrationStyles.input}
            placeholder="Username"
            value={this.state.username}
            onChangeText={this.handleUsernameChange}
          />
          {this.state.email !== '' && <Text style={MainStudentRegistrationStyles.inputLabel}>Email</Text>}
          <TextInput
            style={MainStudentRegistrationStyles.input}
            placeholder="Email"
            value={this.state.email}
            onChangeText={this.handleEmailChange}
          />
          {this.state.password !== '' && <Text style={MainStudentRegistrationStyles.inputLabel}>Password</Text>}
          <TextInput
            style={MainStudentRegistrationStyles.input}
            placeholder="Password"
            value={this.state.password}
            onChangeText={this.handlePasswordChange}
          />
          {this.state.password_confirmation !== '' && <Text style={MainStudentRegistrationStyles.inputLabel}>Digite novamente seu Password</Text>}
          <TextInput
            style={MainStudentRegistrationStyles.input}
            placeholder="Password_Confirmation"
            value={this.state.password_confirmation}
            onChangeText={this.handlePassword_ConfirmationChange}
          />
          <Text style={{ color: 'white', paddingBottom: 10 }}>Ao realizar o cadastro em nosso sistema, você está aceitando os nossos Termos de Uso e Serviço.</Text>
          <TouchableOpacity
            accessible={true}
            accessibilityComponentType="button"
            accessibilityHint="Tenta realizar o login no sistema"
            style={MainStudentRegistrationStyles.button}
            onPress={() => console.log('clicked')}>
            <Text>Fazer Cadastro</Text>
          </TouchableOpacity>
          <TouchableOpacity
            accessible={true}
            accessibilityComponentType="button"
            accessibilityHint="Tenta realizar o login no sistema"
            style={MainStudentRegistrationStyles.button}
            onPress={() => this.props.navigation.goBack()}>
            <Text>Voltar</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    )
  }
}
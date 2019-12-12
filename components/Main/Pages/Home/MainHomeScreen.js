import * as React from 'react'
import { Text, View, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import api from '../../../Shared/Configs/api'
import MainHomeStyles from './MainHomeStyles'
import { StackActions, NavigationActions } from 'react-navigation'
import PropTypes from 'prop-types';
import { logoPath } from '../../../Shared/Configs/globalVars'
import { setUser, setToken } from '../../../Shared/Configs/profile'

export default class MainHomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.handleSignInPress = this.handleSignInPress.bind(this);
  }
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
      dispatch: PropTypes.func,
    }).isRequired,
  };
  state = {
    email: '',
    password: '',
    error: '',
    success: ''
  };

  handleEmailChange = (email) => {
    this.setState({ email });
  };
  handlePasswordChange = (password) => {
    this.setState({ password });
  };
  handleCreateAccountPress = () => {
    this.props.navigation.navigate('SignUp');
  };

  handleSignInPress = async () => {
    if (this.state.email != '' && this.state.password != '') {
      try {
        const response = await api.post('/loginStudent', {
          email: this.state.email,
          password: this.state.password,
        }).catch(erro => this.setState({ error: erro.message }));
        this.setState({ error: response.data.message })
        if (response.data.accessLevel === 1) {
          console.log('token' + response.data.accessToken.token)
          setToken(response.data.accessToken.token)
          setUser(this.state.email)
          const resetAction = StackActions.reset({
            index: 0,
            actions: [
              NavigationActions.navigate({ routeName: 'Rotas do Aluno', params: { user: this.state.email } }),
            ],
          });
          this.props.navigation.dispatch(resetAction);
        } else if (response.data.accesslevel === 2) {
          this.setState({ error: 'Prezado staff, no momento seu acesso é apenas pela web. Acesse o sistema pelo site: https://calm-oasis-71907.herokuapp.com' })
        } else {
          throw new Error('Usuário ou senha inseridos incorretamente.')
        }
      } catch (_err) {
        this.setState({ error: _err.message });
      }
    }
  };


  render() {
    return (
      <View style={MainHomeStyles.container}>
        <ScrollView MaintainVisibleContentPosition={true} overScrollMode='always'>
          <View style={MainHomeStyles.containerLogo}>
            <Image style={MainHomeStyles.logo} source={logoPath} fadeDuration={10} />
          </View>
          <View style={MainHomeStyles.containerLogin}>
            <View style={MainHomeStyles.containerInputs}>
              <Text style={MainHomeStyles.textEmail}>Email do usuário: </Text>
              <TextInput style={MainHomeStyles.input}
                placeholder="Endereço de e-mail"
                value={this.state.email}
                onChangeText={this.handleEmailChange}
                autoCapitalize="none"
                autoCorrect={false}
                accessible={true}
                accessibilityLabel="Insira seu endereço de e-mail válido"
              />
              <Text style={MainHomeStyles.textSenha}>Senha: </Text>
              <TextInput style={MainHomeStyles.input}
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry
                value={this.state.password}
                onChangeText={this.handlePasswordChange}
                accessible={true}
                accessibilityLabel="Insira seu endereço de e-mail válido"
                accessibilityHint="Navigates to the previous screen"
              />
            </View>
            <View style={MainHomeStyles.containerButton}>
              <TouchableOpacity
                accessible={true}
                accessibilityComponentType="button"
                accessibilityHint="Tenta realizar o login no sistema"
                style={MainHomeStyles.button}
                onPress={this.handleSignInPress}>
                <Text>Fazer Login</Text>
              </TouchableOpacity>
              <TouchableOpacity
                accessible={true}
                accessibilityComponentType="button"
                accessibilityHint="Redireciona para a página de cadastro do sistema"
                style={MainHomeStyles.button}
                onPress={() => this.props.navigation.navigate('Cadastro do Aluno')}>
                <Text>Cadastrar-se</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={MainHomeStyles.containerMsgs}>
            <Text style={MainHomeStyles.success}>{this.state.success}</Text>
            <Text style={MainHomeStyles.error}>{this.state.error}</Text>
          </View>
          <View style={MainHomeStyles.containerInfo}>
            <Text style={MainHomeStyles.textTitle}>VAMOS NOS EXERCITAR</Text>
            <Text style={MainHomeStyles.textSubtitle}>Gerencie os treinos dos seus alunos com facilidade.</Text>
            <Text style={MainHomeStyles.textCadastro}>Cadastre-se agora e tenha acesso ao sistema gratuitamente por 30 dias.</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}
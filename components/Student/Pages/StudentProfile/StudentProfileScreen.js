import * as React from 'react'
import { Text, View, TextInput, TouchableOpacity } from 'react-native'
import Constants from 'expo-constants'
import carregarPerfilPersonal, { getUser } from '../../../Shared/Configs/profile'
import StudentProfileStyles from './StudentProfileStyles'
const profile = getUser()
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'

let newPerfil = {
  username: '',
  email: '',
  weight: '',
  height: ''
}
export default class StudentProfileScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      profile: '',
      yourStaff: '',
      emailUSER: '',
      editProfile: false
    }
    this.onChoiceEdit = this.onChoiceEdit.bind(this)
    this.onEditProfile = this.onEditProfile.bind(this)
    this.onChangeTextInput = this.onChangeTextInput.bind(this)
  }

  onEditProfile = () => {
    const response = api.post('/studentProfileEdit', newPerfil)
    //const response = api.post('/studentProfileEdit', newPerfil).then(data => console.log(data)).catch(erro => console.log(erro))
    //console.log(response)
  }

  async onChoiceEdit() {
    this.setState({ editProfile: true })
  }

  onChangeTextInput = async e => {
    e.preventDefault()
    const { id, value } = e
    newPerfil[id] = value
  }

  async componentWillMount() {
    try {
      const response = await carregarPerfilPersonal()
      this.setState({ profile: response })
      //console.log(this.state.profile)
      this.setState({ yourStaff: response.staff })
      newPerfil.username = this.state.profile.username;
      newPerfil.email = this.state.profile.email
      newPerfil.weight = this.state.profile.weight
      newPerfil.height = this.state.profile.height

    } catch (error) {
      console.log(error)
    }
  }

  render() {
    return (
      <View style={StudentProfileStyles.container}>
        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#4191d0', '#c56fe6']} style={{ flex: 5, padding: 0, margin: 0, borderRadius: 5 }}>
          <View style={StudentProfileStyles.containerStudentInfo}>
            <MaterialCommunityIcons name="tooltip-account" size={150} style={StudentProfileStyles.userIcon} />
            <Text style={StudentProfileStyles.username}> {this.state.profile.name} </Text>
            <Text style={StudentProfileStyles.accessCode}> Chave de acesso {this.state.profile.accessKey} </Text>

            <Text style={StudentProfileStyles.textLabel}>Username</Text>
            {this.state.editProfile ? (
              <TextInput style={StudentProfileStyles.input}
                autoCapitalize="none"
                autoCorrect={false}
                defaultValue={newPerfil.username}
                onChangeText={e => this.onChangeTextInput(e)}
                accessible={true}
                accessibilityLabel="Insira seu endereço de e-mail válido"
                accessibilityHint="Navigates to the previous screen"
              />
            ) : (
                <Text style={StudentProfileStyles.textValue}>
                  {this.state.profile.username ? <Text style={StudentProfileStyles.textValue}>{this.state.profile.username}</Text> : <Text style={StudentProfileStyles.textValue}>não informado</Text>}
                </Text>
              )}
            <Text style={StudentProfileStyles.textLabel}>Email</Text>
            {this.state.editProfile ? (
              <TextInput style={StudentProfileStyles.input}
                autoCapitalize="none"
                autoCorrect={false}
                defaultValue={newPerfil.email}
                onChangeText={e => this.onChangeTextInput(e)}
                accessible={true}
                accessibilityLabel="Insira seu endereço de e-mail válido"
                accessibilityHint="Navigates to the previous screen"
              />
            ) : (
                <Text style={StudentProfileStyles.textValue}>
                  {this.state.profile.email ? <Text style={StudentProfileStyles.textValue}>{this.state.profile.email}</Text> : <Text style={StudentProfileStyles.textValue}>não informado</Text>}
                </Text>
              )}
            <Text style={StudentProfileStyles.textLabel}>Peso</Text>
            {this.state.editProfile ? (
              <TextInput style={StudentProfileStyles.input}
                autoCapitalize="none"
                autoCorrect={false}
                defaultValue={newPerfil.weight}
                onChangeText={e => this.onChangeTextInput(e)}
                accessible={true}
                accessibilityLabel="Insira seu endereço de e-mail válido"
                accessibilityHint="Navigates to the previous screen"
              />
            ) : (
                <Text style={StudentProfileStyles.textValue}>
                  {this.state.profile.weight ? <Text style={StudentProfileStyles.textValue}>{this.state.profile.weight}</Text> : <Text style={StudentProfileStyles.textValue}>não informado</Text>}
                </Text>
              )}
            <Text style={StudentProfileStyles.textLabel}>Altura</Text>
            {this.state.editProfile ? (
              <TextInput style={StudentProfileStyles.input}
                autoCapitalize="none"
                autoCorrect={false}
                defaultValue={newPerfil.height}
                onChangeText={e => this.onChangeTextInput(e)}
                accessible={true}
                accessibilityLabel="Insira seu endereço de e-mail válido"
                accessibilityHint="Navigates to the previous screen"
              />
            ) : (
                <Text style={StudentProfileStyles.textValue}>
                  {this.state.profile.height ? <Text style={StudentProfileStyles.textValue}>{this.state.profile.height}</Text> : <Text style={StudentProfileStyles.textValue}>não informado</Text>}
                </Text>
              )}
            <Text style={StudentProfileStyles.textLabel}>Password</Text>
            {this.state.editProfile ? (
              <TouchableOpacity
                accessible={true}
                accessibilityComponentType="button"
                accessibilityHint="Pressione o botão para solicitar por email"
                style={{ backgroundColor: '#232d32', width: '50%', paddingVertical: 8, bottom: 0 }}
                onPress={() => this.onChoiceEdit()}>
                <Text style={{ textAlign: 'center', color: '#fff' }}>Alterar</Text>
              </TouchableOpacity>
            ) : (
                <Text style={StudentProfileStyles.textValue}>
                  <Text style={StudentProfileStyles.textValue}>***********</Text>
                </Text>
              )}
            {/*        <Text style={StudentProfileStyles.textLabel}> 
        Email  
        </Text>
        <Text style={StudentProfileStyles.textValue}> 
        {this.state.profile.email}  
        </Text>
        <Text style={StudentProfileStyles.textLabel}> 
        Peso  
        </Text>
        {this.state.profile.weight ? <Text style={StudentProfileStyles.textValue}>{this.state.profile.weight}</Text> : <Text style={StudentProfileStyles.textValue}>não informado</Text>}
        <Text style={StudentProfileStyles.textLabel}> 
        Altura  
        </Text>
        {this.state.profile.height ? <Text style={StudentProfileStyles.textValue}>{this.state.profile.height}</Text> : <Text style={StudentProfileStyles.textValue}>não informado</Text>} */}
          </View>
        </LinearGradient>
        <View style={StudentProfileStyles.containerStaffInfo}>
            {this.state.editProfile ? (
              <View style={StudentProfileStyles.containerButton}>
                <TouchableOpacity
                  accessible={true}
                  accessibilityComponentType="button"
                  accessibilityHint="Tenta realizar o login no sistema"
                  style={[StudentProfileStyles.button, { marginRight: 5 }]}
                  onPress={() => this.onEditProfile()}>
                  <Text style={{ color: '#fff' }}>Confirmar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  accessible={true}
                  accessibilityComponentType="button"
                  accessibilityHint="Tenta realizar o login no sistema"
                  style={StudentProfileStyles.button}
                  onPress={() => this.setState({ editProfile: false })}>
                  <Text style={{ color: '#fff' }}>Voltar</Text>
                </TouchableOpacity>
              </View>
            ) : (
                <View style={StudentProfileStyles.containerButton}>
                  <TouchableOpacity
                    accessible={true}
                    accessibilityComponentType="button"
                    accessibilityHint="Tenta realizar o login no sistema"
                    style={[StudentProfileStyles.button, { marginRight: 5 }]}
                    onPress={() => this.setState({ editProfile: true })}>
                    <Text style={{ color: '#fff' }}>Editar Perfil</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    accessible={true}
                    accessibilityComponentType="button"
                    accessibilityHint="Tenta realizar o login no sistema"
                    style={StudentProfileStyles.button}
                    onPress={() => console.log('clicked')}>
                    <Text style={{ color: '#fff' }}>Excluir Perfil</Text>
                  </TouchableOpacity>
                </View>
              )}
          <Text style={[StudentProfileStyles.textLabel, {marginTop: 1}]}>
            Email do Professor
        </Text>
          <Text style={StudentProfileStyles.textValue}>{this.state.yourStaff.email}</Text>
        </View>
        <View style={StudentProfileStyles.containerStaffInfo}>
        <Text style={StudentProfileStyles.textLabel}>
        Nome do Professor
        {console.log(this.state.yourStaff)}
      </Text>
      <Text style={StudentProfileStyles.textValue}>{this.state.yourStaff.nome}</Text>
      </View>

      </View>

       

     /*  <View style={StudentProfileStyles.container}>
        <View style={StudentProfileStyles.containerPhoto}>
          <LinearGradient
            start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
            colors={['#4191d0', '#c56fe6']}
            style={{ width: '100%', padding: 0, margin: 0, borderRadius: 5 }}>
            <View style={{ height: 200, width: '100%' }}>
              <MaterialCommunityIcons
                name="tooltip-account"
                size={200}
                style={StudentProfileStyles.userIcon}
              />
            </View>
            <View style={{ flexDirection: 'column', height: 100, paddingLeft: 15, justifyContent: 'center' }}>
              <Text style={StudentProfileStyles.username}>
                {this.state.profile.name}
              </Text>
              <Text style={StudentProfileStyles.textLabel}>
                Chave de acesso {this.state.profile.accessKey}
              </Text>
              <Text style={StudentProfileStyles.textLabel}>
                Username
              </Text>
              <Text style={StudentProfileStyles.textValue}>
                {this.state.profile.username}
              </Text>
              <Text style={StudentProfileStyles.textLabel}>
                Email
              </Text>
              <Text style={StudentProfileStyles.textValue}>
                {this.state.profile.email}
              </Text>
              <Text style={StudentProfileStyles.textLabel}>
                Peso
              </Text>
              {this.state.profile.weight ? <Text style={StudentProfileStyles.textValue}>{this.state.profile.weight}</Text> : <Text style={StudentProfileStyles.textValue}>não informado</Text>}
              <Text style={StudentProfileStyles.textLabel}>
                Altura
              </Text>
              {this.state.profile.height ? <Text style={StudentProfileStyles.textValue}>{this.state.profile.height}</Text> : <Text style={StudentProfileStyles.textValue}>não informado</Text>}
            </View>
          </LinearGradient>
        </View>
        <View style={StudentProfileStyles.secondaryContainer}>
          <View style={StudentProfileStyles.containerButton}>
            <TouchableOpacity
              accessible={true}
              accessibilityComponentType="button"
              accessibilityHint="Tenta realizar o login no sistema"
              style={[StudentProfileStyles.button, { marginRight: 5 }]}
              onPress={() => console.log('clicked')}>
              <Text style={{ color: '#fff' }}>Fazer Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
              accessible={true}
              accessibilityComponentType="button"
              accessibilityHint="Tenta realizar o login no sistema"
              style={StudentProfileStyles.button}
              onPress={() => console.log('clicked')}>
              <Text style={{ color: '#fff' }}>Fazer Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View> */
    )
  }
}
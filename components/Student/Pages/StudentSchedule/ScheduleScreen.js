import * as React from 'react'
import { FlatList, Text, View } from 'react-native'
import ScheduleScreenStyles from './ScheduleScreenStyles'
import scheduleStudent from './ScheduleController'

export default class ScheduleScreen extends React.Component {

  constructor() {
    super()
    this.state = {
      schedule: '',
      staff: '',
    }
    this.renderItem = this.renderItem.bind(this)
  }

  async componentWillMount() {
    try {
      const res = await scheduleStudent()
      this.setState({ schedule: res.schedule })
      this.setState({ staff: res.schedule.staff })
    } catch (error) {
    }
  }

  renderItem = () => (
    <View style={ScheduleScreenStyles.listItem}>

      <View style={ScheduleScreenStyles.viewLine}></View>
      <Text style={ScheduleScreenStyles.txtTitleLine}>Treinos Agendados</Text>
      <View style={ScheduleScreenStyles.viewLine}></View>

      <View style={ScheduleScreenStyles.viewLineTwo}>
        <Text style={ScheduleScreenStyles.txtSubTitleLine}>Prescrito por:</Text>
        <Text style={ScheduleScreenStyles.txtInfo}>{this.state.staff.nome}</Text>
      </View>

      <View style={ScheduleScreenStyles.viewLineTwo}>
        <Text style={ScheduleScreenStyles.txtSubTitleLine}>N° CREF:</Text>
        <Text style={ScheduleScreenStyles.txtInfo}>{this.state.staff.cref}</Text>
      </View>

      <View style={ScheduleScreenStyles.viewLineTwo}>
        <Text style={ScheduleScreenStyles.txtSubTitleLine}>E-mail:</Text>
        <Text style={ScheduleScreenStyles.txtInfo}>{this.state.staff.email}</Text>
      </View>

      <View style={ScheduleScreenStyles.viewTbl}>
        <Text style={ScheduleScreenStyles.txtSubTitleLine}>Data/horário:</Text>
        <Text style={ScheduleScreenStyles.txtInfo}>{this.state.schedule.created_at}</Text>
      </View>

      <View style={ScheduleScreenStyles.viewLine}></View>

      <View style={ScheduleScreenStyles.viewTbl}>
        <Text style={ScheduleScreenStyles.txtTbl}>Exercício</Text>
        <Text style={ScheduleScreenStyles.txtTbl}>Séries</Text>
        <Text style={ScheduleScreenStyles.txtTbl}>Repet</Text>
        <Text style={ScheduleScreenStyles.txtTbl}>Instruções</Text>
      </View>

      <View style={ScheduleScreenStyles.viewTbl}>
        <Text style={ScheduleScreenStyles.txtInfo}>{this.state.schedule.categoria}</Text>
        <Text style={ScheduleScreenStyles.txtInfo}>{this.state.schedule.series}</Text>
        <Text style={ScheduleScreenStyles.txtInfo}>{this.state.schedule.intervalo}</Text>
        <Text style={ScheduleScreenStyles.txtInfo}>{this.state.schedule.nomeExercicio}</Text>
      </View>

      <View style={ScheduleScreenStyles.viewLine}></View>
    </View>
  )

  render() {
    return (
      <View style={ScheduleScreenStyles.container}>
        <FlatList
          contentContainerStyle={ScheduleScreenStyles.list}
          data={[{ key: this.state.schedule }]}
          renderItem={this.renderItem}
        />
      </View>
    )
  }
}
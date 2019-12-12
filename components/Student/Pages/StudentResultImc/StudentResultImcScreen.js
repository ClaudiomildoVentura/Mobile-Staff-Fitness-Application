import * as React from 'react'
import { FlatList, Text, View } from 'react-native'
import StudentResultImcStyles from './StudentResultImcStyles'
import StudentResultImcController from './StudentResultImcController'

export default class StudentResultImcScreen extends React.Component {

    constructor() {
        super()
        this.state = {
            resultImc: ''
        }
    }

    async componentWillMount() {
        try {
            const res = await StudentResultImcController()
            this.setState({ resultImc: res[0] })
        } catch (error) {
            console.log(error)
        }
    }


    renderItem = () => (
        <View style={StudentResultImcStyles.listItem}>

            <View style={StudentResultImcStyles.viewLine}></View>
            <Text style={StudentResultImcStyles.txtTitleLine}>Histórico IMC</Text>
            <View style={StudentResultImcStyles.viewLine}></View>

            <View style={StudentResultImcStyles.viewLine}></View>

            <View style={StudentResultImcStyles.viewTbl}>
                <Text style={StudentResultImcStyles.txtTbl}>IMC</Text>
                <Text style={StudentResultImcStyles.txtTbl}>Peso</Text>
                <Text style={StudentResultImcStyles.txtTbl}>Altura</Text>
            </View>

            <View style={StudentResultImcStyles.viewTbl}>
                <Text style={StudentResultImcStyles.txtInfo}>{this.state.resultImc.IMC}</Text>
                <Text style={StudentResultImcStyles.txtInfo}>{this.state.resultImc.peso}</Text>
                <Text style={StudentResultImcStyles.txtInfo}>{this.state.resultImc.altura}</Text>
            </View>

            <View style={StudentResultImcStyles.viewLine}></View>
        </View>

    )
    render() {
        return (
            <View style={StudentResultImcStyles.container}>
                <FlatList
                    contentContainerStyle={StudentResultImcStyles.list}
                    data={[{ key: this.state.resultImc }]}
                    renderItem={this.renderItem}
                />
            </View>
        )
    }
}
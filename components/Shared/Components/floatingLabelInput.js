import React, { Component } from 'react';
import { View, Animated, StyleSheet, TextInput } from 'react-native';
import { string, func } from 'prop-types';

export class FloatingTitleTextInputField extends Component {
  static propTypes = {
    attrName: string.isRequired,
    title: string.isRequired,
    value: string.isRequired,
    updateMasterState: func.isRequired,
    keyboardType: string,
//    otherTextInputProps: object,
  }

  static defaultProps = {
    keyboardType: 'default',
    otherTextInputAttributes: {},
  }

  constructor(props) {
    super(props);
    const { value } = this.props;
    this.position = new Animated.Value(value ? 1 : 0);
    this.state = {
      isFieldActive: false,
    }
  }

  _handleFocus = () => {
    if (!this.state.isFieldActive) {
      this.setState({ isFieldActive: true });
      Animated.timing(this.position, {
        toValue: 1,
        duration: 150,
      }).start();
    }
  }

  _handleBlur = () => {
    if (this.state.isFieldActive && !this.props.value) {
      this.setState({ isFieldActive: false });
      Animated.timing(this.position, {
        toValue: 0,
        duration: 150,
      }).start();
    }
  }

  _onChangeText = (updatedValue) => {
    const { attrName, updateMasterState } = this.props; 
    updateMasterState(attrName, updatedValue);
  }

  _returnAnimatedTitleStyles = () => {
    const { isFieldActive } = this.state;
    return {
      top: this.position.interpolate({
        inputRange: [0, 1],
        outputRange: [14, 0],
      }),
      fontSize: isFieldActive ? 10 : 15,
      color: isFieldActive ? 'black' : 'dimgrey',
    }
  }

  render() {
    return (
      <View style = {Styles.container}>
        <Animated.Text
          style = {[Styles.titleStyles, this._returnAnimatedTitleStyles()]}
        >
          {this.props.title}
        </Animated.Text>
        <TextInput
          value = {this.props.value}
          style = {Styles.textInput}
          underlineColorAndroid = 'transparent'
          onFocus = {this._handleFocus}
          onBlur = {this._handleBlur}
          onChangeText = {this._onChangeText}
          keyboardType = {this.props.keyboardType}
          {...this.props.otherTextInputProps}
        />
      </View>
    )
  }
}

const Styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 3,
    borderStyle: 'solid',
    borderWidth: 0.5,
    height: 50,
    marginVertical: 4,
  },
  textInput: {
    fontSize: 15,
    marginTop: -5,
    fontFamily: 'Avenir-Medium',
    color: 'black',
    width: '100%'
  },
  titleStyles: {
    position: 'absolute',
    fontFamily: 'Avenir-Medium',
    left: 3,
    left: 4,
  }
})

/*import React, { Component } from 'react';
import { View, StatusBar, TextInput, Text, Animated } from 'react-native';
import { string, func } from 'prop-types';
export default class FloatingLabelInput extends Component {




{  state = {
    isFocused: false,
  };
  handleFocus = () => this.setState({ isFocused: true });
  handleBlur = () => this.setState({ isFocused: false });


  componentWillMount() {
    this._animatedIsFocused = new Animated.Value(this.props.value === '' ? 0 : 1);
  }

  componentDidUpdate() {
    Animated.timing(this._animatedIsFocused, {
      toValue: (this.state.isFocused || this.props.value !== '') ? 1 : 0,
      duration: 200,
    }).start();
  }  
  render() {
    const activeColor = this.props.activeColor
    const inactiveColor = this.props.inactiveColor
    const { label, ...props } = this.props;
    const { isFocused } = this.state;
    const labelStyle = {
      position: 'absolute',
      left: 0,
      top: this._animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [18, 0],
      }),
      fontSize: this._animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [20, 14],
      }),
      color: this._animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: ['#aaa', '#000'],
      }),
    };
    const labelStyle = {
      position: 'absolute',
      left: 0,
      top: !isFocused ? 22 : (this.state != '' ? 22 : 0),
      fontSize: !isFocused ? 24 : 18,
      color: !isFocused ? (activeColor ? activeColor : 'rgba(255,255,255,0.7)') : (inactiveColor ? inactiveColor : '#fff')          
    };
    const inputStyle = { 
        height: 32, 
        minWidth: '100%', 
        maxWidth: '100%', 
        fontSize: 20, 
        color: '#fff', 
        borderBottomWidth: 1, 
        borderBottomColor: '#555', 
    }

    return (
      <View style={{ paddingTop: 30 }}>
        <Text style={labelStyle}>
          {label}
        </Text>
        <TextInput
          {...props}
          style={inputStyle}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          blurOnSubmit
        />
      </View>
    );
  } 
}*/
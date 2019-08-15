import React, { Component } from 'react'
import { StyleSheet, View, Alert, Text, Animated, Image } from "react-native"

const styles = {
  container: {
    flex: 1,
    backgroundColor: arkadBlue,
    justifyContent: "center",
    alignItems: "center",
  },
  daysContainer: {
    width:'100%',
    paddingBottom: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  countdownDays: {
    fontSize: 68,
    fontWeight: 'bold',
    color: '#fff',
    paddingBottom: 4
  },
  countdown: {
    paddingHorizontal: 20,
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    paddingBottom: 4
  },
  timeText: {
    paddingHorizontal: 18,
    textAlign: 'center',
    color: '#fff',
    fontSize: 12,
  },
  arkadText: {
    fontSize: 70,
    color: '#fff',
    textAlign: 'center',
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'contain'
  },
  hr: {
    justifyContent: "center",
    alignItems: "center",
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    width: '50%',
    marginBottom: 26
  }
}

const { container, daysContainer, countdownDays, countdown, timeText, arkadText,
        image, hr } = styles

class CountdownScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      totalSeconds: 0,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      currentDate: null,
      arkadDate: null,
      ySec: new Animated.Value(0),
      yMin: new Animated.Value(0),
    }
  }

  componentDidMount() {
    this.clockCall = setInterval(() => {
      this.setTotalSeconds()
    }, 1000)
    this.setTotalSeconds()
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.minutes !== prevState.minutes) {
      this.slideMinutes()
    }
    if (this.state.totalSeconds !== prevState.totalSeconds) {
      this.slideSeconds()
    }
  }

  slideSeconds() {
    this.state.ySec.setValue(0)
    Animated.timing(this.state.ySec, {
      toValue: -4,
      duration: 100
    }).start(() => this.slideOutSeconds())
  }

  slideOutSeconds() {
    this.state.ySec.setValue(-4)
    Animated.timing(this.state.ySec, {
      toValue: 0,
      duration: 100
    }).start()
  }

  slideMinutes() {
    this.state.yMin.setValue(0)
    Animated.timing(this.state.yMin, {
      toValue: -4,
      duration: 100
    }).start(() => this.slideOutMinutes())
  }

  slideOutMinutes() {
    this.state.yMin.setValue(-4)
    Animated.timing(this.state.yMin, {
      toValue: 0,
      duration: 100
    }).start()
  }

  async setTotalSeconds() {
    await this.setState({
      totalSeconds: Math.round(new Date('November 13, 2019 10:00:00 GMT+1:00').getTime() - Date.now())/1000
    })
    this.calculateTime()
  }

  calculateTime() {
    this.setState({
      seconds: parseInt((this.state.totalSeconds % 60).toString(), 10),
      minutes: parseInt(((this.state.totalSeconds / 60) % 60).toString(), 10),
      hours: parseInt(((this.state.totalSeconds / 3600) % 24).toString(), 10),
      days: parseInt(((this.state.totalSeconds / (3600*24))).toString(), 10)
    })
  }

  render() {
    return (
      <View style={container}>
      <View style={daysContainer}>
        <Image
          style={image}
          source={require('../../../resources/img/arkad_logo_inv.png')}
        />
        </View>
        <View
          style={hr}
        />
        <View style={daysContainer}>
          <Text style={countdownDays}>
            { this.state.days }
          </Text>
          <Text style={timeText}>
            Days
          </Text>
        </View>
        <View style={{flexDirection:"row", justifyContent: "center", alignItems: "center"}}>
          <View style={{width:'30%'}}>
            <Text style={countdown}>
              { this.state.hours }
            </Text>
            <Text style={timeText}>
              Hours
            </Text>
          </View>
          <View style={{width:'30%'}}>
            <Animated.Text style={[countdown, {
            transform: [
              {
                translateY: this.state.yMin
              }
            ]
            }]}>
              { this.state.minutes }
            </Animated.Text>
            <Text style={timeText}>
              Minutes
            </Text>
          </View>
          <View style={{width:'30%'}}>
            <Animated.Text style={[countdown, {
            transform: [
              {
                translateY: this.state.ySec
              }
            ]
            }]}>
              { this.state.seconds }
            </Animated.Text>
            <Text style={timeText}>
              Seconds
            </Text>
          </View>
        </View>
      </View>
    )
  }
}


export default CountdownScreen

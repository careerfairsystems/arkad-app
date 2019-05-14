import React, { Component } from 'react';
import { StyleSheet, View, Alert, Text } from "react-native";
import TimerCountdown from "react-native-timer-countdown";

const currentDate = Date.now();
//Date for arkad, change every year
const arkadDate = new Date('November 13, 2019 10:00:00 GMT+1:00');

const CountdownScreen = () => (
  <View style={styles.container}>
    <TimerCountdown
      initialMilliseconds={(Date.parse(arkadDate) - currentDate)}
      onTick={(milliseconds) => console.log("tick", milliseconds)}
      formatMilliseconds={(milliseconds) => {
        // advanced math making sure every date is right
        const remainingSec = Math.round(milliseconds / 1000);
        const seconds = parseInt((remainingSec % 60).toString(), 10);
        const minutes = parseInt(((remainingSec / 60) % 60).toString(), 10);
        const hours = parseInt(((remainingSec / 3600) % 24).toString(), 10);
        const days = parseInt(((remainingSec / (3600*24)) % 7).toString(), 10);
        const weeks = parseInt((remainingSec / (3600*24*7)).toString(), 10);
        const s = seconds < 10 ? '0' + seconds : seconds;
        const m = minutes < 10 ? '0' + minutes : minutes;
        let h = hours < 10 ? '0' + hours : hours;
        let d = days < 10 ? '0' + days : days;
        let w = weeks < 10 ? '0' + weeks : weeks;
        // for some reason hours always is 1 hour ahead of what it should be thats why h-1
        h = h === '00' ? '0:' : h-1 + ':';
        d = d === '00' ? '0:' : d + ':';
        w = w === '00' ? '0:' : w + ':';
        return w + d + h + m + ':' + s;
      }}
      allowFontScaling={true}
      style={styles.countdown}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  countdown: {
    fontSize: 55,
    fontWeight: 'bold',
    color: arkadBlue,
  }
});

export default CountdownScreen;

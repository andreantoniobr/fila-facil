import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import AppText from "./atoms/AppText";

export default function TimeSlider() {
  const totalTimeInMinutes = 15;
  const timeToUpdateInSeconds = 2;
  const [timeLeft, setTimeLeft] = useState(totalTimeInMinutes);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev - 1 >= 0 ? prev - 1 : 0));
    }, timeToUpdateInSeconds * 1000);

    return () => clearInterval(interval);
  }, []);

  const progress = timeLeft / totalTimeInMinutes;

  return (
    <View style={styles.sliderContainer}>
       <View style={styles.timeContainer}>
        <AppText style={styles.timeText}>Tempo Estimado: </AppText>
        <AppText style={styles.timeValue}>{timeLeft}</AppText>
        <Text style={styles.minutesText}> Min</Text>
      </View>
      <View style={styles.sliderBackground}>
        <View style={[styles.sliderProgress, { flex: progress }]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sliderContainer: {
    width: "90%",
    alignSelf: "center",
    marginVertical: 30,
  },
  sliderBackground: {
    flexDirection: "row",
    height: 30,
    backgroundColor: "#eee",
    borderRadius: 8,
    overflow: "hidden",
  },
  sliderProgress: {
    height: "100%",
    backgroundColor: "#4CAF50",
  },
  timeContainer: {
    flexDirection: "row",      
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 30 
  },
  timeText: {
    fontSize: 14,
    textTransform: "uppercase", 
    color: "#8C8C8C",
  },
  timeValue: {
    fontSize: 16,              
    color: "#000",
    fontFamily: "Inter_600SemiBold", 
  },
  minutesText: {
    fontSize: 14,
    textTransform: "uppercase", 
    color: "#000",
    fontFamily: "Inter_400Regular", 
  }
});

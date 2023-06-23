import React from "react";
import { View, Text, StatusBar, StyleSheet, TouchableOpacity } from "react-native";
import {Feather} from '@expo/vector-icons'
import { MotiView, MotiText } from "moti";


const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 64 : 64;

export default function Header({name}) {
  return (
    <View style={styles.container}>
      <MotiView style={styles.content}
      from={{
            translateY: -150,
            opacity:0,
      }}
      animate={{
        translateY: 0,
        opacity:1,
      }}>
      <View style = {styles.content}>
        <Text style={styles.username}>{name}</Text>
        
        <TouchableOpacity activeOpacity={0.9} style = {styles.bottonUser}>
          <Feather name="user" size={27} color="#FFF" />
        </TouchableOpacity>
      </View>
      </MotiView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#556B2F",
    paddingTop: statusBarHeight,
    flexDirection: "row",
    paddingStart: 16,
    paddingEnd: 16,
    paddindBotton: 44,
  },
  content: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  username: {
    fontSize: 18,
    color: "#DCDCDC",
    fontWeight: "bold",
    marginLeft: 8,
    marginBottom: 50,

  },

  bottonUser: {
    width: 44,
    height: 44,
    backgroundColor: `rgba(255,255,255,0.5)`,
    justifyContent: `center`,
    alignItems: "center",
    borderRadius: 44/2,
    marginBottom: 50,
  }
});

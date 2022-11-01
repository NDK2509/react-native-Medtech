import React from "react"
import { StyleSheet, Text } from "react-native"

export default (props: { title: string }) => {
  return <Text style={{
    marginHorizontal: 20,
    marginVertical: 20,
    fontWeight: "bold"
  }}>
    {props.title}
  </Text>
}
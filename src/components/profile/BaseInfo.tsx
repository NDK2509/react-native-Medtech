import { Image, StyleSheet, Text, View } from "react-native"

interface BaseInfoProps {
  img?: string,
  name?: string
}
const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: "center",
  },
  img: {
    borderRadius: 31,
    width: 62,
    height: 62,
    resizeMode: "cover",
    marginEnd: 20
  },
  greeting: {
    fontWeight: "bold",
    fontSize: 20
  }
})
export default (props: BaseInfoProps) => {
  return (
    <View style={style.container}>
      <Image source={require("../../assets/img/profile-example.png")} style={style.img} />
      <View>
        <Text style={style.greeting}>Hi, {props.name}!</Text>
        <Text>Welcome to MedTech</Text>
      </View>
    </View>
  )
}
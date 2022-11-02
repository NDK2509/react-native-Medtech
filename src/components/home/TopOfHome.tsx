import { faBagShopping } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { View, StyleSheet, Image, Text, ImageSourcePropType, TouchableOpacity } from "react-native"
import colors from "../../theme/colors"
import NotificationIcon from "../base/NotificationIcon"
import SearchBar from "../base/SearchBar"

const style = StyleSheet.create({
  container: {
    position: "relative",
    backgroundColor: colors.primaryBlue,
    height: 215,
    borderBottomStartRadius: 30,
    borderBottomEndRadius: 30,
    paddingHorizontal: 30,

  },
  greeting: {
    fontSize: 20,
    fontWeight: "bold",
  },
  textWhite: {
    color: "white"
  }
})

const Top = (props: { img: ImageSourcePropType }) => {
  return (
    <View style={{
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingVertical: 10
    }}>
      <Image source={props.img} style={{ height: 80, width: 80, borderRadius: 40, resizeMode: "cover" }} />
      <View style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "20%",
      }}>
        <NotificationIcon hasNotification={true} size={20} style={style.textWhite} />
        <TouchableOpacity>
          <FontAwesomeIcon style={style.textWhite} icon={faBagShopping} size={20} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default () => {
  const customer = {
    name: "Nguyen Dang Ky",
    img: require("../../assets/img/profile-example.png")
  }
  return (
    <View style={style.container}>
      <Top img={customer.img} />
      <Text style={[style.textWhite, style.greeting]}>Hi, {customer.name}</Text>
      <Text style={style.textWhite}>Welcome to Medtech</Text>
      <View style={{ position: "absolute", backgroundColor: 'rgba(255, 255, 255, 0.07)', width: 412, height: 412, top: 61, start: -211, borderRadius: 200 }}>
      </View>
      <View style={{ position: "absolute", bottom: -20, start: "10%" }}>
        <SearchBar />
      </View>
    </View>
  )
}
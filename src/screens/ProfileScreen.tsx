import { faBarsStaggered, faCircleQuestion, faClock, faFileInvoice, faGear, faStethoscope } from "@fortawesome/free-solid-svg-icons"
import { Text, View, StyleSheet } from "react-native"
import BaseInfo from "../components/profile/BaseInfo"
import ProfileOptions from "../components/profile/ProfileOptions"

const style = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginStart: 30,
    marginVertical: 20
  },
  main: {
    marginHorizontal: 20
  }
})
export default () => {
  return (
    <View>
      <Text style={style.title}>My profile</Text>
      <View style={style.main}>
        <BaseInfo name="Nguyen Dang Ky" />
        <ProfileOptions
          data={[
            { icon: faBarsStaggered, label: "Private Account", onPress: () => { } },
            { icon: faStethoscope, label: "My Consults", onPress: () => { } },
            { icon: faFileInvoice, label: "My Orders", onPress: () => { } },
            { icon: faClock, label: "Billings", onPress: () => { } },
            { icon: faCircleQuestion, label: "FAQ", onPress: () => { } },
            { icon: faGear, label: "Settings", onPress: () => { } }
          ]}
        />
      </View>
    </View>
  )
}
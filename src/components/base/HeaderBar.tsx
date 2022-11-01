import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { Text, TouchableOpacity, View } from "react-native"

export default (props: { title: string }) => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center", margin: 20 }}>
      <TouchableOpacity>
        <FontAwesomeIcon icon={faArrowLeft} />
      </TouchableOpacity>
      <Text style={{ fontSize: 20, fontWeight: "bold", marginStart: 20 }}>{props.title}</Text>
    </View>
  )
}
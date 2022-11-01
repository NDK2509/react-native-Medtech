import { View, TouchableOpacity } from "react-native"
import { faBell } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon, FontAwesomeIconStyle } from "@fortawesome/react-native-fontawesome"
import { CallBackWithoutParams } from "../../utils/types"

export default (props: { hasNotification: boolean, size: number, style?: FontAwesomeIconStyle, onPress?: CallBackWithoutParams}) => {
  return (
    <TouchableOpacity style={{ position: "relative", width: props.size + 2 }} onPress={props.onPress}>
      <FontAwesomeIcon size={props.size} icon={faBell} style={props.style} />
      {props.hasNotification && <View style={[{ position: "absolute", height: 10, width: 10, backgroundColor: "red", borderRadius: 5, end: 0, top: 0 }]}/>}
    </TouchableOpacity>
  )
}
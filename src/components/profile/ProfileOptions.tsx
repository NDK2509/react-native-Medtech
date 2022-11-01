import { faAngleRight, IconDefinition } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { TouchableOpacity, View, Text, FlatList, StyleSheet } from "react-native"
import colors from "../../theme/colors"
import { CallBackWithoutParams } from "../../utils/types"

interface ProfileOptionProps {
  icon: IconDefinition,
  label: string,
  onPress?: CallBackWithoutParams
}
const optionStyle = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "90%",
    marginHorizontal: 10,
    marginBottom: 20
  },
  left: {
    flexDirection: "row",
    alignItems: "center"
  },
  startIcon: {
    marginEnd: 30
  }
})
const Option = (props: ProfileOptionProps) => {
  return (
    <TouchableOpacity style={optionStyle.container} onPress={props.onPress}>
      <View style={optionStyle.left}>
        <FontAwesomeIcon style={optionStyle.startIcon} icon={props.icon} size={20} color={colors.primaryBlue} />
        <Text>{props.label}</Text>
      </View>
      <FontAwesomeIcon icon={faAngleRight} color={colors.primaryBlue} />
    </TouchableOpacity>
  )
}

const style = StyleSheet.create({
  container: {
    marginVertical: 30
  }
})
export default ({ data }: { data: Array<ProfileOptionProps> }) => {
  return (
    <FlatList style={style.container} data={data} renderItem={({ item }) => <Option icon={item.icon} label={item.label} onPress={item.onPress} />} />
  )
}
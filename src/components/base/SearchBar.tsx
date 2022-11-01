import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { StyleSheet, TouchableOpacity, TextInput, View } from "react-native"

const style = StyleSheet.create({
  container: {
    position: "relative",
    borderRadius: 25,
    paddingHorizontal: 10,
    paddingStart: 50,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  input: {

  },
  icon: {  
    position: "absolute",
    start: 20,
    top: "50%",
    transform: [{translateY: -8}],
  }
})
export default () => {
  return (
    <View style={style.container}>
      <TouchableOpacity style={style.icon}>
        <FontAwesomeIcon  icon={faSearch} />
      </TouchableOpacity>
      <TextInput style={style.input} placeholder="Search Medicines And Healthcare Products" />
    </View>
  )
}
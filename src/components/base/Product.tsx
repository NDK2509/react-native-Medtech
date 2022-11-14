import { faStar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { ProductType } from "../../api/ProductsAPI"
import colors from "../../theme/colors"

const style = StyleSheet.create({
  container: {
    position: "relative",
    height: 250,
    width: 180,
    flexDirection: "column",
    padding: 20,
    borderRadius: 20,
    borderWidth: 1,
    overflow: "hidden",
    marginHorizontal: 10,
    marginVertical: "2%"
  },
  img: {
    height: "60%",
    width: "100%",
    resizeMode: "cover",
    alignSelf: "center"
  },
  content: {
  },
  name: {
    marginVertical: 10,
    minHeight: 40
  },
  price: {
    marginTop: 10, 
    color: "red"
  },
  sale: {
    position: "absolute",
    top: 0,
    start: -50,
    zIndex: 10,
    height: 50,
    width: "100%",
    backgroundColor: "red",
    transform: [{ rotate: "-45deg" }],
    alignItems: "center",
    justifyContent: "center"
  },
  saleText: {

  },
  votes: {
    flexDirection: "row",
    position: "absolute",
    width: "50%",
    bottom: "10%",
    end: 0,
    backgroundColor: colors.primaryYellow,
    borderTopStartRadius: 20,
    borderBottomStartRadius: 20,
    paddingStart: 10,
    paddingVertical: 5
  },
  textWhite: {
    color: "white"
  }

})
export default (props: ProductType) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={style.container}>
      {props.isSale &&
        <View style={style.sale}>
          <Text style={[style.textWhite, style.saleText]}>{props.saleText}</Text>
        </View>
      }
      <Image source={{ uri: props.img }} style={style.img} />
      <View style={style.content}>
        <Text style={style.name} numberOfLines={2}>{props.name}</Text>
        <Text style={style.price}>$ {props.price}</Text>
      </View>
      {props.rating &&
        <View style={style.votes}>
          <FontAwesomeIcon icon={faStar} color="white" />
          <Text style={style.textWhite}>{props.rating}</Text>
        </View>
      }
    </TouchableOpacity>
  )
}
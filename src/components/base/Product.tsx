import { faStar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { Image, ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import colors from "../../theme/colors"
import { CallBackWithoutParams } from "../../utils/types"

export interface ProductProps {
  img: ImageSourcePropType,
  name: string,
  price: number,
  votes?: number,
  isSale?: boolean,
  saleText?: string,
  onPress?: CallBackWithoutParams
}
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
    resizeMode: "cover",
    alignSelf: "center"
  },
  content: {
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
export default (props: ProductProps) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={style.container}>
      {props.isSale &&
        <View style={style.sale}>
          <Text style={[style.textWhite, style.saleText]}>{props.saleText}</Text>
        </View>
      }
      <Image source={props.img} style={style.img} />
      <View style={style.content}>
        <Text>{props.name}</Text>
        <Text style={{marginTop: 10, color: "red"}}>$ {props.price}</Text>
      </View>
      {props.votes &&
        <View style={style.votes}>
          <FontAwesomeIcon icon={faStar} color="white" />
          <Text style={style.textWhite}>{props.votes}</Text>
        </View>
      }

    </TouchableOpacity>
  )
}
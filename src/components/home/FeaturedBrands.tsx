import { FlatList, Image, ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { CallBackWithoutParams } from "../../utils/types"
import SmallTitle from "../base/SmallTitle"

interface BrandProps {
  img: ImageSourcePropType,
  name: string,
  onOress?: CallBackWithoutParams
}
const style = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: 100
  },
  img: {
    height: 70,
    width: 70,
    resizeMode: "cover"
  },
  name: {
 
  }
})
const Brand = (props: BrandProps) => {
  return (
    <TouchableOpacity style={style.container}>
      <Image source={props.img} style={style.img} />
      <Text style={style.name}>{props.name}</Text>
    </TouchableOpacity>
  )
}
export default (props: {data: Array<BrandProps>}) => {
  const _renderItem = ({item}: {item: BrandProps}) => <Brand {...item} />
  return (
    <View style={{marginVertical: 20}}>
      <SmallTitle title="Featured Brands" />
      <FlatList data={props.data} renderItem={_renderItem } horizontal={true} showsHorizontalScrollIndicator={false} />
    </View>
  )
}
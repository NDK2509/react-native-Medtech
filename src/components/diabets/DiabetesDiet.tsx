import { FlatList, Image, ImageSourcePropType, StyleSheet, Text, View } from "react-native"
import SmallTitle from "../base/SmallTitle"

interface DietElementProps {
  img: ImageSourcePropType,
  title: string
}
const style = StyleSheet.create({
  container: {
    width: 110,
    height: 160,
    borderRadius: 10,
    marginHorizontal: 10,
    overflow: "hidden",
    
  },
  img: {
    height: 100,
    width: "100%",
    resizeMode: "cover"
  },
  title: {
    fontWeight: "600",
    marginVertical: 10
  }
})
const DietElement = (props: DietElementProps) => {
  return (
    <View style={style.container}>
      <Image source={props.img} style={style.img} />
      <Text>{props.title}</Text>
    </View>
  )
}
export default (props: { data: Array<DietElementProps> }) => {
  const _renderItem = ({ item } : {item: DietElementProps}) => <DietElement {...item} />
  return (
    <View style={{ marginVertical: 20 }}>
      <SmallTitle title="Diabetic Diet" />
      <FlatList data={props.data} renderItem={_renderItem} horizontal={true} showsHorizontalScrollIndicator={false} />
    </View>
  )
}
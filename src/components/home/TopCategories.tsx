import { Text } from "react-native"
import { StyleSheet, TouchableOpacity, Image, View, FlatList } from "react-native"
import { CallBackWithoutParams } from "../../utils/types"
import SmallTitle from "../base/SmallTitle"


const style = StyleSheet.create({
  cateEle: {
    width: 100,
    height: 120,
    alignItems: "center"
  },
  icon: {
    width: 80,
    height: 80,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center"
  },
  container: {
    marginTop: 30,
    marginBottom: 10,
  }
})

interface CategoryElementProps {
  icon: any,
  color: string,
  title: string,
  onPress?: CallBackWithoutParams
}

const CategoryElement = (props: CategoryElementProps) => {
  return (
    <TouchableOpacity style={style.cateEle} onPress={props.onPress}>
      <View style={[{ backgroundColor: props.color }, style.icon]}>
        <props.icon height={50} width={50} />
      </View>
      <Text style={{ textAlign: "center" }}>{props.title}</Text>
    </TouchableOpacity>
  )
}

export default (props: { data: Array<{ icon: any, title: string, onPress?: CallBackWithoutParams }>, colors: Array<string> }) => {
  return (
    <View style={style.container}>
      <SmallTitle title="Top Categories" />
      <FlatList data={props.data} renderItem={({ item, index }) => <CategoryElement {...item} color={props.colors[index]} />} horizontal={true} showsHorizontalScrollIndicator={false} />
    </View>
  )
}

const colors = [
  "#FF70A7",
  "#15BD92",
  "#FF793A",
  "#3E7DFF",
  "#090F47"
]
export { colors }
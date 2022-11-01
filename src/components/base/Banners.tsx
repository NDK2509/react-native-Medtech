import { FlatList, Image, ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { CallBackWithoutParams } from "../../utils/types"

interface BannerProps {
  img: ImageSourcePropType,
  title: string,
  description?: string,
  onPress?: CallBackWithoutParams
}
const bannerStyle = StyleSheet.create({
  container: {
    borderRadius: 10,
    height: 140,
    width: 350,
    overflow: "hidden",
    position:  "relative"
  }, 
  img: {
    height: "100%",
    width: "100%"
  },
  content: {
    position: "absolute",
    top: 31,
    start: 24
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1987FB",
    maxWidth: 150
  },
  description: {
    maxWidth: 150
  }
})
const Banner = (props: BannerProps) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={bannerStyle.container}>
      <Image source={props.img} style={bannerStyle.img} />
      <View style={bannerStyle.content}>
          <Text style={bannerStyle.title} numberOfLines={2}>{props.title}</Text>
          {props.description && <Text style={bannerStyle.description} numberOfLines={2}>{props.description}</Text>}
      </View>
    </TouchableOpacity>
  )
}

export default (props: { data: Array<BannerProps> }) => {
  return (
    <FlatList data={props.data} renderItem={({ item }) => <Banner img={item.img} title={item.title} description={item.description} />} />
  )
}
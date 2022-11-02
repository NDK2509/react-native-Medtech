import { FlatList, View, Text, TouchableOpacity } from "react-native"
import colors from "../../theme/colors"
import Product, { ProductProps } from "../base/Product"
import SmallTitle from "../base/SmallTitle"

export default (props: { data: Array<ProductProps> }) => {
  const _renderItem = ({ item } : {item: ProductProps}) => <Product {...item} />
  return (
    <View style={{ marginVertical: 20 }}>
      <View style={{flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
        <SmallTitle title="Deal of the day" />
        <TouchableOpacity>
          <Text style={{ color: colors.primaryBlue, marginEnd: 20 }}>See more</Text>
        </TouchableOpacity>
      </View>
      <FlatList data={props.data} renderItem={_renderItem} horizontal={true} showsHorizontalScrollIndicator={false} />
    </View>
  )
}
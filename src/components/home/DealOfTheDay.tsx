import { FlatList, View, Text, TouchableOpacity } from "react-native"
import { ProductType } from "../../api/ProductsAPI"
import colors from "../../theme/colors"
import NoDataText from "../base/NoDataText"
import Product from "../base/Product"
import SmallTitle from "../base/SmallTitle"

export default (props: { data: Array<ProductType> }) => {
  const _renderItem = ({ item } : {item: ProductType}) => <Product {...item} />
  return (
    props.data.length ? (
      <View style={{ marginVertical: 20 }}>
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
          <SmallTitle title="Deal of the day" />
          <TouchableOpacity>
            <Text style={{ color: colors.primaryBlue, marginEnd: 20 }}>See more</Text>
          </TouchableOpacity>
        </View>
        <FlatList data={props.data} renderItem={_renderItem} horizontal={true} showsHorizontalScrollIndicator={false} keyExtractor={ (item) => item.id } />
      </View>
    )
    : (
        <NoDataText title="There is no data of product!"/>
    )
    
  )
}
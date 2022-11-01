import { FlatList, View } from "react-native";
import Product, { ProductProps } from "../base/Product";
import SmallTitle from "../base/SmallTitle";

export default (props: { data: Array<ProductProps> }) => {
  return (
    <View style={{ marginVertical: 20 }}>
      <SmallTitle title="All Products" />
      <FlatList data={props.data} renderItem={({ item }) => <Product {...item} />} numColumns={2} />
    </View>
  )
}
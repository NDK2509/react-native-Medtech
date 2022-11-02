import { FlatList, View } from "react-native";
import Product, { ProductProps } from "../base/Product";
import SmallTitle from "../base/SmallTitle";

export default (props: { data: Array<ProductProps> }) => {
  const _renderItem = ({ item } : {item: ProductProps}) => <Product {...item} />;
  return (
    <View style={{ marginVertical: 20 }}>
      <SmallTitle title="All Products" />
      <FlatList data={props.data} renderItem={_renderItem} numColumns={2} />
    </View>
  )
}
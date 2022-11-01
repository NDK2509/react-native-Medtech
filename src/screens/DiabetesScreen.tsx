import { ScrollView, Text, View } from "react-native"
import Banners from "../components/base/Banners"
import HeaderBar from "../components/base/HeaderBar"
import AllProducts from "../components/diabets/AllProducts"
import DiabetesDiet from "../components/diabets/DiabetesDiet"

export default () => {
  return (
    <ScrollView horizontal={false} showsVerticalScrollIndicator={false}>
      <HeaderBar title="Diabetes" />
      <View style={{ alignItems: "center" }}>
        <Banners data={[
          { img: require("../assets/img/banner1.png"), title: "Save extra on every order", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
        ]} />
      </View>
      <DiabetesDiet
        data={[
          { img: require("../assets/img/example-diet/image133.png"), title: "Sugar Substitute" },
          { img: require("../assets/img/example-diet/image133.png"), title: "Sugar Substitute" },
          { img: require("../assets/img/example-diet/image133.png"), title: "Sugar Substitute" },
          { img: require("../assets/img/example-diet/image133.png"), title: "Sugar Substitute" },
          { img: require("../assets/img/example-diet/image133.png"), title: "Sugar Substitute" },
          { img: require("../assets/img/example-diet/image133.png"), title: "Sugar Substitute" },
        ]}
      />
      <AllProducts data={[
        { img: require("../assets/img/example-products/image137.png"), name: "Omron HEM-8712 BP Monitor", price: 150, votes: 4.5, isSale: true, saleText: "Sale!" },
        { img: require("../assets/img/example-products/image138.png"), name: "Omron HEM-8712 BP Monitor", price: 150, votes: 4.5 },
        { img: require("../assets/img/example-products/image21.png"), name: "Omron HEM-8712 BP Monitor", price: 150, votes: 4.5, isSale: true, saleText: "Sale!" },
        { img: require("../assets/img/example-products/image21.png"), name: "Omron HEM-8712 BP Monitor", price: 150, votes: 4.5, isSale: true, saleText: "Sale!" },
        { img: require("../assets/img/example-products/image21.png"), name: "Omron HEM-8712 BP Monitor", price: 150, votes: 4.5, isSale: true, saleText: "Sale!" },
        { img: require("../assets/img/example-products/image21.png"), name: "Omron HEM-8712 BP Monitor", price: 150, votes: 4.5 },
        { img: require("../assets/img/example-products/image21.png"), name: "Omron HEM-8712 BP Monitor", price: 150, votes: 4.5 },
        { img: require("../assets/img/example-products/image21.png"), name: "Omron HEM-8712 BP Monitor", price: 150, votes: 4.5, isSale: true, saleText: "Sale!" },
        { img: require("../assets/img/example-products/image21.png"), name: "Omron HEM-8712 BP Monitor", price: 150, votes: 4.5 },
        { img: require("../assets/img/example-products/image21.png"), name: "Omron HEM-8712 BP Monitor", price: 150, votes: 4.5, isSale: true, saleText: "Sale!" },
        { img: require("../assets/img/example-products/image21.png"), name: "Omron HEM-8712 BP Monitor", price: 150, votes: 4.5, isSale: true, saleText: "Sale!" },
      ]} />
    </ScrollView>
  )
}
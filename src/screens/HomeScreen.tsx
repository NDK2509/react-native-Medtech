import { ScrollView, SafeAreaView, View } from "react-native"
import TopCategories, { colors } from "../components/home/TopCategories"
import TopOfHome from "../components/home/TopOfHome"
import Banners from "../components/base/Banners";
import DealOfTheDay from "../components/home/DealOfTheDay";
import FeaturedBrands from "../components/home/FeaturedBrands";
//@ts-ignore
import Dental from "../assets/icons/dental.svg";
//@ts-ignore
import Wellness from "../assets/icons/wellness.svg";
//@ts-ignore
import Homeo from "../assets/icons/homeo.svg"
//@ts-ignore
import EyeCare from "../assets/icons/eyecare.svg"
//@ts-ignore
import SkinHair from "../assets/icons/skin&hair.svg"
import { useNavigation } from "@react-navigation/native";

export default () => {
  const navigation = useNavigation()
  return (
    <SafeAreaView>
      <ScrollView horizontal={false} showsVerticalScrollIndicator={false}>
        <TopOfHome />
        <TopCategories
          data={
            [
              { icon: Dental, title: "Dental", onPress: () => navigation.navigate("Category" as never)},
              { icon: Wellness, title: "Wellness" },
              { icon: Homeo, title: "Homeo" },
              { icon: EyeCare, title: "Eye Care" },
              { icon: SkinHair, title: "Skin and Hair" }
            ]
          }
          colors={colors}
        />
        <View style={{ alignItems: "center" }}>
          <Banners data={[
            { img: require("../assets/img/banner1.png"), title: "Save extra on every order", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
          ]} />
        </View>
        <DealOfTheDay data={[
          { img: require("../assets/img/example-products/image137.png"), name: "Omron HEM-8712 BP Monitor", price: 150, votes: 4.5, isSale: true, saleText: "Sale!" },
          { img: require("../assets/img/example-products/image138.png"), name: "Omron HEM-8712 BP Monitor", price: 150, votes: 4.5 },
          { img: require("../assets/img/example-products/image21.png"), name: "Omron HEM-8712 BP Monitor", price: 150, votes: 4.5, isSale: true, saleText: "Sale!" },
        ]} />
        <FeaturedBrands data={[
          { img: require("../assets/img/example-brands/image15.png"), name: "Himalaya Wellness" },
          { img: require("../assets/img/example-brands/image15.png"), name: "Himalaya Wellness" },
          { img: require("../assets/img/example-brands/image15.png"), name: "Himalaya Wellness" },
          { img: require("../assets/img/example-brands/image15.png"), name: "Himalaya Wellness" },
          { img: require("../assets/img/example-brands/image15.png"), name: "Himalaya Wellness" },
        ]} />
      </ScrollView>
    </SafeAreaView>
  )
}

import { SafeAreaView, FlatList, View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import ProductCards from "../components/ProductCards";
import { Ionicons } from "@expo/vector-icons";
import LottieView from "lottie-react-native";

const productList = [
  { id: "1A", title: "Range Vintage", price: "$50,000", path: require("../../assets/images/3.jpg") },
  { id: "1B", title: "Range Vintage", price: "$50,000", path: require("../../assets/images/4.jpg") },
  { id: "1C", title: "Range Vintage", price: "$50,000", path: require("../../assets/images/5.jpg") },
  { id: "1D", title: "Range Vintage", price: "$50,000", path: require("../../assets/images/6.jpg") },
  { id: "1E", title: "Range Vintage", price: "$50,000", path: require("../../assets/images/4.jpg") },
];

const ProductsScreen = () => {
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)
    return ()=>clearTimeout(timer);
  }, []);

  if(loading){
    return (
      <View style={{ justifyContent: "center", alignItems: "center", flex: 1, }}>
        <LottieView 
          source={require("../../assets/jsons/animation - 1733500452986.json")}
          autoPlay
          style={{ width: 300, height: 300 }}
          loop
        />
      </View>
    )
  }

  const renderItem = ({ item }) => {
    return (
      <ProductCards item={item} />
    )
  };

  return (
    <SafeAreaView>
      <FlatList
        data={productList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </SafeAreaView>
  );
};

export default ProductsScreen;

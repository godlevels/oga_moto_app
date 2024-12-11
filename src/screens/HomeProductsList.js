import { View, Text, FlatList } from 'react-native';
import React from 'react';
import fetchHomeProduct from '../hooks/fetchHomeProducts';
import LottieView from "lottie-react-native";
import ProductCards from '../components/ProductCards';


export default function HomeProductsList() {
    const { isLoading, error, data } = fetchHomeProduct();

    return (

        <View>
            {
                isLoading ? (

                    <View style={{ justifyContent: "center", alignItems: "center", }}>  
                        <LottieView
                            source={require("../../assets/jsons/animation.json")}
                            autoPlay
                            style={{ width: 300, height: 300 }}
                            loop
                        />
                    </View>
                ) : error ? (
                    <Text>We have an error</Text>
                ) : (
                    <FlatList 
                        data={data}
                        keyExtractor={(item)=>item.id} 
                        renderItem={({item})=>(
                            <ProductCards item={item}/>
                        )}
                        numColumns={2}
                    />
                )
            }
        </View>
    )
}

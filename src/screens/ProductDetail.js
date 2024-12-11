import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useContext, useState } from 'react'
import { useRoute } from '@react-navigation/native'
import styles from '../styles/product.style'
import { RatingInput } from 'react-native-stock-star-rating'
import { theme } from '../constants/theme'
import { AntDesign, Fontisto, Ionicons, MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons'
import { decrement, handlePress, increment } from '../utils/product_helpers'
import { LoginContext } from '../contexts/UserLoginContext'
import { FavContext } from '../contexts/RefetchFavContext'
import { CartContext } from '../contexts/UserCartContext'

export default function ProductDetail({navigation}) {
    const [rating, setRating] = useState(0)
    const [count, setCount] = useState(1)
    const {userLogin, setUserLogin} = useContext(LoginContext)
    const {refetchFav, setRefetchFav} = useContext(FavContext)
    const {userCart, setUserCart} = useContext(CartContext)
    const route = useRoute()

    const item = route.params.item
    console.log("product id is ", item.id)
    console.log("Fav id ", refetchFav)
    return (
        <View style={styles.container}>
            <Image
                style={[styles.image, { width: "90%", alignSelf: "center" }]}
                source={item.path}
            />

            <View style={styles.details}>
                <View style={styles.titleRow}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.price}>{item.price}</Text>
                </View>


                <View style={styles.ratingRow}>
                    <View style={styles.rating}>
                        <RatingInput
                            rating={rating}
                            setRating={setRating}
                            size={25}
                            maxStars={5}
                            color={theme.colors.primary}
                        />
                        <Text style={{ marginTop:theme.sizes.medium-3, marginHorizontal: theme.sizes.small }}>[3.9]</Text>
                    </View>


                    <View style={styles.rating}>
                        <TouchableOpacity onPress={() => increment(setCount, count)}>
                            <SimpleLineIcons name='plus' size={20} />
                        </TouchableOpacity>
                        <Text style={styles.textSpace}>{count}</Text>
                        <TouchableOpacity onPress={() => decrement(setCount, count)}>
                            <SimpleLineIcons name='minus' size={20} />
                        </TouchableOpacity>
                    </View>
                </View>


                <View style={styles.descriptionWrapper}>
                    <Text style={styles.descriptionTitle}>Description</Text>
                    <Text style={styles.descriptionText}>The 1956 Porsche 356 Speedster was an instant hit, especially in Southern California. Production peaked in 1957 and then declined, with the "Convertible D" model replacing it in late 1958.</Text>
                </View>

                <View style={{ marginHorizontal: theme.sizes.medium, marginTop: theme.sizes.medium }}>
                    <View style={styles.location}>
                        <View style={{ flexDirection: "row" }}>
                            <Ionicons name='location-outline' size={18} />
                            <View style={{ marginLeft: 10 }}>
                                <Text>Lagos, NG</Text>
                            </View>
                        </View>

                        <View style={{ flexDirection: "row", marginRight: 5 }}>
                            <MaterialCommunityIcons name='truck-delivery-outline' size={18} />
                            <View style={{ marginLeft: 10 }}>
                                <Text>Free Delivery</Text>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={styles.cartRow}>
                    <TouchableOpacity onPress={() =>handlePress(userLogin, navigation, item, setRefetchFav)} style={styles.favButton}>
                        <AntDesign name='heart' size={20} color={theme.colors.lightWhite} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() =>console.log("purchase")} style={styles.buyButton}>
                        <Text style={styles.cartTitle}>Buy Now</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=> handleCart(navigation, item, count, userLogin, setUserCart)} style={styles.addCart}>
                        <Fontisto name='shopping-bag' size={22} color={theme.colors.lightWhite} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
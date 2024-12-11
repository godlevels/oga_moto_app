import React, { useRef, useEffect } from "react";
import { Dimensions, FlatList, Image, View, StyleSheet } from "react-native";
import { theme } from "../constants/theme";

const { width } = Dimensions.get("window");

const images = [
    { id: "1A", path: require("../../assets/images/2.jpg") },
    { id: "1B", path: require("../../assets/images/3.jpg") },
];

const HomeCarousel = () => {
    const flatListRef = useRef(null);
    const scrollInterval = useRef(null);
    const intervalTime = 3000; // Time in milliseconds between slides
    const imageCount = images.length;

    useEffect(() => {
        let currentIndex = 0;

        scrollInterval.current = setInterval(() => {
            if (flatListRef.current) {
                currentIndex = (currentIndex + 1) % imageCount;
                flatListRef.current.scrollToIndex({
                    index: currentIndex,
                    animated: true,
                });
            }
        }, intervalTime);

        return () => {
            clearInterval(scrollInterval.current);
        };
    }, []);

    return (
        <View style={styles.container}>
            <FlatList
                ref={flatListRef}
                data={images}
                renderItem={({ item }) => (
                    <Image
                        style={styles.image}
                        source={item.path}
                    />
                )}
                keyExtractor={(item) => item.id}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal: theme.sizes.medium,
        marginTop: theme.sizes.xxlarge,
    },
    image: {
        resizeMode: "cover",
        width: width - theme.sizes.medium * 2,
        height: 200,
        borderRadius: theme.sizes.medium,
    },
});

export default HomeCarousel;

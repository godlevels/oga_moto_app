import { theme } from "../constants/theme";
import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    imageContainer: {
        flex: 1,
        // alignItems: "center",
        height: 250,
        overflow: "hidden",
        margin: 10,
        borderRadius: theme.sizes.small,
        backgroundColor: theme.colors.secondary
    },
    image: {
        width: "100%",
        height: 188,
        borderRadius: theme.sizes.small
    },
    details: {
        paddingHorizontal: theme.sizes.medium,
        paddingVertical: theme.sizes.small,
    },
    price: {
        marginBottom: 10,
    },
    title: {
        fontSize: theme.sizes.medium+4,
        fontFamily: 'Roboto_700Bold'
    }
})


export default styles;
import { Text, View, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";
import styles from "../styles/headings.style";
import { useNavigation } from "@react-navigation/native";

const HomeHead = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>New Arrivals</Text>
                <TouchableOpacity onPress={() => navigation.navigate("ProductsScreen")}>
                    <Entypo name="grid" size={24} />
                </TouchableOpacity>
            </View>
        </View> 
    );
};

export default HomeHead;

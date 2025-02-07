import { Feather, Ionicons } from "@expo/vector-icons";
import { Text, View, TouchableOpacity, TextInput } from "react-native";
import { theme } from "../constants/theme";
import styles from "../styles/welcome.styles";

const WelcomeView = () => {
    return (
        <View style={{marginTop: -20}}>
            <View>
                <Text style={styles.WelcomeTxt(theme.colors.primary, 50)}>Vintage Cars Are Luxurious</Text>
            </View>

            <View style={styles.searchContainer}>
                <TouchableOpacity onPress={() => console.log("Search tapped")}>
                    <Feather name="search" size={24} style={styles.searchIcon} />
                </TouchableOpacity>
                <View style={styles.searchWrapper}>
                    <TextInput
                        placeholder="What are you looking for?"
                        style={styles.searchInput}
                    />
                </View>
                <View style={styles.searchBtn}>
                    <Ionicons name="camera-outline" size={30} color={theme.colors.offWhite} />
                </View>
            </View>
        </View>
    );
};

export default WelcomeView;

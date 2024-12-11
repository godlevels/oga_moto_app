import { SafeAreaView, FlatList } from "react-native"
import WelcomeView from "../components/WelcomeView";
import HomeCarousel from "../components/HomeCarousel";
import HomeHead from "../components/HomeHead";
import fetchHomeProduct from '../hooks/fetchHomeProducts';
import ProductCards from '../components/ProductCards';
import LoadError from "../components/LoadError";


const HomeScreen = () => { 

    const { isLoading, error, data } = fetchHomeProduct();

    return (
        <SafeAreaView style={{ flex: 1 }}>
            {/* <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                
            </ScrollView> */}
            <LoadError isLoading={isLoading} error={error} />
            {
                !isLoading && !error && (
                    <FlatList
                        data={data}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                            <ProductCards item={item} />
                        )}
                        numColumns={2}
                        ListHeaderComponent={() => (
                            <>
                                <HomeCarousel />
                                <WelcomeView />
                                <HomeHead />
                                {/* <HomeProductsList /> */}
                            </>
                        )}
                    />
                )
            }
        </SafeAreaView>
    )
}

export default HomeScreen;
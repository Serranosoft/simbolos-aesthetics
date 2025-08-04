import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Item from "../src/components/item";
import { useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FlashList } from "@shopify/flash-list";
import Header from "../src/components/header";
import { Stack } from "expo-router";
import { ui } from "../src/utils/styles";
import { BannerAd, BannerAdSize } from "react-native-google-mobile-ads";
import { bannerId } from "../src/utils/constants";
import { Context } from "../src/Context";

export default function Favorites() {

    const [activeId, setActiveId] = useState(null);
    const [favorites, setFavorites] = useState([]);
    const [text, setText] = useState(null);
    const { adsLoaded } = useContext(Context);

    function handleActive(id) {
        setActiveId(id);
    }

    useEffect(() => {
        get();
    }, [])

    async function get() {
        let test = await AsyncStorage.getItem("favorites") || [];
        if (test.length > 0) {
            test = JSON.parse(test);
        }
        setFavorites(test);
    }

    async function drop() {
        favorites.splice(favorites.indexOf(text), 1);
        await AsyncStorage.setItem("favorites", JSON.stringify([...favorites]));
        setText(null);
        setActiveId(null);
        setFavorites([...favorites]);
    }

    return (
        <>
            <Stack.Screen options={{ header: () => <Header title={"Mis favoritos"} showMenu={false} /> }} />
            <View style={styles.container}>
                { adsLoaded && <BannerAd unitId={bannerId} size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER} requestOptions={{}} /> }
                <View style={{ flex: 1, width: "100%" }}>
                    <FlashList
                        data={favorites}
                        extraData={activeId}
                        keyExtractor={(_, index) => index}
                        estimatedItemSize={195}
                        contentContainerStyle={{ padding: 12 }}
                        numColumns={2}
                        renderItem={({ item, index }) => <Item id={index} text={item} activeId={activeId} handleActive={handleActive} setText={setText} />}
                    />

                    {
                        text &&
                        <TouchableOpacity style={styles.btn} onPress={() => drop()}>
                            <Text style={[ui.text, { color: "#000", textAlign: "center" }]}>Borrar {text} de favoritos</Text>
                        </TouchableOpacity>
                    }

                </View>
            </View>

        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 8,
        alignItems: "center",
        backgroundColor: "#fff",
        position: "relative",
        paddingVertical: 24,
        paddingHorizontal: 16,
    },
    btn: {
        width: "100%",
        maxWidth: 275,
        paddingHorizontal: 12,
        paddingVertical: 6,
        backgroundColor: "#F7D7E2",
        borderWidth: 3,
        borderColor: "#F9BAC6",
        borderRadius: 100,
        alignSelf: "center",
    },
})
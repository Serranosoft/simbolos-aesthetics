import { Image, StyleSheet, View } from "react-native";
import { FlashList } from "@shopify/flash-list";
import { useState } from "react";
import Item from "../../src/components/item";
import { CADENAS } from "../../src/utils/data";
import { BannerAd, BannerAdSize } from "react-native-google-mobile-ads";
import { bannerId } from "../../src/utils/constants";

export default function CadenasSeparadores() {

    const [activeId, setActiveId] = useState(null);

    function handleActive(id) {
        setActiveId(id);
    }

    return (
        <View style={{ flex: 1 }}>
            <BannerAd unitId={bannerId} size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER} requestOptions={{}} />
            <View style={{ flex: 1, marginTop: 24 }}>
                <Image source={require("../../assets/teddy.jpg")} style={styles.img} />
                <FlashList
                    data={CADENAS.separadores}
                    extraData={activeId}
                    keyExtractor={(_, index) => index}
                    estimatedItemSize={72}
                    contentContainerStyle={{ padding: 12 }}
                    numColumns={1}
                    renderItem={({ item, index }) => <Item id={index} text={item} activeId={activeId} handleActive={handleActive} />}
                />

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    img: {
        position: "absolute",
        width: "85%",
        resizeMode: "contain",
        zIndex: -1,
        top: "-13%",
        right: "23%",
        transform: [{ rotate: "-20deg" }],
        opacity: 0.4
    }
})
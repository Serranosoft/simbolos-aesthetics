import { Image, StyleSheet, View } from "react-native";
import { AESTHETIC } from "../../src/utils/data";
import { FlashList } from "@shopify/flash-list";
import { useState } from "react";
import Item from "../../src/components/item";
import { bannerId } from "../../src/utils/constants";
import { BannerAd, BannerAdSize } from "react-native-google-mobile-ads";

export default function AestheticMejor() {

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
                    data={AESTHETIC.mejores}
                    extraData={activeId}
                    keyExtractor={(_, index) => index}
                    estimatedItemSize={72}
                    contentContainerStyle={{ padding: 12 }}
                    numColumns={2}
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
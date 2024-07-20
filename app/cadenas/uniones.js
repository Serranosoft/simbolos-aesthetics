import { Image, StyleSheet, View } from "react-native";
import { CADENAS } from "../../src/utils/data";
import { FlashList } from "@shopify/flash-list";
import { useState } from "react";
import Item from "../../src/components/item";

export default function CadenasUniones() {

    const [activeId, setActiveId] = useState(null);

    function handleActive(id) {
        setActiveId(id);
    }

    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1, marginTop: 24 }}>
                <Image source={require("../../assets/ribbon.jpg")} style={styles.img} />
                <FlashList
                    data={CADENAS.uniones}
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
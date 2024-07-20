import { Image, StyleSheet, View } from "react-native";
import { COLORES } from "../../src/utils/data";
import { FlashList } from "@shopify/flash-list";
import { useState } from "react";
import Item from "../../src/components/item";

export default function ColoresRosa() {

    const [activeId, setActiveId] = useState(null);

    function handleActive(id) {
        setActiveId(id);
    }

    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1, marginTop: 24 }}>
                <Image source={require("../../assets/teddy.jpg")} style={styles.img} />
                <FlashList
                    data={COLORES.rosa}
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
        width: "100%",
        resizeMode: "contain",
        zIndex: -1,
        top: "28%",
        left: "23%",
        transform: [{ rotate: "-15deg" }],
        opacity: 0.4
    }
})
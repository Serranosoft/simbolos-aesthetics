import { Image, StyleSheet, View } from "react-native";
import { EMOJIS } from "../../src/utils/data";
import { FlashList } from "@shopify/flash-list";
import { useState } from "react";
import Item from "../../src/components/item";
import { layout, margin } from "../../src/utils/styles";

export default function EmojisNaranjas() {

    const [activeId, setActiveId] = useState(null);

    function handleActive(id) {
        setActiveId(id);
    }

    return (
        <View style={layout.flex}>
            <View style={[layout.flex, margin.bigTop]}>
                <Image source={require("../../assets/flowers.jpg")} style={styles.img} />
                <FlashList
                    data={EMOJIS.naranjas}
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
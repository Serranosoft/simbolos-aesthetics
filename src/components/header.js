import { Link, useRouter } from "expo-router";
import { Image, Pressable, StyleSheet, Text, TouchableOpacity, View, PanResponder } from "react-native";
import { ui } from "../utils/styles";
import Ionicons from '@expo/vector-icons/Ionicons';
import { useContext, useEffect, useRef } from "react";
import { DataContext } from "../utils/DataContext";

export default function Header({ title }) {

    const router = useRouter();
    const { openFavorites, setOpenFavorites } = useContext(DataContext);


    return (
        <View style={styles.header}>
            <View style={styles.title}>
                <Pressable onPress={() => router.back()}>
                    <Image style={styles.img} source={require("../../assets/back.png")} />
                </Pressable>
                {title && <Text style={[ui.h4, { color: "#000" }]}>{title}</Text>}
            </View>
            {/* { */}
                <View>
                    <Ionicons name="ellipsis-vertical" size={28} color="#000" onPress={() => setOpenFavorites(!openFavorites)} />
                    <View style={[styles.info, { display: openFavorites ? "flex" : "none" }]}>
                        <Link href="/favorites" asChild>
                            <TouchableOpacity>
                                <Text style={[ui.text, { textAlign: "center", fontFamily: "Bold" }]}>Mis Favoritos 🏹</Text>
                            </TouchableOpacity>
                        </Link>
                    </View>
                </View>

            {/* } */}
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#F9BAC6",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 8,
        height: 50,
        paddingHorizontal: 12
    },

    title: {
        flexDirection: "row",
        alignItems: "center",
        gap: 16
    },

    info: {
        position: "absolute",
        top: 32,
        right: 10,
        backgroundColor: "#fff",
        paddingVertical: 5,
        width: 170,
        borderWidth: 1,
        borderColor: "#e1e1e1",
        borderRadius: 8
    },

    img: {
        width: 30,
        height: 30,
    }
})
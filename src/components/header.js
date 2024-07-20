import { useRouter } from "expo-router";
import { StyleSheet, Text, View, TouchableWithoutFeedback, Pressable } from "react-native";
import { useState } from "react";
import { Menu, MenuItem } from "react-native-material-menu";
import { MaterialIcons } from '@expo/vector-icons';
import { components, ui } from "../utils/styles";

export default function Header({ title, showMenu = true }) {

    const router = useRouter();
    const [open, setOpen] = useState(false);

    return (
        <View style={components.header}>
            <View style={styles.title}>
                <Pressable onPress={() => router.back()}>
                    <MaterialIcons name="arrow-back" size={24} color="black" />
                </Pressable>
                {title && <Text style={[ui.h4, { color: "#000" }]}>{title}</Text>}
            </View>
            {
                showMenu &&
                <Menu
                    visible={open}
                    onRequestClose={() => setOpen(false)}
                    anchor={(
                        <TouchableWithoutFeedback onPress={() => setOpen(true)}>
                            <MaterialIcons name="more-vert" size={24} color="black" />
                        </TouchableWithoutFeedback>
                    )}>
                    <MenuItem onPress={() => router.push("/favorites")}>
                        <View style={components.row}>
                            <MaterialIcons name="favorite-outline" size={24} color="black" />
                            <Text>Mis Favoritos </Text>
                        </View>
                    </MenuItem>
                </Menu>
            }
        </View>

    )
}


const styles = StyleSheet.create({
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
    }
})
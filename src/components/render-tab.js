import { Text } from "react-native";
import { TabBar } from "react-native-tab-view";

export const renderTabBar = props => (
    <TabBar
        {...props}
        indicatorStyle={{ backgroundColor: "#000" }}
        style={{ backgroundColor: "#F9BAC6" }}
        renderLabel={({ route, focused, color }) => (
            <Text style={{ color: "#000", fontFamily: "Semibold", fontSize: 16 }}>
                {route.title}
            </Text>
        )}
    />
);
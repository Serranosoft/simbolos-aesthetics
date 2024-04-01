import { MaterialTopTabView } from "@react-navigation/material-top-tabs";
import { useWindowDimensions } from "react-native";
import { renderTabBar } from "./render-tab";
import { TabView, SceneMap } from 'react-native-tab-view';

export default function TabViewComponent({renderScene, setIndex, index, routes}) {

    const layout = useWindowDimensions();

    return (
        <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
            style={{ backgroundColor: "#fff" }}
            renderTabBar={renderTabBar}
        />
    )
}
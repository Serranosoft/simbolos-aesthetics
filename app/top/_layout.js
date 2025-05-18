import { useContext, useEffect, useState } from 'react';
import { Stack } from 'expo-router';
import Header from '../../src/components/header';
import TabViewComponent from '../../src/components/tab-view';
import TopCoquette from './coquette';
import TopAmor from './amor';
import { bannerId } from '../../src/utils/constants';
import { BannerAd, BannerAdSize } from 'react-native-google-mobile-ads';
import { Context } from '../../src/Context';

export default function Top() {

    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'first', title: 'Coquette' },
        { key: 'second', title: 'Amor' },
    ]);

    const { setAdTrigger } = useContext(Context);

    useEffect(() => {
        setAdTrigger((adTrigger) => adTrigger + 1);
    }, [index])

    const renderScene = ({ route }) => {
        switch (route.key) {
            case "first":
                return <TopCoquette />;
            case "second":
                return <TopAmor />;
        }
    };

    return (
        <>
            <TabViewComponent renderScene={renderScene} setIndex={setIndex} index={index} routes={routes} />
            <Stack.Screen options={{ header: () => <Header title={"TOP"} /> }} />
            <BannerAd unitId={bannerId} size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER} requestOptions={{}} />
        </>
    );
}
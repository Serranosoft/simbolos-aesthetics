import { useContext, useEffect, useState } from 'react';
import { Stack } from 'expo-router';
import Header from '../../src/components/header';
import TabViewComponent from '../../src/components/tab-view';
import SimbolosCorazones from './corazon';
import SimbolosFlores from './flor';
import SimbolosCirculosYPuntos from './circulos-y-puntos';
import SimbolosTop from './top';
import { bannerId } from '../../src/utils/constants';
import { BannerAd, BannerAdSize } from 'react-native-google-mobile-ads';
import { Context } from '../../src/Context';

export default function Aesthetic() {

    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'first', title: 'Corazón' },
        { key: 'second', title: 'Flores' },
        { key: 'third', title: 'Circulos' },
        { key: 'fourth', title: 'Top' },
    ]);

    const { setAdTrigger, adsLoaded } = useContext(Context);

    useEffect(() => {
        setAdTrigger((adTrigger) => adTrigger + 1);
    }, [index])

    const renderScene = ({ route }) => {
        switch (route.key) {
            case "first":
                return <SimbolosCorazones />;
            case "second":
                return <SimbolosFlores />;
            case "third":
                return <SimbolosCirculosYPuntos />;
            case "fourth":
                return <SimbolosTop />;
        }
    };

    return (
        <>
            <TabViewComponent renderScene={renderScene} setIndex={setIndex} index={index} routes={routes} />
            <Stack.Screen options={{ header: () => <Header title={"Símbolos"} /> }} />
            { adsLoaded && <BannerAd unitId={bannerId} size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER} requestOptions={{}} /> }
        </>
    );
}
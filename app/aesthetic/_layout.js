import { useState } from 'react';
import { Stack } from 'expo-router';
import Header from '../../src/components/header';
import TabViewComponent from '../../src/components/tab-view';
import AestheticAnimales from './animal';
import AestheticMejor from './mejor';
import AestheticMano from './mano';

export default function Aesthetic() {

    const [index, setIndex] = useState(0);
    const [routes] = useState([ { key: 'first', title: 'Mejores' }, { key: 'second', title: 'Animales' }, { key: 'third', title: 'Manos' } ]);

    const renderScene = ({ route }) => {
        switch (route.key) {
            case "first":
                return <AestheticMejor />;
            case "second":
                return <AestheticAnimales />;
            case "third":
                return <AestheticMano />;
        }
    };

    return (
        <>
            <Stack.Screen options={{ header: () => <Header title={"Aesthetic"} /> }} />
            <TabViewComponent renderScene={renderScene} setIndex={setIndex} index={index} routes={routes} />
        </>
    );
}
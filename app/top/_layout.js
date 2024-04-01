import { useState } from 'react';
import { Stack } from 'expo-router';
import Header from '../../src/components/header';
import TabViewComponent from '../../src/components/tab-view';
import TopCoquette from './coquette';
import TopAmor from './amor';

export default function Top() {

    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'first', title: 'Coquette' },
        { key: 'second', title: 'Amor' },
    ]);

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
        </>
    );
}
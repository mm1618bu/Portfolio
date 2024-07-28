import { View, Text } from 'react-native';
import React from 'react';
import { Tabs, TabScreenProps } from 'react-native-tabs';

const HomeScreen = () => (
  <View>
    <Text>Home Screen</Text>
  </View>
);

const TabsLayout = () => {
  return (
    <>
      <Tabs>
        <Tabs.Screen name="home" component={HomeScreen as React.ComponentType<TabScreenProps>}/>
        {/* Add more Tabs.Screen components as needed */}
      </Tabs>
    </>
  );
};

export default TabsLayout;
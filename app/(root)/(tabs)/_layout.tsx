import { Image, ImageSourcePropType, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { icons } from '@/constants';

const TabIcon = ({
    source,
    focused,
}: {
    source: ImageSourcePropType;
    focused: boolean;
}) => (
    <View style={focused ? styles.tabContainerFocused : styles.tabContainer}>
        <View style={focused ? styles.iconContainerFocused : styles.iconContainer}>
            <Image
                source={source}
                tintColor="white"
                resizeMode="contain"
                style={styles.icon}
            />
        </View>
    </View>
);

export default function Layout() {
    return (
        <Tabs
            initialRouteName='home'
            screenOptions={{
                tabBarActiveTintColor: "white",
                tabBarInactiveTintColor: "white",
                tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor: "#333333",
                    borderRadius: 50,
                    paddingBottom: 0, // ios only
                    marginBottom: 20,
                    height: 78,
                    position: "absolute",
                    bottom: 20,
                    left: 20,
                    right: 20,
                    marginHorizontal: 20,
                },
                tabBarItemStyle: {
                    flex: 1, // Each tab item takes equal space
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 17
                }
            }}
        >
            <Tabs.Screen name='home' options={{
                title: "Home",
                headerShown: false,
                tabBarIcon: ({ focused }) => <TabIcon focused={focused} source={icons.home} />
            }} />
            <Tabs.Screen name='rides' options={{
                title: "Rides",
                headerShown: false,
                tabBarIcon: ({ focused }) => <TabIcon focused={focused} source={icons.list} />
            }} />
            <Tabs.Screen name='chat' options={{
                title: "Chat",
                headerShown: false,
                tabBarIcon: ({ focused }) => <TabIcon focused={focused} source={icons.chat} />
            }} />
            <Tabs.Screen name='profile' options={{
                title: "Profile",
                headerShown: false,
                tabBarIcon: ({ focused }) => <TabIcon focused={focused} source={icons.profile} />
            }} />
        </Tabs>
    )
}

const styles = StyleSheet.create({
    tabContainer: {
        flex: 1,  // Each tab should take equal space
        justifyContent: 'center',
        alignItems: 'center',
    },
    tabContainerFocused: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconContainer: {
        borderRadius: 9999,
        width: 48,
        height: 48,
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconContainerFocused: {
        borderRadius: 9999,
        width: 48,  // Keep consistent size
        height: 48,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#068637',
    },
    icon: {
        width: 28,
        height: 28,
    }
});
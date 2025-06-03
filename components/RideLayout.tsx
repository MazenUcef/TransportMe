import { Image, SafeAreaView, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import React, { useRef } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { router } from 'expo-router';
import { icons } from '@/constants';
import Map from '@/components/Map';
import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet'

export const RideLayout = ({ title, children }: { title: string, children: React.ReactNode }) => {
    const insets = useSafeAreaInsets();
    const bottomSheetRef = useRef<BottomSheet>(null)
    return (
        <GestureHandlerRootView style={[styles.rootView]}>
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <View style={styles.backButtonContainer}>
                        <TouchableOpacity onPress={() => router.back()}>
                            <View style={styles.backButton}>
                                <Image
                                    source={icons.backArrow}
                                    style={styles.backArrow}
                                    resizeMode="contain"
                                />
                            </View>
                        </TouchableOpacity>
                        <Text style={styles.titleText}>
                            {title || 'Go Back'}
                        </Text>
                    </View>
                    <Map />
                </View>
                <BottomSheet
                    ref={bottomSheetRef}
                    snapPoints={['40%', '85%']}
                    index={0}
                    enablePanDownToClose={true}
                >
                    <BottomSheetScrollView style={{ flex: 1, padding: 20 }}>
                        {children}
                    </BottomSheetScrollView>
                </BottomSheet>
            </View>
        </GestureHandlerRootView>
    );
}

const styles = StyleSheet.create({
    rootView: {
        flex: 1,
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    headerContainer: {
        flex: 1,
        flexDirection: 'column',
        height: '100%',
        backgroundColor: '#3b82f6',
    },
    backButtonContainer: {
        flexDirection: 'row',
        position: 'absolute',
        zIndex: 10,
        top: 64,
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingHorizontal: 20,
    },
    backButton: {
        width: 40,
        height: 40,
        backgroundColor: '#fff',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    backArrow: {
        width: 24,
        height: 24,
    },
    titleText: {
        fontSize: 20,
        fontWeight: '600',
        marginLeft: 20,
        color: '#000',
    },
});
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import MapView, { PROVIDER_DEFAULT } from 'react-native-maps';

export default function Map() {
    return (
        <MapView
            provider={PROVIDER_DEFAULT}
            style={styles.mapContainer}
            tintColor='black'
            mapType='standard'
            showsPointsOfInterest={false}
            // initialRegion={region}
            showsUserLocation={true}
            userInterfaceStyle='light'
        />
    );
}

const styles = StyleSheet.create({
    mapContainer: {
        width: '100%',
        height: '100%',
        borderRadius: 8, // equivalent to rounded-2xl in Tailwind
    },
});
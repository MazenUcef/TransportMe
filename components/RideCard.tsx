import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ride } from '@/types/type'
import { icons } from '@/constants'
import { formatDate, formatTime } from '@/lib/utils'

export default function RideCard({ ride }: { ride: Ride }) {
    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <View style={styles.imageContainer}>
                    <Image
                        source={{
                            uri: `https://maps.geoapify.com/v1/staticmap?style=osm-bright-smooth&width=600&height=400&center=lonlat:${ride.destination_longitude},${ride.destination_latitude}&zoom=14&apiKey=${process.env.EXPO_PUBLIC_GEOAPIFY_KEY}`
                        }}
                        style={styles.image}
                    />
                    <View style={styles.addressContainer}>
                        <View style={styles.addressRow}>
                            <Image
                                source={icons.to}
                                style={styles.icon}
                            />
                            <Text style={styles.addressText}>{ride.origin_address}</Text>
                        </View>
                        <View style={styles.addressRow}>
                            <Image
                                source={icons.point}
                                style={styles.icon}
                            />
                            <Text numberOfLines={1} style={styles.addressText}>{ride.destination_address}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.dateTimeContainer}>
                    <View style={styles.dateTimeRow}>
                        <Text style={styles.dateTimeLabel}>
                            Date & Time
                        </Text>
                        <Text style={styles.dateTimeValue}>
                            {formatDate(ride.created_at)}, {formatTime(ride.ride_time)}
                        </Text>
                    </View>

                    <View style={styles.dateTimeRow}>
                        <Text style={styles.dateTimeLabel}>
                            Driver
                        </Text>
                        <Text style={styles.dateTimeValue}>
                            {ride.driver.first_name} {ride.driver.last_name}
                        </Text>
                    </View>

                    <View style={styles.dateTimeRow}>
                        <Text style={styles.dateTimeLabel}>
                            Car Seats
                        </Text>
                        <Text style={styles.dateTimeValue}>
                            {ride.driver.car_seats}
                        </Text>
                    </View>

                    <View style={styles.dateTimeRow}>
                        <Text style={styles.dateTimeLabel}>
                            Payment Status
                        </Text>
                        <Text className='capitalize' style={[styles.dateTimeValue, ride.payment_status === "paid" ? { color: "green" } : { color: "red" }, { textTransform: "capitalize" }]}>
                            {ride.payment_status}
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius: 8,
        shadowColor: '#d4d4d4',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.5,
        shadowRadius: 1,
        elevation: 1,
        marginBottom: 12,
    },
    innerContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 12,
        width: '100%',
    },
    imageContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
    },
    image: {
        width: 80,
        height: 90,
        borderRadius: 8,
    },
    addressContainer: {
        flexDirection: 'column',
        marginHorizontal: 20,
        gap: 20,
        flex: 1,
    },
    addressRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    icon: {
        width: 20,
        height: 20,
    },
    addressText: {
        fontSize: 16,
        fontFamily: 'Jakarta-Medium',
    },
    dateTimeContainer: {
        flexDirection: 'column',
        width: '100%',
        marginTop: 20, // mt-5 (5 = 20px)
        backgroundColor: '#f5f5f5', // bg-general-500 (assuming this is a light gray)
        borderRadius: 8,
        padding: 12, // p-3 (3 = 12px)
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    dateTimeRow: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'space-between',
        marginBottom: 20, // mb-5 (5 = 20px)
    },
    dateTimeLabel: {
        fontSize: 16, // text-md
        fontFamily: 'Jakarta-Medium',
        color: '#6b7280', // text-gray-500
    },
    dateTimeValue: {
        fontSize: 16, // text-md
        fontFamily: 'Jakarta-Medium',
        color: '#6b7280', // text-gray-500
    },
})
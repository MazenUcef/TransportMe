import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useLocationStore } from '@/store'
import { RideLayout } from '@/components/RideLayout'

export default function FindRide() {
    const { userAddress, destinationAddress, setDestinationLocation, setUserLocation } = useLocationStore()
    return (
        <RideLayout title='Go Back'>
            <Text className='text-2xl'>Find Ride</Text>
            <Text className='text-2xl'>You are here : {userAddress}</Text>
            <Text className='text-2xl'>You are going to : {destinationAddress}</Text>
        </RideLayout>
    )
}

const styles = StyleSheet.create({})
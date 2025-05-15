import { StyleSheet } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

export default function Layout() {
    return (
        <Stack>
            <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
        </Stack>
    )
}

const styles = StyleSheet.create({})
import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomButton from './CustomButton'
import { icons } from '@/constants'

export default function OAuth() {
    const handleGoogleSignIn = async () => {

    }
    return (
        <View style={styles.container}>
            <View style={styles.dividerContainer}>
                <View style={styles.dividerLine} />
                <Text style={styles.dividerText}>Or</Text>
                <View style={styles.dividerLine} />
            </View>
            <CustomButton
                title='Log In With Google'
                className='mt-5 w-full shadow-none'
                bgVariant='outline'
                textVariant='primary'
                onPress={handleGoogleSignIn}
                IconLeft={() => (
                    <Image
                        source={icons.google}
                        style={{ width: 20, height: 20, marginRight: 10 }}
                        className='w-5 h-5 mx-2'

                    />
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // Empty container, but kept for consistency
    },
    dividerContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 16,  // mt-4 equivalent (1rem = 16px)
        gap: 12,        // gap-x-3 equivalent (0.75rem = 12px)
        marginBottom: 16,
    },
    dividerLine: {
        flex: 1,
        height: 1,      // h-[1px]
        backgroundColor: '#F1F1F1', // bg-general-100 (assuming this is your color)
    },
    dividerText: {
        fontSize: 18,   // text-lg
        color: '#000000' // Default text color
    }
})
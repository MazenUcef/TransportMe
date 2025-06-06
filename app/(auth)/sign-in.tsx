import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Link, useRouter } from 'expo-router'
import CustomButton from '@/components/CustomButton'
import OAuth from '@/components/OAuth'
import InputField from '@/components/InputField'
import { icons, images } from '@/constants'
import { useSignIn } from '@clerk/clerk-expo'

export default function SignIn() {
    const { signIn, setActive, isLoaded } = useSignIn()
    const router = useRouter()
    const [form, setForm] = useState({
        email: "",
        password: ""
    })


    const handleChange = (field: string, value: string) => {
        setForm({
            ...form,
            [field]: value
        })
    }

    const onSignInPress = async () => {
        if (!isLoaded) return

        // Start the sign-in process using the email and password provided
        try {
            const signInAttempt = await signIn.create({
                identifier: form.email,
                password: form.password,
            })

            // If sign-in process is complete, set the created session as active
            // and redirect the user
            if (signInAttempt.status === 'complete') {
                await setActive({ session: signInAttempt.createdSessionId })
                router.replace('/(root)/(tabs)/home')
            } else {
                // If the status isn't complete, check why. User might need to
                // complete further steps.
                console.error(JSON.stringify(signInAttempt, null, 2))
            }
        } catch (err) {
            console.error(JSON.stringify(err, null, 2))
        }
    }
    return (
        <ScrollView className='flex-1 bg-white'>
            <View className='flex-1 bg-white'>
                <View className='relative w-full h-[250px]'>
                    <Image
                        source={images.signUpCar}
                        className='z-0 w-full h-[250px]'
                    />
                    <Text className='text-2xl text-black font-JakartaSemiBold absolute bottom-5 left-5'>Welcome</Text>
                </View>
                <View className='p-5'>
                    <InputField
                        label='Email'
                        placeholder="Enter your email"
                        icon={icons.email}
                        value={form.email}
                        onChangeText={(text: string) => handleChange("email", text)}
                    />
                    <InputField
                        label='Password'
                        placeholder="Enter your password"
                        icon={icons.lock}
                        value={form.password}
                        onChangeText={(text: string) => handleChange("password", text)}
                    />
                    <CustomButton
                        title='Sign In'
                        onPress={onSignInPress}
                        className='mt-6'
                    />

                    <OAuth />

                    <Link className='text-lg text-center text-general-200 mt-10' href={"/(auth)/sign-up"}>
                        <Text>Don't have an account?</Text>
                        <Text className='text-primary-500'> Sign Up</Text>
                    </Link>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({})
import { Image, Platform, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useRef, useState } from 'react'
import { router } from 'expo-router'
import Swiper from 'react-native-swiper'
import { onboarding } from '@/constants'
import CustomButton from '@/components/CustomButton'

export default function OnBoarding() {
    const swiperRef = useRef<Swiper>(null)
    const [activeIndex, setActiveIndex] = useState<number>(0)

    const handleNext = () => {
        if (activeIndex < onboarding.length - 1) {
            swiperRef.current?.scrollBy(1)
        } else {
            router.replace("/(auth)/sign-up")
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity
                style={styles.skipButton}
                onPress={() => router.replace("/(auth)/sign-up")}
            >
                <Text style={styles.skipText}>Skip</Text>
            </TouchableOpacity>

            <Swiper
                ref={swiperRef}
                loop={false}
                dot={<View style={styles.dotView} />}
                activeDot={<View style={styles.dotViewActive} />}
                onIndexChanged={(index) => setActiveIndex(index)}
            >
                {onboarding.map((item) => (
                    <View style={styles.slideContainer} key={item.id}>
                        <Image
                            source={item.image}
                            style={styles.slideImage}
                            resizeMode='contain'
                        />
                        <View style={styles.titleContainer}>
                            <Text style={styles.titleText}>{item.title}</Text>
                        </View>
                        <Text style={styles.descriptionText}>{item.description}</Text>
                    </View>
                ))}
            </Swiper>

            <CustomButton
                title={activeIndex === onboarding.length - 1 ? "Get Started" : "Next"}
                onPress={handleNext}
                style={styles.buttonStyle}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: Platform.OS === "android" ? 20 : 0
    },
    skipButton: {
        width: '100%',
        padding: 20,
        alignItems: 'flex-end',
        justifyContent: 'flex-end'
    },
    skipText: {
        color: 'black',
        fontSize: 16,
        fontFamily: 'Jakarta-Bold'
    },
    slideContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20
    },
    slideImage: {
        width: '100%',
        height: 300
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        marginTop: 40
    },
    titleText: {
        color: 'black',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginHorizontal: 40
    },
    descriptionText: {
        fontSize: 18,
        fontFamily: 'Jakarta-SemiBold',
        textAlign: 'center',
        color: '#858585',
        marginHorizontal: 40,
        marginTop: 12
    },
    dotView: {
        width: 32,
        height: 4,
        marginHorizontal: 1,
        backgroundColor: "#E2E8F0"
    },
    dotViewActive: {
        width: 32,
        height: 4,
        marginHorizontal: 1,
        backgroundColor: "#0286FF",
        borderRadius: 10
    },
    buttonStyle: {
        width: '91.666%',
        marginTop: 40
    }
})
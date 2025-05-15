import { useAuth } from "@clerk/clerk-expo";
import { Redirect, Stack, useRouter } from "expo-router";
import { useEffect } from "react";
import { Image, View } from "react-native";

export default function SplashScreen() {
  const router = useRouter();
  const { isSignedIn } = useAuth();

  useEffect(() => {
    if (isSignedIn) {
      router.replace('/(root)/(tabs)/home')
      return
    }

    const timer = setTimeout(() => {
      router.replace('/(auth)/welcome');
    }, 2000)

    return () => clearTimeout(timer)
  }, [isSignedIn])
  return (
    <View className="flex-1 justify-center items-center bg-white" >
      <Image
        source={require("../assets/images/splash.png")}
        className="flex-1"
      />
    </View>
  );
}

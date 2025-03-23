import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { icons, images } from '@/constants'
import InputField from '@/components/InputField'
import CustomButton from '@/components/CustomButton'
import { Link } from 'expo-router'

const SignIn = () => {
  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 bg-white">
        <View className="relative w-full h-[250px]">
          <Image source={images.signUpCar} className="z-0 w-full h-[250px]" />
          <Text className="absolute text-2xl text-black font-JakartaSemiBold bottom-5 left-5">
            Welcome 👋
          </Text>
        </View>
        <View className="p-5">
          <InputField
            label="Email"
            placeholder="Enter email"
            icon={icons.email}
            textContentType="emailAddress"
            value=""
          />
          <InputField
            label="Password"
            placeholder="Enter password"
            icon={icons.lock}
            secureTextEntry={true}
            textContentType="password"
            value=""
          />
          <CustomButton
            title="Sign Up"
            className="mt-6"
          />
          <Text className="mt-12 text-lg text-center font-rubik text-black-200">
            Don't have an account?{" "}
            <Link
              href="/sign-up"
              className="font-bold text-primary-500"
            >
              Sign Up
            </Link>
          </Text>
        </View>
      </View>
    </ScrollView>
  )
}

export default SignIn
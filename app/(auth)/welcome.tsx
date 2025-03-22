import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import '../global.css'

const Onboarding = () => {
  return (
    <SafeAreaView className='flex h-full items-center justify-between'>
      <Text>Onboarding</Text>
    </SafeAreaView>
  )
}

export default Onboarding
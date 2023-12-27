import { StatusBar } from "expo-status-bar"
import { Platform } from "react-native"

import { EditScreenInfo } from "@/components/edit-screen-info"
import { Text } from "@/components/elements/text"
import { View } from "@/components/elements/view"
import { env } from "@/env"

export default function ModalScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-xl font-bold">Modal</Text>
      <View className="my-7 h-px w-4/5" />
      <Text className="rounded-md bg-yellow-200 p-2 dark:bg-yellow-800">
        {env.EXPO_PUBLIC_APP_ENV}
      </Text>
      <EditScreenInfo path="app/modal.tsx" />

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  )
}

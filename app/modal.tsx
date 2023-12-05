import { StatusBar } from "expo-status-bar"
import { Platform } from "react-native"

import { EditScreenInfo } from "@/components/edit-screen-info"
import { Text, View } from "@/components/themed"

export default function ModalScreen() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-xl font-bold">Modal</Text>
      <View
        className="my-7 h-px w-4/5"
        darkColor="rgba(255,255,255,0.1)"
        lightColor="#eee"
      />
      <EditScreenInfo path="app/modal.tsx" />

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  )
}

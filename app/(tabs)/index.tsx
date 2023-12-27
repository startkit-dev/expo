import Toast from "react-native-toast-message"

import { EditScreenInfo } from "@/components/edit-screen-info"
import { Pressable } from "@/components/pressable"
import { Text } from "@/components/text"
import { View } from "@/components/view"

export default function TabOneScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-xl font-bold">Tab One</Text>
      <View className="my-7 h-px w-4/5" />
      <EditScreenInfo path="app/(tabs)/index.tsx" />

      <Pressable
        onPress={() => {
          Toast.show({
            type: "success",
            text1: "Scucess",
            text2: "This is a success toast 👋"
          })
        }}
      >
        <Text>Launch a toast</Text>
      </Pressable>
    </View>
  )
}

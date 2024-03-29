import Toast from "react-native-toast-message"

import { EditScreenInfo } from "@/components/edit-screen-info"
import { Pressable } from "@/components/pressable"
import { Text } from "@/components/text"
import { View } from "@/components/view"

export default function TabTwoScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-xl font-bold">Tab Two</Text>
      <View className="my-7 h-px w-4/5" />
      <EditScreenInfo path="app/(tabs)/two.tsx" />
      <Pressable
        onPress={() => {
          Toast.show({
            type: "error",
            text1: "Uh oh!",
            text2: "This is an error toast 😱"
          })
        }}
      >
        <Text>Launch an Error toast</Text>
      </Pressable>
    </View>
  )
}

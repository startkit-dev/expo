import { EditScreenInfo } from "@/components/edit-screen-info"
import { Text, View } from "@/components/themed"

export default function TabTwoScreen() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-xl font-bold">Tab Two</Text>
      <View
        className="my-7 h-px w-4/5"
        darkColor="rgba(255,255,255,0.1)"
        lightColor="#eee"
      />
      <EditScreenInfo path="app/(tabs)/two.tsx" />
    </View>
  )
}

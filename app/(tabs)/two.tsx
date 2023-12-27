import { EditScreenInfo } from "@/components/edit-screen-info"
import { Text } from "@/components/elements/text"
import { View } from "@/components/elements/view"

export default function TabTwoScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-xl font-bold">Tab Two</Text>
      <View className="my-7 h-px w-4/5" />
      <EditScreenInfo path="app/(tabs)/two.tsx" />
    </View>
  )
}

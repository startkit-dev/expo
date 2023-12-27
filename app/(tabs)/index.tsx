import { EditScreenInfo } from "@/components/edit-screen-info"
import { Text } from "@/components/text"
import { View } from "@/components/view"

export default function TabOneScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-xl font-bold">Tab One</Text>
      <View className="my-7 h-px w-4/5" />
      <EditScreenInfo path="app/(tabs)/index.tsx" />
    </View>
  )
}

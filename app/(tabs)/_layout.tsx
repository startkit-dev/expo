import { Link, Tabs } from "expo-router"
import { CodeIcon, InfoIcon } from "lucide-react-native"

import { Pressable } from "@/components/pressable"

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#CF364C"
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Tab One",
          tabBarIcon: ({ color }) => (
            <CodeIcon className="-mb-1" color={color} size={28} />
          ),
          headerRight: () => (
            <Link asChild href="/modal">
              <Pressable
                className="mr-4 h-full w-11 items-center justify-center active:opacity-50"
                haptics
              >
                <InfoIcon className="text-primary" size={25} />
              </Pressable>
            </Link>
          )
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: "Tab Two",
          tabBarIcon: ({ color }) => (
            <CodeIcon className="-mb-1" color={color} size={28} />
          )
        }}
      />
    </Tabs>
  )
}

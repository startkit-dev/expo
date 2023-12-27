import { Link, Tabs } from "expo-router"
import { CodeIcon, InfoIcon } from "lucide-react-native"
import { Pressable } from "react-native"

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
            <CodeIcon color={color} size={28} style={{ marginBottom: -3 }} />
          ),
          headerRight: () => (
            <Link asChild href="/modal">
              <Pressable>
                {({ pressed }) => (
                  <InfoIcon
                    className="text-primary"
                    size={25}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
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
            <CodeIcon color={color} size={28} style={{ marginBottom: -3 }} />
          )
        }}
      />
    </Tabs>
  )
}

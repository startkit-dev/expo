import {
  CheckIcon,
  Laptop2Icon,
  type LucideIcon,
  MoonIcon,
  SunIcon,
  WavesIcon
} from "lucide-react-native"
import { useColorScheme } from "nativewind"
import { useRef } from "react"
import { ScrollView, Switch } from "react-native"

import { Pressable } from "@/components/pressable"
import { Text } from "@/components/text"
import { View } from "@/components/view"
import {
  type ColorScheme,
  useUserSettingsStore
} from "@/hooks/use-user-settings"
import { cls } from "@/lib/utils/cls"

const THEME_SETTINGS: {
  label: string
  icon: LucideIcon
  value: ColorScheme
}[] = [
  { label: "System Theme", icon: Laptop2Icon, value: "system" },
  { label: "Light Theme", icon: SunIcon, value: "light" },
  { label: "Dark Theme", icon: MoonIcon, value: "dark" }
]

export default function SettingsScreen() {
  const switchRef = useRef<Switch>(null)

  // eslint-disable-next-line @typescript-eslint/unbound-method -- false positive
  const { setColorScheme } = useColorScheme()
  const colorScheme = useUserSettingsStore((state) => state.colorScheme)
  const saveColorScheme = useUserSettingsStore((state) => state.setColorScheme)
  const isHapticFeedbackEnabled = useUserSettingsStore(
    (state) => state.isHapticFeedbackEnabled
  )
  const toggleHapticFeedback = useUserSettingsStore(
    (state) => state.toggleHapticFeedback
  )

  const onColorSchemeChange = (value: ColorScheme) => {
    saveColorScheme(value)
    setColorScheme(value)
  }

  return (
    <View className="flex-1 bg-background">
      <ScrollView contentContainerClassName="py-6 gap-8">
        {/* Section: App Theme */}
        <View className="px-4">
          <Text className="px-4 py-3 text-sm font-light uppercase tracking-widest text-muted-foreground">
            App Theme
          </Text>

          <View className="rounded-xl border border-border">
            {THEME_SETTINGS.map(({ label, icon: Icon, value }, i) => (
              <Pressable
                className={cls(
                  "flex-row items-center justify-between px-4 py-3 active:opacity-50",
                  i !== 0 && "border-t border-border",
                  colorScheme === value && "bg-muted"
                )}
                haptics
                key={value}
                onPress={() => {
                  onColorSchemeChange(value)
                }}
              >
                <View className="flex-row items-center gap-3">
                  <Icon className="text-primary" size={18} />
                  <Text className="text-lg">{label}</Text>
                </View>

                {colorScheme === value && (
                  <CheckIcon className="text-primary" size={20} />
                )}
              </Pressable>
            ))}
          </View>
        </View>

        {/* Section: App */}
        <View className="px-4">
          <Text className="px-4 py-3 text-sm font-light uppercase tracking-widest text-muted-foreground">
            App
          </Text>

          <View className="rounded-xl border border-border">
            <View className="flex-row items-center justify-between px-4 py-3">
              <View className="flex-row items-center gap-3">
                <WavesIcon className="text-primary" size={18} />

                <Text className="text-lg">Haptic Feedback</Text>
              </View>

              <Switch
                onValueChange={(val) => {
                  toggleHapticFeedback(val)
                }}
                ref={switchRef}
                value={isHapticFeedbackEnabled}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

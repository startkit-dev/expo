import { Link } from "expo-router"
import {
  CheckIcon,
  ChevronRightIcon,
  FileDigitIcon,
  Laptop2Icon,
  type LucideIcon,
  MoonIcon,
  SunIcon,
  WavesIcon
} from "lucide-react-native"
import { useColorScheme } from "nativewind"
import { useRef } from "react"
import { ScrollView, Switch } from "react-native"

import {
  SettingsSection,
  SettingsSectionContent,
  SettingsSectionHeader,
  SettingsSectionItem
} from "@/components/settings/settings"
import { View } from "@/components/view"
import {
  type ColorScheme,
  useUserSettingsStore
} from "@/hooks/use-user-settings"
import { cls } from "@/lib/cls"

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
        <SettingsSection>
          <SettingsSectionHeader>App Theme</SettingsSectionHeader>

          <SettingsSectionContent>
            {THEME_SETTINGS.map(({ label, icon: Icon, value }, i) => (
              <SettingsSectionItem
                className={cls(
                  i !== 0 && "border-t border-border",
                  colorScheme === value && "bg-muted"
                )}
                icon={Icon}
                key={value}
                label={label}
                onPress={() => {
                  onColorSchemeChange(value)
                }}
              >
                {colorScheme === value && (
                  <CheckIcon className="text-primary" size={20} />
                )}
              </SettingsSectionItem>
            ))}
          </SettingsSectionContent>
        </SettingsSection>

        {/* Section: App */}
        <SettingsSection>
          <SettingsSectionHeader>App</SettingsSectionHeader>

          <SettingsSectionContent>
            <SettingsSectionItem icon={WavesIcon} label="Haptic Feedback">
              <Switch
                onValueChange={(val) => {
                  toggleHapticFeedback(val)
                }}
                ref={switchRef}
                value={isHapticFeedbackEnabled}
              />
            </SettingsSectionItem>

            <Link asChild href="/settings/debug">
              <SettingsSectionItem
                className="active:opacity-50"
                icon={FileDigitIcon}
                label="Debug"
              >
                <ChevronRightIcon className="text-muted-foreground" size={20} />
              </SettingsSectionItem>
            </Link>
          </SettingsSectionContent>
        </SettingsSection>
      </ScrollView>
    </View>
  )
}

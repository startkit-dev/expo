import { type LucideIcon } from "lucide-react-native"
import { forwardRef } from "react"
import { type View as DefaultView } from "react-native"

import { Pressable, type PressableProps } from "@/components/pressable"
import { Text, type TextProps } from "@/components/text"
import { View, type ViewProps } from "@/components/view"
import { cls } from "@/lib/cls"

export type SettingsSectionProps = ViewProps
export function SettingsSection({ className, ...props }: SettingsSectionProps) {
  return <View className={cls("px-4", className)} {...props} />
}

export type SettingsSectionHeaderProps = TextProps
export function SettingsSectionHeader({
  className,
  ...props
}: SettingsSectionHeaderProps) {
  return (
    <Text
      className={cls(
        "px-4 py-3 text-sm font-light uppercase tracking-widest text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}

export type SettingsSectionContentProps = ViewProps
export function SettingsSectionContent({
  className,
  ...props
}: SettingsSectionContentProps) {
  return (
    <View
      className={cls("rounded-xl border border-border", className)}
      {...props}
    />
  )
}

export type SettingsSectionItemProps = PressableProps & {
  icon: LucideIcon
  label: string
}
export const SettingsSectionItem = forwardRef<
  DefaultView,
  SettingsSectionItemProps
>(({ icon: Icon, label, children, className, ...props }, ref) => {
  return (
    <Pressable
      className={cls(
        "flex-row items-center justify-between px-4 py-3",
        className
      )}
      ref={ref}
      {...props}
    >
      <>
        <View className="flex-row items-center gap-3">
          <Icon className="text-primary" size={18} />
          <Text className="text-lg">{label}</Text>
        </View>

        {children}
      </>
    </Pressable>
  )
})
SettingsSectionItem.displayName = "SettingsSectionItem"

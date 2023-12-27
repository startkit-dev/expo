import * as Haptics from "expo-haptics"
import { forwardRef, useCallback } from "react"
import {
  Pressable as DefaultPressable,
  type PressableProps as DefaultPressableProps,
  type GestureResponderEvent,
  type View
} from "react-native"

export type PressableProps = DefaultPressableProps & {
  /**
   * The haptics to add to an onPress event.
   *
   * Passing `true` will default to `light`.
   *
   * Haptic settings can be found here:
   * https://docs.expo.dev/versions/latest/sdk/haptics/#hapticsimpactasyncstyle
   */
  haptics?:
    | boolean
    | "light"
    | "medium"
    | "heavy"
    | "success"
    | "warning"
    | "error"
    | "selection"
}

/**
 * A wrapper around the <Pressable> component with some additional properties,
 * such as `haptics`, etc.
 */
export const Pressable = forwardRef<View, PressableProps>(
  ({ haptics, onPress, ...props }, ref) => {
    const onPressWrapper = useCallback(
      (event: GestureResponderEvent) => {
        switch (haptics) {
          case "success":
            void Haptics.notificationAsync(
              Haptics.NotificationFeedbackType.Success
            )
            break
          case "warning":
            void Haptics.notificationAsync(
              Haptics.NotificationFeedbackType.Warning
            )
            break
          case "error":
            void Haptics.notificationAsync(
              Haptics.NotificationFeedbackType.Error
            )
            break
          case "selection":
            void Haptics.selectionAsync()
            break
          case "medium":
            void Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)
            break
          case "heavy":
            void Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy)
            break
          case "light":
          case true:
            void Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
            break
          default:
        }

        onPress?.(event)
      },
      [haptics, onPress]
    )

    return <DefaultPressable onPress={onPressWrapper} ref={ref} {...props} />
  }
)

Pressable.displayName = "Pressable"

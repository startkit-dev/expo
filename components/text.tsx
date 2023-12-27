import {
  Text as DefaultText,
  type TextProps as DefaultTextProps
} from "react-native"

import { cls } from "@/lib/utils/cls"

export type TextProps = DefaultTextProps

/**
 * A <Text> wrapper with default theme colors.
 */
export function Text({ className, ...props }: TextProps) {
  return (
    <DefaultText className={cls("text-foreground", className)} {...props} />
  )
}

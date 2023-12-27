import {
  View as DefaultView,
  type ViewProps as DefaultViewProps
} from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"

export type ViewProps = DefaultViewProps & {
  /**
   * Whether or not to render a safeArea everywhere, just on one vertical side,
   * or nowhere.
   */
  safeArea?: boolean | "top" | "bottom"
}

/**
 * A `View` component with additional features.
 *
 * To set the background to our theme, use `className="bg-background"`
 */
export function View({ safeArea, style, ...props }: ViewProps) {
  const insets = useSafeAreaInsets()

  const safeAreaStyle =
    safeArea === "top"
      ? { paddingTop: insets.top }
      : safeArea === "bottom"
        ? { paddingBottom: insets.bottom }
        : safeArea
          ? { paddingTop: insets.top, paddingBottom: insets.bottom }
          : null

  return <DefaultView style={[safeAreaStyle, style]} {...props} />
}

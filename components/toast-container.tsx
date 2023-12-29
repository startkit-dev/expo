import { useSafeAreaInsets } from "react-native-safe-area-context"
import OriginalToast, {
  type ToastConfig,
  type ToastConfigParams,
  type ToastProps
} from "react-native-toast-message"

import { cls } from "@/lib/cls"

import { Pressable, type PressableProps } from "./pressable"
import { Text } from "./text"

function BaseToast({
  text1,
  text2,
  type,
  hide,
  props,
  ..._rest
}: ToastConfigParams<PressableProps>) {
  return (
    <Pressable
      className={cls(
        "mx-auto rounded-lg px-4 py-2",
        type === "error" ? "bg-destructive" : "bg-foreground"
      )}
      onPress={() => {
        hide()
      }}
      {...props}
    >
      <Text
        className={cls(
          "text-xl font-bold",
          type === "error" ? "text-destructive-foreground" : "text-background"
        )}
      >
        {text1}
      </Text>
      {text2 ? (
        <Text
          className={cls(
            "text-lg",
            type === "error" ? "text-destructive-foreground" : "text-background"
          )}
        >
          {text2}
        </Text>
      ) : null}
    </Pressable>
  )
}

const toastConfig: ToastConfig = {
  success: (props) => <BaseToast {...props} />,
  error: (props) => <BaseToast {...props} />,
  info: (props) => <BaseToast {...props} />
}

export function ToastContainer(props: ToastProps) {
  const { top } = useSafeAreaInsets()

  return <OriginalToast {...props} config={toastConfig} topOffset={top} />
}

import { useMutation, useQueryClient } from "@tanstack/react-query"
// eslint-disable-next-line import/no-named-as-default -- Constants must be imported this way
import Constants from "expo-constants"
import * as Notifications from "expo-notifications"

import { isAndroid, isDevice } from "@/lib/platform"

import { usePushNotificationsStore } from "./store"

const easConfig = Constants.expoConfig?.extra?.eas as {
  projectId?: string
} | null
const projectId = easConfig?.projectId

export function useRegisterForPushNotifications() {
  const queryClient = useQueryClient()
  const setToken = usePushNotificationsStore((state) => state.setToken)

  return useMutation({
    mutationFn: async () => {
      if (!isDevice) {
        throw new Error("Must use physical device for Push Notifications")
      }

      // On Android, you need to specify a channel.
      if (isAndroid) {
        await Notifications.setNotificationChannelAsync("default", {
          name: "default",
          importance: Notifications.AndroidImportance.MAX,
          vibrationPattern: [0, 250, 250, 250],
          lightColor: "#FF231F7C"
        })
      }

      // Get the existing permission status
      const { status: existingStatus } =
        await Notifications.getPermissionsAsync()

      let finalStatus = existingStatus

      // If we do not yet have permission, ask for it
      if (existingStatus !== ("granted" as Notifications.PermissionStatus)) {
        const { status } = await Notifications.requestPermissionsAsync()
        finalStatus = status
      }

      // If we still do not have permission, exit
      if (finalStatus !== ("granted" as Notifications.PermissionStatus)) {
        throw new Error("Failed to get push token for push notification!")
      }

      const token = await Notifications.getExpoPushTokenAsync({
        projectId
      })

      return token.data
    },
    onSuccess: (token) => {
      setToken(token)
      void queryClient.invalidateQueries({
        queryKey: ["push-notification-status"]
      })
    }
  })
}

import { useMutation } from "@tanstack/react-query"

import { usePushNotificationsStore } from "./store"

export function useTestPushNotification() {
  const token = usePushNotificationsStore((state) => state.token)

  return useMutation({
    mutationFn: async () => {
      const message = {
        to: token,
        sound: "default",
        title: "Sample notification",
        subtitle: "This is the subtitle",
        body: "And here is the body",
        data: { someData: "goes here" }
      }

      await fetch("https://exp.host/--/api/v2/push/send", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Accept-encoding": "gzip, deflate",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(message)
      })
    }
  })
}

import "@/assets/globals.css"

import { SpaceMono_400Regular as SpaceMono400Regular } from "@expo-google-fonts/space-mono"
import { ThemeProvider } from "@react-navigation/native"
import { useFonts } from "expo-font"
import * as Notifications from "expo-notifications"
import { SplashScreen, Stack } from "expo-router"
import { useColorScheme } from "nativewind"
import { useEffect } from "react"

import { PushNotificationsProvider } from "@/components/providers/push-notifications-provider"
import { ReactQueryProvider } from "@/components/providers/react-query-provider"
import { ToastContainer } from "@/components/toast-container"
import { useUserSettingsStore } from "@/hooks/use-user-settings"
import { DarkTheme, DefaultTheme } from "@/lib/colors/navigation-theme"

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary
} from "expo-router"

// eslint-disable-next-line camelcase -- required Expo Router prop
export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)"
}

// Prevent the splash screen from auto-hiding before asset loading is complete.
void SplashScreen.preventAutoHideAsync()

// This handler determines how your app handles notifications that come in while
// the app is foregrounded.
Notifications.setNotificationHandler({
  handleNotification: async (_notification) =>
    Promise.resolve({
      shouldShowAlert: true,
      shouldPlaySound: false,
      shouldSetBadge: false
    })
})

export default function RootLayout() {
  const [isFontLoaded, error] = useFonts({
    SpaceMono400Regular
  })
  const isReady = useUserSettingsStore((state) => state.isReady)
  const loaded = isFontLoaded && isReady

  // eslint-disable-next-line @typescript-eslint/unbound-method -- false positive
  const { setColorScheme } = useColorScheme()
  const colorScheme = useUserSettingsStore((state) => state.colorScheme)

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error
  }, [error])

  useEffect(() => {
    if (loaded) {
      setColorScheme(colorScheme)
      void SplashScreen.hideAsync()
    }
  }, [colorScheme, loaded, setColorScheme])

  if (!loaded) {
    return null
  }

  return <RootLayoutNav />
}

function RootLayoutNav() {
  const { colorScheme } = useColorScheme()

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <ReactQueryProvider>
        <PushNotificationsProvider>
          <Stack initialRouteName="(tabs)">
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen
              name="settings"
              options={{ headerShown: false, presentation: "modal" }}
            />
            <Stack.Screen name="modal" options={{ presentation: "modal" }} />
          </Stack>

          {/* Toast should be the last item */}
          <ToastContainer />
        </PushNotificationsProvider>
      </ReactQueryProvider>
    </ThemeProvider>
  )
}

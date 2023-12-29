import {
  CheckIcon,
  ChevronRightIcon,
  HeartHandshakeIcon,
  VibrateIcon
} from "lucide-react-native"
import { ActivityIndicator, Linking, ScrollView } from "react-native"

import {
  SettingsSection,
  SettingsSectionContent,
  SettingsSectionHeader,
  SettingsSectionItem
} from "@/components/settings/settings"
import { Text } from "@/components/text"
import { View } from "@/components/view"
import { usePushNotificationStatus } from "@/hooks/push-notifications/use-push-notification-status"
import { useRegisterForPushNotifications } from "@/hooks/push-notifications/use-register-for-oush-notifications"
import { useTestPushNotification } from "@/hooks/push-notifications/use-test-push-notification"
import { cls } from "@/lib/cls"

export default function DebugSettingsScreen() {
  const { mutate: requestPermissions, isPending } =
    useRegisterForPushNotifications()

  const { mutate: sendTestNotification, isPending: isSendingTestNotification } =
    useTestPushNotification()

  const {
    isPermissionDenied,
    isPermissionUndetermined,
    isPermissionGranted,
    isLoading: isLoadingPermissionStatus
  } = usePushNotificationStatus()

  return (
    <View className="flex-1 bg-background">
      <ScrollView contentContainerClassName="py-6 gap-8">
        {/* Section: Push Notifications */}
        <SettingsSection>
          <SettingsSectionHeader>Push Notifications</SettingsSectionHeader>
          <SettingsSectionContent>
            <SettingsSectionItem
              className={
                isPermissionDenied || isPermissionUndetermined
                  ? "active:opacity-50"
                  : undefined
              }
              icon={HeartHandshakeIcon}
              label="Permissions"
              onPress={() => {
                if (isPermissionDenied) {
                  void Linking.openSettings()
                } else if (isPermissionUndetermined) {
                  requestPermissions()
                }
              }}
            >
              {isLoadingPermissionStatus || isPending ? (
                <ActivityIndicator size={20} />
              ) : isPermissionDenied ? (
                <View className="flex-row gap-1">
                  <Text className="text-muted-foreground">Denied &ndash;</Text>
                  <Text className="text-primary">Fix</Text>
                </View>
              ) : isPermissionGranted ? (
                <CheckIcon className="text-primary" size={20} />
              ) : isPermissionUndetermined ? (
                <Text className="font-bold text-primary">Request</Text>
              ) : (
                <Text className="text-muted-foreground">Unavailable</Text>
              )}
            </SettingsSectionItem>

            <SettingsSectionItem
              className={cls(
                "border-t border-border",
                isPermissionGranted ? " active:opacity-50" : "opacity-50"
              )}
              disabled={!isPermissionGranted}
              icon={VibrateIcon}
              label="Send Test Notification"
              onPress={() => {
                sendTestNotification()
              }}
            >
              {isSendingTestNotification ? (
                <ActivityIndicator size={20} />
              ) : (
                <ChevronRightIcon className="text-muted-foreground" size={20} />
              )}
            </SettingsSectionItem>
          </SettingsSectionContent>
        </SettingsSection>
      </ScrollView>
    </View>
  )
}

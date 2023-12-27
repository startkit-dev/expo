import { ExternalLink } from "./external-link"
import { Text } from "./text"
import { View } from "./view"

export function EditScreenInfo({ path }: { path: string }) {
  return (
    <View>
      <View className="mx-12 items-center">
        <Text className="text-center text-lg">
          Open up the code for this screen:
        </Text>

        <View className="my-2 rounded px-1">
          <Text className="font-mono">{path}</Text>
        </View>

        <Text className="text-center text-lg">
          Change any of the text, save the file, and your app will automatically
          update.
        </Text>
      </View>

      <View className="mx-5 mt-4 items-center">
        <ExternalLink
          className="py-4"
          href="https://docs.expo.io/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet"
        >
          <Text className="text-center text-primary">
            Tap here if your app doesn&apos;t automatically update after making
            changes
          </Text>
        </ExternalLink>
      </View>
    </View>
  )
}

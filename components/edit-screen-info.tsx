import { Colors } from "@/constants/colors"

import { ExternalLink } from "./external-link"
import { MonoText } from "./styled-text"
import { Text, View } from "./themed"

export function EditScreenInfo({ path }: { path: string }) {
  return (
    <View>
      <View className="mx-12 items-center">
        <Text
          className="text-center text-lg"
          darkColor="rgba(255,255,255,0.8)"
          lightColor="rgba(0,0,0,0.8)"
        >
          Open up the code for this screen:
        </Text>

        <View
          className="my-2 rounded px-1"
          darkColor="rgba(255,255,255,0.05)"
          lightColor="rgba(0,0,0,0.05)"
        >
          <MonoText>{path}</MonoText>
        </View>

        <Text
          className="text-center text-lg"
          darkColor="rgba(255,255,255,0.8)"
          lightColor="rgba(0,0,0,0.8)"
        >
          Change any of the text, save the file, and your app will automatically
          update.
        </Text>
      </View>

      <View className="mx-5 mt-4 items-center">
        <ExternalLink
          className="py-4"
          href="https://docs.expo.io/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet"
        >
          <Text className="text-center" lightColor={Colors.light.tint}>
            Tap here if your app doesn&apos;t automatically update after making
            changes
          </Text>
        </ExternalLink>
      </View>
    </View>
  )
}

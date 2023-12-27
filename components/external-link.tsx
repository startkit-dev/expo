import { Link } from "expo-router"
import * as WebBrowser from "expo-web-browser"
import { type ComponentProps } from "react"

import { isWeb } from "@/lib/utils/platform"

export type ExternalLinkProps = Omit<ComponentProps<typeof Link>, "href"> & {
  href: `${string}:${string}`
}

export function ExternalLink({
  href,
  target = "_blank",
  ...props
}: ExternalLinkProps) {
  return (
    <Link
      {...props}
      href={href}
      onPress={(e) => {
        if (!isWeb) {
          // Prevent the default behavior of linking to the default browser on native.
          e.preventDefault()
          // Open the link in an in-app browser.
          void WebBrowser.openBrowserAsync(href)
        }
      }}
      target={target}
    />
  )
}

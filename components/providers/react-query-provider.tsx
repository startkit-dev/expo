import AsyncStorage from "@react-native-async-storage/async-storage"
import { addEventListener } from "@react-native-community/netinfo"
import { createAsyncStoragePersister } from "@tanstack/query-async-storage-persister"
import { QueryClient, focusManager, onlineManager } from "@tanstack/react-query"
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client"
import { type PropsWithChildren, useEffect } from "react"
import { AppState } from "react-native"

import { isWeb } from "@/lib/platform"

// Initialize the query client for react-query
const queryClient = new QueryClient()
// Create a persister for react-query that uses AsyncStorage
const asyncStoragePersister = createAsyncStoragePersister({
  storage: AsyncStorage
})

// Set up the onlineManager's event listener to track connectivity changes
onlineManager.setEventListener((setOnline) => {
  return addEventListener((state) => {
    setOnline(Boolean(state.isConnected))
  })
})

export function ReactQueryProvider({ children }: PropsWithChildren) {
  // On app focus, set the focus manager to focused
  useEffect(() => {
    if (isWeb) {
      return
    }

    const subscription = AppState.addEventListener("change", (status) => {
      focusManager.setFocused(status === "active")
    })

    return () => {
      subscription.remove()
    }
  }, [])

  return (
    <PersistQueryClientProvider
      client={queryClient}
      persistOptions={{ persister: asyncStoragePersister }}
    >
      {children}
    </PersistQueryClientProvider>
  )
}

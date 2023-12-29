import AsyncStorage from "@react-native-async-storage/async-storage"
import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"

type PushNotificationsState = {
  /**
   * Push notification token
   */
  token: string | null
  setToken: (token: string | null) => void

  /**
   * Persitance / Hydration
   */
  isReady: boolean
  setReady: () => void
}

export const usePushNotificationsStore = create<PushNotificationsState>()(
  persist(
    (set) => ({
      /**
       * Push notification token
       */
      token: null,
      setToken: (token) => {
        set({ token })
      },

      /**
       * Persitance / Hydration
       */
      isReady: false as boolean,
      setReady: () => {
        set({ isReady: true })
      }
    }),
    {
      /**
       * name of item in the storage
       */
      name: "push-notifications",

      /**
       * Where it is stored
       */
      storage: createJSONStorage(() => AsyncStorage),

      /**
       * What is persisted
       */
      partialize: (state) => ({
        token: state.token
      }),

      /**
       * Mark the store as ready when hydrated from storage
       */
      onRehydrateStorage: () => (state) => {
        state?.setReady()
      }
    }
  )
)

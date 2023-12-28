import AsyncStorage from "@react-native-async-storage/async-storage"
import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"

export type ColorScheme = "light" | "dark" | "system"

type UserSettingsState = {
  /**
   * Color Scheme
   */
  colorScheme: ColorScheme
  setColorScheme: (scheme: ColorScheme) => void

  /**
   * Haptics
   */
  isHapticFeedbackEnabled: boolean
  toggleHapticFeedback: (enabled?: boolean) => void

  /**
   * Persitance / Hydration
   */
  isReady: boolean
  setReady: () => void
}

export const useUserSettingsStore = create<UserSettingsState>()(
  persist(
    (set) => ({
      /**
       * Color Scheme
       */
      colorScheme: "system" as ColorScheme,
      setColorScheme: (scheme) => {
        set({ colorScheme: scheme })
      },

      /**
       * Haptics
       */
      isHapticFeedbackEnabled: true as boolean,
      toggleHapticFeedback: (enabled) => {
        set((current) => ({
          isHapticFeedbackEnabled:
            enabled === undefined ? !current.isHapticFeedbackEnabled : enabled
        }))
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
      name: "user-settings",

      /**
       * Where it is stored
       */
      storage: createJSONStorage(() => AsyncStorage),

      /**
       * What is persisted
       */
      partialize: (state) => ({
        colorScheme: state.colorScheme,
        isHapticFeedbackEnabled: state.isHapticFeedbackEnabled
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

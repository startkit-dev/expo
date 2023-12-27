// eslint-disable-next-line import/no-named-as-default -- Must import constants as Constants
import Constants, { ExecutionEnvironment } from "expo-constants"
import { Platform } from "react-native"

export const isAndroid = Platform.OS === "android"
export const isIOS = Platform.OS === "ios"
export const isWeb = Platform.OS === "web"
export const isExpoGo =
  Constants.executionEnvironment === ExecutionEnvironment.StoreClient

import { Redirect, Stack } from 'expo-router'
import { useAuthStore } from '../../stores/auth.store'
import { View, ActivityIndicator } from 'react-native'
import { Colors } from '../../constants/colors'

export default function AppLayout() {
  const { session, initialized } = useAuthStore()

  if (!initialized) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: Colors.midnight }}>
        <ActivityIndicator color={Colors.rose} />
      </View>
    )
  }

  if (!session) return <Redirect href="/(auth)/login" />

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" />
    </Stack>
  )
}
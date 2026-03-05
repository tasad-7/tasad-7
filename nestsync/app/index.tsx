import { Redirect } from 'expo-router'
import { useAuthStore } from '../stores/auth.store'
import { View, ActivityIndicator } from 'react-native'
import { Colors } from '../constants/colors'

export default function Index() {
  const { session, initialized } = useAuthStore()

  if (!initialized) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: Colors.midnight }}>
        <ActivityIndicator color={Colors.rose} size="large" />
      </View>
    )
  }

  return <Redirect href={session ? '/(app)/(tabs)/calendar' : '/(auth)/login'} />
}
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Colors } from '../../../constants/colors'
import { useAuthStore } from '../../../stores/auth.store'
import { router } from 'expo-router'
export default function Profile() {
  const { profile, signOut } = useAuthStore()
  const handleSignOut = async () => {
    await signOut()
    router.replace('/(auth)/login')
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>👤 {profile?.full_name ?? 'Profile'}</Text>
      <TouchableOpacity style={styles.btn} onPress={handleSignOut}>
        <Text style={styles.btnText}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.midnight, justifyContent: 'center', alignItems: 'center', gap: 20 },
  text: { fontSize: 22, color: Colors.white, fontWeight: '700' },
  btn: { backgroundColor: Colors.rose, paddingHorizontal: 32, paddingVertical: 14, borderRadius: 12 },
  btnText: { color: Colors.white, fontWeight: '700', fontSize: 15 },
})

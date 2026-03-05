import { View, Text, StyleSheet } from 'react-native'
import { Colors } from '../../../constants/colors'
export default function Mood() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>🌙 Mood Tracker</Text>
      <Text style={styles.sub}>Coming next session</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.midnight, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 28, color: Colors.white, fontWeight: '700' },
  sub: { fontSize: 14, color: Colors.muted, marginTop: 8 },
})

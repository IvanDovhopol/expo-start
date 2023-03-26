import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Open up App.js</Text>
      <StatusBar style="auto" />
      <TextInput autoFocus keyboardType="default" value="touch" style={styles.input} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'blue',
    fontSize: 40,
  },
  input: {
    width: 100,
    textAlign: 'center',
    fontSize: 20,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 10,
  },
});

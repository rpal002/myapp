import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Counter from "./components/counter";
import BMI from "./components/bmi";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      {/* <Counter min={0} max={10} steps={1} /> */}
      {/* <CurrencyConverter fromCurrency="USD" toCurrency="EUR" /> */}
      <BMI height={1.75} weight={70} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

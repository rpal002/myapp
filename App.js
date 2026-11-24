import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import PressableComponent from "./components/pressable";
import Touchablesdemo from "./components/touchable";
import StyleDemo from "./components/styleDemo";
import Flexdemo from "./components/flexdemo";
import LoginPage from "./components/LoginPage";
import Listdemo from "./components/ListDemo";
import Flatlistdemo from "./components/FlatList";
import Productlist from "./components/Product/Productlist";

export default function App() {
  return (
    <View style={{ width: "100%", height: "100%" }}>
      {/* <Counter min={0} max={10} steps={1} /> */}
      {/* <CurrencyConverter fromCurrency="USD" toCurrency="EUR" /> */}
      {/* <BMI height={1.75} weight={70} /> */}
      {/* <PressableComponent
        onPressIn={() => console.log("Button Pressed In")}
        onPressOut={() => console.log("Button Pressed Out")}
        onLongPress={() => console.log("Button Long Pressed")}
        onLongPressOut={() => console.log("Button Long Pressed Out")}
      /> */}
      {/* <Touchablesdemo /> */}
      {/* <StyleDemo /> */}
      {/* <Flexdemo /> */}
      {/* <Listdemo /> */}
      {/* <Flatlistdemo /> */}
      <Productlist />
    </View>
  );
}
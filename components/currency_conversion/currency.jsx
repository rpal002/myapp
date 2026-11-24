/**
 * Create a currency conversion component that allows users to convert between different currencies.
 * The component should have input fields for the amount and the currency to convert from and to.
 * It should also display the converted amount based on the current exchange rates.
 * Use React Native components such as TextInput, Button, and Text to build the UI.
 * You can use a public API to fetch the latest exchange rates for accurate conversions.
 * props will have the from and to currencies and amount suppose to be enter by TextInput. The component should handle the conversion logic and display the result.
 */

import React, { useState } from "react";
import { View, TextInput, Button, Text } from "react-native";

function CurrencyConverter(props) {
  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState(props.fromCurrency || "USD");
  const [toCurrency, setToCurrency] = useState(props.toCurrency || "INR");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const handleConvert = async () => {
    try {
      const response = await fetch(
        `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`,
      );
      const data = await response.json();
      const rate = data.rates[toCurrency];
      setConvertedAmount(amount * rate);
    } catch (error) {
      console.error("Error fetching exchange rates:", error);
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Amount"
        keyboardType="numeric"
        value={amount}
        onChangeText={(text) => setAmount(parseFloat(text))}
      />
      <TextInput
        placeholder="From Currency (e.g., USD)"
        value={fromCurrency}
        onChangeText={(text) => setFromCurrency(text)}
      />
      <TextInput
        placeholder="To Currency (e.g., EUR)"
        value={toCurrency}
        onChangeText={(text) => setToCurrency(text)}
      />
      <Button title="Convert" onPress={handleConvert} />
      <Text>Converted Amount: {convertedAmount}</Text>
    </View>
  );
}

export default CurrencyConverter;

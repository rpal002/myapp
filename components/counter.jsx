//create a counter component that increments a number when a button is clicked
import React, { useState } from "react";
import { Button, View, Text } from "react-native";

const Counter = ({ min, max, steps }) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <View>
      <Text>Counter: {count}</Text>
      <Button title="Increment" onPress={increment} />
      <Button title="Decrement" onPress={decrement} />
    </View>
  );
};

export default Counter;

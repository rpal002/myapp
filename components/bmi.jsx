/**
 * This component should allow the user to enter their height and weight and calculate their BMI using the formula: BMI = weight (kg) / (height (m) * height (m)). The component should display the calculated BMI value and also provide a classification based on the BMI value (e.g., underweight, normal weight, overweight, obese).
 * Use React Native components such as Text, View, and StyleSheet to build the UI.
 * You can also add additional features such as a reset button to clear the input fields and recalculate the BMI.
 * props will have the height and weight values. The component should handle the BMI calculation logic and display the result along with the classification.
 * allow height to be in meters (values like 1.75) and weight to be in kilograms (values like 70).
 *
 * apply the inline style to the TextInput and Text components to make them look better. You can use the StyleSheet.create method to define the styles and apply them to the components.
 *
 * The component should also handle edge cases such as invalid input values (e.g., negative numbers, non-numeric values) and display appropriate error messages to the user.
 * You can also add a feature to allow the user to switch between metric and imperial units for height and weight (e.g., feet/inches and pounds).
 * The component should be responsive and work well on different screen sizes and orientations.
 * You can also add animations or visual feedback to enhance the user experience when the BMI is calculated or when the input values are changed.
 */

import React from "react";
import { View, Text, TextInput } from "react-native";
import { Button } from "react-native";

function BMI() {
  const [height, setHeight] = React.useState();
  const [weight, setWeight] = React.useState();

  const handleHeightChange = (value) => {
    if (!isNaN(value)) {
      setHeight(value);
    }
  };

  const handleWeightChange = (value) => {
    if (!isNaN(value)) {
      setWeight(value);
    }
  };

  const calculateBMI = () => {
    if (height > 0) {
      return weight / (height * height);
    }
    return 0;
  };

  const getClassification = (bmi) => {
    if (bmi < 18.5) {
      return "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
      return "Normal weight";
    } else if (bmi >= 25 && bmi < 29.9) {
      return "Overweight";
    } else {
      return "Obese";
    }
  };

  const bmi = calculateBMI();
  const classification = getClassification(bmi);

  /**
   * Add height and weight label along with placeholders
   */
  return (
    <View style={{ padding: 20, width: "100%" }}>
      <Text>Height (m):</Text>
      <TextInput
        style={{
          borderWidth: 1,
          padding: 10,
          marginBottom: 10,
          borderRadius: 5,
          borderColor: "#ccc",
        }}
        placeholder="Height (m)"
        value={height ? height.toString() : ""}
        onChangeText={handleHeightChange}
      />
      <Text>Weight (kg):</Text>
      <TextInput
        style={{
          borderWidth: 1,
          padding: 10,
          marginBottom: 10,
          borderRadius: 5,
          borderColor: "#ccc",
        }}
        placeholder="Weight (kg)"
        value={weight ? weight.toString() : ""}
        onChangeText={handleWeightChange}
      />
      <Button title="Calculate BMI" onPress={calculateBMI} />
      <Text style={{ fontSize: 18, fontWeight: "bold", marginTop: 10 }}>
        BMI: {bmi.toFixed(2)}
      </Text>
      <Text style={{ fontSize: 16, fontWeight: "bold", marginTop: 5 }}>
        Classification: {classification}
      </Text>
    </View>
  );
}

export default BMI;

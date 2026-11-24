
import {View, Button, StyleSheet, Text } from "react-native";
import globalStyles from "./globalStyle";


function StyleDemo() {
  return (
    <View style= {styles.container}>
        <Button
          title="Press Me"
          style={globalStyles.container}
        />
      <Text style={styles.title}>Style Demo</Text>
    </View>
  );
}
export default StyleDemo;

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        backgroundColor: '#3c3333',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
});
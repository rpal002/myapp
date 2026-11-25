
import React from 'react';
import { Text, View } from 'react-native';

function Rating(props) {
   return (
    <View style={{ flexDirection: 'row' }}>
        {Array.from({ length: Math.floor(props.rating) }).map((_, index) => (
            <Text key={index}>⭐</Text>
        ))}
        {props.rating % 1 >= 0.5 && <Text>⭐</Text>}
    </View>
  );
}

export default Rating;
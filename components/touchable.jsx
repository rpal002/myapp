//Touchablesdemo.jsx
import React from 'react';
import { View, Text, TouchableOpacity, TouchableHighlight } from 'react-native';

function Touchablesdemo(props) {
    return (
        <View>
            <TouchableOpacity
                activeOpacity={0.5}
            >
                <View
                    style={{
                        width: 150,
                        height: 50,
                        backgroundColor: "cadetblue",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 5
                    }}
                >
                    <Text>Touchable opacity</Text>
                </View>
            </TouchableOpacity>
            <TouchableHighlight
                underlayColor={"greenyellow"}
                activeOpacity={0.7}
                onPress={()=>{console.log("pressed")}}
            >
                <View
                    style={{
                        width: 150,
                        height: 50,
                        backgroundColor: "cadetblue",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 5
                    }}
                >
                    <Text>Touchable Highlight</Text>
                </View>
            </TouchableHighlight>
        </View>
    );
}

export default Touchablesdemo;
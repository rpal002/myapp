import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

function Flexdemo(props) {
    return (
        <View
        style={mystyle.container}
        >
            <View
            style={mystyle.box1}
            >
                <Button title="Btn 1" />
                {/* self align example along with cross axis alignment */}
                <Text
                    style={{color:"white", alignSelf:"flex-start"}}
                >Box1</Text>
                <Button title="Btn 1" />
            </View>
            <View
            style={mystyle.box2}
            >
                <Button title="Btn 2" />
                <Button title="Btn 2" />
                <Button title="Btn 2" />
                <Button title="Btn 2" />
                <Button title="Btn 2" />
            </View>
            <View
            style={mystyle.box3}
            >
                <Button title="Btn 3" />
                <Button title="Btn 3" />
                <Button title="Btn 3" />
                <Button title="Btn 3" />
                <Button title="Btn 3" />
            </View>
        </View>
    );
}

export default Flexdemo;
const mystyle=StyleSheet.create(
    {
        container:{
            backgroundColor:"grey",
            flex:1,
        },
        box1:{
            flex:1,
            backgroundColor:"steelblue",
            flexDirection:"row",
            justifyContent:"space-around",
            alignItems:"center"
        },
        box2:{
            flex:1,
            backgroundColor:"cadetblue",
            flexDirection:"row",
            justifyContent:"flex-start",
            // alignItems:"flex-start", //wont work with flexWrap
            alignContent:"center",
            flexWrap:"wrap",
            gap:5
        },
        box3:{
            flex:2,
            backgroundColor:"powderblue",
            flexDirection:"row",
            justifyContent: "flex-end",
            alignItems:"flex-end"
        }
    }
)

 
import React from 'react';
import { View, Text, Button, Image, StyleSheet, ScrollView } from 'react-native';
import Rating from './Rating';

function Productitem({ item }) {
    const instock_style={backgroundColor:"cadetblue"}
    const outstock_style={backgroundColor:"grey"}
    return (
        <View
            style={[mystyle.container,
                item.instock?instock_style:outstock_style
            ]}
        >
            <View>
                <Image
                    source={{ uri: item.img }}
                    style={{ height: 100, width: 100 }}
                />
            </View>
            <View>
                <Text
                style={mystyle.title}
                >{item.name}</Text>
                <Text>{item.brand}</Text>
                {item.category==="electronics"&&<Text>Flat 50% off</Text>}
                <Text>Rs.{item.price}</Text>
                <Rating rating={item.rating} />
                <View
                style={mystyle.btn_container}
                >
               { item.instock?
               <Button title="Buy now" />:
               <Text>Outoff stock!!</Text>}
                <Button title="Add to cart" />
                </View>
            </View>
        </View>
    );
}

export default Productitem;
const mystyle = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:"row",
        gap:10,
        padding:5,
       
    },
    btn_container:{
        flexDirection:"row",
        gap:5
    },
    title:{
      fontSize:15,
      fontWeight:"bold"
    }
})

/*
cond?true_statement:flase_statement
cond&&true_statement
cond||false_statment

*/
import React, { useState } from 'react';
import { View,Text, Button,Image } from 'react-native';
import { products } from './products';
import { FlatList } from 'react-native';
import Productitem from './Productitem';

function Productlist(props) {
    const[productlist,setlist]=useState(products)
    return (
        <View
        style={{flex:1}}>
            <FlatList
            data={productlist}
            renderItem={({item,index})=><Productitem item={item}/>}
            ItemSeparatorComponent={
                <View
                style={{height:1,backgroundColor:"grey"}}
                >
                </View>}
            />
 
        </View>
    );
}

export default Productlist;
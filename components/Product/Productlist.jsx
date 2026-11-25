import React, { useState } from 'react';
import { View,Text, Button,Image } from 'react-native';
import { products } from './products';
import { FlatList } from 'react-native';
import Productitem from './Productitem';

function Productlist(props) {
    const[productlist,setlist]=useState(products)
    /**
     * create a filteration to filter the item category
     */
    const filterProduct = (category) =>{
        const filterProductList = productlist.filter((item)=>item.category === category);
        setlist(filterProductList);
    }
    return (
        <View
         style={{flex: 1}}>
            <View style= {{ flexDirection:"row",
                justifyContent:"center",
                gap:10,
                paddingVertical:10}}>
            <Button title="All"
                onPress={()=>{setlist(products)}}
                />
                <Button title="Electronics"
                onPress={()=>{filterProduct("electronics")}}
                />
                <Button title="Furniture"
                onPress={()=>{filterProduct("furniture")}}
                />
            </View>
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
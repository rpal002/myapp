import React from 'react';
import { Button, View,Text, ScrollView } from 'react-native';

function Listdemo(props) {
    const userlist=["sachin","virat","rohit","rahul","sachin","sachin","virat","rohit","rahul","sachin","sachin","virat","rohit","rahul","sachin","sachin","virat","rohit","rahul","sachin"];

    const user_items=userlist.map((user,index)=><Button 
    title={user}
    key={user+index}
    />)
    
    return (
        <ScrollView>
          {user_items}
        </ScrollView>
    );
}

export default Listdemo;
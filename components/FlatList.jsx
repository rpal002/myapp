import React from 'react';
import { FlatList, View,Text } from 'react-native';

function Flatlistdemo(props) {
    const userlist=["sachin","virat","rohit","rahul","sachin","sachin","virat","rohit","rahul","sachin","sachin","virat","rohit","rahul","sachin","sachin","virat","rohit","rahul","sachin","sachin","virat","rohit","rahul"]
    return (
        <View
        style={{flex:1}}
        >
            <FlatList
            data={userlist}
            renderItem={({item,index})=><View>
                <Text
                style={{fontSize:20}}
                >{index}-{item}</Text>
                </View>}
            keyExtractor={(user,index)=>user+index+Math.random()}
            ItemSeparatorComponent={<View
            style={{backgroundColor:"black",height:2}}
            >
            </View>}
            ListHeaderComponent={<View>
                <Text>User list</Text>
            </View>}
            ListFooterComponent={
                <View>
                <Text>User list ends</Text>
            </View>
            }
           />
           

        </View>
    );
}

export default Flatlistdemo;
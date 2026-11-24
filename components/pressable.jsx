/**
 * This component will be doing the Pressable elemet implementation for the app.
 * It will be used to handle the press events and will be used in the app.
 * like PressIn , PressOut, LongPress, LongresssOut etc.
 * Suggest me practical actions (on Button click) that will be performed on the pressable element :
 * - PressIn : Action - Change the button color to some A color
 * - PressOut : Action - Change the button color back to original color
 * - LongPress : Action - Show a tooltip or a message indicating that the button has been long pressed
 * - LongPressOut : Action - Hide the tooltip or message indicating that the button has been long pressed
 */

import React from 'react';
import { Button, Pressable, View } from 'react-native';

function PressableComponent(props) {
    return (
       <View>
         <Pressable
            onPressIn={() => {
                // Change the button color to some A color
                props.onPressIn();
            }}
            onPressOut={() => {
                // Change the button color back to original color
                props.onPressOut();
            }}
            onLongPress={() => {
                // Show a tooltip or a message indicating that the button has been long pressed
                props.onLongPress();
            }}
            onLongPressOut={() => {
                // Hide the tooltip or message indicating that the button has been long pressed
                props.onLongPressOut();
            }}
        >
            {/* {props.children} */}
        <Button 
            title="Press Me" 
            color="lightblue" 
            size="small"
            onPressIn={props.onPressIn}
            onPressOut={props.onPressOut}
            onLongPress={props.onLongPress}
            onLongPressOut={props.onLongPressOut}
        ></Button>

        </Pressable>
        </View>
    );
}
export default PressableComponent;


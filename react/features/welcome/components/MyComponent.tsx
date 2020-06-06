import React from 'react';
import { Text } from "react-native"

export const MyComponent: React.FC<{ prova: string }> = props => {

    return <Text style={{ width: 200, height: 200, backgroundColor: "red" }}>ciao</Text>
}
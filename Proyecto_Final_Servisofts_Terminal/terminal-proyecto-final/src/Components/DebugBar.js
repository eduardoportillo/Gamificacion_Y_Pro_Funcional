import { Text, View } from 'react-native'
import React, { Component } from 'react'

export default class DebugBar extends Component {
    render() {
        if (!this.cantidad) this.cantidad = 0;
        this.cantidad++;
        return (
            <View>
                <Text>Cantidad Render: {this.cantidad}</Text>
            </View>
        )
    }
}
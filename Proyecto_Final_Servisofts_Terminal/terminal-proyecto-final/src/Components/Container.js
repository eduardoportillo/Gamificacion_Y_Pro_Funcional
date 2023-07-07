import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { SView } from 'servisofts-component'

export default class Container extends Component {
    render() {
        return (
            <SView col={"xs-12"} center>
                <SView col={"xs-11 sm-10 md-8 lg-6 xl-4"} {...this.props}>
                    {this.props.children}
                </SView>
            </SView>
        )
    }
}
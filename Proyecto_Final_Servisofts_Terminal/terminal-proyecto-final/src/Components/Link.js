import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { SNavigation, SText, SView } from 'servisofts-component'

type PropsType = {
    href: any,
    params?: any,
    type?: "navigate" | "replace"
}
export default class Link extends Component<PropsType> {
    static defaultProps = {
        type: "navigate"
    }
    handlePress = () => {
        if (this.props.type == "replace") {
            SNavigation.replace(this.props.href, this.props.params);
            return;
        }
        SNavigation.navigate(this.props.href, this.props.params);
    }
    render() {
        return (
            <SView card padding={16} onPress={this.handlePress.bind(this)}>
                <SText>{this.props?.children ?? this.props?.href}</SText>
            </SView>
        )
    }
}
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SButtom, SList, SNavigation, SPage, SText } from 'servisofts-component';
import { Parent } from '.';
import { Container, Link } from '../../Components';
import Model from '../../Model';
import Http from '../../Http';

class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.callback = SNavigation.getParam("callback");
    }

    componentDidMount() {
        Http.GET("/user").then(e => {
            this.setState({ data: JSON.parse(e) })
            this.props.dispatch({
                component: "usuario",
                type: "getAll",
                data: JSON.parse(e)
            })
        }).catch(e => {
            console.error(e)
        })
    }
    render() {
        return (
            <SPage title={Parent.path + "/root"} onRefresh={(r) => {
                this.componentDidMount()
            }}>
                <Container>
                    <Link href={Parent.path + "/create"} >{"Create"}</Link>
                    <SList
                        data={Model.usuario.Action.getAll()}
                    />
                </Container>
            </SPage>
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(index);
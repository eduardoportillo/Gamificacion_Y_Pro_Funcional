import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SButtom, SForm, SLoad, SNavigation, SPage, SPopup, SText } from 'servisofts-component';
import { Parent } from "."
import { Container, Link } from '../../Components';
import Model from '../../Model';
class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <SPage title={Parent.path + "/create"}>
                <Container>
                    <SForm inputs={{
                        "key": { label: "Key" },
                        "nombre": { label: "Nombre" },
                        "apellido": { label: "Apellido" },
                    }}
                        onSubmitName="REGISTRAR"
                        loading={this.state.loading}
                        error={this.state.error}
                        onSubmit={(data) => {
                            this.setState({ loading: true, error: "" })
                            Model.usuario.Action.create(data).then((e) => {
                                SNavigation.replace(Parent.path + "/profile", { key: e.key })
                                this.setState({ loading: false, error: "" })
                            }).catch(e => {
                                this.setState({ loading: false, error: e })
                            })
                        }}
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
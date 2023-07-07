import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SNavigation, SPage, SText, SView } from 'servisofts-component';
import { Link, Container } from '../Components';

class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <SPage title={'Proyecto de eduardo Portillo'}>
                <Container>
                    <Link href={"/user"} type='replace'></Link>
                </Container>
            </SPage >
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(index);
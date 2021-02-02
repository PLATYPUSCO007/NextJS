import React from 'react';
import {Container} from 'semantic-ui-react'
import Header from '../../components/header';


export default function basicLayout(props){

    const {children} = props;

    return (
        <Container fluid className='basic-layout'>
            <Header />
            <Container className='content'>
                {children}
            </Container>
        </Container>
    );
}
import {Container, Grid, Image, Input} from 'semantic-ui-react';
import Link from 'next/link'

export default function topbar() {
    return(
        <div className='top-bar'>
            <Container>
                <Grid className='top-bar'> 
                    <Grid.Column width={8} className='top-bar__left'>
                        <Logo />
                    </Grid.Column>
                    <Grid.Column width={8} className='top-bar__right'>
                        <Buscador />
                    </Grid.Column>
                </Grid>
            </Container>
        </div>
    );
}

function Logo(params) {
    return(
        <Link href='/'>
            <a>
                <Image src='/logo.png' alt='Logo'/>
            </a>
        </Link>
    );
}

function Buscador(params) {
    return (<Input id='search-game' icon={{name: 'search'}} />);
}
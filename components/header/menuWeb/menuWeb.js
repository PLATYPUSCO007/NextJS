import Link from 'next/link';
import {Container, Menu, Grid, Icon, Label, MenuItem} from 'semantic-ui-react'

export default function MenuWeb(params) {

    var values = ['PlayStation', 'Xbox', 'Nintendo', 'PC', 'Mobil'];

    return(
        <div className='menu'>
            <Container>
                <Grid>
                    <Grid.Column className='menu__left' width={6}>
                        <MenuPlatforms data={values} />
                    </Grid.Column>
                    <Grid.Column className='menu__right' width={10}>
                        <MenuOptions />
                    </Grid.Column>
                </Grid>
            </Container>
        </div>
    );
}

function MenuPlatforms({...params}) {

    let valuePlatforms;
    let arrayPlatforms = [];
    var data = params.data;
    
    arrayPlatforms = data.map(element => {
        valuePlatforms = <Link href={element} key={element}>
                            <Menu.Item as='a'>
                                {element}
                            </Menu.Item>
                        </Link>
        
        return valuePlatforms
    });

    return(
        <Menu>
            {arrayPlatforms}
        </Menu>   
    );
}

function MenuOptions(params) {
    return(
        <Menu>
            <Menu.Item>
                <Icon name='user outline' />
                Mi Cuenta
            </Menu.Item>
        </Menu>
    );
}
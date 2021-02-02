import React from 'react';
import {useRouter} from 'next/router';

export default function Contactos(){

    const params = useRouter();
    const {categorias, productos} = params.query;
    console.log(params);

    return(
        <div>
            <h1>Estamos en {productos} de marca {categorias}</h1>
        </div>
    );
}
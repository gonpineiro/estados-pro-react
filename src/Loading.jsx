import React from 'react';

class Loading extends React.Component {
    componentWillUnmount() {
        /* Cuando se desmosta el componente */
        console.log('componentWillUnmount: loading');
    }

    render() {
        return <p>Cargando</p>;
    }
}

export { Loading };

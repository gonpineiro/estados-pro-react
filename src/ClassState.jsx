import React from 'react';
import { Loading } from './Loading';

class ClassState extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            error: true,
            loading: false,
        };
    }

    UNSEF_componentWillMount() {
        /* Antes de renderizar el componente */
        console.log('componentWillMount: classState');
    }

    componentWillUnmount() {
        /* Cuando se desmosta el componente */
        console.log('componentWillUnmount: classState');
    }

    componentDidMount() {
        /* Despues de renderizar el componente */
        console.log('componentDidMount: classState');
    }

    componentDidUpdate() {
        /* Cuando se actualiza un estado */
        console.log('componentDidUpdate: classState');

        if (this.state.loading) {
            setTimeout(() => {
                this.setState({ loading: false });
            }, 3000);
        }
    }

    render() {
        return (
            <div>
                <h2>Elminar {this.props.name}</h2>
                <p>Escribe el codigo de seguridad</p>

                {this.state.error && <p>Error: el codigo es incorrecto</p>}

                {this.state.loading && <Loading />}

                <input type="text" placeholder="Codigo de seguridad" />
                <button onClick={() => this.setState({ loading: true })}>Comprobar</button>
            </div>
        );
    }
}

export { ClassState };

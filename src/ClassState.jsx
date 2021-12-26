import React from 'react';
import { Loading } from './Loading';

const SECURITY_CODE = 'paradigma';
class ClassState extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: '',
            error: false,
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
                if (this.state.value !== SECURITY_CODE) {
                    this.setState({ loading: false, error: true });
                } else {
                    this.setState({ loading: false, error: false });
                }
            }, 3000);
        }
    }

    render() {
        const { value, error, loading, name } = this.state;
        return (
            <div>
                <h2>Elminar {name}</h2>
                <p>Escribe el codigo de seguridad</p>

                {error && !loading && <p>Error: el codigo es incorrecto</p>}

                {loading && <Loading />}

                <input
                    type="text"
                    placeholder="Codigo de seguridad"
                    value={value}
                    onChange={({ target: { value } }) => this.setState({ value: value })}
                />
                <button onClick={() => this.setState({ loading: true })}>Comprobar</button>
            </div>
        );
    }
}

export { ClassState };

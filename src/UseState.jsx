import React from 'react';

const SECURITY_CODE = 'paradigma';

function UseState({ name }) {
    const [state, setState] = React.useState({
        value: '',
        error: false,
        loading: false,
    });

    console.log(state);
    React.useEffect(() => {
        if (state.loading) {
            setTimeout(() => {
                if (state.value !== SECURITY_CODE) {
                    setState({
                        ...state,
                        loading: false,
                        error: true,
                    });
                } else {
                    setState({
                        ...state,
                        loading: false,
                        error: false,
                    });
                }
            }, 3000);
        }
    }, [state.loading]);

    return (
        <div>
            <h2>Elminar {name}</h2>
            <p>Escribe el codigo de seguridad</p>

            {state.error && !state.loading && <p>Error: el codigo es incorrecto</p>}

            {state.loading && <p>Cargando</p>}

            <input
                type="text"
                placeholder="Codigo de seguridad"
                value={state.value}
                onChange={({ target: { value } }) => setState({ ...state, value: value })}
            />
            <button onClick={() => setState({ ...state, loading: true })}>Comprobar</button>
        </div>
    );
}

export { UseState };

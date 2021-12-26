import React from 'react';

const SECURITY_CODE = 'paradigma';

function UseState({ name }) {
    const [state, setState] = React.useState({
        value: '',
        error: false,
        loading: false,
        deleted: false,
        confirmed: false,
    });

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
                        confirmed: true,
                    });
                }
            }, 3000);
        }
    }, [state.loading]);

    if (!state.deleted && !state.confirmed) {
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
    } else if (state.confirmed && !state.deleted) {
        return (
            <>
                <p>Pedimos confirmación</p>
                <button
                    onClick={() => {
                        setState({ ...state, deleted: true });
                    }}
                >
                    Si, eliminar
                </button>
                <button
                    onClick={() => {
                        setState({ ...state, confirmed: false, value: '' });
                    }}
                >
                    No, Me arrepiento
                </button>
            </>
        );
    } else {
        return (
            <>
                <p>Estado Elimiado</p>
                <button
                    onClick={() => {
                        setState({ ...state, confirmed: false, deleted: false, value: '' });
                    }}
                >
                    Recuperar Estado
                </button>
            </>
        );
    }
}

export { UseState };

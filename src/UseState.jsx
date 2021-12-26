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

    const onConfirm = () => {
        setState({
            ...state,
            loading: false,
            error: false,
            confirmed: true,
        });
    };

    const onError = () => {
        setState({
            ...state,
            loading: false,
            error: true,
        });
    };

    const onWrite = (value) => {
        setState({ ...state, value: value });
    };

    const onCheck = () => {
        setState({ ...state, loading: true });
    };

    const onDelete = () => {
        setState({ ...state, deleted: true });
    };

    const onReset = () => {
        setState({ ...state, confirmed: false, value: '', deleted: false });
    };

    React.useEffect(() => {
        if (state.loading) {
            setTimeout(() => {
                if (state.value !== SECURITY_CODE) {
                    onError();
                } else {
                    onConfirm();
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
                    onChange={({ target: { value } }) => onWrite(value)}
                />
                <button onClick={() => onCheck()}>Comprobar</button>
            </div>
        );
    } else if (state.confirmed && !state.deleted) {
        return (
            <>
                <p>Pedimos confirmación</p>
                <button
                    onClick={() => {
                        onDelete();
                    }}
                >
                    Si, eliminar
                </button>
                <button
                    onClick={() => {
                        onReset();
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
                        onReset();
                    }}
                >
                    Recuperar Estado
                </button>
            </>
        );
    }
}

export { UseState };

import React from 'react';

const SECURITY_CODE = 'paradigma';

function UseReducer({ name }) {
    const [state, dispatch] = React.useReducer(reducer, initialState);

    /*    const onWrite = (value) => {
        setState({ ...state, value: value });
    }; */

    React.useEffect(() => {
        if (state.loading) {
            setTimeout(() => {
                if (state.value !== SECURITY_CODE) {
                    dispatch({
                        type: 'ERROR',
                    });
                } else {
                    dispatch({
                        type: 'CONFIRM',
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
                    onChange={({ target: { value } }) =>
                        dispatch({
                            type: 'WHITE',
                            payload: value,
                        })
                    }
                />
                <button
                    onClick={() =>
                        dispatch({
                            type: 'CHECK',
                        })
                    }
                >
                    Comprobar
                </button>
            </div>
        );
    } else if (state.confirmed && !state.deleted) {
        return (
            <>
                <p>Pedimos confirmación</p>
                <button
                    onClick={() => {
                        dispatch({
                            type: 'DELETE',
                        });
                    }}
                >
                    Si, eliminar
                </button>
                <button
                    onClick={() => {
                        dispatch({
                            type: 'RESET',
                        });
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
                        dispatch({
                            type: 'RESET',
                        });
                    }}
                >
                    Recuperar Estado
                </button>
            </>
        );
    }
}

/* Reducer */
const initialState = { value: '', error: false, loading: false, deleted: false, confirmed: false };

const reducerObject = (state, payload) => ({
    CONFIRM: {
        ...state,
        loading: false,
        error: false,
        confirmed: true,
    },
    WHITE: { ...state, value: payload },
    ERROR: {
        ...state,
        error: true,
        loading: false,
    },
    DELETE: {
        ...state,
        deleted: true,
    },
    CHECK: {
        ...state,
        loading: true,
    },
    RESET: {
        ...state,
        confirmed: false,
        value: '',
        deleted: false,
    },
});

const reducer = (state, action) => {
    if (reducerObject(state)[action.type]) {
        return reducerObject(state, action.payload)[action.type];
    } else {
        return state;
    }
};

export { UseReducer };

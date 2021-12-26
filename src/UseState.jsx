import React from 'react';

const SECURITY_CODE = 'paradigma';

function UseState({ name }) {
    const [value, setValue] = React.useState('');
    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {
        if (loading) {
            setError(false);
            setTimeout(() => {
                if (value !== SECURITY_CODE) {
                    setError(true);
                }
                setLoading(false);
            }, 3000);
        }
    }, [loading]);

    return (
        <div>
            <h2>Elminar {name}</h2>
            <p>Escribe el codigo de seguridad</p>

            {error && <p>Error: el codigo es incorrecto</p>}

            {loading && <p>Cargando</p>}

            <input type="text" placeholder="Codigo de seguridad" value={value} onChange={({ target: { value } }) => setValue(value)} />
            <button onClick={() => setLoading(true)}>Comprobar</button>
        </div>
    );
}

export { UseState };

import React from 'react';

function UseState({ name }) {
    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {
        console.log('Empezando efecto');

        if (loading) {
            setTimeout(() => {
                console.log('Haciendo la validacion');

                setLoading(false);

                console.log('Terminando la validacion');
            }, 3000);
        }

        console.log('Terminando efecto');
    }, [loading]);

    return (
        <div>
            <h2>Elminar {name}</h2>
            <p>Escribe el codigo de seguridad</p>

            {error && <p>Error: el codigo es incorrecto</p>}

            {loading && <p>Cargando</p>}

            <input type="text" placeholder="Codigo de seguridad" />
            <button onClick={() => setLoading(true)}>Comprobar</button>
        </div>
    );
}

export { UseState };

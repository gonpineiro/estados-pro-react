import { UseState } from './UseState';
import { ClassState } from './ClassState';
import { UseReducer } from './UseReducer.jsx';

import './App.css';

function App() {
    return (
        <div className="App">
            <UseState name="UseState" />
            <ClassState name="ClassState" />
            <UseReducer name="UseReducer" />
        </div>
    );
}

export default App;

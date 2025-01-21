import React from "react";
import "./index.css";
import {persistor, store} from "./redux/store";
import { Provider } from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import Routers from "./routers/Routers";

function App() {
    return (
        <div>
            <Provider store={store}>
                    <PersistGate loading={null} persistor={persistor}>
                        <Routers />
                    </PersistGate>
                </Provider>
        </div>
    );
}

export default App;

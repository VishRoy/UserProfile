import createSagaMiddleware from "redux-saga";
import {createStore, applyMiddleware, compose} from "redux";
import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";

const sagaMiddleware=createSagaMiddleware();
const composeEnhancers = compose;

const store=createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(sagaMiddleware),
    ),
);

sagaMiddleware.run(rootSaga);

export default store;

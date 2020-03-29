import { applyMiddleware, createStore, Store } from "redux";
import { IApplicationState, rootReducer, rootSaga } from "state/ducks/index";
import sagaMiddleware from "state/middlewares/sagas";

export default function configureStore(
  initialState: IApplicationState
): Store<IApplicationState> {
  const middlewares = applyMiddleware(sagaMiddleware); // Create Store
  const store = createStore(rootReducer, initialState, middlewares);

  sagaMiddleware.run(rootSaga);

  return store;
}

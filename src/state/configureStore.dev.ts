import { applyMiddleware, createStore, Store } from "redux";
import { IApplicationState, rootReducer, rootSaga } from "state/ducks/index";
import sagaMiddleware from "state/middlewares/sagas";
import { composeWithDevTools } from "redux-devtools-extension";

export default function configureStore(
  initialState: IApplicationState
): Store<IApplicationState> {
  const middlewares = composeWithDevTools(applyMiddleware(sagaMiddleware));
  const store = createStore(rootReducer, initialState, middlewares);

  sagaMiddleware.run(rootSaga);

  return store;
}

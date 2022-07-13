import { applyMiddleware, combineReducers, legacy_createStore as createStore, AnyAction } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk, {ThunkDispatch} from "redux-thunk";
import moviesReducer from "./movies/reducers";

const rootReducer = combineReducers({moviesReducer});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export type ReduxState = ReturnType<typeof rootReducer>;
export type TypedDispatch = ThunkDispatch<ReduxState, any, AnyAction>;

export default store;
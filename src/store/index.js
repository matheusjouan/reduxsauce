import { createStore } from "redux";

import reducers from "./ducks/rootDucks";

const store = createStore(reducers);

export default store;

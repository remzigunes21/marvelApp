import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import productReducer from './product/reducer';
import contractsReducer from './contracts/reducer';
import transactionsReducer from './transactions/reducer';
import blocksReducer from './blocks/reducer';
import peersReducer from './peers/reducer';
import walletsReducer from './wallets/reducer';
import Saga from './saga/Saga';

const combinedReducer = combineReducers({
  productReducer: productReducer,
  contractsReducer: contractsReducer,
  transactionsReducer: transactionsReducer,
  blocksReducer: blocksReducer,
  peersReducer: peersReducer,
  walletsReducer: walletsReducer
});

const rootReducer = (state, action) => {
  if (action.type === 'RESET_APP') {
    state = undefined;
  }
  return combinedReducer(state, action);
};

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(Saga);

export default store;

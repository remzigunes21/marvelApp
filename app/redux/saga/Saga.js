import { takeLatest, call, put, select, delay, take } from "redux-saga/effects";
import * as Api from "./Api.js";
import * as actionTypes from "../actionTypes";

const actionData = function(type, payload) {
  return { type, payload };
};


export const getNearPlacesSaga = function*(action) {
  console.log("action" , action)
  try {
    const {data} = yield call(Api.searchPlaces,action.payload);

    yield put(actionData(actionTypes.GET_NEAR_PLACES, data));

  } catch (error) {
    console.log('TCL: error', error);
  }
};

export const getProductSaga = function*(action) {
  try {
    const { data } = yield call(Api.getProducts);
    console.log("get product ", data);
    yield put(actionData(actionTypes.GET_PRODUCTS, data));
  } catch (error) {
    yield put(
      actionData(actionTypes.SHOW_COMMON_ALERT, {
        message: "Hata!",
        description: typeof error === "string" ? error : "Bir şeyler yanlış gitti",
        type: "danger"
      })
    );
  }
};
export const searchProductsSaga = function*(action) {
  console.log("action", action);
  try {
    const { data } = yield call(Api.searchProducts, action.payload);

    yield put(actionData(actionTypes.SEARCH_PRODUCTS, data));
  } catch (error) {
    yield put(
      actionData(actionTypes.SHOW_COMMON_ALERT, {
        message: "Hata!",
        description: typeof error === "string" ? error : "Bir şeyler yanlış gitti",
        type: "danger"
      })
    );
  }
};


export const postProductSaga = function*(action) {
  console.log("action" , action)
  try {
    const {data} = yield call(Api.postProducts,action.payload);
    
    yield put(actionData(actionTypes.POST_PRODUCTS, data));

    yield put(
      actionData(actionTypes.GET_NEAR_PLACES, data.response.groups[0].items)
    );
  } catch (error) {
    yield put(
      actionData(actionTypes.SHOW_COMMON_ALERT, {
        message: "Hata!",
        description: typeof error === "string" ? error : "Bir şeyler yanlış gitti",
        type: "danger"
      })
    );
  }
};




export const getScanSaga = function*(action) {
  try {
    const {data} = yield call(Api.getScans);
console.log("get scan " ,data)
    yield put(actionData(actionTypes.GET_SCANS, data));
  } catch (error) {
    console.log('TCL: error', error);
    yield put(
      actionData(actionTypes.SHOW_COMMON_ALERT, {
        message: "Hata!",
        description: typeof error === "string" ? error : "Bir şeyler yanlış gitti",
        type: "danger"
      })
    );
  }
};
export const searchScansSaga = function*(action) {
  console.log("action" , action)
  try {
    const {data} = yield call(Api.searchScans,action.payload);
  
    yield put(actionData(actionTypes.SEARCH_SCANS, data));
  } catch (error) {
    yield put(
      actionData(actionTypes.SHOW_COMMON_ALERT, {
        message: "Hata!",
        description: typeof error === "string" ? error : "Bir şeyler yanlış gitti",
        type: "danger"
      })
    );
  }
};


export const postScanSaga = function*(action) {
  console.log("action" , action)
  try {
    const {data} = yield call(Api.postScans,action.payload);
    
    yield put(actionData(actionTypes.POST_SCANS, data));
    yield put(
      actionData(actionTypes.SHOW_COMMON_ALERT, {
        message: "Başarılı!",
        description:  "işleminiz devreye alınmıştır",
        type: "success"
      }))


  } catch (error) {
    console.log('TCL: error', error);
    yield put(
      actionData(actionTypes.SHOW_COMMON_ALERT, {
        message: "Hata!",
        description: typeof error === "string" ? error : "Bir şeyler yanlış gitti",
        type: "danger"
      })
    );
  }
};


//Start - Contracts
export const getContractsSaga = function*(action) {
  try {
    const { data } = yield call(Api.getContracts, action.payload);
    yield put(actionData(actionTypes.GET_CONTRACTS, data));
  } catch (error) {
    yield put(
      actionData(actionTypes.SHOW_COMMON_ALERT, {
        message: "Hata!",
        description: typeof error === "string" ? error : "Bir şeyler yanlış gitti",
        type: "danger"
      })
    );
  }
};
export const getContractsCountSaga = function* (action) {
  try {
    const { data } = yield call(Api.getContractsCount);
    yield put(actionData(actionTypes.GET_CONTRACTS_COUNT, data));
  } catch (error) {
    yield put(
      actionData(actionTypes.SHOW_COMMON_ALERT, {
        message: "Hata!",
        description: typeof error === "string" ? error : "Bir şeyler yanlış gitti",
        type: "danger"
      })
    );
  }
};

export const searchContractsSaga = function* (action) {
  try {
    const { data } = yield call(Api.searchContracts, action.payload);
    yield put(actionData(actionTypes.SEARCH_CONTRACTS, data));
  } catch (error) {
    yield put(
      actionData(actionTypes.SHOW_COMMON_ALERT, {
        message: "Hata!",
        description: typeof error === "string" ? error : "Bir şeyler yanlış gitti",
        type: "danger"
      })
    );
  }
};

//End - Contracts
//Start - Transactions
export const getTransactionsSaga = function* (action) {
  try {
    const { data } = yield call(Api.getTransactions, action.payload);
    yield put(actionData(actionTypes.GET_TRANSACTIONS, data));

  } catch (error) {
    yield put(
      actionData(actionTypes.SHOW_COMMON_ALERT, {
        message: "Hata!",
        description: typeof error === "string" ? error : "Bir şeyler yanlış gitti",
        type: "danger"
      })
    );
  }
};

export const getTransactionsCountSaga = function* (action) {
  try {
    const { data } = yield call(Api.getTransactionsCount);
    yield put(actionData(actionTypes.GET_TRANSACTIONS_COUNT, data));
  } catch (error) {
    yield put(
      actionData(actionTypes.SHOW_COMMON_ALERT, {
        message: "Hata!",
        description:
          typeof error === "string" ? error : "Bir şeyler yanlış gitti",
        type: "danger",
      })
    );
  }
};

export const searchTransactionsSaga = function* (action) {
  try {
    const { data } = yield call(Api.searchTransactions, action.payload);
    yield put(actionData(actionTypes.SEARCH_TRANSACTIONS, data));

  } catch (error) {
    yield put(
      actionData(actionTypes.SHOW_COMMON_ALERT, {
        message: "Hata!",
        description: typeof error === "string" ? error : "Bir şeyler yanlış gitti",
        type: "danger"
      })
    );
  }
};

//End - Transactions
//Start - Blocks
export const getBlocksSaga = function* (action) {
  try {
    const { data } = yield call(Api.getBlocks, action.payload);
    data.data.forEach(block => {
      block.timestamp = new Date(
        Math.floor(parseInt(block.timestamp) / 1000000)
      ).toLocaleString();
    });
    yield put(actionData(actionTypes.GET_BLOCKS, data));
  } catch (error) {
    yield put(
      actionData(actionTypes.SHOW_COMMON_ALERT, {
        message: "Hata!",
        description:
          typeof error === "string" ? error : "Bir şeyler yanlış gitti",
        type: "danger",
      })
    );
  }
};

export const getBlocksCountSaga = function* (action) {
  try {
    const { data } = yield call(Api.getBlocksCount);
    yield put(actionData(actionTypes.GET_BLOCKS_COUNT, data));
  } catch (error) {
    yield put(
      actionData(actionTypes.SHOW_COMMON_ALERT, {
        message: "Hata!",
        description:
          typeof error === "string" ? error : "Bir şeyler yanlış gitti",
        type: "danger",
      })
    );
  }
};

export const getBlockTransactionsSaga = function* (action) {
  try {
    const { data } = yield call(Api.getBlockTransactions, action.payload);
    yield put(actionData(actionTypes.GET_BLOCK_TRANSACTIONS, data));
  } catch (error) {
    yield put(
      actionData(actionTypes.SHOW_COMMON_ALERT, {
        message: "Hata!",
        description:
          typeof error === "string" ? error : "Bir şeyler yanlış gitti",
        type: "danger",
      })
    );
  }
};

export const searchBlocksSaga = function* (action) {
  try {
    const { data } = yield call(Api.searchBlocks, action.payload);
    data.data.forEach(block => {
      block.timestamp = new Date(
        Math.floor(parseInt(block.timestamp) / 1000000)
      ).toLocaleString();
    });
    yield put(actionData(actionTypes.SEARCH_BLOCKS, data));
  } catch (error) {
    yield put(
      actionData(actionTypes.SHOW_COMMON_ALERT, {
        message: "Hata!",
        description:
          typeof error === "string" ? error : "Bir şeyler yanlış gitti",
        type: "danger",
      })
    );
  }
};

//End - Blocks
//Start - Peers
export const getNodeInfoSaga = function* (action) {
  try {
    const { data } = yield call(Api.getNodeInfo);
    yield put(actionData(actionTypes.GET_NODE_INFO, data));
  } catch (error) {
    yield put(
      actionData(actionTypes.SHOW_COMMON_ALERT, {
        message: "Hata!",
        description:
          typeof error === "string" ? error : "Bir şeyler yanlış gitti",
        type: "danger",
      })
    );
  }
};

export const getPeersSaga = function* (action) {
  try {
    const { data } = yield call(Api.getPeers);
    yield put(actionData(actionTypes.GET_PEERS, data));
  } catch (error) {
    yield put(
      actionData(actionTypes.SHOW_COMMON_ALERT, {
        message: "Hata!",
        description:
          typeof error === "string" ? error : "Bir şeyler yanlış gitti",
        type: "danger",
      })
    );
  }
};

//End - Peers
//Start - Wallet
export const getWalletsSaga = function* (action) {
  try {
    const { data } = yield call(Api.getWallets);
    yield put(actionData(actionTypes.GET_WALLETS, data));
  } catch (error) {
    yield put(
      actionData(actionTypes.SHOW_COMMON_ALERT, {
        message: "Hata!",
        description:
          typeof error === "string" ? error : "Bir şeyler yanlış gitti",
        type: "danger",
      })
    );
  }
};

export const createWalletSaga = function* (action) {
  try {
    const { data } = yield call(Api.createWallet);
    yield put(actionData(actionTypes.CREATE_WALLET, data));
  } catch (error) {
    yield put(
      actionData(actionTypes.SHOW_COMMON_ALERT, {
        message: "Hata!",
        description:
          typeof error === "string" ? error : "Bir şeyler yanlış gitti",
        type: "danger",
      })
    );
  }
};

//End - Wallets

export default function*() {
  yield takeLatest(actionTypes.GET_NEAR_PLACES_REQUEST, getNearPlacesSaga);
  yield takeLatest(actionTypes.GET_PRODUCTS_REQUEST, getProductSaga);
  yield takeLatest(actionTypes.SEARCH_PRODUCTS_REQUEST, searchProductsSaga);
  yield takeLatest(actionTypes.POST_PRODUCTS_REQUEST, postProductSaga);
  yield takeLatest(actionTypes.GET_SCANS_REQUEST, getScanSaga);

  yield takeLatest(actionTypes.SEARCH_SCANS_REQUEST, searchScansSaga);
  yield takeLatest(actionTypes.POST_SCANS_REQUEST, postScanSaga);

  //tubu
  //Contracts
  yield takeLatest(actionTypes.GET_CONTRACTS_REQUEST, getContractsSaga);
  yield takeLatest(actionTypes.GET_CONTRACTS_COUNT_REQUEST, getContractsCountSaga);
  yield takeLatest(actionTypes.SEARCH_CONTRACTS_REQUEST, searchContractsSaga );

  //Transactions
  yield takeLatest(actionTypes.GET_TRANSACTIONS_REQUEST, getTransactionsSaga);
  yield takeLatest(actionTypes.GET_TRANSACTIONS_COUNT_REQUEST, getTransactionsCountSaga);
  yield takeLatest(actionTypes.SEARCH_TRANSACTIONS_REQUEST, searchTransactionsSaga);

  //Blocks
  yield takeLatest(actionTypes.GET_BLOCKS_REQUEST, getBlocksSaga);
  yield takeLatest(actionTypes.GET_BLOCKS_COUNT_REQUEST, getBlocksCountSaga);
  yield takeLatest(actionTypes.GET_BLOCK_TRANSACTIONS_REQUEST, getBlockTransactionsSaga);
  yield takeLatest(actionTypes.SEARCH_BLOCKS_REQUEST, searchBlocksSaga);

  //Peers
  yield takeLatest(actionTypes.GET_NODE_INFO_REQUEST, getNodeInfoSaga);
  yield takeLatest(actionTypes.GET_PEERS_REQUEST, getPeersSaga);

  //Wallets
  yield takeLatest(actionTypes.GET_WALLETS_REQUEST, getWalletsSaga);
  yield takeLatest(actionTypes.CREATE_WALLET_REQUEST, createWalletSaga);
}

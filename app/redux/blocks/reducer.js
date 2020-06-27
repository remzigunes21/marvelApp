import * as actionTypes from "../actionTypes";

const initialState = {
  blocks: [],
  blockTransactions: [],
  blockTransactionsStatus: false,
  blocksCount: 0
 
  

};

export default (state = initialState, action) => {
  const { type, payload } = action;
  //Products
  if (type === actionTypes.GET_BLOCKS) {
    return {
      ...state,
      blocks: payload.data,
    };
  }
  if (type === actionTypes.GET_BLOCKS_COUNT) {
    return {
      ...state,
      blocksCount: payload.data,
    };
  }
  if (type === actionTypes.GET_BLOCK_TRANSACTIONS) {
    return {
      ...state,
      blockTransactions: payload.data,
      blockTransactionsStatus: true
    };
  }
  if (type === actionTypes.RESET_BLOCK_TRANSACTIONS) {
    return {
      ...state,
      blockTransactions: [],
      blockTransactionsStatus: false
    };
  }
  if (type === actionTypes.SEARCH_BLOCKS) {
    return {
      ...state,
      blocks: payload.data,
    };
  }
  if (type === actionTypes.SET_BLOCKS_COUNT) {
    return {
      ...state,
      blocksCount: payload.data,
    };
  }
  return state;
};
//   }

//   if ( type === actionTypes.SEARCH_PRODUCTS )
//   {
//     return {
//       ...state,
//       products: payload
//     };
//   }

//   if ( type === actionTypes.SET_SCANNED_BARCODE )
//   {
//     return {
//       ...state,
//       scannedBarcode: payload
//     };
//   }
//   if ( type === actionTypes.SET_NEW_PRODUCT )
//   {
//     return {
//       ...state,
//       newProduct: payload
//     };
//   }
//   //Scans
//   if ( type === actionTypes.GET_SCANS )
//   {
//     return {
//       ...state,
//       scans: payload,
//     };
//   }

//   if ( type === actionTypes.SEARCH_SCANS )
//   {
//     return {
//       ...state,
//       scans: payload,
//     };
//   }

//   if ( type === actionTypes.SET_NEW_SCAN )
//   {
//     return {
//       ...state,
//       newScan: payload,
//     };
//   }


//   if ( type === actionTypes.GET_NEAR_PLACES )
//   {
//     return {
//       ...state,
//       nearPlaces: payload
//     };
//   }

//   if ( type == actionTypes.SHOW_COMMON_ALERT )
//   {
//     return {
//       ...state,
//       alert: {
//         isVisible: true,
//         alertObj: { message: payload.message, description: payload.description, type: payload.type }
//       }
//     }
//   }

//   if ( action.type === actionTypes.HIDE_COMMON_ALERT )
//   {
//     return {
//       ...state,
//       alert: {
//         isVisible: false
//       }
//     };
//   }
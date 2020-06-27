import * as Service from '../../services/CustomHttpService';

export const doGet = (endpoint, body) => {
  return Service.axiosGet({
    body,
    endpoint,
  });
};



export const doPost = (endpoint, body) => {
  return Service.axiosPost({
    body,
    endpoint,
  });
};


export const doFoursquareGet = (filter) => {
  return Service.fourSquareGet({
   filter
  });
};

export const getProducts = () => {
  return doGet('/products');
};

//Start
// Contracts
export const getContracts = (paginate) => {
  return doGet('/contracts?p=' + paginate.page + '&l=' + paginate.limit);
};
export const getContractsCount = () => {
  return doGet('/contractsCount');
};
export const searchContracts = (value) => {
  return doGet('/contracts?f=' + value + '&p=' + 0 + '&l=' + 1000 );
};


//Transactions
export const getTransactions = (paginate) => {
  return doGet('/transactions?p=' + paginate.page + '&l=' + paginate.limit);
};

export const getTransactionsCount = () => {
  return doGet("/transactionsCount");
};

export const searchTransactions = (value) => {
  return doGet('/transactions?f=' + value + '&p=' + 0 + '&l=' + 1000);
};


//Blocks
export const getBlocks = (paginate) => {
  return doGet("/allBlocks?p=" + paginate.page + "&l=" + paginate.limit);
};

export const getBlocksCount = () => {
  return doGet("/blocksCount");
};

export const searchBlocks = (value) => {
  return doGet('/allBlocks?f='+value+'&p='+0+'&l='+1000);
};

export const getBlockTransactions = (params) => {
  return doGet("/getBlockTransactions", params);
};



//Peers
export const getNodeInfo = () => {
  return doGet("/getNodeInfo");
};

export const getPeers = () => {
  return doGet("/getPeers");
};


//Wallets
export const getWallets = () => {
  return doGet("/getAccounts");
};

export const createWallet = () => {
  return doPost("/createAccount");
};

//End

export const postProducts = (body) => {
  return doPost('/products',body);
};

export const searchProducts = (filter) => {
  return doGet('/products'+filter);
};


export const getScans = () => {
  return doGet('/scans');
};


export const postScans = (body) => {
  return doPost('/scans',body);
};

export const searchScans = (filter) => {
  return doGet('/scans'+filter);
};



export const searchPlaces = (filter) => {
  return doGet('/locations'+filter);
};


export const getCurrentPlace = (filter) => {

  return doGet('/locations'+filter);
};
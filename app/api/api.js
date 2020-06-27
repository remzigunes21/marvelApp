import MD5 from 'md5';

const BASE_URL = 'http://gateway.marvel.com/v1/public';

const PRIVATE_KEY = 'c3c763117c444034fe48699524bd96b44012b642';
const PUBLIC_KEY = 'd02b68e968f96a6f41a2b718f4ef110b';

function objectToQueryParameters(paramObject) {
  let queryParameters = '?';
  Object.keys(paramObject).forEach(key => {
    queryParameters += key + '=' + paramObject[key] + '&';
  });

  queryParameters = queryParameters.slice(0, queryParameters.length - 1);

  return queryParameters;
}

class API {
  getCharacters(additionalParams) {
    const timestamp = Number(Date.now());
    const hash = MD5(timestamp + PRIVATE_KEY + PUBLIC_KEY);

    const params = {
      ...additionalParams,
      ts: timestamp,
      apikey: PUBLIC_KEY,
      hash,
    };
    const url = BASE_URL + '/characters' + objectToQueryParameters(params);
    console.log(url);
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
      })
        .then(response => response.json())
        .then(data => resolve(data))
        .catch(data => reject(data));
    });
  }

  getCharacterById(characterId, additionalParams) {
    const timestamp = Number(Date.now());
    const hash = MD5(timestamp + PRIVATE_KEY + PUBLIC_KEY);

    const params = {
      ...additionalParams,
      ts: timestamp,
      apikey: PUBLIC_KEY,
      hash,
    };
    const url =
      BASE_URL + '/characters/' + characterId + objectToQueryParameters(params);
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
      })
        .then(response => response.json())
        .then(data => resolve(data))
        .catch(data => reject(data));
    });
  }

  getComicsOfCharacterById(characterId, additionalParams) {
    const timestamp = Number(Date.now());
    const hash = MD5(timestamp + PRIVATE_KEY + PUBLIC_KEY);

    const params = {
      ...additionalParams,
      ts: timestamp,
      apikey: PUBLIC_KEY,
      hash,
    };
    const url =
      BASE_URL +
      '/characters/' +
      characterId +
      '/comics' +
      objectToQueryParameters(params);
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
      })
        .then(response => response.json())
        .then(data => resolve(data))
        .catch(data => reject(data));
    });
  }
}

const apiSingleton = new API();
export default apiSingleton;

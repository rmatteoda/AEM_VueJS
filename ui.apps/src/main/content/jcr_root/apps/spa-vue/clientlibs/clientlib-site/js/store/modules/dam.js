import queryString from 'query-string';

const state = {
  assets: [],
  //assetsPath: '/content/dam',
};

const mutations = {
  getAssets(state, assets) {
    state.assets = assets;
  },
};

const actions = {
  getAssets({ commit }, assetsPath) {
  	const params = {
      ASSETS_PATH: assetsPath,
    };
    const url = `http://localhost:4502/bin/assetsStoreList?${queryString.stringify(params)}`;
    console.log('CALL get assets : ' + url);
        
    fetch(url, { method: 'GET' }).then(
      response => response.json(),
    ).then((json) => {
      if (json.error) {
      	console.log('ERROR on get assets from AEM instance');
        //commit('getAssets', json.error);
      } else {
      	console.log('SUCESS on get assets from AEM instance');
        
        //commit('getAssets', json.ASSETS);
      }
    });
  },
};

export default {
  state,
  mutations,
  actions,
};

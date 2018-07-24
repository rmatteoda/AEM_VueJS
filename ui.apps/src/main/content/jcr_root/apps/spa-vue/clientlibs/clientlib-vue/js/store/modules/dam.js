import queryString from 'query-string';

const state = {
  assets: [],
};

const mutations = {
  setAssets(state, assets) {
    state.assets = assets;
  },
};

const actions = {
  getAssets({ commit }, assetsPath) {
  	const params = {
      ASSETS_PATH: assetsPath,
    };
    
    const urlService = `/bin/assetsStoreList?${queryString.stringify(params)}`;
    
    $.ajax ({
	    url: urlService,
	    dataType: "json",
	    contentType: "application/json",
	    success: function (jsonData) {
	        console.log("Vue.js DAM: get assets from AEM sucess");
	        commit('setAssets', jsonData);
	    },
	    error: function() {
	        console.log('ERROR on get assets from AEM instance ');
	    }
	});
  },
};

export default {
  state,
  mutations,
  actions,
};

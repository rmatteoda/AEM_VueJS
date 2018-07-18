//import queryString from 'query-string';

const state = {
  count: 0
};

const mutations = {
  increment: state => state.count++,
  decrement: state => state.count--
};

export default {
  state,
  mutations,
};

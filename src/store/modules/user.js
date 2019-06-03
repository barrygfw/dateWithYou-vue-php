/* eslint no-shadow: ["error", { "allow": ["state"] }] */

const types = {
	SET_USER_NAME: 'SET_USER_NAME', // 用户名
	SET_USER_IDENTIFY: 'SET_USER_IDENTIFY', // 0=>未登录;1=>LAPFUTURE;
	CLEAR_ALL: 'CLEAR_ALL',
};

const state = {
	USER_NAME: 'Vistor',
	USER_IDENTIFY: 0, // 未登录
};

// getters
const getters = {
	USER_NAME: state => state.USER_NAME,
	USER_IDENTIFY: state => state.USER_IDENTIFY,
};

// mutations
const mutations = {
	[types.SET_USER_NAME](state, USER_NAME) {
		USER_NAME ? (state.USER_NAME = USER_NAME) : (state.USER_NAME = '');
	},
	[types.SET_USER_IDENTIFY](state, USER_IDENTIFY) {
		USER_IDENTIFY
			? (state.USER_IDENTIFY = USER_IDENTIFY)
			: (state.USER_IDENTIFY = 0);
	},
	[types.CLEAR_ALL](state) {
		state.USER_NAME = 'Vistor';
		state.USER_IDENTIFY = 0;
	},
};

// actions
const actions = {
	[types.SET_USER_NAME]({ commit }, USER_NAME) {
		commit(types.SET_USER_NAME, USER_NAME);
	},
	[types.SET_USER_IDENTIFY]({ commit }, USER_IDENTIFY) {
		commit(types.SET_USER_IDENTIFY, USER_IDENTIFY);
	},
	[types.CLEAR_ALL]({ commit }) {
		commit(types.CLEAR_ALL);
	},
};

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations,
};

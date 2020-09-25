export const state = () => ({
    user: {
        username: "",
        password: "",
        name: "",
        email: "",
        telephone: ""
    }
});
export const mutations = {
    FILL_USER_INFO(state, user) {
        state.user = user;
    },
    EDIT_USER(state, { user}) {

    }

}

export const actions = {
    user({ commit }) {
        return new Promise(resolve => {
            const USER = window.localStorage.getItem('user')

            if (!USER) {
                return resolve([])
            }

            return resolve(JSON.parse(USER))
        })
            .then(userInfo => commit('FILL_USER_INFO', { userInfo }))
    }
}
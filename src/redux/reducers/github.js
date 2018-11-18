/*
 src/reducers/simpleReducer.js
*/
// import UserGithubAPI from '../../apis/user'
const initialState = {
    search: "",
    reload: false,
    show_profile: {
        show: false,
        data: {
            name_github: ""
        }
    },
    show_repo: {
        show: false,
        data: {
            name_github: ""
        }
    },
};
export default(state = initialState, action) => {
    switch (action.type) {
        case 'SEARCH':
            state = {
                search: action.payload.SEARCH
            }
            return state
        case 'RELOAD':
            state = {
                ...state,
                reload: true
            }
            return state
        case 'LOADUSER':
            state = {
                ...state,
                search: action.payload.SEARCH,
                reload: true
            }
            // UserGithubAPI.searchUser(action.payload.SEARCH);
            return state;

        case 'LOADUSER_SUCCESS':
            state = {
                ...state,
                reload: false,
                show_profile: {
                    show: true,
                    data: action.payload.show_profile.data
                }
            }
            return state;
        case 'LOADUSER_FAIL':
            state = {
                ...state,
                reload: false,
                show_profile: {
                    show: false,
                    data: {}
                }
            }
            return state;
        case 'LOADREPO_SUCCESS':
            state = {
                ...state,
                reload: false,
                show_repo: {
                    show: true,
                    data: action.payload.show_repo.data
                }
            }
            return state;
        default:
            return state
    }
}
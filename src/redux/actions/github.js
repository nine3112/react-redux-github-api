const initaction = {
    type: "",
    payload: {}
}
export const github = (action = initaction) => dispatch => {
    dispatch({type: action.type, payload: action.payload})
}

export const loadUser = (json) => {
    return {
        type: "LOADUSER",
        payload: {
            SEARCH: json
        }
    }
}

export const loadUserSuccess = (json) => {
    return {
        type: "LOADUSER_SUCCESS",
        payload: {
            show_profile: {
                show: true,
                data: json
            }
        }
    }
}

export const loadUserFail = () => {
    return {
        type: "LOADUSER_FAIL",
        payload: {
            show_profile: {
                show: false,
                data: {}
            }
        }
    }
}

export const loadRepoSuccess = (json) => {
    return {
        type: "LOADREPO_SUCCESS",
        payload: {
            show_repo: {
                show: true,
                data: json,
                page: 1
            }
        }
    }
}

export const loadRepoFail = () => {
    return {
        type: "LOADREPO_FAIL",
        payload: {
            show_repo: {
                show: false,
                data: [],
                page: 1
            }
        }
    }
}

export const Reload = (bool) => {
    return {
        type: "RELOAD",
        payload: {
            reload: bool
        }
    }
}

export const loadRepoMoreSuccess = (temp, page) => {
    return {
        type: "LOADREPO_MORE_SUCCESS",
        payload: {
            show_repo: {
                show: true,
                data: temp,
                page: page + 1
            }
        }
    }
}
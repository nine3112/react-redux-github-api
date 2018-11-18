const _http = 'https://api.github.com/';

const UserGithubAPI = {
    async searchUser(usergithub) {
        try {
            const response = await fetch(_http + 'users/' + usergithub, {
                method: 'get',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            } else {
                const error = new Error(response.statusText);
                error.response = response;
                throw response.statusText;
            }
        } catch (error_1) {
            return error_1
        }
    },
    async listRepo(usergithub) {
        try {
            const response = await fetch(_http + 'users/' + usergithub + '/repos', {
                method: 'get',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            } else {
                const error = new Error(response.statusText);
                error.response = response;
                throw response.statusText;
            }
        } catch (error_1) {
            return error_1
        }
    }
};

export default UserGithubAPI;
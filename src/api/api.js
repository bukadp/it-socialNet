import axios from "axios";

//const baseUrl = 'https://social-network.samuraijs.com/api/1.0/'
const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '45bfe59c-1b15-4521-a363-972f2b6d31e4'
    }
})

export const userAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    },

    unFollow(userId) {
        return instance.delete(`follow/${userId}`)
    },

    follow(userId) {
        return instance.post(`follow/${userId}`)
    },

    getProfile(userId) {
        console.warn('Obsolete method. Please use profileAPI object')
        return profileAPI.getProfile(userId)
    }
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/` + userId)
    },
    getStatus(userId) {
        return instance.get(`/profile/status/` + userId)
    },
    updateStatus(status) {
        return instance.put(`/profile/status`, {status: status})
    },
}


export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    }
}

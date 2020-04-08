var app = {
    setToken: function (token) {
        localStorage.setItem("token", token);
    },
    getToken: function () {
        return localStorage.getItem("token");
    },
    removeToken: function () {
        return localStorage.removeItem("token");
    },
    getName: function () {
        return localStorage.getItem("username");
    },
    setName: function (username) {
        return localStorage.setItem("username", username);
    },
    removeName: function () {
        return localStorage.removeItem("username");
    },
    getUserId: function () {
        return localStorage.getItem("userid");
    },
    setUserId: function (userid) {
        return localStorage.setItem("userid", userid);
    },
    removeUserId: function () {
        return localStorage.removeItem("userid");
    }

};

export default app;

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
    },
    getTestId: function () {
        return localStorage.getItem("testid");
    },
    setTestId: function (testid) {
        return localStorage.setItem("testid", testid);
    },
    removeTestId: function () {
        return localStorage.removeItem("testid");
    },
    getTestName: function () {
        return localStorage.getItem("testname");
    },
    setTestName: function (testid) {
        return localStorage.setItem("testname", testid);
    },
    removeTestName: function () {
        return localStorage.removeItem("testname");
    },
    getTestUrl: function () {
        return localStorage.getItem("testurl");
    },
    setTestUrl: function (testid) {
        return localStorage.setItem("testurl", testid);
    },
    removeTestUrl: function () {
        return localStorage.removeItem("testurl");
    }

};

export default app;

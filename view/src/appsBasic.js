var app = {
    setToken: function (token) {
        localStorage.setItem("token", token);
    },
    getToken: function () {
        return localStorage.getItem("token");
    },
    getName: function(){
        return localStorage.getItem("firstname");
    },
    removeToken: function () {
        return localStorage.removeItem("token");
    }
};

export default app;

var APP_LOG_LIFECYCLE = false;
var webstore = new Vue({
    el: '#app',
    data() {
        return {
            sitename: 'Vue.js Pet Depot',
        }

    },
    beforeCreate: function() {
        if (APP_LOG_LIFECYCLE) {
            console.log("beforeCreate");
        }
    },
    created: function() {
        if (APP_LOG_LIFECYCLE) {
            console.log("created");
        }
    },
    beforeMount() {
        if (APP_LOG_LIFECYCLE) {
            console.log("beforeMount");
        }
    },
    mounted() {
        if (APP_LOG_LIFECYCLE) {
            console.log("mounted");
        }
    },
    beforeUpdate() {
        if (APP_LOG_LIFECYCLE) {
            console.log("beforeUpdate");
        }
    },
    beforeDestroy() {
        if (APP_LOG_LIFECYCLE) {
            console.log("beforeDestroy");
        }
    },
    destroyed() {
        if (APP_LOG_LIFECYCLE) {
            console.log("destroyed");
        }
    },

});
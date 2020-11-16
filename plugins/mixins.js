import Vue from 'vue';

const showdown = require('showdown');
const converter = new showdown.Converter();

Vue.mixin({
    methods: {
        convertName(user) {
            if (user === null) {
                return 'Anonymouse';
            }
            if (user.profile && user.profile.nick) {
                return user.profile.nick;
            }
            if (user.first_name || user.last_name) {
                return user.first_name + ' ' + user.last_name;
            }
            return user.username;
        },
        cleanData(data, fields) {
            let out = {};
            if (typeof fields === 'undefined') {
                fields = Object.keys(data)
            }
            fields.forEach(i => {
                if (typeof data[i] !== 'undefined') {
                    if (data[i] && ['created', 'updated', 'start_date', 'due_date'].includes(i)) {
                        out[i] = this.momentTime(data[i]).format('YYYY-MM-DD HH:mm')
                    } else if (data[i] && i === "options") {
                        out[i] = {};
                        for (let j in data[i]) {
                            out[i][j] = data[i][j]
                        }
                    } else if (Array.isArray(data[i])) {
                        out[i] = data[i].map(x => {
                            return x.id ? x.id : x
                        })
                    } else if (typeof data[i] === 'object' && data[i] && data[i].id) {
                        out[i] = data[i].id
                    } else {
                        out[i] = data[i]
                    }
                }
            });
            return out
        },
        toTop() {
            const myDiv = document.getElementById('__layout');
            myDiv.scrollTop = 0;
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        },
        convertTime(seconds) {
            let interval = Math.floor(seconds / 31536000);
            if (interval > 1) {
                return interval + " years";
            }
            interval = Math.floor(seconds / 2592000);
            if (interval > 1) {
                return interval + " month";
            }
            interval = Math.floor(seconds / 86400);
            if (interval > 1) {
                return interval + " day";
            }
            interval = Math.floor(seconds / 3600);
            if (interval > 1) {
                return interval + " hours";
            }
            interval = Math.floor(seconds / 60);
            if (interval > 1) {
                return interval + " minutes";
            }
            return Math.floor(seconds) + " seconds";
        },
        timeSince(date) {
            let seconds = Math.floor((new Date() - date) / 1000);
            let interval = seconds / 31536000;
            if (interval > 1) {
                return Math.floor(interval) + " years";
            }
            interval = seconds / 2592000;
            if (interval > 1) {
                return Math.floor(interval) + " months";
            }
            interval = seconds / 86400;
            if (interval > 1) {
                return Math.floor(interval) + " days";
            }
            interval = seconds / 3600;
            if (interval > 1) {
                return Math.floor(interval) + " hours";
            }
            interval = seconds / 60;
            if (interval > 1) {
                return Math.floor(interval) + " minutes";
            }
            return Math.floor(seconds) + " seconds";
        },
        momentTime(date) {

        },
        toHTML(val) {
            return val ? converter.makeHtml(val) : '';
        },
        cleanURI(url) {
            if (url) {
                return url.split("?")[0].split("#")[0];
            }
            return null
        },
    },
    computed: {
        currentUser: {
            get() {
                return this.$store.getters['auth/getUser']
            },
            set() {

            }
        }
    }
});

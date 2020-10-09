import Vue from "vue";

import {Input, Field, Icon, Checkbox, Skeleton, Dropdown, Taginput, Upload, Loading, Pagination, Snackbar} from 'buefy';

Vue.use(Input);
Vue.use(Field);
Vue.use(Icon);
Vue.use(Checkbox);
Vue.use(Skeleton);
Vue.use(Dropdown);
Vue.use(Taginput);
Vue.use(Upload);
Vue.use(Loading);
Vue.use(Pagination);
Vue.use(Snackbar);

Vue.mixin({
    methods: {
        rdNum(min, max) {
            return Math.random() * (max - min) + min;
        }
    }
})

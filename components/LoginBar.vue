<template>
    <b-dropdown position="is-bottom-left" append-to-body v-if="!Boolean(currentUser)">
        <div slot="trigger" class="clickable">Log in</div>
        <b-dropdown-item custom>
            <login></login>
        </b-dropdown-item>
    </b-dropdown>
    <button v-else class="button normalize is-bold">{{ convertName(currentUser) }}</button>
</template>

<script>
import Login from "./Login";

export default {
    name: "LoginBar",
    components: {Login},
    props: {
        layout: {
            default: 'private'
        }
    },
    data() {
        return {
            showLogin: false
        }
    },
    methods: {
        handleClick(flag) {
            this.showLogin = true;
        }
    },
    computed: {
        app() {
            return this.$store.state.config.app;
        },
    }
}
</script>

<style scoped>

</style>

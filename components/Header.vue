<template>
    <header class="header">
        <div class="header-body">
            <div class="container">
                <div class="level">
                    <div class="level-left">
                        <n-link v-if="partHost" class="logo" to="/">
                            <span class="is-uppercase">{{ partHost.name }}</span>
                            <span>.{{ partHost.ext }}</span>
                        </n-link>
                        <n-link v-else class="logo" to="/">
                            <span class="is-uppercase">FOURNALIST</span>
                            <span>.com</span>
                        </n-link>
                    </div>
                    <div class="level-right">
                        <b-field grouped>
                            <div class="control" v-if="publication.options['allow_guess_post']">
                                <n-link to="/post" class="button is-success">
                                    <span>Create</span>
                                    <b-icon size="is-small" icon="pen"></b-icon>
                                </n-link>
                            </div>
                            <b-input expanded icon="magnify" placeholder="Search..."></b-input>
                            <div class="control">
                                <login-bar></login-bar>
                            </div>
                        </b-field>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
import LoginBar from "@/components/LoginBar";

export default {
    name: "PartialHeader",
    components: {LoginBar},
    computed: {
        publication() {
            return this.$store.state.config.publication
        },
        partHost() {
            if (this.publication) {
                let arr = this.publication.host.split(".");
                return {
                    name: (this.publication.host.match(/([^.]+)\.\w{2,3}(?:\.\w{2})?$/) || [])[1],
                    ext: arr[arr.length - 1]
                }
            } else {
                return null
            }

        }
    }
}
</script>

<style scoped>

</style>

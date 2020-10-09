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
                        <b-field>
                            <div class="control">
                                <n-link to="/post" class="button is-success">
                                    <span>Create</span>
                                    <b-icon size="is-small" icon="pen"></b-icon>
                                </n-link>
                            </div>
                            <b-input expanded icon="magnify" placeholder="Search..."></b-input>
                        </b-field>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: "PartialHeader",
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

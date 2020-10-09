<template>
    <header class="header">
        <div class="header-body">
            <div class="container">
                <div class="level">
                    <div class="level-left">
                        <n-link class="logo" to="/">pushFACT<span>.com</span></n-link>
                    </div>
                    <div class="level-right">
                        <div class="level-item">
                            <div class="button">
                                <span>Post</span>
                                <b-icon size="is-small" icon="pen"></b-icon>
                            </div>
                        </div>
                        <div class="level-item">
                            <b-field>
                                <b-input icon="magnify" placeholder="Search..."></b-input>
                            </b-field>
                        </div>
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
        }
    }
}
</script>

<style scoped>

</style>

<template>
    <header class="header">
        <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
            <div class="container">
                <div class="navbar-brand">
                    <n-link v-if="partHost" class="navbar-item logo" to="/">
                        <span class="is-uppercase">{{ partHost.name }}</span>
                        <span>.{{ partHost.ext }}</span>
                    </n-link>
                    <n-link v-else class="navbar-item logo" to="/">
                        <span class="is-uppercase">FOURNALIST</span>
                        <span>.com</span>
                    </n-link>
                    <a role="button" class="navbar-burger burger" @click="isActive = !isActive">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>
                <div id="navbarBasicExample" class="navbar-menu" v-bind:class="{'is-active': isActive}">
                    <div class="navbar-end">
                        <div class="navbar-item">
                            <login-bar></login-bar>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
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
    },
    data() {
        return {
            isActive: false
        }
    }
}
</script>

<style lang="scss">
.header .navbar {
    z-index: 40;
}

.sub-nav {
    box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.05), 0 2px 4px 0 rgba(0, 0, 0, 0.06);
    height: 3rem;
    margin-bottom: 1rem;
    position: sticky!important;
    top: 0;

    .navbar-start {
        margin-left: -.75rem;
    }

    .navbar-menu.is-mobile {
        align-items: stretch;
        display: flex;
        box-shadow: unset;
        padding: .25rem 0;

        .navbar-start {
            display: flex;
            justify-content: flex-start;
            margin-right: auto;
        }
    }
}
</style>

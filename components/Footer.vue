<template>
    <footer class="footer">
        <div class="has-text-centered">
            <p>{{publication.host}} © 2020 All Rights Reserved</p>
        </div>
    </footer>
</template>

<script>
export default {
    name: "PartialFooter",
    computed: {
        publication() {
            return this.$store.state.config.publication
        },
    }
}
</script>

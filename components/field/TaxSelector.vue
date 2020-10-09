<template>
    <b-taginput
        :value="data"
        :data="response.results"
        autocomplete
        allow-new
        field="term.title"
        icon="label"
        :placeholder="`Add a ${taxonomy}`"
        @add="handleInput"
        @remove="handleInput"
        :size="size"
        @typing="fetch">
        <template slot-scope="props">{{ props.option['term'].title }}</template>
        <template slot="empty">There are no items</template>
    </b-taginput>
</template>

<script>
import {debounce} from "lodash";

export default {
    name: "TaxSelector",
    props: {
        value: {
            type: Array,
            require: true,
            default: () => []
        },
        taxonomy: {
            default: 'tag',
            type: String
        },
        size: String
    },
    data() {
        return {
            data: [],
            response: {
                results: [],
                count: 0
            }
        }
    },
    computed: {
        uri() {
            return `/pub-${this.$store.state.config.publication.id}/taxonomies/`
        }
    },
    methods: {
        init() {
            this.data = this.value.filter(x => x.taxonomy === this.taxonomy);
        },
        fetch: debounce(async function (text) {
            this.response = await this.$axios.$get(this.uri, {
                params: {
                    search: text,
                    taxonomy: this.taxonomy
                }
            })
        }),
        async handleInput(data) {
            if (typeof data === 'string') {
                data = await this.$axios.$post(this.uri, {
                    term_title: data,
                    taxonomy: this.taxonomy,
                    publication: this.$store.state.config.publication.id
                });
            }
            if (data && data.id) {
                this.$emit('select', data);
            }
        }
    },
    watch: {
        value: {
            deep: true,
            handler: function () {
                this.init()
            }
        }
    },
    created() {
        this.init();
    }
}
</script>

<style scoped>

</style>

<template>
    <div class="card">
        <div class="card-content">
            <s-field v-for="(sch, i) in schema.options.schemas" :key="i" :schema="sch" :value="temp[sch.field]"
                     @input="temp[sch.field] = $event"/>
        </div>
    </div>
</template>

<script>
export default {
    name: "FieldJson",
    props: {
        schema: {},
        value: {
            default: () => {
                return {}
            }
        }
    },
    data() {
        return {
            temp: this.value
        }
    },
    watch: {
        temp: {
            handler: function (after, before) {
                this.$emit('input', after)
            },
            deep: true
        }
    }
}
</script>

<style scoped>

</style>

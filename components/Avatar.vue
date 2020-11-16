<template>
    <div class="image avatar relative" v-bind:class="{'initials': !isUpdating && !(data && data.sizes)}">
        <Upload v-if="isUpdating" class="upload" @done="handleUpload"></Upload>
        <img class="is-round" v-else-if="data && data.sizes"
             :src="cleanURI(data.sizes['thumb_247_247'] ? data.sizes['thumb_247_247'] : data.path)" alt="">
        <b-icon v-else :icon="icon"></b-icon>
        <div v-if="canUpdate" class="medal" @click="isUpdating = !isUpdating">
            <b-icon size="is-small" :icon="isUpdating ? 'close' : 'upload'"></b-icon>
        </div>
        <div v-if="canUpdate && data" class="delete" @click="data = null"></div>
    </div>
</template>

<script>
export default {
    name: "Avatar",
    props: {
        canUpdate: {
            type: Boolean,
            default: false
        },
        value: {
            default: null,
            type: Object
        },
        name: {
            default: null
        },
        icon: {
            default: 'account-circle-outline',
            type: String
        }
    },
    data() {
        return {
            data: this.value,
            isUpdating: false
        }
    },
    methods: {
        handleUpload(files) {
            if (files.length) {
                this.data = files[0]
                this.isUpdating = false
            }
        }
    },
    watch: {
        data() {
            this.$emit('input', this.data)
        },
        value() {
            this.data = this.value
        }
    }
}
</script>

<style lang="scss">
.avatar.is-16x16 {
    .mdi-24px.mdi-set, .mdi-24px.mdi:before {
        font-size: 16px;
    }
}
</style>

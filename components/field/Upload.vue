<template>
    <b-upload v-model="dropFiles" :multiple="multiple" drag-drop @input="handleInput">
        <div class="content has-text-centered">
            <p>
                <b-icon icon="cloud-upload" size="is-large"></b-icon>
            </p>
            <p v-if="text">{{text}}</p>
        </div>
        <b-loading :is-full-page="false" :active.sync="isLoading" :can-cancel="true"></b-loading>
    </b-upload>
</template>

<script>
    export default {
        props: {
            text: {},
            multiple: {
                type: Boolean,
                default: false
            },
            app: {}
        },
        data() {
            return {
                dropFiles: [],
                isLoading: false,
            }
        },
        name: 'upload',
        methods: {
            async handleInput(data) {
                let results = [];
                this.isLoading = true;
                if (this.multiple) {
                    for (let i = 0; i < data.length; i++) {
                        let res = await this.beforeUpload(data[i]);
                        results.push(res)
                    }
                } else {
                    let res = await this.beforeUpload(data);
                    results.push(res)
                }
                this.$emit('done', results);
                this.dropFiles = [];
                this.isLoading = false;
            },
            async beforeUpload(file) {
                let formData = new FormData();
                formData.append('path', file);
                formData.append('title', file.name);
                if (this.app) {
                    formData.append('app', this.app.id);
                }
                return await this.$api.media.create(formData);
            },
        }
    }
</script>

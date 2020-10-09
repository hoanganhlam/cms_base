<template>
    <div>
        <div class="columns is-multiline">
            <div :class="`column ${column}`" v-if="multiple || !shows.length">
                <div class="avatar is-bordered initials v-center clickable image is-1by1">
                    <div class="wrapper clickable" @click="showModal(false)">
                        <b-icon icon="image-outline"></b-icon>
                    </div>
                </div>
            </div>
            <div v-for="(s, index) in shows" v-if="s" :key="s.id" :class="`column ${column}`">
                <div class="avatar v-center clickable image is-1by1">
                    <div class="wrapper clickable">
                        <img v-if="s" :src="s.sizes['thumb_247_247']" :alt="s.title" @click="showModal(multiple)">
                        <b-icon icon="image-outline" v-else></b-icon>
                        <div class="delete" @click="deleteItem(index)"></div>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="isShow">
            <div class="media-select">
                <b-field>
                    <div class="level is-mobile">
                        <div class="level-left">
                            <h4 class="widget-title">Media Browser</h4>
                        </div>
                        <div class="level-right">
                            <b-icon size="is-small" class="clickable" @click.native="isShow = false" icon="close"></b-icon>
                        </div>
                    </div>
                </b-field>
                <b-field>
                    <upload multiple :app="query.pub" @done="uploaded"/>
                </b-field>
                <b-field>
                    <div class="level">
                        <div class="level-left">
                            <b-input icon="magnify" placeholder="Search"></b-input>
                        </div>
                        <div class="level-right">
                            <b-pagination
                                :total="response.count"
                                :current.sync="q.page"
                                :simple="true"
                                :per-page="q.page_size">
                            </b-pagination>
                        </div>
                    </div>
                </b-field>
                <div v-if="loading" class="columns is-variable is-2 is-multiline">
                    <div class="column is-2" v-for="i in 6" :key="i">
                        <b-skeleton width="100%" height="145px"/>
                    </div>
                </div>
                <div v-else class="columns is-variable is-2 is-multiline">
                    <div class="column is-2" v-for="img in response.results" :key="img.id">
                        <div class="image clickable is-1by1" @click="select(img)">
                            <img :src="img.sizes['thumb_247_247']" :alt="img.title">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {debounce} from "lodash";
import Upload from "@/components/field/Upload";

export default {
    name: "MediaSelect",
    components: {
        'upload': Upload
    },
    props: {
        value: {},
        query: {
            default: () => {
                return {}
            }
        },
        multiple: {
            type: Boolean,
            default: false
        },
        column: {
            default: 'is-2'
        }
    },
    data() {
        let data = this.value;
        if (!data) {
            data = this.multiple ? [] : null
        }
        return {
            data: data,
            response: {
                count: 0,
                results: []
            },
            isShow: false,
            loading: false,
            q: {
                search: null,
                page_size: 6,
                oder_by: '-id',
                page: 1
            }
        }
    },
    methods: {
        fetch: debounce(async function (text) {
            this.loading = true;
            this.q.search = text;
            this.$api.media.list({
                ...this.q,
                ...this.query
            }).then((res) => {
                this.response = res;
            }).catch(() => {
                this.fetch(this.q.search);
            }).finally(() => {
                this.loading = false
            });
        }),
        uploaded(results) {
            this.response.results.splice(this.response.results.length - 1 - results.length, results.length)
            this.response.results = results.concat(this.response.results);
        },
        select(img) {
            if (this.multiple) {
                let index = this.data.map(x => x.id).indexOf(img.id);
                if (index >= 0) {
                    this.data.splice(index, 1);
                } else {
                    this.data.push(img);
                }
            } else {
                if (this.data && this.data.id === img.id) {
                    this.data = null;
                } else {
                    this.data = img;
                }
            }
        },
        showModal(flag = false) {
            if (!flag) {
                this.isShow = true;
                if (this.response.results.length === 0) {
                    this.fetch(null);
                }
            }
        },
        deleteItem(index) {
            if (this.multiple) {
                this.data.splice(index, 1);
            } else {
                this.data = null;
            }
        }
    },
    watch: {
        data: {
            deep: true,
            handler: function () {
                this.$emit('input', this.data);
            }
        },
        value: {
            deep: true,
            handler: function () {
                this.data = this.value;
            }
        },
        'q.page'() {
            this.fetch(this.q.search);
        },
        'q.search'() {
            this.q.page = 1;
        }
    },
    computed: {
        shows() {
            if (this.multiple) {
                return this.data;
            } else {
                return this.data ? [this.data] : []
            }
        }
    }
}
</script>

<style lang="scss">
.media-select {
    .upload {
        height: 128px;
        width: 100%;

        .upload-draggable {
            border-radius: 0;
            width: 100%;
        }
    }

    .image.is-1by1 {
        &.empty {
            .wrapper {
                border: 1px solid #DDDDDD;
            }
        }

        .wrapper {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            display: flex;
            align-items: center;
            justify-content: center;;
        }
    }
}
</style>

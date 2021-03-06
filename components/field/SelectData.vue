<template>
    <b-taginput
        v-if="multiple"
        :loading="fetching"
        class="editable"
        :size="size"
        v-model="data"
        :data="querySet"
        autocomplete
        :allow-new="allowNew"
        :open-on-focus="openOnFocus"
        :field="field"
        :icon="icon"
        :placeholder="placeholder"
        :before-adding="beforeAdding"
        @add="onAdd"
        @typing="getQuerySet">
        <template slot-scope="props">
            {{props.option[field]}}
        </template>
        <template slot="empty">Enter to add</template>
    </b-taginput>
    <div class="taginput" v-else>
        <div class="taginput-container is-focusable">
            <b-autocomplete
                :loading="fetching"
                :size="size"
                v-model="name"
                :placeholder="placeholder"
                :keep-first="keepFirst"
                :open-on-focus="openOnFocus"
                :data="querySet"
                :field="field"
                :icon="icon"
                @focus="$emit('focus')"
                @typing="getQuerySet"
                @keyup.enter.native="onAdd(name)"
                @select="onSelect">
                <template v-if="allowNew" slot="footer">
                    <a @click="onAdd(name)">
                        <span> Add new... </span>
                    </a>
                </template>
                <template slot="empty">No results for {{name}}</template>
            </b-autocomplete>
        </div>
    </div>
</template>

<script>
    import debounce from 'lodash/debounce';

    export default {
        name: 'SelectData',
        props: {
            multiple: {
                default: false,
                type: Boolean
            },
            icon: {
                default: 'tag',
                type: String
            },
            field: {
                default: 'title',
                type: String
            },
            createField: {
                default: 'title',
                type: String
            },
            value: {},
            module: {},
            allowNew: {
                type: Boolean,
                default: true
            },
            size: {},
            placeholder: {
                type: String,
                default: 'Anything'
            },
            q: {
                default: () => {
                    return {}
                },
                type: Object
            }
        },
        data() {
            let data = this.value;
            if (!Boolean(data)) {
                if (this.multiple) {
                    data = [];
                } else {
                    data = null;
                }
            }
            let name = null;
            if (!this.multiple && this.value) {
                name = this.value[this.field];
            }
            return {
                name,
                querySet: [],
                isSelectOnly: false,
                data: data,
                openOnFocus: false,
                keepFirst: false,
                fetching: false
            }
        },
        methods: {
            onSelect(option) {
                this.data = option;
                this.$emit('add', option);
                this.$emit('input', option);
            },
            async onAdd(e) {
                if (typeof e === 'string') {
                    if (this.multiple) {
                        this.data[this.data.indexOf(e)] = await this.$api[this.module].create(
                            {
                                [this.createField]: e,
                                ...this.cleanData(this.q)
                            });
                    } else {
                        this.data = await this.$api[this.module].create({
                            [this.createField]: e,
                            ...this.cleanData(this.q)
                        });
                        this.name = this.data[this.field];
                    }
                }
            },
            beforeAdding(tag) {
                let check = this.data.map(x => x.id).indexOf(tag.id);
                return check === -1;
            },
            getQuerySet: debounce(function (text) {
                this.$api[this.module].list({
                    ...this.q,
                    search: text
                }).then(res => {
                    this.querySet = res['results'];
                })
            }, 500)
        },
        watch: {
            value() {
                this.data = this.value;
                if (!this.multiple && this.value) {
                    this.name = this.value[this.field];
                } else {
                    this.name = null;
                }
            },
            data() {
                this.$emit('input', this.data);
            }
        }
    }
</script>

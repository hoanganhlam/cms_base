<template>
    <b-collapse class="j-array card" animation="slide" :open="false">
        <div slot="trigger" slot-scope="props" class="card-header" role="button">
            <p class="card-header-title">{{ schema.label }}</p>
            <a class="card-header-icon">
                <b-icon :icon="props.open ? 'menu-down' : 'menu-up'"/>
            </a>
        </div>
        <div class="card-content">
            <div class="card" v-for="(item, index) in temp" :key="index">
                <div class="card-content">
                    <div class="media">
                        <div class="media-content">#{{ index + 1 }} - {{ item.field }}</div>
                        <div class="media-right">
                            <div class="buttons">
                                <div class="button is-text is-small" @click="updateItem(item)">
                                    <b-icon icon="cogs" size="is-small"></b-icon>
                                </div>
                                <div class="button is-text is-small" @click="deleteItem(item)">
                                    <b-icon type="is-danger" icon="delete" size="is-small"></b-icon>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div @click="add()" class="card clickable">
                <div class="card-content">
                    <b-icon size="is-small" icon="plus"></b-icon>
                </div>
            </div>
        </div>
        <b-modal :active.sync="showModal">
            <div class="modal-card" v-if="active">
                <div class="modal-card-head">
                    <div class="modal-card-title">{{ active.label ? active.label : "Untitled" }}</div>
                    <div class="modal-card-icon">
                        <div class="buttons">
                            <div class="button is-danger is-small" @click="deleteItem(active)">
                                <b-icon size="is-small" icon="delete"></b-icon>
                            </div>
                            <div class="button is-small" @click="showModal=false">
                                <b-icon size="is-small" icon="close"></b-icon>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-card-body scrollable">
                    <s-field v-for="sch in schema.options.schemas" :key="sch.field" :schema="sch"
                             :value="active[sch.field]" @input="active[sch.field] = $event"/>

                </div>
            </div>
        </b-modal>
    </b-collapse>
</template>

<script>
import {cloneDeep} from "lodash";

export default {
    name: "JsonArray",
    props: {
        schema: {},
        value: {
            default: () => {
                return []
            }
        },
    },
    data() {
        let newInstance = {};
        if (this.schema.options.schemas) {
            this.schema.options.schemas.forEach(sch => {
                newInstance[sch.field] = sch.options.default ? sch.options.default : null
            })
        }
        return {
            opening: 0,
            temp: this.value ? this.value : [],
            newInstance: newInstance,
            active: null,
            showModal: false
        }
    },
    methods: {
        add() {
            this.temp.push(cloneDeep(this.newInstance));
        },
        updateItem(item) {
            this.active = item;
            this.showModal = true;
        },
        deleteItem(item) {
            if (item) {
                let index = this.temp.map(x => x.field).indexOf(item.field);
                if (index >= 0) {
                    this.temp.splice(index, 1);
                }
            }
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

<style lang="scss">
.card .card:not(.collapse):not(:last-child) {
    margin-bottom: 0;
    border-bottom: 0;
}

.card .card .card {
    box-shadow: none;
    border: 1px solid #EEEEEE;

    .card-content {
        padding: .5rem .75rem;
    }
}

.j-array {
    .card-header-title,
    .card-header-icon {
        padding: 0.45rem 1rem;
    }
}
</style>

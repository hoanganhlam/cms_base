<template>
    <main class="main" v-if="publication">
        <div class="container">
            <b-field>
                <div class="control">
                    <b-dropdown v-model="form.post_type">
                        <div class="button" slot="trigger">
                            <span class="is-capitalized">{{ form.post_type }}</span>
                        </div>
                        <b-dropdown-item v-for="t in publication.options['post_types']" :key="t.label" :value="t.label">
                            <span>{{ t.title }}</span>
                        </b-dropdown-item>
                    </b-dropdown>
                </div>
                <b-input v-model="form.title" expanded placeholder="Title"></b-input>
                <div class="control">
                    <div class="button" @click="showOption = !showOption" v-bind:class="{'is-success': showOption}">
                        <b-icon size="is-small" icon="cogs"></b-icon>
                    </div>
                </div>
            </b-field>
            <b-field v-if="form.post_type === 'link'">
                <b-input expanded v-model="url" icon="link" placeholder="https://fournalist.com"/>
                <div class="control">
                    <div class="button" @click="fetchURL">Fetch</div>
                </div>
            </b-field>
            <div style="margin-bottom: .75rem;">
                <transition name="fade">
                    <div v-if="showOption">
                        <div v-if="field_addons.length" class="card">
                            <div class="card-content">
                                <div v-for="sch in field_addons" :key="sch.field">
                                    <s-field :schema="sch" :value="form['meta'][sch.field]"
                                             @input="form['meta'][sch.field] = $event"/>
                                </div>
                            </div>
                        </div>
                        <b-field label="Taxonomy" label-position="on-border">
                            <div class="card">
                                <div class="card-content">
                                    <b-field v-for="tax in publication.options['taxonomies']" :key="tax.id">
                                        <TaxSelector size="is-small" :taxonomy="tax.label"
                                                     :value="form['terms'] ? form['terms'] : []"
                                                     @select="addTerm"/>
                                    </b-field>
                                </div>
                            </div>
                        </b-field>
                    </div>
                </transition>
                <transition>
                    <div v-if="!showOption">
                        <b-field>
                            <b-input v-model="form.description" placeholder="Description" :rows="2" type="textarea"/>
                        </b-field>
                        <b-field>
                            <editor v-model="form.content" height="500"></editor>
                        </b-field>
                    </div>
                </transition>
            </div>
            <div class="level is-mobile">
                <div class="level-left">
                    <div class="button">
                        <user :value="currentUser" avatar-size="is-24x24"></user>
                    </div>
                </div>
                <div class="level-right">
                    <div class="button is-dark" @click="submit()">Submit</div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import Editor from "@/components/Editor";
import TaxSelector from "@/components/field/TaxSelector";
import MediaSelect from "@/components/field/MediaSelect";
import Field from "@/components/field";
import {SnackbarProgrammatic as Snackbar} from 'buefy'
import {cloneDeep} from "lodash";

const DEFAULT_POST = {
    title: null,
    description: null,
    content: null,
    meta: {},
    post_type: 'post',
    terms: []
}

export default {
    name: "PostMaster",
    components: {MediaSelect, TaxSelector, Editor, 's-field': Field},
    head() {
        return {
            title: `New ${this.form.post_type}` + ` - ${this.publication.host}`
        }
    },
    computed: {
        publication() {
            return this.$store.state.config.publication
        },
        field_addons() {
            if (this.publication && this.publication.options['post_types'] && this.form.post_type) {
                let post_type = this.publication.options['post_types'].filter(x => x.label === this.form.post_type)
                if (post_type.length && post_type[0]['field_addons']) {
                    return post_type[0]['field_addons']
                }
            }
            return [];
        },
        uri() {
            return `/pub-${this.$store.state.config.publication.id}/posts/`
        }
    },
    data() {
        return {
            url: null,
            form: cloneDeep(DEFAULT_POST),
            showOption: false,
            loading: {
                fetch: false,
                submit: false
            }
        }
    },
    methods: {
        addTerm(tax) {
            let ids = this.form.terms.map(x => x.id);
            let index = ids.indexOf(tax.id);
            if (index >= 0) {
                this.form.terms.splice(index, 1);
            } else {
                this.form.terms.push(tax);
            }
        },
        fetchURL() {
            if (this.url) {
                this.loading.fetch = true;
                this.$axios.$get('/general/fetch/', {
                    params: {
                        url: this.url
                    }
                }).then(res => {
                    this.form.title = res.title;
                    this.form.description = res.description;
                    this.form.meta['url'] = this.url;
                }).catch(() => {
                    this.form.title = null;
                    this.form.description = null;
                    this.form.meta['url'] = null;
                }).finally(() => {
                    this.loading.fetch = false;
                })
            }
        },
        submit() {
            this.loading.submit = true;
            this.$axios.$post(this.uri, {
                ...this.cleanData(this.form),
                publications: [this.publication.id]
            }).then(res => {
                Snackbar.open({
                    type: 'is-success',
                    message: "Successfully!"
                })
                this.form = cloneDeep(DEFAULT_POST);
                this.$router.replace({path: `/${res.post_type}/${res.slug}`});
            }).catch(() => {
                Snackbar.open({
                    type: 'is-danger',
                    message: "Something wrong!"
                })
            }).finally(() => {
                this.loading.submit = false;
            })
        }
    },
    watch: {
        'form.post_type'() {
            this.url = null;
            this.form.title = null;
            this.form.description = null;
            this.form.meta['url'] = null;
        }
    }
}
</script>

<style scoped>

</style>

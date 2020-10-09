<template>
    <main class="main">
        <div class="container">
            <div v-if="isHome || isTax" class="home">
                <div class="notification">
                    <div class="columns" style="align-items: center;">
                        <div class="column">
                            <h4 class="is-bold">Subscribe to get daily news</h4>
                            <b-checkbox size="is-small">I agree to subscribe to the newsletter. See our Privacy
                                Policy.
                            </b-checkbox>
                        </div>
                        <div class="column">
                            <b-field>
                                <b-input icon="email-outline" expanded placeholder="Your Email"/>
                                <div class="control">
                                    <div class="button is-primary">Signup</div>
                                </div>
                            </b-field>
                        </div>
                    </div>
                </div>
                <div class="items">
                    <item :visible-items="['vote', 'meta']" v-for="item in response.results" :key="item.id"
                          :value="item"/>
                </div>
                <div class="level is-mobile">
                    <div class="level-left">
                        <div class="buttons">
                            <n-link :to="`?page=${previous}`" class="button" v-if="previous">
                                <b-icon icon="chevron-left"></b-icon>
                                <span>Previous</span>
                            </n-link>
                            <n-link :to="`?page=${next}`" class="button" v-if="next">
                                <span>Next</span>
                                <b-icon icon="chevron-right"></b-icon>
                            </n-link>
                        </div>
                    </div>
                    <div class="level-right">
                        <div class="tags has-addons">
                            <span class="tag is-large">Page</span>
                            <span class="tag is-large is-primary">{{ query.page }}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="isPost" class="post">
                <div class="columns">
                    <div class="column">
                        <div class="post-content">
                            <item is-full :value="post" :visible-items="['vote', 'meta', 'description', 'hashtag']">
                                <div class="card">
                                    <div class="card-content">
                                        <comment-form/>
                                    </div>
                                </div>
                                <div class="section">
                                    <h4 class="widget-title">
                                        <b-icon size="is-small" icon="pound"/>
                                        <span>Tags</span>
                                    </h4>
                                    <div class="tags">
                                        <n-link v-for="tax in hashTags" :key="tax.id" :to="`/`" class="tag">
                                            <span>{{ tax.term.title }}</span>
                                        </n-link>
                                    </div>
                                </div>
                            </item>
                        </div>
                    </div>
                    <div class="column is-4">
                        <div class="section" v-if="post['related']">
                            <h4 class="widget-title">Related</h4>
                            <div class="card">
                                <div class="card-content">
                                    <div class="item media" v-for="p in post['related']" :key="p.id">
                                        <n-link :to="`/${$route.params.publication}/${p['post_type']}/${p.slug}`">
                                            <b-icon size="is-small" icon="plus"></b-icon>
                                            <span>{{ p.title.substr(0, 100) }}</span>
                                        </n-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
export default {
    name: "Master",
    data() {
        return {
            response: {
                results: [],
                count: 0
            },
            post: {},
            taxonomy: {},
            query: {
                page_size: 10,
                page: 1,
                type: 'post'
            }
        }
    },
    head() {
        let title = "CMS";
        if (this.publication) {
            if (this.isHome) {
                title = this.publication.title;
            } else if (this.isTax) {

            } else if (this.isPost && this.post) {
                title = this.post.title;
            }
        }
        return {
            title: title
        }
    },
    computed: {
        isHome() {
            return !Boolean(this.$route.params.post_type && this.$route.params.id)
        },
        isTax() {
            return Boolean(this.$route.params.post_type) && typeof this.$route.params.id === 'undefined';
        },
        isPost() {
            return Boolean(this.$route.params.id)
        },
        totalPage() {
            return this.response.count / (this.query['page_size'] ? this.query['page_size'] : 10)
        },
        next() {
            if (this.query.page < this.totalPage) {
                return this.query.page + 1;
            }
            return 0
        },
        previous() {
            if (this.query.page > 1) {
                return this.query.page - 1;
            }
            return 0
        },
        hashTags() {
            return this.post['terms'] ? this.post['terms'].filter(x => x.taxonomy === 'tag') : [];
        },
        publication() {
            return this.$store.state.config.publication
        }
    },
    async asyncData ({ req, res }) {
        if (process['server']) {
            return { host: req.headers.host }
        }
    },
    async fetch() {
        console.log(this.host);
        const p = this.$route.params;
        if (p.publication) {
            const uri = `/pub-${p.publication}`;
            const publication = await this.$axios.$get(`${uri}/detail/`);
            if (publication.options['default_post_type']) {
                this.query.type = publication.options['default_post_type'];
            }
            await this.$store.commit('config/SET_PUBLICATION', publication);
            const q = this.$route.query
            this.query.page = q.page ? Number.parseInt(q.page) : 1;
            if (p.post_type) {
                this.query.type = p.post_type
            }
            if (!p.id) {
                this.response = await this.$axios.$get(`${uri}/posts/`, {
                    params: this.query
                });
            } else {
                this.post = await this.$axios.$get(`${uri}/posts/${p.id}/`);
            }
        }
    },
    watch: {
        '$route.query': '$fetch'
    },
}
</script>

<style scoped>

</style>

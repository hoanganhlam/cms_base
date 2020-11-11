<template>
    <main class="main">
        <div class="container">
            <div v-if="isHome || isTax" class="home">
                <div class="subscribe-box notification is-light card">
                    <div class="columns" style="align-items: center;">
                        <div class="column">
                            <h4 class="widget-title">Subscribe to get daily news</h4>
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
                <div class="card">
                    <div class="card-content">
                        <div class="items" v-if="loading">
                            <div class="item media" v-for="i in 10" :key="i">
                                <div class="media-content">
                                    <b-skeleton/>
                                    <b-skeleton :width="`${rdNum(1, 100)}%`"/>
                                    <div class="meta">
                                        <div class="buttons">
                                            <div class="button is-small is-light">
                                                <b-skeleton height="16" width="60"/>
                                            </div>
                                            <div class="button is-small is-text">
                                                <b-skeleton height="16" width="80"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="media-right">
                                    <b-skeleton :width="35" height="50"/>
                                </div>
                            </div>
                        </div>
                        <div class="items" v-else>
                            <item :visible-items="visibleItems('list')" v-for="item in response.results"
                                  :key="item.id"
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
                </div>
            </div>
            <div v-if="isPost" class="post">
                <div class="columns" v-if="loading">
                    <div class="column">
                        <div class="item">
                            <b-skeleton></b-skeleton>
                            <b-skeleton :width="`${rdNum(1, 100)}%`"/>
                            <div style="margin-top: 1rem;" class="notification">
                                <b-skeleton></b-skeleton>
                                <b-skeleton></b-skeleton>
                                <b-skeleton :width="`${rdNum(1, 100)}%`"/>
                            </div>
                            <div>
                                <b-skeleton></b-skeleton>
                                <b-skeleton></b-skeleton>
                                <b-skeleton></b-skeleton>
                                <b-skeleton></b-skeleton>
                                <b-skeleton :width="`${rdNum(1, 100)}%`"/>
                            </div>
                            <div class="meta">
                                <div class="buttons">
                                    <div class="button is-small is-light">
                                        <b-skeleton height="16" width="60"/>
                                    </div>
                                    <div class="button is-small is-text">
                                        <b-skeleton height="16" width="80"/>
                                    </div>
                                </div>
                            </div>
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
                                    <div v-for="i in 20" :key="i" class="tag">
                                        <b-skeleton :width="`${rdNum(50, 80)}`"></b-skeleton>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="column is-4">
                        <div class="section">
                            <div class="widget-title">
                                <b-skeleton width="60"/>
                            </div>
                            <div class="card">
                                <div class="card-content">
                                    <div class="item media" v-for="i in 5" :key="i">
                                        <div class="media-left">
                                            <b-icon size="is-small" icon="plus"></b-icon>
                                        </div>
                                        <div class="media-content">
                                            <b-skeleton></b-skeleton>
                                            <b-skeleton :width="`${rdNum(1, 100)}%`"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-else class="columns">
                    <div class="column">
                        <div class="field has-addons">
                            <div class="control">
                                <n-link to="/" class="button is-small is-light">
                                    <b-icon icon="chevron-left" size="is-small"></b-icon>
                                    <span>Back</span>
                                </n-link>
                            </div>
                            <div class="control">
                                <div class="button is-small is-white">
                                    <span>Home</span>
                                </div>
                            </div>
                        </div>
                        <div class="post-content">
                            <item is-full :value="post" :visible-items="visibleItems('detail')">
                                <div class="content" v-html="toHTML(post.content)"></div>
                                <comment-form v-if="publication.options['allow_comment']" :post="post"/>
                                <div class="columns is-mobile is-variable is-2">
                                    <div class="column">
                                        <div class="button is-fullwidth is-light">
                                            <b-icon size="is-small" icon="chevron-left"></b-icon>
                                            <span>Previous</span>
                                        </div>
                                    </div>
                                    <div class="column">
                                        <div class="button is-fullwidth is-light">
                                            <span>Next</span>
                                            <b-icon size="is-small" icon="chevron-right"></b-icon>
                                        </div>
                                    </div>
                                </div>
                                <div class="section" v-if="hashTags.length">
                                    <div class="widget-title">
                                        <b-icon size="is-small" icon="pound"/>
                                        <span>Tags</span>
                                    </div>
                                    <div class="tags">
                                        <n-link v-for="tax in hashTags" :key="tax.id" :to="`/`" class="tag">
                                            <span>{{ tax.term.title }}</span>
                                        </n-link>
                                    </div>
                                </div>
                            </item>
                        </div>
                        <div class="section" v-if="post['related']">
                            <h4 class="widget-title">Related</h4>
                            <div class="card">
                                <div class="card-content">
                                    <div class="item media" v-for="p in post['related']" :key="p.id">
                                        <n-link :to="`/${p['post_type']}/${p.slug}`">
                                            <b-icon size="is-small" icon="plus"></b-icon>
                                            <span>{{ p.title.substr(0, 100) }}</span>
                                        </n-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="column is-4">
                        <div class="subscribe-box notification is-light card">
                            <div class="columns is-variable is-1 is-multiline">
                                <div class="column is-12">
                                    <h4 class="widget-title">Subscribe to get daily news</h4>
                                    <b-checkbox size="is-small">I agree to subscribe to the newsletter. See our Privacy
                                        Policy.
                                    </b-checkbox>
                                </div>
                                <div class="column is-12">
                                    <b-field>
                                        <b-input icon="email-outline" expanded placeholder="Your Email"/>
                                        <div class="control">
                                            <div class="button is-primary">Signup</div>
                                        </div>
                                    </b-field>
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
const parseHostname = function (href) {
    let l = document.createElement("a");
    l.href = href;
    return l;
};

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
                show_cms: true
            },
            loading: false
        }
    },
    head() {
        let title = "CMS";
        let destination = null;
        if (this.publication) {
            if (this.isHome) {
                title = this.publication.title;
                destination = this.publication.description;
            } else if (this.isTax) {

            } else if (this.isPost && this.post) {
                title = this.post.title;
                destination = this.post.description;
            }
        }
        return {
            title: title + ` - ${this.publication.host}`,
            meta: [
                {
                    hid: 'og:title',
                    name: 'og:title',
                    content: title
                },
                {
                    hid: 'description',
                    name: 'description',
                    content: destination
                },
                {
                    hid: 'og:description',
                    name: 'og:description',
                    content: destination
                },
                {
                    hid: 'og:url',
                    name: 'og:url',
                    content: `${this.publication.url}/${this.$route.path}`
                },
                {
                    hid: 'og:type',
                    name: 'og:type',
                    content: this.isHome ? 'website' : 'article'
                },
                ...this.media ? [{
                    hid: 'og:image',
                    name: 'og:image',
                    content: this.media.sizes['full_size']
                }] : []
            ]
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
        },
        media() {
            if (this.post) {
                if (this.post.media) {
                    return this.post.media;
                } else if (this.post['medias'] && this.post['medias'].length) {
                    return this.post['medias'][0];
                }
            }
            if (this.publication && this.publication.media) {
                return this.publication.media;
            }
            return null
        }
    },
    async fetch() {
        this.loading = true;
        const p = this.$route.params;
        const publication = this.publication;
        if (publication) {
            const uri = `/pub-${publication.id}`;
            if (publication.options['default_post_type']) {
                this.query.type = publication.options['default_post_type'];
            }
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
                this.post = await this.$axios.$get(`${uri}/posts/${p.id}/`, {
                    params: {
                        show_cms: true
                    }
                });
            }
        }
        this.loading = false;
    },
    watch: {
        '$route.query'() {
            this.$fetch();
            this.toTop();
        }
    },
    methods: {
        visibleItems(flag) {
            return [
                ...['description', 'hashtag'],
                ...this.publication && this.publication.options['allow_vote'] ? ['vote'] : []
            ]
        }
    }
}
</script>

<style scoped>

</style>

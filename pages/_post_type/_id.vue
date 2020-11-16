<template>
    <div class="site-wrapper">
        <div class="sub-nav navbar">
            <div class="container">
                <div class="navbar-menu">
                    <div class="navbar-start" v-if="isTax || isHome">
                        <b-dropdown class="topic-select" trap-focus>
                            <div class="navbar-item clickable" slot="trigger">
                                <span>Topic</span>
                                <b-icon size="is-small" icon="chevron-down"></b-icon>
                            </div>
                            <b-dropdown-item custom style="min-width: 300px;">
                                <b-field>
                                    <b-input placeholder="Search"></b-input>
                                </b-field>
                            </b-dropdown-item>
                            <b-dropdown-item></b-dropdown-item>
                        </b-dropdown>
                        <n-link to="/" class="navbar-item" v-bind:class="{'is-active': query.order === 'popular'}">
                            <b-icon icon="fire" size="is-small"></b-icon>
                            <span>Popular</span>
                        </n-link>
                        <n-link to="/newest" class="navbar-item" v-bind:class="{'is-active': query.order === 'newest'}">
                            <b-icon icon="update" size="is-small"></b-icon>
                            <span>New</span>
                        </n-link>
                    </div>
                    <div class="navbar-start" v-else>
                        <n-link to="/" class="navbar-item">
                            <b-icon icon="chevron-left" size="is-small"></b-icon>
                            <span>Back</span>
                        </n-link>
                    </div>
                    <div class="navbar-end">
                        <div class="navbar-item">

                        </div>
                    </div>
                </div>
            </div>
        </div>
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
                            <div class="column is-5">
                                <b-field>
                                    <b-input icon="email-outline" expanded placeholder="Your Email"/>
                                    <div class="control">
                                        <div class="button is-primary">Signup</div>
                                    </div>
                                </b-field>
                            </div>
                        </div>
                    </div>
                    <h1 class="title" v-if="isTax">
                        <b-icon icon="pound"></b-icon>
                        <span>{{ page.title }}</span>
                    </h1>
                    <p v-if="page.description" class="subtitle">{{ page.description }}</p>
                    <div class="columns">
                        <div class="column">
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
                                        <item :visible-items="visibleItems('list')"
                                              v-for="item in response.results"
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
                        <div class="column is-4">
                            <div class="widget section">
                                <aside class="menu">
                                    <p class="menu-label">Popular topics</p>
                                    <ul class="menu-list">
                                        <li v-for="term in home.terms" :key="term.id">
                                            <n-link :to="`/${term.slug}`">
                                                <b-icon icon="plus" size="is-small"></b-icon>
                                                <span>{{ term.title }}</span>
                                            </n-link>
                                        </li>
                                    </ul>
                                </aside>
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
                                <div style="margin-top: .5rem;">
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
                            <subscribe-box/>
                        </div>
                    </div>
                    <div v-else class="columns">
                        <div class="column">
                            <div class="post-content">
                                <item is-full :value="post" :visible-items="visibleItems('detail')">
                                    <div class="article">
                                        <div class="content" v-html="toHTML(post.content)"></div>
                                        <div class="columns is-mobile is-variable is-2">
                                            <div class="column" v-if="post.previous">
                                                <n-link :to="`/${post.previous.post_type}/${post.previous.slug}`"
                                                        class="button is-fullwidth is-light">
                                                    <b-icon size="is-small" icon="chevron-left"></b-icon>
                                                    <span>Previous</span>
                                                </n-link>
                                            </div>
                                            <div class="column" v-if="post.next">
                                                <n-link :to="`/${post.next.post_type}/${post.next.slug}`"
                                                        class="button is-fullwidth is-light">
                                                    <span>Next</span>
                                                    <b-icon size="is-small" icon="chevron-right"></b-icon>
                                                </n-link>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="section">
                                        <div class="widget-title">
                                            <b-icon size="is-small" icon="pound"/>
                                            <span>Response</span>
                                        </div>
                                        <comment-form v-if="publication.options['allow_comment']" :post="post"/>
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
                                <div class="item media" v-for="p in post['related']" :key="p.id">
                                    <n-link :to="`/${p['post_type']}/${p.slug}`">
                                        <b-icon size="is-small" icon="plus"></b-icon>
                                        <span>{{ p.title.substr(0, 100) }}</span>
                                    </n-link>
                                </div>
                            </div>
                        </div>
                        <div class="column is-4">
                            <subscribe-box/>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
import SubscribeBox from "@/components/SubscribeBox";
import * as schema from "@/helper/schema";

const parseHostname = function (href) {
    let l = document.createElement("a");
    l.href = href;
    return l;
};

export default {
    name: "Master",
    components: {SubscribeBox},
    data() {
        return {
            home: {
                term: {},
                newest: {
                    results: [],
                    count: 0
                },
                popular: {
                    results: [],
                    count: 0
                },
                terms: []
            },
            post: {},
            taxonomy: {},
            query: {
                page_size: 10,
                page: 1,
                show_cms: true,
                order: 'popular',
                term: null
            },
            loading: false
        }
    },
    head() {
        return {
            title: this.page.title + ` - ${this.publication.host}`,
            meta: [
                {
                    hid: 'og:title',
                    name: 'og:title',
                    content: this.page.title
                },
                {
                    hid: 'description',
                    name: 'description',
                    content: this.page.description
                },
                {
                    hid: 'og:description',
                    name: 'og:description',
                    content: this.page.description
                },
                {
                    hid: 'og:url',
                    name: 'og:url',
                    content: `${this.publication.url}/${this.$route.path}`
                },
                {
                    hid: 'og:type',
                    name: 'og:type',
                    content: this.isHome && this.isTax ? 'website' : 'article'
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
            return !Boolean(this.$route.params.post_type || this.$route.params.id)
        },
        response() {
            return this.home[this.query['order']];
        },
        isTax() {
            return Boolean(this.$route.params.post_type) && typeof this.$route.params.id === 'undefined';
        },
        page() {
            let title = "CMS";
            let description = null;
            if (this.publication) {
                if (this.isHome) {
                    description = this.publication.description;
                    title = this.publication.title;
                } else if (this.isTax) {
                    let flat = this.publication.options['post_types'].map(x => x.label);
                    let p_type = this.$route.params.post_type;
                    if (["newest", "popular"].includes(p_type)) {
                        title = p_type;
                    } else if (flat.includes(p_type)) {
                        title = this.publication.options['post_types'][flat.indexOf(p_type)].title;
                    } else if (this.home.term.id) {
                        title = this.home.term.title
                        description = this.home.term.description
                    } else {
                        title = p_type
                    }
                } else if (this.isPost && this.post) {
                    title = this.post.title;
                    description = this.post.description;
                }
            }
            return {
                title,
                description
            };
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
            const uri = `/${publication.host}`;
            if (publication.options['default_post_type']) {
                this.query.post_type = publication.options['default_post_type'];
            }
            const q = this.$route.query
            if (p.post_type === "newest" || q.order === "newest") {
                this.query.order = "newest"
            }
            this.query.page = q.page ? Number.parseInt(q.page) : 1;
            if (p.post_type && !["newest", "popular"].includes(p.post_type)) {
                if (this.publication.options['post_types'].map(x => x.label).includes(p.post_type)) {
                    this.query.post_type = p.post_type
                } else {
                    this.query.term = p.post_type
                }
            }
            // Making query
            if (!p.id) {
                this.home = await this.$axios.$post(`${uri}/posts/`, {
                    param: this.query,
                    schema: [
                        "term",
                        "terms",
                        {
                            "popular": [
                                {
                                    "results": schema.post_list
                                },
                                "count"
                            ]
                        },
                        {
                            "newest": [
                                {
                                    "results": schema.post_list
                                },
                                "count"
                            ]
                        }
                    ]
                }, {
                    params: {
                        force: q.force
                    }
                });
            } else {
                let arr = p.id.split("-");
                this.post = await this.$axios.$post(`${uri}/posts/${arr[arr.length - 1]}/`, {
                    schema: schema.post_detail
                }, {
                    params: {
                        force: q.force
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

<style lang="scss">
.article {
    margin-bottom: .75rem;
}

.navbar-start {
    .dropdown-menu {
        padding-top: 0;
    }

    .topic-select .dropdown-trigger {
        border-right: solid 1px #dedede;
    }
}
</style>

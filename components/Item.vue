<template>
    <div class="media item" v-if="value.id">
        <div class="media-content">
            <h1 class="title is-2" v-if="isFull">{{ value.title }}</h1>
            <h4 v-else>
                <n-link class="widget-title" :to="`/${value['post_type']}/${value.slug}`">{{ value.title }}
                </n-link>
            </h4>
            <p class="card is-light notification" v-if="visibleItems.includes('description')">{{value.description }}</p>
            <div class="meta">
                <div class="buttons">
                    <div v-if="visibleItems.includes('vote')" class="button is-text is-small"
                         v-bind:class="{'is-active': value['vote_object']['is-voted']}">
                        <b-icon class="is-clickable"
                                :icon="!value['vote_object']['is-voted'] ? 'chevron-up' : 'chevron-down'"/>
                        <div>{{ value['vote_object']['total'] }}</div>
                    </div>
                    <div v-if="value.user" class="button is-text is-small">
                        <user :value="value.user" avatar-size="is-16x16"></user>
                    </div>
                    <n-link v-for="tax in taxPrimaries" :key="tax.id" :to="`/${tax.taxonomy}/${tax.term.slug}`"
                            class="button is-text is-small">
                        <avatar icon="pound" :value="tax.media" class="is-16x16"/>
                        <span>{{ tax.term.title }}</span>
                    </n-link>
                    <n-link :to="`/${value['post_type']}/${value.slug}`" class="button is-text is-small">
                        <span>20 minutes ago</span>
                    </n-link>
                    <a v-if="value.meta.url" :href="value.meta.url"
                       target="_blank"
                       class="button is-text is-small">
                        <b-icon icon="link" size="is-small"></b-icon>
                        <span v-if="value.meta.archor">{{ value.meta.archor }}</span>
                    </a>
                </div>
            </div>
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: "Item",
    props: {
        value: {},
        visibleItems: {
            default: () => []
        },
        isFull: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        taxPrimaries() {
            if (this.visibleItems.includes['hashtag']) {
                return this.value['terms'].filter(x => x.taxonomy === 'object');
            }
            return []
        }
    },
    methods: {
        icon() {
            let arr = ['triangle-outline', 'square-outline', 'checkbox-blank-circle-outline'];
            return arr[Math.floor(Math.random() * arr.length)];
        }
    }
}
</script>

<style lang="scss"></style>

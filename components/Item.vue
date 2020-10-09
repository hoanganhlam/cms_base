<template>
    <div class="media item" v-if="value.id">
        <div class="media-content" v-bind:class="{'content': isFull}">
            <h1 v-if="isFull">{{ value.title }}</h1>
            <h4 v-else>
                <n-link class="widget-title" :to="`/${value['post_type']}/${value.slug}`">{{ value.title }}
                </n-link>
                <a v-if="value.post_type === 'link' && value.meta.url" :href="value.meta.url">
                    <b-icon size="is-small" icon="link"></b-icon>
                </a>
            </h4>
            <p class="notification" v-if="visibleItems.includes('description')">{{ value.description }}</p>
            <div class="meta" v-if="visibleItems.includes('meta')">
                <div class="buttons">
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
                    <a v-if="value.meta.source" :href="value.meta.source.href"
                       target="_blank"
                       class="button is-text is-small">
                        <b-icon icon="link" size="is-small"></b-icon>
                        <span>{{ value.meta.source.title.substring(0, 20) }}...</span>
                    </a>
                </div>
            </div>
            <slot></slot>
        </div>
        <div class="media-right" v-if="visibleItems.includes('vote')">
            <div class="vote" v-bind:class="{'is-active': value['vote_object']['is-voted']}">
                <div>{{ value['vote_object']['total'] }}</div>
                <b-icon class="is-clickable" :icon="!value['vote_object']['is-voted'] ? 'chevron-up' : 'chevron-down'"/>
            </div>
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
    }
}
</script>

<style lang="scss"></style>

<template>
    <article class="media">
        <figure class="media-left">
            <avatar icon="shield-account-outline" :value="value.user.profile.media" :class="`${avatarSize} is-bordered`"/>
        </figure>
        <div class="media-content">
            <div class="content">
                <div class="level" style="margin-bottom: 0;">
                    <div>
                        <n-link class="is-bold" :to="`/profile/${value.user.username}`">{{convertName(value.user)}}
                        </n-link>
                        <small v-if="!readonly" class="button is-small is-text" @click="$emit('reply', value)">
                            <b-icon icon="reply" size="is-small"></b-icon>
                            <span>#{{value.id}}</span>
                        </small>
                    </div>
                    <div class="level-right">
                        <div class="buttons">
                            <small class="button is-text is-small">{{timeSince(value.created)}} ago</small>
                        </div>
                    </div>
                </div>
                <p>{{value.content}}</p>
            </div>
            <comment v-for="comment in response.results" :key="comment.id" :value="comment" @reply="reply"
                     avatar-size="is-32x32"/>
        </div>
    </article>
</template>

<script>
    import Avatar from "./Avatar";

    export default {
        name: "Comment",
        components: {Avatar},
        props: {
            value: {
                default: null
            },
            avatarSize: {
                default: 'is-64x64'
            },
            readonly: {
                default: false,
                type: Boolean
            }
        },
        data() {
            return {
                response: {
                    results: [],
                    count: 0
                }
            }
        },
        methods: {
            reply(comment) {
                this.$emit('reply', comment);
            },
            async fetchChild() {
                if (this.value['has_child']) {

                }
            }
        },
        created() {
            this.fetchChild();
        }
    }
</script>

<style scoped>

</style>

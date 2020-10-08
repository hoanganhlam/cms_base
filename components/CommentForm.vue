<template>
    <article id="response" class="item">
        <b-field>
            <b-input :rows="size === 'is-small' ? 1 : 2" type="textarea" placeholder="Add a comment..."
                     v-model="comment"/>
        </b-field>
        <div class="level v-center">
            <div class="level-left">
                <div class="level-item">
                    <user-card avatar-size="is-16x16"/>
                </div>
                <slot></slot>
            </div>
            <div class="level-right">
                <button class="button is-small" @click="submit"
                        :disabled="!currentUser || comment === null || comment === ''">
                    <b-icon size="is-small" icon="send-outline"></b-icon>
                    <span>Send</span>
                </button>
            </div>
        </div>
    </article>
</template>

<script>
import User from "./User";

export default {
    name: "Comment",
    components: {'user-card': User},
    props: {
        size: {
            default: null
        },
        parent: {
            default: null
        },
    },
    data() {
        return {
            comment: null
        }
    },
    methods: {
        async submit() {
            let res = await this.$api['public_feature']['feedback_post'](this.feature.id, {
                content: this.comment,
                parent: this.parent ? this.parent.id : undefined,
                is_private: this.private
            });
            this.$emit('done', {
                ...res,
                user: this.currentUser
            });
            this.comment = null;
        }
    }
}
</script>

<style scoped>

</style>

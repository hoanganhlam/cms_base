<template>
    <div v-if="value" class="media user clickable" @click="click">
        <div class="media-left">
            <avatar
                icon="shield-account-outline"
                :class="`avatar ${avatarSize}`"
                :value="value.profile ? value.profile.media : null"
            />
        </div>
        <div class="media-content v-center" v-if="!onlyAvatar">
            <n-link v-if="clickable" class="value" :to="value.id ? `/profile/${value.username}` : '#'">{{convertName(value)}}</n-link>
            <span v-else>{{convertName(value)}}</span>
            <div class="field" v-if="username"><small>@{{value.username}}</small></div>
            <slot></slot>
        </div>
        <div v-if="canFollow && !onlyAvatar" class="media-right"></div>
    </div>
</template>

<script>
    import Avatar from "./Avatar";
    const SAMPLE = {
        first_name: "",
        last_name: "",
        username: "anonymous",
        profile: {media: null, description: null, nick: "Anonymous"},
        is_staff: false
    };

    export default {
        name: "User",
        components: {Avatar},
        props: {
            canFollow: {
                default: false,
                type: Boolean
            },
            value: {
                default: () => SAMPLE
            },
            username: {
                default: false,
                type: Boolean
            },
            avatarSize: {
                default: 'is-32x32',
                type: String
            },
            onlyAvatar: {
                default: false,
                type: Boolean
            },
            clickable: {
                default: true,
                type: Boolean
            },
            following: {
                default: false,
                type: Boolean
            }
        },
        methods: {
            click() {
                if (!this.canFollow && this.value.id && this.clickable) {
                    this.$router.replace({path: `/profile/${this.value.username}`})
                }
            }
        }
    }
</script>

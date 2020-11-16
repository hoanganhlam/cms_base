<template>
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
</template>

<script>
export default {
    name: "SubscribeBox"
}
</script>

<style scoped>

</style>

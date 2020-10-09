<template>
    <b-field expanded :label="schema.label">
        <!--        Text         -->
        <b-input expanded v-if="schema.type === types.TEXT" v-model="temp" :placeholder="schema.options.help"/>
        <!--        Number         -->
        <b-numberinput expanded v-else-if="schema.type === types.NUMBER" v-model="temp"
                       :placeholder="schema.options.help" controls-position="compact"/>
        <!--        Editor         -->
        <editor expanded v-else-if="schema.type === types.EDITOR" v-model="temp"/>
        <!--        Text ARRAY   -->
        <b-taginput expanded v-else-if="schema.type === types.T_ARRAY" v-model="temp"/>
        <!--        Json         -->
        <FieldJson v-else-if="schema.type === types.JSON" v-model="temp" :schema="schema"/>
        <!--        Json array   -->
        <JsonArray v-else-if="schema.type === types.J_ARRAY" v-model="temp" :schema="schema"/>
        <!--        Select       -->
        <b-select expanded v-else-if="schema.type === types.SELECT" v-model="temp">
            <option
                v-for="option in schema.options.dataset"
                :value="option.value"
                :key="option.value">
                {{ option.label }}
            </option>
            <option :value="null">________</option>
        </b-select>
        <!--        Data         -->
        <SelectData v-else-if="schema.type === types.DATA" v-model="temp" :module="schema.options['module']"
                    :field="schema.options['field_showing']"
                    :q="schema.options.query"/>
        <!--        Boolean      -->
        <b-switch v-else-if="schema.type === types.BOOLEAN" v-model="temp"/>
        <!--        Media        -->
        <MediaSelect v-else-if="schema.type === types.MEDIA" v-model="temp" :multiple="schema.options['multiple']"/>
        <!--        Datetime     -->
        <b-datetimepicker expanded v-else-if="schema.type === types.DATETIME" v-model="temp"/>
    </b-field>
</template>

<script>
import * as types from "../../helper/data_types";
import Editor from "@/components/field/Editor";
import FieldJson from "@/components/field/Json";
import SelectData from "@/components/field/SelectData";
import MediaSelect from "@/components/field/MediaSelect";
import JsonArray from "@/components/field/JsonArray";

export default {
    name: "SField",
    components: {JsonArray, MediaSelect, SelectData, FieldJson, Editor},
    props: {
        schema: {
            default: () => {
                return {
                    label: null, // Required
                    field: 'field', // Required
                    type: types.TEXT, // Required
                    options: {
                        /*
                        * dataset: Array
                        * default: Any
                        * schemas: Array - use for JSOM & JSON ARRAY
                        * field_value: String - use for data selector
                        * field_showing: String - use for data selector
                        * module: String - use for data selector
                        * help: String
                        * multiple: Boolean
                        * type: String - use for TextField
                        * */
                    }
                }
            }
        },
        value: {
            default: null
        },
    },
    data() {
        let temp = this.value
        if (temp === null) {
            if (this.schema.type === types.JSON) {
                temp = {}
                this.$emit('input', temp)
            }
        }
        return {
            types,
            temp
        }
    },
    watch: {
        temp: {
            handler: function (after, before) {
                this.$emit('input', after)
            },
            deep: true
        }
    }
}
</script>

<style scoped>

</style>

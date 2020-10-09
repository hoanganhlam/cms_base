import * as types from "@/helper/data_types";

export const POST_STATUS = [
    {
        label: 'Draft',
        value: 'DRAFT',
        icon: null,
        help: null
    },
    {
        label: 'Pending',
        value: 'PENDING',
        icon: null,
        help: null
    },
    {
        label: 'Schedule',
        value: 'SCHEDULE',
        icon: null,
        help: null
    },
    {
        label: 'Posted',
        value: 'POSTED',
        icon: null,
        help: null
    }
];

export const DEFAULT_SCHEMA = [
    {
        label: 'Label',
        field: 'label',
        type: types.TEXT,
        options: {}
    },
    {
        label: 'Field',
        field: 'field',
        type: types.TEXT,
        options: {}
    },
    {
        label: 'Type',
        field: 'type',
        type: types.SELECT,
        options: {
            dataset: Object.keys(types).map(x => {
                return {
                    label: x,
                    value: types[x]
                }
            })
        }
    },
    {
        label: 'Options',
        field: 'options',
        type: types.JSON,
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
            schemas: [
                {
                    label: 'Dataset',
                    field: 'dataset',
                    type: types.J_ARRAY,
                    options: {
                        schemas: [
                            {
                                label: 'Label',
                                field: 'label',
                                type: types.TEXT,
                                options: {}
                            },
                            {
                                label: 'Value',
                                field: 'value',
                                type: types.TEXT,
                                options: {}
                            },
                        ]
                    }
                },
                {
                    label: 'Default',
                    field: 'default',
                    type: types.TEXT,
                    options: {
                        help: 'Default value'
                    }
                },
                {
                    label: 'Schemas',
                    field: 'schemas',
                    type: types.J_ARRAY,
                    options: {}
                },
                {
                    label: 'Value field',
                    field: 'field_value',
                    type: types.TEXT,
                    options: {
                        help: 'Field that contain value'
                    }
                },
                {
                    label: 'Display Field',
                    field: 'field_showing',
                    type: types.TEXT,
                    options: {
                        help: 'Stringify the object'
                    }
                },
                {
                    label: 'module',
                    field: 'module',
                    type: types.SELECT,
                    options: {
                        help: 'Module to get data: post or taxonomy',
                        dataset: [
                            {
                                label: 'Post',
                                value: 'post'
                            },
                            {
                                label: 'Taxonomy',
                                value: 'taxonomy'
                            }
                        ]
                    }
                },
                {
                    label: 'Help text',
                    field: 'help',
                    type: types.TEXT,
                    options: {}
                },
                {
                    label: 'Multiple',
                    field: 'multiple',
                    type: types.BOOLEAN,
                    options: {}
                }
            ]
        }
    }
]

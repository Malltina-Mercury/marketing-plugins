const dataSchema = {
    type: "object",
    properties: {
        plugins: {
            type: "array",
            minItems: 3,
            maxItems: 8,
            items: {
                type: "object",
                properties: {
                    id: {
                        type: "string",
                        faker: "datatype.uuid",
                    },
                    title: {
                        type: "string",
                        faker: {
                            "lorem.words": [2]
                        }
                    },
                    description: {
                        type: "string",
                        faker: "lorem.paragraph",
                    },
                    status: {
                        type: "boolean",
                    }
                },
                required: [
                    "id",
                    "title",
                    "description",
                    "status",
                ]
            },
        },
    },
    required: [
        "plugins",
    ]
};

export default dataSchema
// module.exports = dataSchema;
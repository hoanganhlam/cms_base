export const post_detail = [
    "id",
    "title",
    "slug",
    "description",
    {
        "post_related": [
            "title",
            "slug",
            "post_type",
            "content"
        ]
    },
    {
        "related": [
            "title",
            "slug",
            {
                "media": [
                    "sizes"
                ]
            }
        ]
    },
    "meta",
    {
        "media": [
            "title",
            "sizes"
        ]
    },
    {
        "post_parent": [
            "meta"
        ]
    },
    {
        "terms": [
            "taxonomy",
            {
                "term": [
                    "title",
                    "slug"
                ]
            }
        ]
    },
    {
        "next": ["id", "slug", "title", "post_type"]
    },
    {
        "previous": ["id", "slug", "title", "post_type"]
    },
    "created"
]
export const post_list = [
    "id",
    "title",
    "slug",
    "description",
    "post_type",
    "created",
    {
        "media": [
            "title",
            "sizes"
        ]
    },
    {
        "meta": [
            "source"
        ]
    },
    "user"
]

<template>
    <div>
        <a-card
            :title="item.type"
            v-for="item in source"
            :key="item.pid"
            hoverable
            class="article"
        >
            <p slot="extra">
                <a-tag color="blue">{{ item.author }}</a-tag>
                <a-tag color="cyan">{{ item.time }}</a-tag>
                <a-tag color="purple">{{ item.type }}</a-tag>
            </p>
            <p class="title">
                {{ item.title }}
            </p>
            <p>
                <a-tag color="green"><a-icon type="like" />{{ item.star }}</a-tag>
                <a-tag color="red"><a-icon type="dislike" /> {{ item.diss }}</a-tag>
            </p>
        </a-card>
    </div>
</template>
<script>
    export default {
        name: 'Article',
        props: {
            source: {
                type: Array,
                default: () => {
                    return [
                        {
                            pid: 1,
                            author: 'yeyan1996',
                            time: '2天前',
                            title:
                                '一个合格的中级前端工程师必须要掌握的 28 个 JavaScript 技巧',
                            type: 'JavaScript前端',
                            star: 1354,
                            diss: 81,
                        },
                    ];
                },
            },
        },
    };
</script>
<style scoped>
    .title {
        font-weight: bolder;
        font-size: 1.2em;
        overflow:hidden;
        white-space:nowrap;
        text-overflow: ellipsis;
    }
    .article {
        margin-top: 1.5em;
    }
</style>

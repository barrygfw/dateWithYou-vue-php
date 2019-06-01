<template>
    <div>
        <a-card
            :title="item.ptype"
            v-for="item in source"
            :key="item.pid"
            hoverable
            class="article"
        >
            <p slot="extra">
                <a-tag color="blue">{{ item.cname }}</a-tag>
                <a-tag color="cyan">{{ item.ctime }}</a-tag>
                <a-tag color="purple">{{ item.ptype }}</a-tag>
            </p>
            <p class="title">
                {{ item.title }}
            </p>
            <p>
                <a-tag color="green"><a-icon type="like" /><b>{{ item.star }}</b></a-tag>
                <a-tag color="red"><a-icon type="dislike" /><b>{{ item.diss }}</b></a-tag>
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
                            cname: 'yeyan1996',
                            ctime: '2天前',
                            title:
                                '一个合格的中级前端工程师必须要掌握的 28 个 JavaScript 技巧',
                            ptype: 'JavaScript前端',
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

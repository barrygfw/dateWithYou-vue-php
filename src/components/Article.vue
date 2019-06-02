<template>
    <div>
        <a-card
            :title="item.ptype"
            v-for="item in source"
            :key="item.id"
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
            <p style="display: flex;justify-content: space-between;">
                <span>
                    <a-tag color="green" @click="star(item.id)"><a-icon type="like" /><b>{{ item.star }}</b></a-tag>
                    <a-tag color="red" @click="diss(item.id)"><a-icon type="dislike" /><b>{{ item.diss }}</b></a-tag>
                </span>
                <span>
                    <a-tag color="pink" @click="showDetail(item.id)"><b>Show Detail</b></a-tag>
                </span>
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
                            id: 1,
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
        methods: {
            star(id) {
                let param = {
                    id,
                };
                this.$axios.post('article/star', this.$QS.stringify(param))
                .then(res => {
                    if (res.data.status === '1') {
                        this.$message.success('Star Success!');
                        for (let i = 0, length = this.source.length; i < length; i++) {
                            if (this.source[i].id === id) {
                                this.source.star++;
                                this.$emit('star-call-back', id);
                                return;
                            }
                        }
                    } else {
                        this.$message.error(res.data.message);
                    }
                })
                .catch(err => {
                    this.$message.error(err);
                });
            },
            diss(id) {
                let param = {
                    id,
                };
                this.$axios.post('article/diss', this.$QS.stringify(param))
                .then(res => {
                    if (res.data.status === '1') {
                        this.$message.success('Diss Success!');
                        for (let i = 0, length = this.source.length; i < length; i++) {
                            if (this.source[i].id === id) {
                                this.source.star++;
                                this.$emit('diss-call-back', id);
                                return;
                            }
                        }
                    } else {
                        this.$message.error(res.data.message);
                    }
                })
                .catch(err => {
                    this.$message.error(err);
                });
            },
            showDetail(id) {
                this.$router.push({ path: '/DateWithYou/Detail',
                                    query: { id: id },
                                });
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

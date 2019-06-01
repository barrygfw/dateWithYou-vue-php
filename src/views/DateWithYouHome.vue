<template>
	<a-row>
		<a-col :span="17">
			<Article :source="source"></Article>
        </a-col>
		<a-col :span="6" :offset="1">
			<a-card title="TopStar" hoverable class="top">
				<router-link to="/topStar" slot="extra">more</router-link>
				<div class="article" v-for="item in topStar" :key="item.pid">
                    <p>{{ item.title }}</p>
                    <p>
                        <a-tag color="green"><a-icon type="like" />{{ item.star }}</a-tag>
                        <a-tag color="red"><a-icon type="dislike" /> {{ item.diss }}</a-tag>
                    </p>
                </div>
            </a-card>
            <a-card title="Rrecommend" hoverable class="top">
                <router-link to="/topStar" slot="extra">more</router-link>
                <div class="article" v-for="item in topStar" :key="item.pid">
                    <p>{{ item.title }}</p>
                    <p>
                        <a-tag color="green"><a-icon type="like" />{{ item.star }}</a-tag>
                        <a-tag color="red"><a-icon type="dislike" /> {{ item.diss }}</a-tag>
                    </p>
                </div>
            </a-card>
		</a-col>
	</a-row>
</template>
<script>
	import Article from '../components/Article.vue';
	export default {
		name: 'DateWithYouHome',
		components: {
			Article,
		},
		data() {
			return {
				source: [],
				topStar: [
					{
                        pid: 123,
                        star: 334,
                        diss: 12,
						title:
							'一个合格的中级前端工程师必须要掌握的 28 个 JavaScript 技巧一个合格的中级前端工程师必须要掌握的 28 个 JavaScript 技巧',
					},
					{
                        pid: 124,
                        star: 234,
                        diss: 12,
						title:
							'一个合格的中级前端工程师必须要掌握的 28 个 JavaScript 技巧一个合格的中级前端工程师必须要掌握的 28 个 JavaScript 技巧',
					},
					{
                        pid: 125,
                        star: 137,
                        diss: 10,
						title:
							'一个合格的中级前端工程师必须要掌握的 28 个 JavaScript 技巧一个合格的中级前端工程师必须要掌握的 28 个 JavaScript 技巧',
					},
				],
			};
        },
        methods: {
            getArticleAll() {
                this.$axios.post('article/get_all')
                .then(res => {
                    if (res.data.status === '1') {
                        this.source = res.data.data;
                        console.log(this.source);
                    } else {
                        this.$message.error(res.data.message);
                    }
                })
                .catch(err => {
                    this.$message.error(err);
                });
            },
        },
        created() {
            this.getArticleAll();
        },
	};
</script>
<style scoped>
	.article {
        border-bottom: 1px solid #e8e8e8;
        cursor: pointer;
        font-weight: bold;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
    .top{
        margin-top: 1.5em;
    }
</style>

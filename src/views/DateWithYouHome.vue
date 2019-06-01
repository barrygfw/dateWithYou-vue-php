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
				source: [
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
					{
						pid: 2,
						author: 'yeyan1996',
						time: '2天前',
						title:
							'一个合格的中级前端工程师必须要掌握的 28 个 JavaScript 技巧一个合格的中级前端工程师必须要掌握的 28 个 JavaScript 技巧',
						type: 'JavaScript前端',
						star: 1354,
						diss: 85,
					},
					{
						pid: 3,
						author: 'yeyan1996',
						time: '2天前',
						title:
							'一个合格的中级前端工程师必须要掌握的 28 个 JavaScript 技巧一个合格的中级前端工程师必须要掌握的 28 个 JavaScript 技巧',
						type: 'JavaScript前端',
						star: 1354,
						diss: 85,
					},
					{
						pid: 4,
						author: 'yeyan1996',
						time: '2天前',
						title:
							'一个合格的中级前端工程师必须要掌握的 28 个 JavaScript 技巧一个合格的中级前端工程师必须要掌握的 28 个 JavaScript 技巧',
						type: 'JavaScript前端',
						star: 1354,
						diss: 85,
					},
					{
						pid: 5,
						author: 'yeyan1996',
						time: '2天前',
						title:
							'一个合格的中级前端工程师必须要掌握的 28 个 JavaScript 技巧一个合格的中级前端工程师必须要掌握的 28 个 JavaScript 技巧',
						type: 'JavaScript前端',
						star: 1354,
						diss: 85,
					},
				],
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
	};
</script>
<style scoped>
	.title {
		font-weight: bolder;
		font-size: 1.2em;
	}
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

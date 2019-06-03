<template>
    <a-row>
        <a-col :span="17">
			<Article :source="source" v-on:star-call-back="starCallBack" v-on:diss-call-back="dissCallBack"></Article>
        </a-col>
		<a-col :span="6" :offset="1">
			<a-card title="TopStar" hoverable class="top">
				<span slot="extra">more</span>
				<div class="article" v-for="item in topStar" :key="item.id">
                    <p @click='detail(item.id)'>{{ item.title }}</p>
                    <p>
                        <a-tag color="green" @click="star(item.id)"><a-icon type="like" />{{ item.star }}</a-tag>
                        <a-tag color="red" @click="diss(item.id)"><a-icon type="dislike" /> {{ item.diss }}</a-tag>
                    </p>
                </div>
            </a-card>
            <a-card title="Translate" hoverable class="top">
                <a-input-search
                    size="small"
                    v-model="translateWord"
                    placeholder="Input Word"
                    @search="translate"
                    enterButton
                />
                <br />
                <p style="text-align: center;min-height:20.8px;">
                    {{ translateText }}
                </p>
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
                translateWord: '',
                translateText: '',
				topStar: [
					{
                        id: 123,
                        star: 334,
                        diss: 12,
						title:
							'一个合格的中级前端工程师必须要掌握的 28 个 JavaScript 技巧一个合格的中级前端工程师必须要掌握的 28 个 JavaScript 技巧',
					},
					{
                        id: 124,
                        star: 234,
                        diss: 12,
						title:
							'一个合格的中级前端工程师必须要掌握的 28 个 JavaScript 技巧一个合格的中级前端工程师必须要掌握的 28 个 JavaScript 技巧',
					},
					{
                        id: 125,
                        star: 137,
                        diss: 10,
						title:
							'一个合格的中级前端工程师必须要掌握的 28 个 JavaScript 技巧一个合格的中级前端工程师必须要掌握的 28 个 JavaScript 技巧',
					},
				],
			};
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
                        for (let i = 0, length = this.topStar.length; i < length; i++) {
                            if (this.topStar[i].id === id) {
                                this.topStar[i].star++;
                                return;
                            }
                        };
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
                        for (let i = 0, length = this.topStar.length; i < length; i++) {
                            if (this.topStar[i].id === id) {
                                this.topStar[i].diss++;
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
            starCallBack(id) {
                // for (let i = 0, length = this.source.length; i < length; i++) {
                //     if (this.source[i].id === id) {
                //         this.source[i].star++;
                //         return;
                //     }
                // }
            },
            dissCallBack(id) {
                // for (let i = 0, length = this.source.length; i < length; i++) {
                //     if (this.source[i].id === id) {
                //         this.source[i].diss++;
                //         return;
                //     }
                // }
            },
            getArticleAll() {
                this.$axios.post('article/get_all')
                .then(res => {
                    if (res.data.status === '1') {
                        this.source = res.data.data;
                    } else {
                        this.$message.error(res.data.message);
                    }
                })
                .catch(err => {
                    this.$message.error(err);
                });
            },
            detail(id) {
                this.$router.push({ path: '/DateWithYou/detail', query: { id } });
            },
            getTopStar() {
                this.$axios.post('article/topStar')
                .then(res => {
                    if (res.data.status === '1') {
                        if (res.data.data.length < 3) {
                            this.topStar = res.data.data;
                        } else {
                            res.data.data.length = 3;
                            this.topStar = res.data.data;
                        }
                    } else {
                        this.$message.error(res.data.message);
                    }
                })
                .catch(err => {
                    this.$message.error(err);
                });
            },
            translate() {
                if (!this.translateWord) {
                    this.$message.warning('Word can not be null!');
                } else {
                    this.$axios.get('https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20180704T073822Z.ad0741bf0e2817e6.aa56907c0fdb9d0faf6cb97eaf0fe9e869e84518&lang=zh&text=' + this.translateWord)
                    .then(res => {
                        if (res.data.code === 200) {
                            this.translateText = res.data.text[0];
                        } else {
                            this.$message.error(res.statusText);
                        }
                    })
                    .catch(err => {
                        this.$message.error(err);
                    });
                }
            },
        },
        created() {
            this.getArticleAll();
            this.getTopStar();
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

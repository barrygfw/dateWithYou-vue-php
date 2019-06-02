<template>
	<a-row class="top">
		<a-col :span="2">
            <br /><br />
			<a-badge :count="starNum" :numberStyle= "{backgroundColor: '#52c41a'} ">
				<a-tag color="green" @click="star"><a-icon type="like" /></a-tag>
            </a-badge>
            <br /><br />
            <a-badge :count="dissNum" >
                <a-tag color="red" @click="diss"><a-icon type="dislike" /></a-tag>
            </a-badge>
		</a-col>
		<a-col :span="22">
			<h2>{{ title }}</h2>
			<p>{{ content }}</p>
		</a-col>
	</a-row>
</template>
<script>
	export default {
		name: 'detail',
		data() {
			return {
                id: '',
				article: '',
				title: '',
				content: '',
				selectType: '',
				cName: '',
				starNum: '',
                dissNum: '',
			};
		},
		methods: {
			getArticleOne(id) {
				let param = {
					id,
				};
				this.$axios
					.post('article/get_one', this.$QS.stringify(param))
					.then(res => {
						if (res.data.status === '1') {
							console.log(res.data);
                            let article = res.data.data[0];
                            this.id = article.id;
							this.title = article.title;
							this.content = article.content;
							this.selectType = article.ptype;
							this.cName = article.cname;
                            this.starNum = article.star;
                            console.log(article.diss);
                            this.dissNum = article.diss;
						} else {
							this.$messsage.error(res.data.message);
						}
					})
					.catch(err => {
						this.$message.error(err);
					});
            },
            star() {
                let param = {
                    id: this.id,
                };
                this.$axios.post('article/star', this.$QS.stringify(param))
                .then(res => {
                    if (res.data.status === '1') {
                        this.$message.success('Star Success!');
                        this.starNum = this.starNum + 1;
                    } else {
                        this.$message.error(res.data.message);
                    }
                })
                .catch(err => {
                    this.$message.error(err);
                });
            },
            diss() {
                let param = {
                    id: this.id,
                };
                this.$axios.post('article/diss', this.$QS.stringify(param))
                .then(res => {
                    if (res.data.status === '1') {
                        this.$message.success('Diss Success!');
                        this.dissNum = this.dissNum + 1;
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
			this.getArticleOne(this.$route.query.id);
		},
	};
</script>
<style scoped>
	.top {
		margin-top: 1.5em;
		border: 1px solid #e8e8e8;
	}
</style>

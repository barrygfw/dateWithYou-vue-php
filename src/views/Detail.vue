<template>
	<a-row class="top">
		<a-col :span="2" class="border-right">
			<a-badge :count="starNum" :numberStyle= "{backgroundColor: '#52c41a'} ">
				<a-tag color="green" @click="star"><a-icon type="like" /></a-tag>
            </a-badge>
            <a-badge :count="dissNum" >
                <a-tag color="red" @click="diss"><a-icon type="dislike" /></a-tag>
            </a-badge>
            <a-tag color="pink" @click="comment"><a-icon type="message" /></a-tag>
		</a-col>
		<a-col :span="22">
            <h3>Created By <a-tag color="pink">{{ cName }}</a-tag> <a-tag color="green">{{ cTime }}</a-tag></h3>
            <h2>{{ title }}</h2>
            <div class='editor'>
                <quillEditor v-model="content"
                    ref="myQuillEditor"
                    :options="editorOption"
                    disabled
                    >
                </quillEditor>
            </div>
		</a-col>
	</a-row>
</template>
<script>
    import 'quill/dist/quill.core.css';
	import 'quill/dist/quill.snow.css';
	import 'quill/dist/quill.bubble.css';
	import { quillEditor } from 'vue-quill-editor';

	export default {
		name: 'detail',
		components: {
			quillEditor,
		},
		data() {
			return {
                editorOption: {
                    theme: 'bubble',
                },
                id: '',
				article: '',
				title: '',
				content: '',
				selectType: '',
                cTime: '',
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
                            let article = res.data.data[0];
                            this.id = article.id;
							this.title = article.title;
							this.content = article.content;
							this.selectType = article.ptype;
                            this.cTime = article.ctime;
							this.cName = article.cname;
                            this.starNum = article.star;
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
            comment() {
                console.log('comment');
            },
		},
		created() {
			this.getArticleOne(this.$route.query.id);
		},
	};
</script>
<style scoped>
    h3,h2 {
        text-align: center;
    }
	.top {
		margin-top: 1.5em;
		border: 1px solid #e8e8e8;
        min-height: 90vh;
	}
    .border-right {
        border-right:1px solid #e8e8e8;
        min-height: 90vh;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
    }
    .editor {
        border-top: 1px solid #e8e8e8;
    }
</style>

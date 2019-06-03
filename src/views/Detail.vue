<template>
	<a-row class="top">
		<a-col :span="2" class="border-right">
			<a-badge :count="starNum" :numberStyle= "{backgroundColor: '#52c41a'}">
				<a-tag color="green" @click="star"><a-icon type="like" /></a-tag>
            </a-badge>
            <a-badge :count="dissNum">
                <a-tag color="red" @click="diss"><a-icon type="dislike" /></a-tag>
            </a-badge>
            <a-badge :count="commentNum" :numberStyle= "{backgroundColor: '#52c41a'}">
                <a-tag color="pink" @click="comment"><a-icon type="message" /></a-tag>
            </a-badge>
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
        <a-col v-if="showComment" :span="22" :offset="2" style="position:absolute;" class="comment">
            <div style="height:63vh;overflow-y: auto;">
                <a-list
                    :dataSource="comments"
                    itemLayout="horizontal"
                    >
                    <a-list-item slot="renderItem" slot-scope="item">
                        <a-comment
                        :content="item.common"
                        :datetime="item.time"
                        >
                        </a-comment>
                    </a-list-item>
                </a-list>
            </div>
            <a-comment>
            <div slot="content">
                <a-form-item>
                <a-textarea :rows="4" v-model="commentValue" ></a-textarea>
                </a-form-item>
                <a-form-item>
                    <p style="display: flex;justify-content:space-around;">
                        <a-button
                            @click="addComment"
                            type="primary"
                        >
                            Add Comment
                        </a-button>
                        <a-button
                            @click="closeComment"
                            type="danger"
                        >
                            Close
                        </a-button>
                    </p>
                </a-form-item>
            </div>
            </a-comment>
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
                showComment: false,
                comments: '',
                commentNum: '',
                commentValue: '',
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
            getComment(id) {
                let param = {
                    article_id: id,
                };
                this.$axios.post('common/get', this.$QS.stringify(param))
                .then(res => {
                    if (res.data.status === '1') {
                        if (res.data.data) {
                            this.commentNum = res.data.data.length;
                            this.comments = res.data.data;
                        }
                    } else {
                        this.$message.error(res.data.message);
                    }
                })
                .catch(err => {
                    this.$message.error(err);
                });
            },
            comment() {
                this.showComment = !this.showComment;
            },
            addComment() {
                if (this.commentValue) {
                    let param = {
                        article_id: this.$route.query.id,
                        common: this.commentValue,
                    };
                    this.$axios.post('common/add', this.$QS.stringify(param))
                    .then(res => {
                        if (res.data.status === '1') {
                            this.$message.success('Add Comment Success!');
                            this.getComment(this.$route.query.id);
                            this.commentValue = '';
                        } else {
                            this.$message.error(res.data.message);
                        }
                    })
                    .catch(err => {
                        this.$message.error(err);
                    });
                } else {
                    this.$message.warning('Please Input Comment!');
                }
            },
            closeComment() {
                this.showComment = false;
            },
		},
		created() {
            if (this.$route.query.id) {
                this.getArticleOne(this.$route.query.id);
                this.getComment(this.$route.query.id);
            }
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
    .comment {
        background-color: rgb(244,245,245);
        font-weight: bold;
    }
</style>

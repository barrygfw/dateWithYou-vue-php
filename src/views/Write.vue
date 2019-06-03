<template>
	<div>
        <br />
        <a-input style="width:91%;" addonBefore="Title" v-model="title" placeholder="Please input the acticle title">
        </a-input>
        <a-button @click="clear">Clear</a-button>
        <br /><br />
        <div>
            <quillEditor v-model="content"
                ref="myQuillEditor"
                :options="editorOption">
            </quillEditor>
        </div>
        <br /> <br /><br /><br /><br />
        <a-row>
            <a-col :span="10" :offset="1">
                <a-dropdown placement="bottomLeft">
                    <a-input-group compact>
                        <a-button type="primary">Select Type</a-button>
                        <a-auto-complete
                            v-bind:value="selectType"
                            style="width: 150px"
                            placeholder="Please Select Type"
                            disabled
                        />
                    </a-input-group>
                    <a-menu slot="overlay">
                        <a-menu-item v-for="item in types" v-bind:key="item.id" @click="select(item.name, item.id)">
                            {{ item.name }}
                        </a-menu-item>
                    </a-menu>
                </a-dropdown>
            </a-col>
            <a-col :span='6' :offset="1">
                <a-input style="width:175px;" v-model="cName" placeholder="Please Input Your Name" />
            </a-col>
            <a-col :span="3" :offset="2">
                <a-button type="primary" @click="save">Save</a-button>
            </a-col>
        </a-row>
	</div>
</template>
<script>
	import 'quill/dist/quill.core.css';
	import 'quill/dist/quill.snow.css';
	import 'quill/dist/quill.bubble.css';
	import { quillEditor } from 'vue-quill-editor';
	export default {
		name: 'write',
		components: {
			quillEditor,
		},
		data() {
			return {
                editorOption: {
                    placeholder: 'Please Input...',
                },
                title: '',
                content: '',
                selectType: '',
                selectTypeId: '',
                cName: '',
                types: [
                    { pId: 1,
                        pType: 'js',
                    },
                    { pId: 2,
                        pType: 'java',
                    },
                    { pId: 3,
                        pType: 'php',
                    },
                ],
            };
        },
        computed: {
        },
        methods: {
            clear() {
                this.title = '';
                this.content = '';
                this.selectType = '';
                this.cName = '';
            },
            select(pType, pId) {
                this.selectType = pType;
                this.selectTypeId = pId;
            },
            verify() {
                if (!this.title) {
                    this.$message.warning('Please input the Title!');
                    return false;
                }
                if (!this.content) {
                    this.$message.warning('Please input the Content!');
                    return false;
                }
                if (!this.selectType) {
                    this.$message.warning('Please select the Type!');
                    return false;
                }
                if (!this.cName) {
                    this.$message.warning('Please input the Name!');
                    return false;
                }
                if (this.$store.getters['USER/USER_IDENTIFY'] !== 1 && (this.cName === 'LAPFUTURE')) {
                    this.$message.warning('Vistors can not use LAPFUTURE as name!');
                    return false;
                }
                return true;
            },
            save() {
                if (this.verify()) {
                    if (this.$route.query.id) {
                        let param = {
                            id: this.$route.query.id,
                            title: this.title,
                            content: this.content,
                            ptype: this.selectType,
                            pid: this.selectTypeId,
                            cname: this.cName,
                        };
                        this.$axios.post('article/edit', this.$QS.stringify(param))
                        .then(res => {
                            if (res.data.status === '1') {
                                this.$message.success('Edit Success!');
                            } else {
                                this.$message.error('Edit Fail,' + res.data.message);
                            }
                        })
                        .catch(err => {
                            this.$message.error(err);
                        });
                    } else {
                        let param = {
                            title: this.title,
                            content: this.content,
                            ptype: this.selectType,
                            pid: this.selectTypeId,
                            cname: this.cName,
                        };
                        this.$axios.post('article/add', this.$QS.stringify(param))
                        .then(res => {
                            if (res.data.status === '1') {
                                this.$message.success('Save Success!');
                            } else {
                                this.$message.error(res.data.message);
                            }
                        })
                        .catch(err => {
                            this.$message.error(err);
                        });
                    }
                }
            },
            setCName() {
                if (this.$store.getters['USER/INEDTIFY'] === 1) {
                    this.cName = 'LAPFUTURE';
                } else {
                    this.cName = '';
                }
            },
            getArticleOne(id) {
                let param = {
                    id,
                };
                this.$axios.post('article/get_one', this.$QS.stringify(param))
                .then(res => {
                    if (res.data.status === '1') {
                        let article = res.data.data[0];
                        this.title = article.title;
                        this.content = article.content;
                        this.selectType = article.ptype;
                        this.cName = article.cname;
                        this.$message.success('Please Edit');
                    } else {
                        this.$message.error(res.data.message);
                    }
                })
                .catch(err => {
                    this.$message.error(err);
                });
            },
            getArticleType() {
                this.$axios.post('category/get_category')
                .then(res => {
                    if (res.data.status === '1') {
                        this.types = res.data.data;
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
            this.setCName();
            this.getArticleType();
            if (this.$route.query.id) {
                this.getArticleOne(this.$route.query.id);
            }
        },
	};
</script>
<style scoped>
    .quill-editor {
        height: 400px;
    }
</style>

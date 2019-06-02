<template>
	<a-row class="top">
		<a-col :span="24">
			<a-tabs defaultActiveKey="1" @change="callback" tabPosition="left">
				<a-tab-pane tab="Article" key="1">
					<a-table
						bordered
						:dataSource="dataSource"
						:columns="columns"
						:scroll="{ x: 700 }"
					>
						<template slot="operation" slot-scope="text, record">
							<a-button
								@click="edit(record.id)"
								type="primary"
								size="small"
								>Edit</a-button
							>&nbsp;
							<a-button
								@click="del(record.id)"
								type="danger"
								size="small"
								>Delete</a-button
							>
						</template>
					</a-table>
				</a-tab-pane>
				<a-tab-pane tab="Nav" key="2" forceRender>
					Content of Tab Pane 2
				</a-tab-pane>
				<a-tab-pane tab="Tab 3" key="3">
					Content of Tab Pane 3
				</a-tab-pane>
			</a-tabs>
		</a-col>
	</a-row>
</template>
<script>
	export default {
		name: 'setting',
		data() {
			return {
				columns: [
					{
						title: 'Title',
						dataIndex: 'title',
						fixed: 'left',
						width: 100,
					},
					{
						title: 'Author',
						dataIndex: 'cname',
					},
					{
						title: 'Time',
						dataIndex: 'ctime',
					},
					{
						title: 'Operation',
						dataIndex: 'operation',
						scopedSlots: { customRender: 'operation' },
						fixed: 'right',
						width: 150,
					},
				],
				dataSource: [],
			};
		},
		methods: {
			callback(key) {
				console.log(key);
			},
			getArticleAll() {
				this.$axios
					.post('article/get_all')
					.then(res => {
						if (res.data.status === '1') {
							this.dataSource = res.data.data.map(
								(item, index, arr) => {
									item.key = item.id;
									return item;
								}
							);
						} else {
							this.$message.error(res.data.message);
						}
					})
					.catch(err => {
						this.$message.error(err);
					});
			},
			edit(id) {
				this.$router.push({
					path: '/DateWithYou/write',
					query: { id },
				});
			},
			del(id) {
				let param = {
					id,
				};
				this.$axios
					.post('article/del', this.$QS.stringify(param))
					.then(res => {
						if (res.data.status === '1') {
							this.$message.success('Delete Success!');
							this.dataSource = this.dataSource.filter(item => {
								return item.id !== id;
							});
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
	.top {
		margin-top: 1.5em;
		border: 1px solid #e8e8e8;
	}
</style>

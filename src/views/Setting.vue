<template>
	<a-row class="top">
		<a-col :span="24">
			<a-tabs defaultActiveKey="1" @change="callback" tabPosition="left">
				<a-tab-pane tab="Article" key="1">
					<a-table
						bordered
						:dataSource="dataSource"
						:columns="columns"
					>
						<template slot="operation" slot-scope="text, record">
							<a-button
								@click="showDetail(record.id)"
								type="primary"
								size="small"
								>查看详情</a-button
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
						dataIndex: 'Title',
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
						title: 'Type',
						dataIndex: 'ptype',
					},
					{
						title: 'Star',
						dataIndex: 'star',
					},
					{
						title: 'Diss',
						dataIndex: 'diss',
					},
					{
						title: 'Operation',
						dataIndex: 'operation',
						scopedSlots: { customRender: 'operation' },
					},
				],
				dataSource: [],
			};
		},
		methods: {
			callback(key) {
				console.log(key);
			},
		},
	};
</script>
<style scoped>
	.top {
		margin-top: 1.5em;
		border: 1px solid #e8e8e8;
	}
</style>

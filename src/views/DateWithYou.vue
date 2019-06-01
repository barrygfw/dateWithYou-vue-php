<template>
	<a-row>
		<a-col :span="24">
			<Navi></Navi>
		</a-col>
		<a-col :xs="{ span:24 }" :sm="{ span: 24 }" :md="{ span:16, offset:4 }" :lg="{ span:12, offset:6 }" :xl="{ span: 12, offset: 6 }" :xxl="{ span: 12, offset: 6 }">
            <router-view />
		</a-col>
	</a-row>
</template>
<script>
	import Navi from '../components/Navi.vue';
	export default {
		name: 'DateWithYou',
		components: {
			Navi,
		},
	};
</script>

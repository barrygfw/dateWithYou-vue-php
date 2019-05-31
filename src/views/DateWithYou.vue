<template>
	<a-row>
		<a-col :span="24">
			<Navi></Navi>
		</a-col>
		<a-col :lg="{ span: 12, offset:6,}" class="date-with-you">
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
<style scoped>
	.date-with-you {
		background-color: rgb(244, 245, 245);
	}
</style>

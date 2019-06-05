<template>
	<a-row :span="24">
		<div v-if="showQuote" class="quote">
			<p class="content">
				{{ content }}
			</p>
			<p class="space-between">
				<span>
					<a-tag color="pink" @click="changeTranslate">
						Show Translation
					</a-tag>
					<span v-if="showTranslation" class="content">
						{{ translation }}
					</span>
				</span>
				<span>
					<a-tag color="green">--{{ author }}</a-tag>
				</span>
			</p>
		</div>
	</a-row>
</template>

<script>
	export default {
		name: 'quote',
		data() {
			return {
				showQuote: true,
				showTranslation: false,
				content: '',
				translation: '',
				author: '',
				assignDate: '',
				pictureUrl: '',
			};
		},
		methods: {
			changeTranslate() {
				this.showTranslation = !this.showTranslation;
			},
			getQuote() {
				this.$axios
					.post('quote/ask_quote')
					.then(res => {
						let data = res.data.data;
						this.content = data.content;
						this.translation = data.translation;
						this.author = data.author;
						this.assignDate = data.assign_date;
						this.pictureUrl = data.picture_url;
						this.$emit('img-call-back', this.pictureUrl);
					})
					.catch(err => {
						this.showQuote = false;
						this.$message.error(err);
					});
			},
		},
		created() {
			this.getQuote();
		},
	};
</script>
<style scoped>
	.quote {
		border: 1px solid #e8e8e8;
		padding-left: 8px;
		margin-top: 1.5em;
		min-height: 72.8px;
	}
	.quote:hover {
		box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
		transition: 300ms;
	}
	.content {
		min-height: 20.8px;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.space-between {
		display: flex;
		justify-content: space-between;
	}
</style>

<template>
	<a-row>
		<a-col :span="16" :offset="4" class="top">
			<div class="components-input-demo-presuffix">
				<a-card hoverable style="text-align: center;" title="登录">
					<div class="password-login">
						<a-input placeholder="请输入帐号" v-model="PW_phone">
						</a-input>
						<br />
						<br />
						<a-input
							type="password"
							placeholder="请输入密码"
							v-model="PW_password"
						>
						</a-input>
						<br />
						<br />
						<div style="display:flex;">
							<a-input
								v-model="inputCode"
								placeholder="请输入右方的验证码(不区分大小写)"
							>
							</a-input>
							<a-button
								disabled
								style="color:black;background-color: #fff;margin:0 5px 0 5px;border-radius: 0;font-weight: bold;min-width: 75px;"
								>{{ verifiCode }}</a-button
							>
							<a-button @click="createCode"
								>点击修改验证码</a-button
							>
						</div>
						<br />
						<br />
						<p style="display: flex;justify-content: space-around;">
							<a-button type="primary" @click="PW_confirm"
								>登录</a-button
							>
							<a-button type="danger" @click="PW_reset"
								>重置</a-button
							>
						</p>
					</div>
				</a-card>
			</div>
		</a-col>
	</a-row>
</template>

<script>
	export default {
		name: 'login',
		data() {
			return {
				PW_phone: '', // 密码登录的phone
				PW_password: '', // 密码登录的password
				inputCode: '', // 用户输入的验证码
				verifiCode: '', // 生成的验证码
			};
		},
		methods: {
			PW_reset() {
				this.PW_phone = '';
				this.PW_password = '';
				this.inputCode = '';
				this.createCode();
			},
			PW_confirm() {
				if (this.PW_phone && this.PW_password) {
					let result = this.confirmTheCode();
					switch (result) {
						case 1:
							this.$message.warning('请输入验证码!');
							break;
						case 2:
							this.$message.warning('验证码输入错误,请重新输入!');
							break;
						case 3:
							this.PW_login();
							break;
					}
				} else {
					this.$message.warning('账号或者密码为空!');
				}
			},
			PW_login: async function() {
				try {
					let params = {
						name: this.PW_phone,
						password: this.PW_password,
					};
					let result = await this.$axios.post(
						'/user/login',
						this.$QS.stringify(params)
					);
					if (result.data.status === '1') {
						this.$message.success('登录成功');
						this.$router.push({ path: '/DateWithYou/setting' });
					} else {
						this.$message.error(result.data.message);
					}
				} catch (err) {
					this.$message.warning('网络繁忙,请稍后再试!');
				}
			},
			createCode: function() {
				// 通过随机数生成验证码
				this.verifiCode = '';
				let code = '';
				let codeLength = 4; // 验证码长度
				let random = [
					0,
					1,
					2,
					3,
					4,
					5,
					6,
					7,
					8,
					9,
					'A',
					'B',
					'C',
					'D',
					'E',
					'F',
					'G',
					'H',
					'I',
					'J',
					'K',
					'L',
					'M',
					'N',
					'O',
					'P',
					'Q',
					'R',
					'S',
					'T',
					'U',
					'V',
					'W',
					'X',
					'Y',
					'Z',
				];
				for (let i = 0; i < codeLength; i++) {
					let index = Math.floor(Math.random() * 36);
					code += random[index];
				}
				this.verifiCode = code;
			},
			confirmTheCode: function() {
				// 验证函数
				let customerCode = this.inputCode.toUpperCase(); // 把你输入的小写转化为大写
				if (customerCode === '') {
					this.createCode();
					this.inputCode = '';
					return 1; // 用户未输入验证码
				} else if (customerCode !== this.verifiCode) {
					this.createCode();
					this.inputCode = '';
					return 2; // 验证码不正确,请重新输入
				} else {
					return 3; // 验证码正确
				}
			},
		},
		created: async function() {
			this.createCode();
		},
	};
</script>
<style scoped>
	.ant-input-affix-wrapper {
		margin: 10px;
	}
	.components-input-demo-presuffix .anticon-close-circle {
		cursor: pointer;
		color: #ccc;
		transition: color 0.3s;
		font-size: 12px;
	}
	.components-input-demo-presuffix .anticon-close-circle:hover {
		color: #999;
	}
	.components-input-demo-presuffix .anticon-close-circle:active {
		color: #666;
	}
	.top {
		margin-top: 1.5em;
	}
</style>

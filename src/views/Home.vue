<template>
	<div class="home">
		<a-row>
			<a-col :lg="{ span: 8, offset: 1,}" :sm="{ span: 20, offset: 2, }">
				<h1 style="font-weight:700; font-size:2.3em">
					Hello,
				</h1>
				<p style="font-weight:600; font-size:1.6em">
					My name is LAPFUTURE.
				</p>
				<p>
					I am an Web developer. I am interested in Web Programming
					and fall in love with JavaScript.
				</p>
				<p>
					I like wandering in
					<a href="https://github.com/LAPFUTURE" target="_blank"
						>Github</a
					>
					and
					<a
						href="https://juejin.im/user/5b7a3e7be51d4538b406bb56"
						target="_blank"
						>Juejin</a
					>. I have two blog websites, one is
					<a href="http://lapblogs.connectyoume.top/" target="_blank"
						>LAPBlogs</a
					>, another is
					<a
						href="https://blog.csdn.net/liuanpingfirst"
						target="_blank"
						>CSDN </a
					>. This is my
					<a href="http://lapresume.connectyoume.top" target="_blank"
						>Online Resume.
					</a>
				</p>
				<p>
					If you have some interests in Web Programming, you can join
					QQGroup:
					<a-popover title="QQGroup:1012810379">
						<template slot="content">
							<p style="text-align:center;">
								<img
									src="../assets/qqgroup.png"
									alt="QQGroup:1012810379"
								/>
							</p>
						</template>
						<a href="javascript:void(0);">1012810379</a> </a-popover
					>, we can learn from each other and enjoy Programmings.
				</p>
				<p>
					In free time, I usually watch some web course, play SGS
					game, chat with my friends and my GF.
				</p>
			</a-col>
			<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
			<a-col
				:lg="{ span: 7,}"
				:xl="{ span: 7,}"
				:xxl="{ span: 7,}"
				:sm="{ span: 20, }"
			>
				<p style="text-align: center">
					<button @click="dateWithYou" class="radius-button">
						DateWithYou
					</button>
				</p>
			</a-col>
		</a-row>

		<canvas id="evanyou-canvas" class="evan-you"></canvas>
	</div>
</template>

<script>
	export default {
		name: 'home',
		methods: {
			dateWithYou() {
				this.$router.push({ path: '/dateWithYou/home' });
			},
		},
		mounted() {
			document.addEventListener('touchmove', function(e) {
				e.preventDefault();
			});
			let c = document.querySelector('#evanyou-canvas');
			let x = c.getContext('2d');
			let pr = window.devicePixelRatio || 1;
			let w = window.innerWidth;
			let h = window.innerHeight;
			let f = 90;
			let q;
			let m = Math;
			let r = 0;
			let u = m.PI * 2;
			let v = m.cos;
			let z = m.random;
			c.width = w * pr;
			c.height = h * pr;
			x.scale(pr, pr);
			x.globalAlpha = 0.6;
			function init() {
				x.clearRect(0, 0, w, h);
				q = [{ x: 0, y: h * 0.7 + f }, { x: 0, y: h * 0.7 - f }];
				while (q[1].x < w + f) d(q[0], q[1]);
			}
			function d(i, j) {
				x.beginPath();
				x.moveTo(i.x, i.y);
				x.lineTo(j.x, j.y);
				let k = j.x + (z() * 2 - 0.25) * f;
				let n = y(j.y);
				x.lineTo(k, n);
				x.closePath();
				r -= u / -50;
				x.fillStyle =
					'#' +
					(
						((v(r) * 127 + 128) << 16) |
						((v(r + u / 3) * 127 + 128) << 8) |
						(v(r + (u / 3) * 2) * 127 + 128)
					).toString(16);
				x.fill();
				q[0] = q[1];
				q[1] = { x: k, y: n };
			}
			function y(p) {
				let t = p + (z() * 2 - 1.1) * f;
				return t > h || t < 0 ? y(p) : t;
			}
			document.onclick = init;
			document.ontouchstart = init;
			init();
		},
	};
</script>
<style scoped>
	.home {
		padding: 30px;
	}
	.evan-you {
		position: absolute;
		top: 0px;
		left: 0px;
		z-index: 0;
		width: 100%;
		pointer-events: none;
	}
	p {
		font-size: 1.5em;
		font-weight: 300;
		line-height: 1.4;
		max-width: 26em;
	}
	a {
		text-decoration: none;
		color: #121314;
		position: relative;
	}
	a:after {
		content: '';
		position: absolute;
		z-index: -1;
		top: 55%;
		left: -0.1em;
		right: -0.1em;
		bottom: 0;
		transition: top 200ms cubic-bezier(0, 0.8, 0.13, 1);
		background-color: rgba(79, 192, 141, 0.5);
	}
	a:hover:after {
		top: 0%;
	}
	a:hover {
		color: #121314;
	}
	img {
		width: 175px;
		height: 175px;
	}
	button[class='radius-button'] {
		border: 1px solid #42b983;
		border-radius: 33px;
		padding: 10px 30px;
		background-color: white;
		display: inline-block;
		margin-right: 20px;
		color: #42b983;
	}
	button[class='radius-button']:hover {
		background-color: rgba(66, 185, 131, 0.1);
		text-decoration: none;
	}
</style>

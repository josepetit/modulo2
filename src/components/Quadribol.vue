<template>
	<section>
		<h1>{{titulo2}}</h1>
			<img 
				src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Blason_Gryffondor.svg/545px-Blason_Gryffondor.svg.png"
				v-on:click="botaCaraNoSol()"
			>
			<p>Escola de Hogwarts</p>
		<div>
			<button v-on:click="contaClique2()">
				<span>Gol</span>
			</button>
			<button v-on:click="contaClique4()">
				<span>Pomo Dourado</span>
			</button>
			<button v-on:click="removeClique4()">
				<span>Cancela Pomo Dourado</span>
			</button>
			<button v-on:click="removeClique2()">
				<span>Cancela Gol</span>
			</button>
			<!-- <button v-on:click="limpaClique2()">
				<span>Zerar Placar</span>
			</button> -->
		</div>
		<p>Gols: {{clique2}} </p>
		<p>Pomos Dourados: {{clique4}} </p>
		<p>
			<span>Valor Total:</span>
			<span>{{(clique2 * preco2 + clique4 * preco4)}}</span>
			<span v-if="clique != 0">{{moeda}}</span>
		</p>


			<h1>{{titulo1}}</h1>
			<img 
				src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Blason_Serpentard.svg/545px-Blason_Serpentard.svg.png"
				v-on:click="botaCaraNoSol()"
			>
			<p>Escola de Hogwarts</p>
			<img :src="img">
			<p>{{meme}}</p>
		<div>
			<button v-on:click="contaClique1()">
				<span>Gol</span>
			</button>
			<button v-on:click="contaClique2()">
				<span>Pomo Dourado</span>
			</button>
			<button v-on:click="removeClique2()">
				<span>Cancela Pomo Dourado</span>
			</button>
			<button v-on:click="removeClique1()">
				<span>Cancela Gol</span>
			</button>
			<!-- <button v-on:click="limpaClique2()">
				<span>Zerar Placar</span>
			</button> -->
		</div>
		<p>Gols: {{clique2}} </p>
		<p>Pomos Dourados: {{clique4}} </p>
		<p>
			<span>Valor Total:</span>
			<span>{{(clique1 * preco1 + clique3 * preco3)}}</span>
			<span v-if="clique != 0">{{moeda}}</span>
		</p>
	</section>





</template>

<script>
	export default {
		name: 'Portfolio',
		data() {
			return {
				titulo1: 'Slytherin',
				titulo2: 'Gryffindor',
				img: '',
				meme: '',
				clique1: 0,
				clique2: 0,
				clique3: 0,
				clique4: 0,
				preco1: 10,
				preco2: 10,
				preco3: 150,
				preco4: 150,
				moeda: 'pontos.'

			}
		},
		methods: {
			contaClique1() {
				return this.clique1++
			},
			removeClique1() {
				if (this.clique1 > 0){
					return this.clique1--
				}
			},
			limpaClique1() {
				return this.clique1 = 0
			},
			contaClique2() {
				return this.clique2++
			},
			removeClique2() {
				if (this.clique2 > 0){
					return this.clique2--
				}
			},
			limpaClique2() {
				return this.clique2 = 0
			},
			contaClique3() {
				return this.clique3++
			},
			removeClique3() {
				if (this.clique3 > 0){
					return this.clique3--
				}
			},
			limpaClique3() {
				return this.clique3 = 0
			},
			contaClique4() {
				return this.clique4++
			},
			removeClique4() {
				if (this.clique4 > 0){
					return this.clique4--
				}
			},
			limpaClique4() {
				return this.clique4 = 0
			}
		}
	}
</script>

<style scoped>
	section {
		display: flex;
		flex-wrap: wrap;
		flex-direction: column;
		height: 95vh;
		background-color: #333;
		color: #fff;
	}
	h1 {
		padding: 0 0.5em;
	}
	img {
		max-width: 45%;
		align-self: center;
		max-height: 100px;
	}
	div {
		padding: 0.5em;
	}
	p {
		margin-bottom: 0;
	}
</style>
<template>
  <section class="cabecalho">
    <h1>{{ teste }}</h1>
    <img src="http://i0.kym-cdn.com/photos/images/original/001/172/489/b28.png">
    <h2>Primeira Etapa - Marque a opção:</h2>
    <br>
  <div class="categorias">
    <div class="categoria1">
      <h3>Categoria I - Gênero</h3>
      <p>1. Ideologia de Gênero</p>
      <button v-on:click="afavor()">
        <span>A Favor</span>
      </button>
      <button v-on:click="indiferente()">
        <span>Indiferente</span>
      </button>
      <button v-on:click="contra()">
        <span>Contra</span>
      </button>
      <p>Voto: {{clique}} </p>
      <p>2. Casamento Homoafetivo</p>
      <button v-on:click="afavor()">
        <span>A Favor</span>
      </button>
      <button v-on:click="indiferente()">
        <span>Indiferente</span>
      </button>
      <button v-on:click="contra()">
        <span>Contra</span>
      </button>
      <p>Voto: {{afavor}} </p>
      <p>Voto: {{indiferente}} </p>
      <p>Voto: {{contra}} </p>
    </div>
    <br>
    
    <div class="categoria2">
      <h3>Categoria II - Moral</h3>
      <p>1. Proibição do Aborto</p>
      <button v-on:click="afavor()">
        <span>A Favor</span>
      </button>
      <button v-on:click="indiferente()">
        <span>Indiferente</span>
      </button>
      <button v-on:click="contra()">
        <span>Contra</span>
      </button>
      <p>Voto: {{clique}} </p>
      <p>2. Ensino Religioso nas Escolas</p>
      <button v-on:click="afavor()">
        <span>A Favor</span>
      </button>
      <button v-on:click="indiferente()">
        <span>Indiferente</span>
      </button>
      <button v-on:click="contra()">
        <span>Contra</span>
      </button>
      <p>Voto: {{clique}} </p>
    </div>
    <br>

    <div class="categoria3">
      <h3>Categoria III - Economia</h3>
      <p>1. Privatizações</p>
      <button v-on:click="afavor()">
        <span>A Favor</span>
      </button>
      <button v-on:click="indiferente()">
        <span>Indiferente</span>
      </button>
      <button v-on:click="contra()">
        <span>Contra</span>
      </button>
      <p>Voto: {{clique}} </p>
      <p>2. Diminuição do Estado</p>
      <button v-on:click="afavor()">
        <span>A Favor</span>
      </button>
      <button v-on:click="indiferente()">
        <span>Indiferente</span>
      </button>
      <button v-on:click="contra()">
        <span>Contra</span>
      </button>
      <p>Voto: {{clique}} </p>
    </div>
    <br>
    
    <div class="categoria4">
      <h3>Categoria IV - Segurança</h3>
      <p>1. Pena de morte para bandido</p>
      <button v-on:click="afavor()">
        <span>A Favor</span>
      </button>
      <button v-on:click="indiferente()">
        <span>Indiferente</span>
      </button>
      <button v-on:click="contra()">
        <span>Contra</span>
      </button>
      <p>Voto: {{clique}} </p>
      <p>2. Intervenção Militar</p>
      <button v-on:click="afavor()">
        <span>A Favor</span>
      </button>
      <button v-on:click="indiferente()">
        <span>Indiferente</span>
      </button>
      <button v-on:click="contra()">
        <span>Contra</span>
      </button>
      <p>Voto: {{clique}} </p>
    </div>
    <br>

    <div class="categoria5">
      <h3>Categoria V - Trabalho</h3>
      <p>1. Sindicatos</p>
      <button v-on:click="afavor()">
        <span>A Favor</span>
      </button>
      <button v-on:click="indiferente()">
        <span>Indiferente</span>
      </button>
      <button v-on:click="contra()">
        <span>Contra</span>
      </button>
      <p>Voto: {{clique}} </p>
      <p>2. CLT (Antiga)</p>
      <button v-on:click="afavor()">
        <span>A Favor</span>
      </button>
      <button v-on:click="indiferente()">
        <span>Indiferente</span>
      </button>
      <button v-on:click="contra()">
        <span>Contra</span>
      </button>
      <p>Voto: {{clique}} </p>
    </div>
    <br>

    <div class="categoria6">
      <h3>Categoria VI - Social</h3>
      <p>1. Cotas</p>
      <button v-on:click="afavor()">
        <span>A Favor</span>
      </button>
      <button v-on:click="indiferente()">
        <span>Indiferente</span>
      </button>
      <button v-on:click="contra()">
        <span>Contra</span>
      </button>
      <p>Voto: {{clique}} </p>
      <p>2. Direitos Humanos para a população carcerária</p>
      <button v-on:click="afavor()">
        <span>A Favor</span>
      </button>
      <button v-on:click="indiferente()">
        <span>Indiferente</span>
      </button>
      <button v-on:click="contra()">
        <span>Contra</span>
      </button>
    </div>
    <br>
  </div>  
    <br>

    <h2>Resultado: </h2>


  </section>
  
</template>

<script>
export default {
  name: 'cabecalho',
  data () {
    return {
      teste: 'Teste Político',
      afavor: '',
      indiferente: '',
      contra: ''
    }
  }, methods: {
      afavor() {
        return this.afavor = 'A Favor';
      },
      indiferente() {
        return this.indiferente = 'Indiferente';
        }
      },
      contra() {
        return this.contra = 'Contra';
      },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

img {
    max-width: 60%;
    align-self: center;
    max-height: 200px;
  }

.categorias {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
}

.categoria1 {
    border-style: solid;
    border-width: 2px;
    padding: 15px 50px 25px 50px;
    margin: 5px;
}

.categoria2 {
    border-style: solid;
    border-width: 2px;
    padding: 15px 50px 25px 50px;
    margin: 5px;
}

.categoria3 {
    border-style: solid;
    border-width: 2px;
    padding: 15px 50px 25px 50px;
    margin: 5px;
}

.categoria4 {
    border-style: solid;
    border-width: 2px;
    padding: 15px 50px 25px 50px;
    margin: 5px;
}

.categoria5 {
    border-style: solid;
    border-width: 2px;
    padding: 15px 50px 25px 50px;
    margin: 5px;
}

.categoria6 {
    border-style: solid;
    border-width: 2px;
    padding: 15px 50px 25px 50px;
    margin: 5px;
}

a {
  color: #42b983;
}
</style>
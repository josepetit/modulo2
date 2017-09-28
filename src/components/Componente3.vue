<template>
  <div>
    <p>Nome: <input v-model="nome"></p>
    <p>Idade: <input v-model="idade"></p>
    <p>E-mail: <input v-model="email"></p>
    <p>Telefone: <input v-model="telefone"></p>
    <p>Endereço: <input v-model="endereco"></p>

    <p>{{ nome }}</p>
    <p>{{ idade }}</p>
    <p>{{ email }}</p>
    <p>{{ telefone }}</p>
    <p>{{ endereco }}</p>
  </div>

</template>

<script>
export default {
  name: 'formulario',
  data () {
    return {
      nome: '',
      idade: '',
      email: '',
      telefone: '',
      endereco: '',
    }
  }
}
</script>

<style scoped>
</style>
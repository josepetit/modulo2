<template>
  <div>
    <p>Clique para fotografar</p>
    <img src="http://www.clker.com/cliparts/8/3/3/4/1195445190322000997molumen_red_round_error_warning_icon.svg.med.png"
         v-on:click="tiraFoto()">
    <img :src="foto">
    <p>{{afavor}}</p>
  </div>
</template>

<script>
export default {
  name: 'Aula04',
  data () {
    return {
      foto: '',
      afavor: ''
    }
  },
  methods: {
    tiraFoto() {
      return this.afavor = 'A Favor!';
    }
  }
}
</script>
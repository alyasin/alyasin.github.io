<template>
  <div id="app">
    <currency-container />
  </div>
</template>

<script>
import CurrencyContainer from './components/CurrencyContainer'
export default {
  name: 'app',
  components: {
    CurrencyContainer,
  },
}
</script>

<style>
* {
  box-sizing: border-box;
}

html,
body {
  width: 100%;
  height: 100vh;
}

body {
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
</style>

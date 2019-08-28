<template>
  <div id="app">
     <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script> 
<style scoped>
 #app {
            width: 300px;
            height: 300px;
           
            margin: 0 auto;
        }
        body{ background: orange;}
</style>
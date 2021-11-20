<template>
<div class="main-app">
<main class="main-content">
  <div class="container main-container">
    <div class="left-content">
      <h1>結帳</h1>
      <StepPanel />
      <Form />
      <Form2 />
      <Form3 />
    </div>
    <div class="right-content">
    <h1>我是購物車</h1>
    <ShoppingCar />
    </div>
  </div>


</main>
</div>
</template>

<script>
import StepPanel from '../components/StepPanel.vue'
import Form from '../components/Form1.vue'
import Form2 from '../components/Form2.vue'
import Form3 from '../components/Form3.vue'


import ShoppingCar from '../components/ShoppingCar.vue'
export default {
  components:{StepPanel,Form,Form2,Form3,ShoppingCar}
}
</script>



<style >
.container{
  width: 100%;
  display: flex;
}

.left-content{
width: 70%;
}

.right-content{
width: 30%;
}
</style>


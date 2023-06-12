<template>
    <div id="app">
      <!-- 👇 Set "ref" prop to create new ref -->
      <input
        type="radio"
        name="js"
        ref="theCheckbox"
      />
      <input
        type="radio"
        name="js"
        ref="the"
      />
  
      <label for="js"> JavaScript </label>
      <br />
      <button @click="handleClick">Done</button>
      <p v-if="message">{{ message }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return { message: '' };
    },
    methods: {
      handleClick() {
        // 👇 Access ref with "$refs" property
       (this.$refs.theCheckbox.checked, "theche") 
       (this.$refs.the.checked, "the") 
        
      },
    },
  };
  </script>
<template>
  <h1>Login Page</h1>
  <input type="text" placeholder="Email.." v-model="email" />
  <input type="text" placeholder="Password.." v-model="psw" />
  <button @click="onClickLogin">Login</button>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      psw: '',
    }
  },
  methods: {
    onClickLogin() {
      if (this.email === 'aa' && this.psw === 'aa') {
        localStorage.setItem('isLogged', 1)
        this.$router.push('/protected')
      }
    },
  },
}
</script>

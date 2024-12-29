<template>
    <nav>
        <ul>
            <li @click="handleNavigation('/')">Home</li>
            <li @click="handleNavigation('/about')">About</li>
            <li @click="handleNavigation('/protected')">Protected</li>
            <li @click="handleNavigation('/login')">Login</li>
        </ul>
    </nav>
</template>

<script>
export default {
    methods: {
        handleNavigation(routerName) {
            this.$router.push(routerName)
        }
    }
}
</script>


<style scoped>
ul {
    display: flex;
    gap: 0 20px;
    list-style-type: none;
}

li:hover {
    cursor: pointer;
}
</style>
<template>
    <div class="wrapper">
        <div class="header">
            <div class="nav">
                <a href="#" v-for="(menu, i) in menuList" :key="i">{{ menu }}</a>
            </div>
        </div>
        <router-view />
    </div>
</template>

<script>
export default {
    name: 'App',
    data() {
        return{
            menuList: ['Home', 'Shop', 'About','Location']
        }
    }
}
</script>

<style lang="scss">
    @import '@/assets/css/_variable.scss';

    *{margin:0;padding:0;}
    body{font-family:'montserrat', sans-serif;}
    #app {
        font-family: $font;/*Avenir, Helvetica, Arial, sans-serif;*/
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: $color;/*#2c3e50;*/
    }
    hr{border:none;margin:10px 0;}
    .nav{
        background:darkslateblue;padding:10px;border-radius:5px;
        a{color:#fff;padding:10px;text-decoration:none;}
    }
</style>

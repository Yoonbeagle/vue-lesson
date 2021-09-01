<template>
    <div class="header">
        <div class="nav">
            <a href="#" v-for="(menu, i) in menuList" :key="i">{{ menu }}</a>
        </div>
    </div>

    <hr/>

    <div class="content">
        <!-- <h1>{{ count }}</h1>
        <button v-on:click="addNumber(1)">증가</button>
        <button v-on:click="minusNumber">감소</button>
        <button v-on:mouseover="addNumber(10)">오버 +10</button> -->
        <h2 class="title">* 마우스 좌표위치 알아내기 이벤트</h2>
        <div class="event-handler">
            <h3>{{ message }}</h3>
            <button @click="addNumber($event, 10)">+10</button><button @click="addNumber($event, 100)">+100</button>
            <button @click="greeting">인사하기</button>
            <button @click="sayGoodbye">작별하기</button>
            <div @click="getMousePosition" class="box"></div>
        </div>

        <hr />

        <h2 class="title">* 상품목록 반복하기</h2>
        <div class="event-handler">
            <div v-for="(원룸, i) in 원룸들" :key="i">
                <img :src="원룸.image" alt="">
                <h4 @click="isOpened=true">{{ 원룸.title }}</h4>
                <p>{{ 원룸.price }}</p>
            </div>
        </div>

        <hr />

        <h2 class="title">* 버튼클릭한 횟수 알아내기 이벤트</h2>
        <div class="event-handler">
            <div>
                <img src="./assets/img/room0.jpg" alt="">
                <h4 @click="isOpened=true">{{ products[0] }}</h4>
                <p>50만원</p>
                <span>신고수 : {{ 신고수[0] }}</span>
                <button @click="increase(0)">허위매물 신고하기</button>
            </div>
            <div>
                <img src="./assets/img/room1.jpg" alt="">
                <h4>{{ products[1] }}</h4>
                <p>60만원</p>
                <span>신고수 : {{ 신고수[1] }}</span>
                <button @click="increase(1)">허위매물 신고하기</button>
            </div>
            <div>
                <img src="./assets/img/room2.jpg" alt="">
                <h4>{{ products[2] }}</h4>
                <p>70만원</p>
                <span>신고수 : {{ 신고수[2] }}</span>
                <button @click="increase(2)">허위매물 신고하기</button>
            </div>
        </div>

        <!-- modal -->
        <div class="modal-container" v-if="isOpened">
            <div class="modal-body">
                <h4>상세페이지 타이틀</h4>
                <p>상세페이지 컨텐츠</p>
                <button @click="isOpened = false">닫기</button>
            </div>
        </div>
    </div>
</template>

<script>
import roomData from './assets/js/data.js'

export default {
    name: 'App',
    data(){
        return{
            menuList: ['Home', 'Shop', 'About','Location'],
            count: 0,
            message: '',
            isOpened : false,
            products: ["역삼동원룸","천호동원룸","마포구원룸"],
            신고수 : [0,2,1],
            원룸들 : roomData
        }
    },
    methods: {
        getMousePosition(d){
            console.log(d)
            this.message = `마우스 위치는 ${d.pageX},${d.pageY}입니다.`
        },
        greeting(){
            this.message = "안녕"
        },
        sayGoodbye(){
            this.message = "잘가"
        },
        addNumber(e,value){
            console.log(value, e.pageX)
            this.message = `마우스 좌표 ${e.pageX} + ${value}는 ${e.pageX + value}입니다.`
        },
        minusNumber(){
            console.log(this)
            this.count = this.count - 1
        },
        increase(i){
            this.신고수[i]+=1
        }
    }
}
</script>

<style lang="scss">
@import '@/assets/css/_variable.scss';

*{margin:0;padding:0;}
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
.content{padding:20px;}
h2.title{margin:30px 0;font-size:$fontXlarge;font-weight:700;text-align:left;}
button{cursor:pointer;}
.box{width:$wLarge;height:$hLarge;background:$bgColorPoint;
    &:hover{cursor:pointer;}
}
.event-handler h4{margin:10px 0;cursor:pointer;}
.event-handler button{width:auto;height:auto;padding:0 5px;font-size:$fontSmall;}
.event-handler img{width:100%;margin-top:40px;}
.modal-container{position:fixed;top:0;width:100%;height:100%;display:flex;justify-content:center;align-items:center;padding:20px;background:$bgColorOverlay;box-sizing:border-box;}
.modal-body{width:30%;padding:20px;background:$bgColorBlank;border-radius:$borderRadius;box-sizing:border-box;
    p{margin:10px 0;}
    button{min-width:60px;padding:5px 10px;}
}
</style>

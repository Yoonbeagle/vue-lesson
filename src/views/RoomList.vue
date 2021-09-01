<template>
    <div class="content">
        <!-- <h1>{{ count }}</h1>
        <button v-on:click="addNumber(1)">증가</button>
        <button v-on:click="minusNumber">감소</button>
        <button v-on:mouseover="addNumber(10)">오버 +10</button> -->
        <h2 class="title">* 마우스 좌표위치 알아내기 이벤트</h2>
        <div class="event-handler mouse-position">
            <h3>{{ message }}</h3>
            <button @click="addNumber($event, 10)">+10</button><button @click="addNumber($event, 100)">+100</button>
            <button @click="greeting">인사하기</button>
            <button @click="sayGoodbye">작별하기</button>
            <div @click="getMousePosition" class="box"></div>
        </div>

        <hr />

        <h2 class="title">* 상품목록 데이터에서 불러온 뒤 반복하기, 모달창 만들기</h2>
        <div class="event-handler modal-open">
            <div v-for="(원룸, i) in rooms" :key="i">
                <img :src="원룸.imgUrl" alt="">
                <h4 @click="isOpened=true">{{ 원룸.title }}</h4>
                <p>{{ 원룸.price }}원</p>
            </div>
        </div>
        <!-- modal -->
        <div class="modal-container" v-if="isOpened">
            <div class="modal-body">
                <h4>팝업 타이틀</h4>
                <p>팝업 컨텐츠</p>
                <button @click="isOpened = false">닫기</button>
            </div>
        </div>

        <hr />

        <h2 class="title">* 버튼클릭한 횟수 알아내기 이벤트</h2>
        <div class="event-handler click-count">
            <div>
                <img src="../assets/img/room0.jpg" alt="" class="room-img" />
                <h4>{{ products[0] }}</h4>
                <p>50만원</p>
                <span>신고수 : {{ 신고수[0] }}</span>
                <button @click="increase(0)">허위매물 신고하기</button>
            </div>
            <div>
                <img src="../assets/img/room1.jpg" alt="" class="room-img" />
                <h4>{{ products[1] }}</h4>
                <p>60만원</p>
                <span>신고수 : {{ 신고수[1] }}</span>
                <button @click="increase(1)">허위매물 신고하기</button>
            </div>
            <div>
                <img src="../assets/img/room2.jpg" alt="" class="room-img" />
                <h4>{{ products[2] }}</h4>
                <p>70만원</p>
                <span>신고수 : {{ 신고수[2] }}</span>
                <button @click="increase(2)">허위매물 신고하기</button>
            </div>
        </div>
    </div>
</template>

<script>
import roomData from '../assets/js/roomData.js'
//import {var1, var2} from '../assets/js/roomData.js'

export default {
    name: 'App',
    data(){
        return{
            count: 0,
            message: '',
            isOpened : false,
            products: ["역삼동원룸","천호동원룸","마포구원룸"],
            신고수 : [0,2,1],
            rooms : roomData
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
    
    .content{padding:20px;}
    h2.title{margin:30px 0;font-size:$fontXlarge;font-weight:700;text-align:left;}
    button{cursor:pointer;}
    .box{width:$wLarge;height:$hLarge;background:$bgColorPoint;
        &:hover{cursor:pointer;}
    }
    .event-handler{
        h4{margin:10px 0;cursor:pointer;}
        button{width:auto;height:auto;margin:auto;padding:0 5px;font-size:$fontSmall;}
        &.click-count button{display:block;}
        img.room-img{width:100%;margin-top:40px;}
    }
    .modal-container{position:fixed;top:0;width:100%;height:100%;display:flex;justify-content:center;align-items:center;padding:20px;background:$bgColorOverlay;box-sizing:border-box;}
    .modal-body{width:30%;padding:20px;background:$bgColorBlank;border-radius:$borderRadius;box-sizing:border-box;
        p{margin:10px 0;}
        button{min-width:60px;padding:5px 10px;}
    }
</style>

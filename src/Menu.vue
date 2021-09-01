<template>
    <div class="container">
        <h1>Lesson List</h1>

        <ul>
            <li>원룸매매 사이트 따라하기 - 코딩애플 유튜브 <a href="/RoomList" target="_blank">[ click here ]</a></li>
            <li>트랜지션 태그 사용하여 모달 띄우기 - Tyler Potts 유튜브<a href="/Transition" target="_blank">[ click here ]</a></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'Menu'
    }
</script>

<style lang="scss" scoped>
    *{margin:0;padding:0;text-align:left;}
    .container{padding:15px;
        ul li{margin-top:10px;list-style:none;
            &::before{content:'';display:inline-block;width:4px;height:4px;background:#000;margin-right:5px;border-radius:100%;vertical-align:middle;}
        }
        a{color:darkslateblue;font-weight:700;text-decoration:none;}
    }
</style>
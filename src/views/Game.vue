<template>
    <div class="game-wrapper">
        <canvas id="canvas" ref="canvas"></canvas>
    </div>
</template>

<script>
export default{
    name: 'Game',
    data() {
        return{}
    },
    mounted() {
        var canvas = this.$refs['canvas'];
        var ctx = canvas.getContext('2d');

        ////////////////canvas 사이즈 정의
        canvas.width = window.innerWidth - 100;
        canvas.height = window.innerHeight - 100;

        ////////////////공룡 데이터 정의
        var dino = {
            x: 10,
            y: 200,
            width: 54,
            height: 54,
            draw() {
                ctx.fillStyle = 'green';
                ctx.fillRect(this.x,this.y, this.width,this.height); //10,20 좌표에 50x50 사이즈로 그린다.
            }
        }
        //dino.draw();

        /////////////////장애물 - 선인장 데이터 정의
        class Cactus { //여러개의 변수는 class로 관리
            constructor() {
                this.x= 1024;
                this.y= 204;
                this.width= 50;
                this.height= 50;
            }
            draw(){
                ctx.fillStyle = 'red';
                ctx.fillRect(this.x,this.y, this.width,this.height);
            }
        }
        // var cactus = new Cactus();
        // cactus.draw();

        var timer = 0;
        var cactusList = [];

        /////////////////모션 함수
        function frameMotion() {
            requestAnimationFrame(frameMotion);
            timer++;
            
            ctx.clearRect(0,0, canvas.width, canvas.height); //canvas를 지움.

            if(timer % 120 === 0) { //120프레임마다 동작
                var cactus = new Cactus();
                cactusList.push(cactus);
            }

            cactusList.forEach((c)=>{
                c.x--; //catusList 요소들의 x 좌표가 감소(왼쪽으로 이동하는 것처럼 보임)
                c.draw();
            })

            dino.x++; // dino의 x 좌표가 증가(오른쪽으로 이동하는 것처럼 보임)
            dino.draw()
        }
        frameMotion();
    }
}
</script>

<style lang="scss"></style>
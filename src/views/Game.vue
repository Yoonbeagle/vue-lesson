<template>
    <div class="game-wrapper">
        <canvas id="canvas" ref="canvas" width="800"></canvas>
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

        //이미지로 변경할 경우
        var dino1 = new Image();
        dino1.src = 'dino.png'
        var cactus1 = new Image();
        cactus1.src = 'cactus.png'

        ////////////////공룡 데이터 정의
        var dino = {
            x: 10,
            y: 200,
            width: 54,
            height: 54,
            draw() {
                ctx.fillStyle = 'green';
                ctx.fillRect(this.x,this.y, this.width,this.height); //10,20 좌표에 50x50 사이즈로 그린다.
                //ctx.drawImage(dino1, this.x, this.y); //이미지로 변경할 경우 fillRect 대신 사용
            }
        }
        //dino.draw();

        /////////////////장애물 - 선인장 데이터 정의
        class Cactus { //여러개의 변수는 class로 관리
            constructor() {
                this.x= 700;
                this.y= 204;
                this.width= 50;
                this.height= 50;
            }
            draw(){
                ctx.fillStyle = 'red';
                ctx.fillRect(this.x,this.y, this.width,this.height);
                //ctx.drawImage(cactus1, this.x, this.y); //이미지로 변경할 경우 fillRect 대신 사용
            }
        }
        // var cactus = new Cactus();
        // cactus.draw();

        var timer = 0;
        var cactusList = [];
        var animation;

        /////////////////모션 함수
        function frameMotion() {
            animation = requestAnimationFrame(frameMotion);
            timer++;
            
            ctx.clearRect(0,0, canvas.width, canvas.height); //canvas를 지움.

            //180프레임마다 동작
            if(timer % 180 === 0) {
                var cactus = new Cactus();
                cactusList.push(cactus);
            }

            cactusList.forEach((c,i,o)=>{
                //x좌표가 0 미만이면 제거
                if(c.x < 0){
                    o.splice(i,1)
                }
                c.x--; //catusList 요소들의 x 좌표가 감소(왼쪽으로 이동하는 것처럼 보임)

                //충돌체크
                Confliction(dino, c);

                c.draw();
            })

            //스페이스바를 누르면 점프
            if(jumping == true) {
                dino.y -= 2;
                jumpTimer ++;
            }
            if(jumpTimer > 60) { //점프하고 60프레임이 지나면 멈춤
                jumping = false;
                jumpTimer = 0;
            }
            //멈추면
            if(jumping == false) {
                if(dino.y < 200) { //멈췄을 때 y좌표가 199가 되면
                    dino.y ++; //다시 내려옴
                }
            }

            //dino.x++; // dino의 x 좌표가 증가(오른쪽으로 이동하는 것처럼 보임)
            dino.draw()
        }
        frameMotion();


        //충돌 체크 함수
        function Confliction(dino, cactus){
            var xGap = cactus.x - (dino.x + dino.width);
            var yGap = cactus.y - (dino.y + dino.height);

            if(xGap < 0 && yGap < 0){
                ctx.clearRect(0,0, canvas.width, canvas.height);
                cancelAnimationFrame(animation);
            }
        }

        //스페이스바로 점프
        var jumping = false;
        var jumpTimer = 0;
        document.addEventListener('keydown', function(e){
            if(e.code === 'Space') {
                jumping = true;
            }
        })
    }
}
</script>

<style lang="scss"></style>
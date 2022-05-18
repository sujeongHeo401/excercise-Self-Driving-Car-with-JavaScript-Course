class Car{
    constructor(x, y, width, height){
        this.x = x;
        this.y = y;
        this.width =width;
        this.height=height;

        this.speed=0;
        this.acceleration=0.2;
        this.maxSpeed=3;
        this.friction=0.05;
        this.angle = 0;
        this.controls= new Controls();
    }

    update(){
        this.#move();
        // 선분의 길이가 1cm 인 경우 사인은 각도에 대한 상승을 나타내며 동일한 길이의 선에 대해 Cos는 각도에 대한 런을 나타냅니다.
    }

    #move(){
        if(this.controls.forward){
            this.speed += this.acceleration;
        }
        if(this.controls.reverse){
            this.speed -= this.acceleration;
        }

        if(this.speed > this.maxSpeed){
            this.speed = this.maxSpeed;
        }

        if(this.speed <-this.maxSpeed/2){
            this.speed=-this.maxSpeed/2;
        }

        if(this.speed > 0 ){
            this.speed -= this.friction;
        }
        if(this.speed < 0 ){
            this.speed += this.friction;
        }

        if(Math.abs(this.speed) < this.friction){
            this.speed = 0;
        }

        if(this.spped!=0){
            const flip = this.speed > 0?1:-1;
            if(this.controls.left){
                this.angle+=0.03 * flip;
            }
            if(this.controls.right){
                this.angle -= 0.03* flip;
    
            }
        }



     
        this.x -= Math.sin(this.angle)*this.speed;
        this.y -= Math.cos(this.angle)*this.speed;
    }

    draw(ctx){

        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(-this.angle);
        ctx.beginPath();
        ctx.rect(
            - this.width/2,
            - this.height/2,
            this.width,
            this.height
        );
        ctx.fill();

        ctx.restore();
    }
}
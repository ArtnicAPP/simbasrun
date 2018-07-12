Crafty.c("Simba", {
    init: function(){
        var simbaAssets = {
            "sprites":{
                "assets/Simba.png": {
                    tile: 70,
                    tileh:50,
                    map: {
                        idle: [0,0]
                    }
                }
            }
        }

        Crafty.load(simbaAssets);

        this.addComponent("Simba, 2D, Canvas, Sprite, SpriteAnimation, Collision, Gravity, Jumper, Persist, Tween, idle")
            .attr({x: 100, y: 50, w: 70, h: 50, jumping: false, hitted: false})
            .collision(60, 10, 60, 50, 35, 50, 35, 25, 50, 25, 50, 10)
            .gravity('Floor')
            .gravityConst(2000)
            .jumpSpeed(600)
            .reel('run', 500, 0, 0, 13)
            .reel('jump', 1000, 0, 1, 6)
            .reel('hitted', 1500, 0, 2, 10)
            .animate('hitted', 1)
            .bind("KeyDown", function(evt){        
                if(evt.key == Crafty.keys.UP_ARROW && !this.hitted){
                    this.collision(50,10,60,10,30,40,20,40)
                    this.jumping = true;
                    this.jump();
                    this.animate('jump', 1);
                }
            })
            .onHit("Obstacle", function(hitDatas){
                if(!this.hitted){
                    this.animate('hitted', 1);
                    this.hitted = true;                
                    Crafty("Obstacle").vx = -350;
                    setTimeout(function(){
                        Crafty.enterScene("ScoreScreen", score.total);
                        simba.tween({x: 165, y: 125}, 1000);
                        simba.pauseAnimation();
                        simba.removeComponent("Gravity");
                    }, 1600);
                }
            })
            .bind("LandedOnGround", function(evt){
                if(this.jumping)
                    this.collision(60, 10, 60, 50, 35, 50, 35, 25, 50, 25, 50, 10)
                if(!this.hitted)
                    this.animate("run", -1);
            });      
        
            return this;
    }
});
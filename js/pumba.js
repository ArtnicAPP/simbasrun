Crafty.c("Pumba", {
    init: function(){
        var obstacleAssets = {
            "sprites":{
                "assets/Pumba.png": {
                    tile: 45,
                    tileh:50,
                    map: {
                        pumba: [0,0]
                    }
                }
            }
        }

        Crafty.load(obstacleAssets);

        this.addComponent("Obstacle, 2D, Collision, Canvas, Motion, Collision, SpriteAnimation, Sprite, pumba")
            .attr({x: 900, y: 232, w: 70, h: 68, vx: -300, jumped: false})
            .collision(45, 0, 90, 64, 0, 64)
            .reel("idle", 500, 0, 0, 4)
            .animate("idle", -1)
            .bind("UpdateFrame", function(evt){
                if(this.x <= simba.x && !simba.hitted && !this.jumped){
                    score.total += 10;
                    this.jumped = true;
                    this.vx -= (300 * score.total / 500)
                }
                if(this.x < -90){
                    this.x = 825;
                    this.jumped = false;
                }
            });
    }
});
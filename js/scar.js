Crafty.c("Scar", {
    init: function(){
        var obstacleAssets = {
            "sprites":{
                "assets/Scar.png": {
                    tile: 80,
                    tileh:40,
                    map: {
                        scar: [0,0]
                    }
                }
            }
        }

        Crafty.load(obstacleAssets);

        this.addComponent("Obstacle, 2D, Collision, Canvas, Motion, Collision, SpriteAnimation, Sprite, scar")
            .attr({x: 1200, y: 245, w: 120, h: 60, vx: -300, jumped: false})
            .collision(45, 0, 90, 64, 0, 64)
            .reel("idle", 1500, 0, 0, 6)
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
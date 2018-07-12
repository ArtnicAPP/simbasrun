Crafty.c("Obstacle", {
    init: function(){
        var obstacleAssets = {
            "sprites":{
                "assets/rock.png": {
                    tile: 900,
                    tileh:645,
                    map: {
                        rock: [0,0]
                    }
                }
            }
        }

        Crafty.load(obstacleAssets);

        this.addComponent("Obstacle, 2D, Collision, Canvas, Motion, Collision, rock")
            .attr({x: 500, y: 245, w: 90, h: 64, vx: -300, jumped: false})
            .collision(45, 0, 90, 64, 0, 64)
            .bind("UpdateFrame", function(evt){
                if(this.x <= simba.x && !simba.hitted && !this.jumped){
                    score.total += 10;
                    this.jumped = true;
                    this.vx -= (300 * score.total / 2000)
                }
                if(this.x < -90){
                    this.x = 825;
                    this.jumped = false;
                }
            });
    }
});
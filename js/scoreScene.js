Crafty.defineScene("ScoreScreen", function(points){
    Crafty.background("#000");
    Crafty.e("2D, DOM, Text")
        .attr({ w: 100, h: 20, x: 150, y: 100 })
        .text("Pontos: " + points)
        .textAlign("center")
        .textColor("#FFFFFF")
        .textFont({size: '20px', family: 'Comic Sans', weight: 'bold'})
        .bind("KeyDown", function(evt){
            if(evt.key == Crafty.keys.SPACE){
                simba.destroy();
                Crafty.enterScene("GameScreen");
            }
        });
    record = localStorage.getItem("record")
    if(record < points)
        localStorage.setItem("record", points);
});
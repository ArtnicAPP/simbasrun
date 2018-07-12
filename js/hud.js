Crafty.c("HUD", {
    init: function(){
        record = localStorage.getItem("record");
        
        this.addComponent("2D, DOM, Text")
        .attr({x: 10, y: 10, w: 200, total: 0, z: 4})
        .text("Pontos: 0 | Recorde: " + record)
        .textColor("#000000")
        .textFont({size: '14px', family: 'Comic Sans', weight: 'bold'})
        .bind("UpdateFrame", function(evt){
            this.text("Pontos: " + this.total + " | Recorde: " + record);
        });
    }
});
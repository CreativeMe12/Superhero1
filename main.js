var canvas = new fabric.Canvas('mycanvas');
block_w = 30;
block_h = 30;

player_x = 10;
player_y = 10;

var plOb = '';
var blk_ob = '';

 function player_update(){
     fabric.Image.fromURL('player (1).png', function(Img)
     {
         plOb = Img;
         plOb.scaleToWidth(150);
         plOb.scaleToHeight(140);
         plOb.set({
             top: player_y,
             left: player_x
         });
         canvas.add(plOb);
     }
     );
 }

 function new_image(get_image){
    fabric.Image.fromURL(get_image, function(Img)
    {
        blk_ob =  Img;
        blk_ob.scaleToWidth(block_w);
        blk_ob.scaleToHeight(block_h);
        blk_ob.set({
            top: player_y,
            left: player_x
        });
        canvas.add(blk_ob);
    }
    );
 }
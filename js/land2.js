/**
 * Created by dell on 2016/8/21.
 */
/**
 * Created by dell on 2016/8/21.
 */
(function(w){
    function land(ctx,img,x,y,speed){
        this.ctx=ctx;
        this.img=img;
        this.width=img.width;
        this.height=img.height;
        this.x=x||0;
        this.y=y||0;
        this.speed=speed||2;
    }
    land.prototype.draw=function(){
        this.ctx.drawImage(this.img,this.x,this.y)
    }
    land.prototype.updata=function(){
        this.x=this.x-this.speed;
        if(this.x<=-this.width){
            this.x=this.x+this.width*4;
        }
    }
    w.land=land;
})(window)
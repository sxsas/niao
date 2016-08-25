/**
 * Created by dell on 2016/8/23.
 */
(function(w){
    function Sky (ctx,img,x,y,speed){
        this.ctx=ctx;
        this.img=img;
        this.width=img.width;
        this.height=img.height;
        this.x=x||0;
        this.y=y||0;
        this.speed=speed||2;
    }
    Sky.prototype.draw=function(){
        this.ctx.drawImage(this.img,this.x,this.y)
    }
    Sky.prototype.update=function(){
        this.x-=this.speed;
        if(this.x<=-this.width){
            this.x=this.width;
        }
    }
    w.Sky=Sky;
})(window)
/**
 * Created by dell on 2016/8/22.
 */
(function(w){

    function Text(ctx,text,x,y,fillStyle,align,baseline,font){
        this.ctx=ctx;
        this.text=text;
        this.x=x;
        this.y=y;
        this.fillStyle=fillStyle;
        this.font=font||'20px Î¢ÈíÑÅºÚ';
        this.align=align||'center';
        this.baseline=baseline||'middle';
    }
    Text.prototype={
        draw:function(){
            this.ctx.save();

            this.ctx.font=this.font;
            this.ctx.textAlign=this.align;
            this.ctx.textBaseline=this.baseline;
            this.ctx.fillStyle=this.fillStyle;
            this.ctx.fillText(this.text,this.x,this.y);

            this.ctx.restore();
        }
    }
    w.Text=Text;
})(window)
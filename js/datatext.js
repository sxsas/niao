/**
 * Created by dell on 2016/8/22.
 */
(function(w){
    function dataText (ctx,startTime,x,y,fillStyle,align,baseline,font){
        this.startTime=startTime;
        Text.apply(this,arguments);
        this.update();
    }
    dataText.prototype=Object.create(Text.prototype);
    tool.extend(dataText.prototype,{
        update:function(){
            var gameruntime=Date.now()-this.startTime;
            var hours = Math.floor(gameruntime / (1000 * 60 * 60));
            var minutes = Math.floor(gameruntime % (1000 * 60 * 60) / (1000 * 60));
            var seconds = Math.floor(gameruntime % (1000 * 60) / 1000);
            this.text='坚持了'+hours+'小时'+minutes+'分钟'+seconds+'秒';
        }
    });
    w.dataText=dataText;
})(window)
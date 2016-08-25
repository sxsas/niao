/**
 * Created by dell on 2016/8/23.
 */
(function(w){
    function getImage(objimg,cb){
        if(!objimg.length){
            throw 'Ã»ÓÐlength';
        }
        var obj={},img,conten=0;
        for(var key in objimg){
            if(key=='length'){
                continue;
            }
            img=new Image();
            img.src=objimg[key];
            obj[key]=img;
            img.addEventListener('load',function(){
                conten++;
                if(conten>=objimg.length){
                    cb(obj);
                }

            })
        }
    }
    w.getImage=getImage;
})(window)
/**
 * Created by dell on 2016/8/22.
 */
var tool={
    extend:function(o1,o2){
        for( var key in o2){
            o1[key]=o2[key];
        }
    },
    angleToRed:function(angle){
        return Math.PI/180*angle;
    }
}
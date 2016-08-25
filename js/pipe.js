/**
 * Created by dell on 2016/8/22.
 */
(function (w) {
    function Pipe(ctx, imgd, imgu, x, yd, yu, space, speed) {
        this.ctx = ctx;
        this.imgd = imgd;
        this.imgu = imgu;
        this.width = imgd.width;
        this.height = imgd.height;
        this.x = x;
        this.yd = yd || 0;
        this.yu = yu || 0;
        this.space = space || 150;
        this.speed = speed || 2;
        this._updateH();
    };
    tool.extend(Pipe.prototype, {
        draw: function () {
            this.ctx.drawImage(this.imgd, this.x, this.yd);
            this.ctx.drawImage(this.imgu, this.x, this.yu);
            this._drawPath();
        },
        _drawPath: function () {
            this.ctx.rect(this.x, this.yd, this.width, this.height);
            this.ctx.rect(this.x, this.yu, this.width, this.height);
        },
        update: function () {
            this.x -= this.speed;
            if (this.x <= -this.width) {
                this.x += this.width * 3 * 6;
                this._updateH();
            }
        },
        _updateH: function () {
            var viewH = Math.random() * 250 + 50;
            this.yd = viewH - this.height;
            this.yu = viewH + this.space;
        },


    });
    w.Pipe = Pipe;
})(window)
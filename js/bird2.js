/**
 * Created by dell on 2016/8/22.
 */
(function (w) {
    function niao(ctx, img, x, y, sizew, sizeh, index, speed) {
        this.ctx = ctx;
        this.img = img;
        this.width = img.width / 3;
        this.height = img.height;
        this.x = x || 10;
        this.y = y || 10;
        this.sizew = sizew || this.width;
        this.sizeh = sizeh || this.height;
        this.index = index || 0;
        this.speed = speed || 2;
        this.speedPlus = 0.1;
        this._bind();
    }

    tool.extend(niao.prototype, {
        draw: function () {
            this.ctx.save();
            this.ctx.translate(this.x + this.sizew / 2, this.y + this.sizeh / 2)
            var angle = this.speed * 10;
            angle = angle > 90 ? 90 : angle;
            var red = tool.angleToRed(angle);
            this.ctx.rotate(red)
            this.ctx.drawImage(this.img,
                this.width * this.index, 0, this.width, this.height,
                -this.sizew / 2, -this.sizeh / 2, this.sizew, this.sizeh)
            this.ctx.restore();
        },
        updata: function () {
            this.index = ++this.index > 2 ? 0 : this.index;
            this.y += this.speed;
            this.speed += this.speedPlus;
        },
        _bind: function () {
            var that = this;
            this.ctx.canvas.addEventListener('click', function () {
                that.speed = -3;
            })
        }
    })
    w.niao = niao;
})(window)
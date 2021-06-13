function  PL (x,c,b,h,z){
     var imgs = new Image();
    imgs.src= x;
    var ptrn = ctx.createPattern(imgs,'repeat');
    ctx.fillstyle=ptrn;
    ctx.fillRect(c,b,h,z)
}

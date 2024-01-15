const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
function mousemove(xscale,yscale){
    window.addEventListener("mousemove",function(dets){
    //   mouse.style.left = dets.clientX + "px"
    //  mouse.style.top = dets.clientY + "px"
    document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale},${yscale})`
    })
}


var timer;
function mousechanger(){
    let xscale =1;
    let yscale = 1;

    let xprev = 0;
    let yprev = 0;
    window.addEventListener("mousemove",function(dets){
//         let xdiff = dets.clientX - xprev
//         let ydiff = dets.clientY - yprev
//     xscale =  gsap.utils.clamp(.8,1.2,xdiff)
//    yscale =  gsap.utils.clamp(.8,1.2,ydiff)
     
    xscale =  gsap.utils.clamp(.8,1.2,dets.clientX - xprev)
   yscale =  gsap.utils.clamp(.8,1.2, dets.clientY - yprev)

        xprev = dets.clientX;
        yprev = dets.clientY;
        // console.log(xdiff, ydiff)

        mousemove(xscale,yscale)
        timer = setTimeout(function(){
            document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1,1)`
        },100)
    })
}

function firstPageAnim(){
    let tl = gsap.timeline()

    tl.from("#nav",{
        y:"-10",
        duration:2,
        opacity:0,
        ease:Expo.easeInOut,
        delay:.5
    })
    .to(".boundingelem",{
      y:0,
      duration:2,
      stagger:2,
      delay:-1,
      ease:Expo.easeInOut
    })
    .from("#herofooter",{
        y:"-10",
        delay:-1,
        duration:1.5,
        ease:Expo.easeInOut,
        opacity:0
    })
}

document.querySelectorAll(".elem").forEach(function(elem){
    var rotate = 0;
    var diffrotate = 0;
elem.addEventListener("mousemove",function(dets){
    var diff = dets.clientY - elem.getBoundingClientRect().top;
    diffrotate = dets.clientX - rotate;
    rotate  = dets.clientX
    gsap.to(elem.querySelector("img"),{
        opacity: 1,
        ease: Power3,
        top:diff,
        left:dets.clientX,
        rotate: gsap.utils.clamp(-20,20,diffrotate*.8)
    })
})

elem.addEventListener("mouseleave",function(dets){
    gsap.to(elem.querySelector("img"),{
        opacity:0,
        duration:1.5,
    })
})
})
firstPageAnim()
mousechanger()
mousemove()
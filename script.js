const canvas = document.getElementById("canvas")
canvas.width = window.innerWidth
canvas.height = window.innerHeight
let idata
window.addEventListener('resize',()=>{
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    ctx.putImageData(idata,0,0)
})
const ctx = canvas.getContext("2d")
const clr = document.getElementById("clr")
const size = document.getElementById("size")
let drawing = false
function draw(e){
    if(!drawing) return;
    //console.log(size.value)
    ctx.lineWidth = size.value
    ctx.lineCap = 'round'
    ctx.strokeStyle = clr.value
    ctx.lineTo(e.clientX,e.clientY)
    ctx.stroke()
    idata = ctx.getImageData(0,0,canvas.width,canvas.height)
}
canvas.addEventListener('pointerdown',(e)=>{
    drawing = true
    draw(e)
    draw(e)
})
canvas.addEventListener('pointermove',draw)
canvas.addEventListener('pointerup',(e)=>{
    drawing = false
    ctx.beginPath()
})
const x = document.querySelector('span')
const ctrl = document.getElementById('ctrl')

ctrl.addEventListener('pointerenter',(e)=>{
    if(e.pointerType === "mouse")
        x.innerText = '❌';
})
ctrl.addEventListener('pointerleave',(e)=>{
    if(e.pointerType === "mouse")
        x.innerText = '🔨';
        // ctrl.style.pointerEvents = 'auto';
})
x.addEventListener('pointerdown',(e)=>{
    if(e.pointerType === 'touch'){
        if(x.innerText !== '🔨')
            ctrl.style.pointerEvents = 'none';
        setTimeout(()=>{ctrl.style.pointerEvents = 'auto'},1000)
    }
})
window.addEventListener('click',()=>{
    if(window.getComputedStyle(size).display  === 'none')
        x.innerText = '🔨'
    else
        x.innerText = '❌';
})

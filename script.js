const canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d')
canvas.width = window.innerWidth
canvas.height = window.innerHeight
let particlesArrary = []
const numberOfParticles = 3
let hue = 0;

//measure title element
let titleElement = document.getElementById('title1')
let titleMeasurements = titleElement.getBoundingClientRect()
class Particle {
  constructor(x, y){
    this.x = x
    this.y = y
    this.size = Math.random() * 10 + 1
    this.weight = Math.random() * 1 + 1
    this.directionX = -10
  }
  update(){
    if(this.y > canvas.height){
      this.y = Math.random() * canvas.height * 1.3
      this.weight = Math.random() * 20 + 1
      this.x = Math.random() * canvas.width * 1.3
    } 
    else if(this.y < Math.random() * this.y * 1.1 - 50){
      this.y = Math.random() * canvas.height * 1.3
      this.weight = Math.random() * 20 + 1
      this.x = Math.random() * canvas.width * 1.3
    }
    this.weight += 0.05
    if(this.size > 1){
      this.size -= 0.001
    }
    this.y += this.weight
    this.x += this.directionX
  }
  draw(){
    ctx.fillStyle = 'hsl('+ hue +', 100%, 50%)'
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
    ctx.closePath()
    ctx.fill()
  }
}
function init(){
  particlesArrary = []
  for(let i = 0; i < numberOfParticles; i++){
    const x = Math.random() * canvas.width
    const y = Math.random() * canvas.height
    particlesArrary.push(new Particle(x, y))
  }
}
init()

function animate(){
  ctx.fillStyle = 'rgba(0, 0, 0, 0.3)'
  ctx.fillRect(0, 0, canvas.width, canvas.height)
  for ( let i = 0; i < particlesArrary.length; i++){
    particlesArrary[i].update()
    particlesArrary[i].draw()
  }
  hue++
  requestAnimationFrame(animate)
}
animate()

window.addEventListener('resize', function() {
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
  
  init()
})
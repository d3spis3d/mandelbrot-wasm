import { Mandelbrot } from "mandelbrot-wasm"

const m = Mandelbrot.new(4000, 3000, "-1.20,0.35", "-1,0.20")

const file = new Blob([m.render()], {type : 'image/png'});

const link = document.createElement("a")

link.download = "mandelbrot.png"
link.href = URL.createObjectURL(file)
link.innerText = "Download Image"

document.body.appendChild(link)

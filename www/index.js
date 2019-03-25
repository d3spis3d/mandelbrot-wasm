import { Mandelbrot } from "mandelbrot-wasm"

const m = Mandelbrot.new(4000, 3000, "-1.20,0.35", "-1,0.20")

console.log(m.render())

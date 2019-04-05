import { memory } from "../crate/pkg/mandelbrot_wasm_bg"
import { Mandelbrot } from "../crate/pkg/mandelbrot_wasm"

function work(width, height, upperLeft, lowerRight) {
  const m = Mandelbrot.new(width, height, upperLeft, lowerRight)

  const pngPointer = m.render()
  const pngSize = m.png_size()

  const png = new Uint8Array(memory.buffer, pngPointer, pngSize)

  const file = new Blob([png], {type : 'image/png'});

  const link = document.createElement("a")

  link.download = "mandelbrot.png"
  link.href = URL.createObjectURL(file)

  link.click()

  const button = document.getElementById("submit")
  const generating = document.getElementById("generating")

  button.className = ""
  generating.className = "hidden"
}

const generateAndDownloadMandelbrot = function(event) {
  event.preventDefault()
  const [width, height, upperLeft, lowerRight] = event.target

  const button = document.getElementById("submit")
  const generating = document.getElementById("generating")

  button.className = "hidden"
  generating.className = ""

  console.log(
    parseInt(width.value),
    parseInt(height.value),
    upperLeft.value,
    lowerRight.value
  )

  setTimeout(
    () => work(
      parseInt(width.value),
      parseInt(height.value),
      upperLeft.value,
      lowerRight.value
    )
  )
}

const form = document.getElementById("mandelbrot-form")
form.onsubmit = generateAndDownloadMandelbrot

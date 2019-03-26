import { Mandelbrot } from "mandelbrot-wasm"

function work(width, height, upperLeft, lowerRight) {
  const m = Mandelbrot.new(width, height, upperLeft, lowerRight)

  const file = new File([m.render()], {type : 'image/png'});

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

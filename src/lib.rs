mod utils;

extern crate image;
extern crate num_complex;

use cfg_if::cfg_if;
use wasm_bindgen::prelude::*;
use num_complex::Complex;
use image::ColorType;
use image::png::PNGEncoder;

use std::str::FromStr;
use std::io::Write;

cfg_if::cfg_if! {
    // When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
    // allocator.
    if #[cfg(feature = "wee_alloc")] {
        #[global_allocator]
        static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;
    }
}

fn parse_pair<T: FromStr>(s: &str, separator: char) -> Option<(T, T)> {
    match s.find(separator) {
        None => None,
        Some(index) => {
            match (T::from_str(&s[..index]), T::from_str(&s[index + 1..])) {
                (Ok(l), Ok(r)) => Some((l, r)),
                _ => None,
            }
        },
    }
}

fn parse_complex(s: &str) -> Option<Complex<f64>> {
    match parse_pair(s, ',') {
        Some((re, im)) => Some(Complex { re, im }),
        None => None,
    }
}


#[wasm_bindgen]
pub struct Mandelbrot {
    width: usize,
    height: usize,
    upper_left: Complex<f64>,
    lower_right: Complex<f64>,

}

#[wasm_bindgen]
impl Mandelbrot {
    pub fn new(width: usize, height: usize, upper_left: String, lower_right: String) -> Mandelbrot {
        Mandelbrot {
            width,
            height,
            upper_left: parse_complex(&upper_left).expect("error parsing upper_left"),
            lower_right: parse_complex(&lower_right).expect("error parsing lower_right"),
        }
    }

    pub fn render(&self) -> Vec<u8> {
        let mut pixels = vec![0; self.width * self.height];

        for row in 0 .. self.height {
            for column in 0 .. self.width {
                let point = self.pixel_to_point(
                    (self.width, self.height),
                    (column, row),
                    self.upper_left,
                    self.lower_right
                );
                pixels[row * self.width + column] = match self.calculate_in_set(point, 255) {
                    None => 0,
                    Some(count) => 255 - count as u8
                };
            }
        }

        let mut png_buffer = Vec::new();

        PNGEncoder::new(png_buffer.by_ref())
            .encode(&pixels, self.width as u32, self.height as u32, ColorType::Gray(8))
            .expect("error encoding png");

        png_buffer
    }

    fn pixel_to_point(&self,
                      bounds: (usize, usize),
                      pixel: (usize, usize),
                      upper_left: Complex<f64>,
                      lower_right: Complex<f64>)
        -> Complex<f64>
    {
        let(width, height) = (lower_right.re - upper_left.re, upper_left.im - lower_right.im);
        Complex {
            re: upper_left.re + pixel.0 as f64 * width / bounds.0 as f64,
            im: upper_left.im - pixel.1 as f64 * height / bounds.1 as f64
        }
    }

    fn calculate_in_set(&self, c: Complex<f64>, limit: u32) -> Option<u32> {
        let mut z = Complex { re: 0.0, im: 0.0 };
        for i in 0..limit {
            z = z * z + c;
            if z.norm_sqr() > 4.0 {
                return Some(i);
            }
        }

        None
    }
}

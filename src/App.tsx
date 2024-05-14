import Imagem1 from "./assets/imagem-1.jpg";
import Imagem2 from "./assets/imagem-2.jpg";
import Imagem3 from "./assets/imagem-3.jpg";
import Imagem4 from "./assets/imagem-4.jpg";
import Imagem5 from "./assets/imagem-5.jpg";
import "./App.css";
import { useEffect, useState } from "react";

const images: string[] = [Imagem1, Imagem2, Imagem3, Imagem4, Imagem5];

export function App() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  function toogleRadio(index: number) {
    setCurrentIndex(index);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Troca de imagem a cada 3 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-neutral-300 w-screen h-screen flex justify-center items-center">
      <div className="w-[400px] h-[350px] overflow-hidden">
        <div className="flex w-[500%] justify-center items-center">
          {images.map((_, index) => (
            <input
              type="radio"
              className="hidden"
              name="radio-btn"
              id={`radio-${String(index)}`}
              key={index}
              checked={currentIndex === index}
              onChange={() => toogleRadio(index)}
            />
          ))}

          {images.map((image, index) => (
            <div
              className={`w-3/12 ease-linear duration-500 ${
                index === 0 ? "first" : ""
              }`}
              key={index}
            >
              <img
                className="w-[400px] h-[350px] rounded-lg"
                src={image}
                alt={String(index)}
              />
            </div>
          ))}
        </div>

        <div className="absolute w-[400px] -mt-10 flex justify-center gap-5">
          {images.map((_, index) => (
            <div
              className={`border-2 border-solid border-neutral-500 rounded-lg p-1 cursor-pointer ease-linear duration-500 ${
                currentIndex === index ? "bg-neutral-500" : ""
              }`}
            ></div>
          ))}
        </div>

        <div className="absolute w-[400px] -mt-10 flex justify-center gap-5">
          {images.map((_, index) => (
            <label
              htmlFor={`radio-${String(index)}`}
              className="border-2 border-solid border-neutral-500 rounded-lg p-1 cursor-pointer ease-linear duration-500 hover:bg-neutral-500"
            ></label>
          ))}
        </div>
      </div>
    </section>
  );
}

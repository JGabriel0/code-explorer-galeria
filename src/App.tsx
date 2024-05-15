import { ArrowLeft, ArrowRight } from "lucide-react";
import Imagem1 from "./assets/imagem-1.jpg";
import Imagem2 from "./assets/imagem-2.jpg";
import Imagem3 from "./assets/imagem-3.jpg";
import Imagem4 from "./assets/imagem-4.jpg";
import Imagem5 from "./assets/imagem-5.jpg";
import { useState } from "react";

export function App() {
  const [image, setImage] = useState<number>(1);
  const [imagemAmpliada, setImagemAmpliada] = useState<boolean>(false);

  function toggleAmpliarImagem() {
    setImagemAmpliada(!imagemAmpliada);
  }

  function toggleImage(direction: string) {
    if (direction === "left") {
      if (image === 1) {
        setImage(5);
        return;
      } else {
        setImage(image - 1);
        return;
      }
    }

    if (image === 5) {
      setImage(1);
      return;
    } else {
      setImage(image + 1);
      return;
    }
  }

  return (
    <section className="bg-neutral-300 w-screen h-screen flex justify-center items-center">
      <div className="w-[400px] h-[350px]">
        <div className="flex justify-center items-center">
          <div className="px-6 cursor-pointer">
            <ArrowLeft onClick={() => toggleImage("left")} />
          </div>

          {image == 1 && (
            <div
              className={`w-[400px] h-[350px] rounded-lg overflow-hidden transform transition-transform ease-in-out duration-500 ${
                imagemAmpliada ? "scale-150" : ""
              }`}
              onClick={toggleAmpliarImagem}
            >
              <img className="w-full h-full rounded-lg" src={Imagem1} />
            </div>
          )}

          {image == 2 && (
            <div
              className={`w-[400px] h-[350px] rounded-lg overflow-hidden transform transition-transform ease-in-out duration-500 ${
                imagemAmpliada ? "scale-150" : ""
              }`}
              onClick={toggleAmpliarImagem}
            >
              <img className="w-full h-full rounded-lg" src={Imagem2} />
            </div>
          )}

          {image == 3 && (
            <div
              className={`w-[400px] h-[350px] rounded-lg overflow-hidden transform transition-transform ease-in-out duration-500 ${
                imagemAmpliada ? "scale-150" : ""
              }`}
              onClick={toggleAmpliarImagem}
            >
              <img className="w-full h-full rounded-lg" src={Imagem3} />
            </div>
          )}

          {image == 4 && (
            <div
              className={`w-[400px] h-[350px] rounded-lg overflow-hidden transform transition-transform ease-in-out duration-500 ${
                imagemAmpliada ? "scale-150" : ""
              }`}
              onClick={toggleAmpliarImagem}
            >
              <img className="w-full h-full rounded-lg" src={Imagem4} />
            </div>
          )}

          {image == 5 && (
            <div
              className={`w-[400px] h-[350px] rounded-lg overflow-hidden transform transition-transform ease-in-out duration-500 ${
                imagemAmpliada ? "scale-150" : ""
              }`}
              onClick={toggleAmpliarImagem}
            >
              <img className="w-full h-full rounded-lg" src={Imagem5} />
            </div>
          )}

          <div className="px-6 cursor-pointer">
            <ArrowRight onClick={() => toggleImage("right")} />
          </div>
        </div>
      </div>
    </section>
  );
}

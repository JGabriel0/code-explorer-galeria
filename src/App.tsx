import Imagem1 from "./assets/imagem-1.jpg";
import Imagem2 from "./assets/imagem-2.jpg";
import Imagem3 from "./assets/imagem-3.jpg";
import Imagem4 from "./assets/imagem-4.jpg";
import Imagem5 from "./assets/imagem-5.jpg";
import Imagem6 from "./assets/imagem-6.jpg";
import Imagem7 from "./assets/imagem-7.jpg";

const images = [Imagem1, Imagem2, Imagem3, Imagem4, Imagem5, Imagem6, Imagem7];

export function App() {
  return (
    <section className="bg-neutral-300 w-full h-screen flex justify-center items-center overflow-x-auto">
      <div className="flex items-center gap-6">
        {images.map((image, index) => (
          <div
            className="w-[110px] h-[250px] md:h-[350px] rounded-md cursor-pointer ease-linear duration-75 grayscale-[.75] active:grayscale-0 hover:grayscale-0 active:w-[250px] active:h-[250px] md:hover:w-[400px] md:hover:h-[400px]"
            key={index}
          >
            <img
              className="w-full h-full object-cover rounded-md"
              src={image}
              alt={String(index)}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

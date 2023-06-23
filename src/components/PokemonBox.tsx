import { useState } from "react";
import { Pokemon } from "../utils/fetchUtil";

const PokemonBox: React.FC<Pokemon> = (props) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div className="flex bg-red-300 w-80 h-80 items-center flex-col cursor-pointer">
      <h1>{props.name}</h1>
      <div
        className="w-40 h-40"
        style={{
          backgroundImage: !hovered
            ? `url(${props.sprites.front_default})`
            : `url(${props.sprites.back_default})`,
            transition: 'background-image 0.3s ease',
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      ></div>
    </div>
  );
};

export default PokemonBox;

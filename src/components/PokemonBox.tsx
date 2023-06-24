import { useState } from "react";
import { Pokemon } from "../utils/fetchUtil";
import { useNavigate } from "react-router-dom";

const PokemonBox: React.FC<Pokemon> = ({ name, sprites, id }) => {
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/${id}`);
  };
  return (
    <div className="flex w-30 h-40 items-center flex-col  ">
      <h1 className="text-[#321325] text-xl capitalize">{name}</h1>
      <div
        className="w-40 h-40 cursor-pointer"
        style={{
          backgroundImage: !hovered
            ? `url(${sprites.front_default})`
            : `url(${sprites.front_shiny})`,
          transition: "background-image 0.3s ease"
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={handleClick}
      ></div>
    </div>
  );
};

export default PokemonBox;

import { CharacterItem } from "./CharacterItem";
import { useCharacters } from "../hooks/useCharacters";

export const CharacterList = ({ ids }) => {
  const { characters, isLoading } = useCharacters(ids);
  console.log(characters);

  if (isLoading) {
    return <div className="loading">Загрузка...</div>;
  }
  return (
    <div className="characters-container">
      {characters[0].id ? (
        characters?.map((character) => (
          <CharacterItem key={character.id} character={character} />
        ))
      ) : (
        <h1>No one lives on this planet</h1>
      )}
    </div>
  );
};

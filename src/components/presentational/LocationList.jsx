import useLocations from "../hooks/useLocations";
import { CharacterList } from "./CharacterList";
import { Collapse } from "./Collapse";

const arr = ["aaaa"];

function LocationList() {
  const { locations } = useLocations();

  return (
    <div>
      {locations.map((location) => (
        // <EpisodeItem key={episode.id} episode={episode} />
        <Collapse
          key={location.id}
          className="location"
          title={location.name}
          content={
            <CharacterList
              ids={location.residents.map((character) => {
                if (
                  character === "https://rickandmortyapi.com/api/character/6"
                ) {
                  console.log(character);
                }
                const id = character.split("/").pop();
                return id;
              })}
            />
          }
        />
      ))}
    </div>
  );
}

export default LocationList;

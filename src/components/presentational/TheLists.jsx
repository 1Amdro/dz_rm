import { useState } from "react";
import { EpisodeList } from "./EpisodeList";
import "../Rick.css";
import LocationList from "./LocationList";

function TheLists() {
  const [curList, setCurList] = useState("");

  function handleClick(listName) {
    setCurList(listName);
  }

  return (
    <>
      <div>
        <h2 onClick={handleClick.bind(null, "eps")} className="list-title">
          Episodes
        </h2>
        {curList === "eps" && <EpisodeList />}
      </div>
      <div>
        <h2 onClick={handleClick.bind(null, "locs")} className="list-title">
          Locations
        </h2>
        {curList === "locs" && <LocationList />}
      </div>
    </>
  );
}

export default TheLists;

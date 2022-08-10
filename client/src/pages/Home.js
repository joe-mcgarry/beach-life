import Map from "../components/Map";
import { SearchBar } from "../components/SearchBar/SearchBar";
import BeachData from "../components/beachList";
import { NavBar } from "../components/NavBar/NavBar";
import { useEffect } from "react";
import { useState } from "react";

export const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    fetch(`/signin/user`, {})
      .then((response) => response.json())
      .then((responseJson) => {
        setIsLoggedIn(responseJson);
      });
  }, []);

  return (
    <div>
      <NavBar user={isLoggedIn} />
      <div className="container" data-spy="scroll">
        <SearchBar placeholder="Where would you like to go?" data={BeachData} />
        <div className="map">
          <Map />
        </div>
      </div>
    </div>
  );
};

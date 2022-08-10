import { Review } from "../components/Review/Review";
import { useParams } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { Weather } from "../components/Weather/Weather";
import { SmallMap } from "../components/SmallMap";
// import { Tides } from "../components/Tides/Tides";
import { Address } from "../components/Address/Address";
import { NavBar } from "../components/NavBar/NavBar";

const beaches = require("../components/beachList");

export const Beaches = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    fetch(`/signin/user`, {})
      .then((response) => response.json())
      .then((responseJson) => {
        setIsLoggedIn(responseJson);
      });
  }, []);

  const { id } = useParams();
  const [beach, setBeach] = useState([
    {
      _id: "",
      name: "",
      district: "",
      lat: "",
      long: "",
    },
  ]);

  const getBeach = (id) => {
    return beaches.filter((beach) => {
      return beach._id === id;
    });
  };

  const lat = getBeach(id)[0].lat;
  const long = getBeach(id)[0].long;
  const beachCoOrds = `${lat}, ${long}`;

  useEffect(() => {
    setBeach(getBeach(id));
  }, []);

  return (
    <div className="container">
      <NavBar user={isLoggedIn} />
      <h1>Welcome to {beach[0].name}</h1>
      <SmallMap lat={lat} long={long} />
      <Address beachData={beaches} beachId={id} />
      <h3>Weather Forecast</h3>
      <Weather beach={beachCoOrds} />
      <h3>Tides</h3>
      {/* <Tides lat={lat} long={long} /> */}
      <div className="review">
        <h3>Reviews</h3>
        <Review id={id} user={props.user} />
      </div>
    </div>
  );
};

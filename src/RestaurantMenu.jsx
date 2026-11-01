import { useState, useEffect } from "react";
import { restaurantData } from "./restaurantData";

const extractRestaurants = () => {
  const restaurants = [];
  restaurantData?.data?.data?.cards?.forEach((card) => {
    const cardRestaurants =
      card?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    if (cardRestaurants) {
      restaurants.push(...cardRestaurants);
    }
  });
  return restaurants;
};

const restaurantList = extractRestaurants();

export const RestaurantMenu = () => {
  const [restaurants, setRestaurants] = useState([]);
  useEffect(() => {
    fetchData();
    console.log("RestaurantMenu component mounted");
  },[]);

  const fetchData = () => {
      setRestaurants(restaurantList);
  };
  const {name, cuisines, costForTwo, avgRating, totalRatingsString} = restaurants[0]?.info || {};

  return (
    <div className="restaurant-menu">
      <h4>Restaurant Name: {name || "N/A"} </h4>
      <p>Cuisines: {cuisines?.join(", ") || "N/A"}</p>
      <p>Cost for Two: {costForTwo || "N/A"}</p>
      <p>Average Rating: {avgRating || "N/A"}</p>
      <p>Total Ratings: {totalRatingsString || "N/A"}</p>
      
    </div>
  )
}
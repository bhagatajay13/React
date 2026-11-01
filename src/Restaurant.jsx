import { use, useEffect, useState } from "react";
import { restaurantData } from "./restaurantData";

console.log(restaurantData.data.cards);

// Helper function to extract restaurants from nested structure
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

// “Hooks can only be called inside of the body of a function component.
// React reconciles the virtual DOM with the real DOM and updates only the parts of the real DOM that have changed. This is called reconciliation. React uses a diffing algorithm to determine what has changed in the virtual DOM and updates only those parts of the real DOM that have changed. This makes React very efficient and fast.
// Whenever state changes, React re-renders the component.
// This means that the component function is called again, and the state is preserved across renders. The useState hook allows us to add state to functional components, and it returns an array with two elements: the current state value and a function to update that state value. When we call the state update function, React schedules a re-render of the component with the new state value.
const Ajay = ({ info }) => {
  return (
    <>
      <div
        style={{
          width: "280px",
          border: "1px solid #ddd",
          borderRadius: "12px",
          padding: "16px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
          background: "#fff",
          flex: "0 0 auto",
        }}
      >
        <h2 style={{ marginTop: 0, fontSize: "1.2rem", color: "#1a0c0c" }}>
          {info.name}
        </h2>
        <p style={{ margin: "6px 0" }}>
          {info.locality}, {info.areaName}
        </p>
        <p style={{ margin: "6px 0" }}>Cuisines: {info.cuisines.join(", ")}</p>
        <p style={{ margin: "6px 0" }}>Cost for Two: {info.costForTwo}</p>
        <p style={{ margin: "6px 0" }}>
          Average Rating: {info.avgRatingString} ({info.totalRatingsString})
        </p>
        <p style={{ margin: "6px 0" }}>
          Delivery Time: {info.sla.deliveryTime} mins
        </p>
        <p style={{ margin: "6px 0" }}>
          Discount: {info.aggregatedDiscountInfoV3.header} -{" "}
          {info.aggregatedDiscountInfoV3.subHeader}
        </p>
      </div>
    </>
  );
};

export const Restaurant = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  // if no dependency array is passed, useEffect will run after every render. 
  // If an empty dependency array [ ] is passed, useEffect will run only once after the initial render. 
  // If a dependency array with values is passed, useEffect will run only when dependency values change.
  useEffect(() => {
    console.log("useEffect called");
    fetchData();
  },[]);

  const fetchData1 = async () => {
    try {
      const response = await fetch('/api/listRestaurants');
      console.log('status', response.status);
      const json = await response.json();
      console.log('json', json);
    } catch (error) {
      console.error('fetch error:', error);
    }
  };
  const fetchData = () => {
    setTimeout(() => {
      setRestaurants(restaurantList);
    }, 1000);
  };

  const showTopRated = () => {
    const topRatedRestaurants = restaurantList.filter(
      (restaurant) => restaurant.info.avgRating > 3
    );
    setRestaurants(topRatedRestaurants);
  };

  return restaurantList.length === 0 ? 'Loading' : (
    <>
    <div className="search">
      <input
          type="text"
          placeholder="Search for restaurants..."
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button onClick={() => {
          const listOfRestaurants = restaurantList.filter((restaurant) => {
            return restaurant.info.name.toLowerCase().includes(searchText.toLowerCase());
          });
          setRestaurants(listOfRestaurants);
        }}>
          Search
        </button>
    </div>
      <button
        onClick={showTopRated}
        style={{
          cursor: "pointer",
          backgroundColor: "#ccc",
          width: "220px",
          color: "#000",
          padding: "10px 16px",
          border: "none",
          borderRadius: "8px",
          margin: "20px",
        }}
      >
        Top Rated Restaurants
      </button>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "16px",
          padding: "20px",
        }}
      >
        {restaurants.map((restaurant) => (
          <Ajay key={restaurant.info.id} info={restaurant.info} />
        ))}
      </div>
    </>
  );
};

export const Restaurant2 = () => {
  const [avgRatingrestaurant, setAvgRatingrestaurant] =
    useState(restaurantList);
  const showTopRated = () => {
    const ajay = restaurantList.filter((r) => r.info.avgRating > 3);
    console.log("top rated", ajay);
    setAvgRatingRestaurant(ajay);
  };
  return (
    <>
      <div
        className="button"
        style={{
          cursor: "pointer",
          backgroundColor: "#ccc",
          width: "200px",
          color: "#000",
        }}
        onClick={() => {
          console.log("Button Clicked");
          const ajay = restaurantList.filter((topRated) => {
            return topRated.info.avgRating > 3;
          });
          console.log(ajay);
        }}
      >
        Top rated restaurants in Bangalore
      </div>
      <div onClick={showTopRated}>Top rated restaurants in Bangalore</div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "16px",
          padding: "20px",
        }}
      >
        {avgRatingrestaurant.map((r) => (
          <Ajay key={r.info.id} info={r.info} />
        ))}
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "16px",
          padding: "20px",
        }}
      >
        {restaurantList.map((restaurant) => (
          <Ajay key={restaurant.info.id} info={restaurant.info} />
        ))}
      </div>
    </>
  );
};

export const Restaurant1 = () => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "16px",
        padding: "20px",
      }}
    >
      {restaurantList.map((restaurant) => {
        const { info } = restaurant;

        return (
          <div
            key={info.id}
            style={{
              width: "280px",
              border: "1px solid #ddd",
              borderRadius: "12px",
              padding: "16px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
              background: "#fff",
              flex: "0 0 auto",
            }}
          >
            <h2 style={{ marginTop: 0, fontSize: "1.2rem", color: "#1a0c0c" }}>
              {info.name}
            </h2>
            <p style={{ margin: "6px 0" }}>
              {info.locality}, {info.areaName}
            </p>
            <p style={{ margin: "6px 0" }}>
              Cuisines: {info.cuisines.join(", ")}
            </p>
            <p style={{ margin: "6px 0" }}>Cost for Two: {info.costForTwo}</p>
            <p style={{ margin: "6px 0" }}>
              Average Rating: {info.avgRatingString} ({info.totalRatingsString})
            </p>
            <p style={{ margin: "6px 0" }}>
              Delivery Time: {info.sla.deliveryTime} mins
            </p>
            <p style={{ margin: "6px 0" }}>
              Discount: {info.aggregatedDiscountInfoV3.header} -{" "}
              {info.aggregatedDiscountInfoV3.subHeader}
            </p>
          </div>
        );
      })}
    </div>
  );
};

// const arr = useState(restaurantList);
  // const [restaurants, setRestaurants] = arr;
  // const restaurants = arr[0];
  // console.log('restaurants', restaurants);
  // const setRestaurants = arr[1];
  // console.log('setRestaurants', setRestaurants);
  // setRestaurants is the difference between useState and normal variable. When we call setRestaurants, React updates the state value and re-renders the component with the new state value. The updated restaurants are displayed in the UI.
  // so setRestaurant is the trigger phase, difference of virtual dom and real dom. React updates the virtual dom first, then compares it with the real dom and updates the real dom accordingly. This is called reconciliation. React uses a diffing algorithm to determine what has changed in the virtual dom and updates only those parts of the real dom that have changed. This makes React very efficient and fast.
  

// import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import fetchBreedList from "./fetchBreedList";

// const localCache = {};

export default function useBreedList(animal) {
  // const [breedLists, setbreedLists] = useState([]);
  // const [status, setStatus] = useState("");
  const results = useQuery(["breeds", animal], fetchBreedList);

  // useEffect(() => {
  //   if (!animal) {
  //     setbreedLists([]);
  //     setStatus("");
  //     return;
  //   } else if (localCache[animal]) {
  //     setbreedLists(localCache[animal]);
  //     setStatus("Success");
  //   } else {
  //     requestBreedList();
  //   }

  //   async function requestBreedList() {
  //     setbreedLists([]);
  //     setStatus("Loading");
  //     try {
  //       const response = await fetch(
  //         `https://pets-v2.dev-apis.com/breeds?animal=${animal}`
  //       );
  //       const data = await response.json();
  //       localCache[animal] = data.breeds || [];
  //       setbreedLists(localCache[animal]);
  //       setStatus("Loaded");
  //     } catch (error) {
  //       setStatus("Error");
  //       console.error(error);
  //     }
  //   }
  // }, [animal]);

  return [results?.data?.breeds ?? [], results.status];
}

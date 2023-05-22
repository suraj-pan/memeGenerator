import { useEffect, useState } from "react";
import axios from "axios";

const apiKey = process.env.REACT_APP_GIPHY_API_KEY;
const randomUrl = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`;

const useGif = (tag) => {
  const [gif, setgif] = useState("");
  const [loading, setloading] = useState(false);

  async function fetchData() {
    setloading(true);
    const tagUrl = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=${tag}`;
    const { data } = await axios.get(tag ? tagUrl : randomUrl);
    const imageSource = data.data.images.downsized.url;
    setgif(imageSource);
    setloading(false);
    console.log(imageSource);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return { gif, loading, fetchData };
};

export default useGif;

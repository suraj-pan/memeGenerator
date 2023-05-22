import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";
const apiKey = process.env.REACT_APP_GIPHY_API_KEY;

export default function Tag() {
  // const [gif, setgif] = useState("");
  // const [loading, setloading] = useState(false);
  const [tag, settag] = useState("car");

  // async function fetchData() {
  //   setloading(true);
  //   const url = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=${tag}`;
  //   const { data } = await axios.get(url);
  //   const imageSource = data.data.images.downsized.url;
  //   setgif(imageSource);
  //   setloading(false);
  //   console.log(imageSource);
  // }

  // useEffect(() => {
  //   fetchData();
  // }, []);

  const { gif, loading, fetchData } = useGif(tag);
  function clickHandler() {
    fetchData();
  }

  function changeHandler(e) {
    settag(e.target.value);
  }
  return (
    <div className="w-1/2 bg-blue-500 pb-5 rounded-lg border border-black flex flex-col gap-y-3 items-center">
      <h1 className="text-2xl underline font-bold uppercase ">
        Random {tag} Gif
      </h1>
      {loading ? <Spinner /> : <img src={gif} width="450" />}
      <input
        className="w-10/12  text-center font-medium text-xl rounded-md bg-slate-50 px-1 mt-5 py-1"
        onChange={changeHandler}
        value={tag}
      />
      <button
        className="w-10/12 uppercase font-medium text-xl rounded-md bg-slate-50 px-1 py-2"
        onClick={clickHandler}
      >
        Generate
      </button>
    </div>
  );
}

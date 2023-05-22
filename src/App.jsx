import Random from "../src/components/Random";
import Tag from "../src/components/Tag";

export default function App() {
  return (
    <div className="flex flex-col w-full h-screen  background relative overflow-x-hidden items-center">
      <h1 className="bg-white  font-bold text-4xl uppercase rounded-lg w-11/12  absolute text-center mt-[40px]  px-2 py-4">
        Random Gif
      </h1>
      <div className="flex flex-col items-center w-full gap-y-5  mt-[130px]">
        <Random />
        <Tag />
      </div>
    </div>
  );
}

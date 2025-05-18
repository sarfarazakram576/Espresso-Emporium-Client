import { useLoaderData } from "react-router";
import Hero from "../Hero/Hero";
import Highlights from "../Highligths/Highlights";
import Products from "../Products/Products";
import Follow from "../Follow/Follow";

const Home = () => {
  const coffees = useLoaderData();
  return (
    <div>
      <Hero></Hero>
      <Highlights></Highlights>
      <Products coffees={coffees}></Products>
      <Follow></Follow>
      
    </div>
  );
};

export default Home;

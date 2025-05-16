import { useLoaderData } from "react-router";
import Hero from "../Hero/Hero";
import Highlights from "../Highligths/Highlights";
import Products from "../Products/Products";

const Home = () => {
  const coffees = useLoaderData();
  return (
    <div>
      <Hero></Hero>
      <Highlights></Highlights>
      <Products coffees={coffees}></Products>
    </div>
  );
};

export default Home;

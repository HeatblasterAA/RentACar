import Image from "next/image";
import Carousels from "./components/Carousel";
import Subfooter from "./components/Subfooter";
// Carousels;
import Explore from "./components/Explore";
import OurObjective from "./components/OurObjective";

export default function Home() {
  return (
    <div className="">
      <Carousels />
      <div className="relative">
        <Explore />
        <Subfooter />
        <OurObjective />
      </div>
    </div>
  );
}

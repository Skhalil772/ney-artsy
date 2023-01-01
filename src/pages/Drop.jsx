import Footer from "../components/Footer";
import Nletter from "../components/Nletter";
import Dropitem from "../components/dropItem";
import Data from "../drop.json";
import Navbar from "../components/Navbar";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function Drop() {
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 2000,
      easing: "ease-out",
      delay: 400,
    });
  }, []);
  return (
    <>
      <Navbar />

      <section className="container mx-auto px-6 mt-16">
        <div className="flex items-center justify-center text-center flex-col gap-6 my-12">
          <h2 className="text-3xl font-semibold">Upcoming drops</h2>
          <p className="text-lg">
            Turn on notifications so that no drops will miss you.
          </p>
          <button className="border-2 border-black w-fit text-xl font-medium px-8 rounded-lg py-1">
            Notify Me
          </button>
        </div>
        <section className="flex flex-col space-y-12">
          {Data.map((item) => (
            <Dropitem key={item.id} item={item} />
          ))}
        </section>
        <Nletter />
        <Footer />
      </section>
    </>
  );
}
export default Drop;

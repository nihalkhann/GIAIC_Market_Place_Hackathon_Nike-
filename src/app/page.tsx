
import Essentials from "@/components/Essentials";
import Featured from "@/components/Featured";
import HeroTwo from "@/components/HeroTwo";
// import Hero from "@/components/Hero";
// import Jordan from "@/components/Jordan";
// import JordanSlider from "@/components/JordanSlider";
import Slider from "@/components/Slider";
import PopUp from "@/components/ui/PopUp";
import VideoHero from "@/components/ui/VideoHeader";
import VideoTwo from "@/components/ui/VideoTwo";

export const revalidate = 30;

export default function Home() {
  return (
    <div>
      <VideoHero />

      {/* <Hero /> */}

      <HeroTwo />
      <Featured />
      <VideoTwo />
      <Slider />
      {/* <JordanSlider /> */}
      {/* <Jordan /> */}
      <Essentials />
      <PopUp />
    </div>
  );
}





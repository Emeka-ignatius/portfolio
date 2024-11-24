import { HomePageComponent } from "@/components/pages/home/home-page";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beam-with-collision";

export default function Home() {
  return (
  <div className="bg-gradient-to-b from-teal-50 to-lavender-50">
    <BackgroundBeamsWithCollision>
  <HomePageComponent/>
  </BackgroundBeamsWithCollision>
  </div>
  );
}

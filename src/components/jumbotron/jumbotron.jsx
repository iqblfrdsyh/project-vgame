import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./jumbotron.css";

// import required modules
import { Autoplay, EffectFade, Navigation, Pagination, Keyboard } from "swiper";
import ContentSwiper from "./contentSwipper";

const HomeJumbotron = () => {
  const userData = localStorage.getItem("user");
  return (
    <div>
      <Swiper
        effect={"fade"}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        navigation={true}
        loop={true}
        pagination={{ clickable: true, dynamicBullets: true }}
        keyboard={true}
        modules={[Autoplay, EffectFade, Navigation, Pagination, Keyboard]}
        className="mySwiper"
      >
        <center>
          <SwiperSlide>
            <ContentSwiper
              imgUrl="assets/background/portal 2.png"
              title="Portal 2"
              to={!userData ? "/login" : "/detail/4200"}
              desc="Portal 2 is a first-person puzzle game developed by Valve Corporation and released on April 19, 2011 on Steam, PS3 and Xbox 360. It was published by Valve Corporation in digital form and by Electronic Arts in physical form. Its plot directly follows the first game's, taking place in the Half-Life universe. You play as Chell, a test subject in a research facility formerly ran by the company Aperture Science, but taken over by an evil AI that turned upon its creators, GladOS. After defeating GladOS at the end of the first game but failing to escape the facility, Chell is woken up from a stasis chamber by an AI personality core, Wheatley, as the unkempt complex is falling apart. As the two attempt to navigate through the ruins and escape, they stumble upon GladOS, and accidentally re-activate her.Portal 2's core mechanics are very similar to the first game's, the player must make their way through several test chambers which involve puzzles. For this purpose, they possess a Portal Gun, a weapon capable of creating teleportation portals on white surfaces..."
            />
          </SwiperSlide>
          <SwiperSlide>
            <ContentSwiper
              imgUrl="assets/background/gta 5.png"
              title="Grand Theft Auto V"
              to={!userData ? "/login" : "/detail/3498"}
              desc="Rockstar Games went bigger, since their previous installment of the
              series. You get the complicated and realistic world-building from
              Liberty City of GTA4 in the setting of lively and diverse Los Santos,
              from an old fan favorite GTA San Andreas. 561 different vehicles
              (including every transport you can operate) and the amount is rising
              with every update. Simultaneous storytelling from three unique
              perspectives Follow Michael, ex-criminal living his life of leisure
              away from the past, Franklin, a kid that seeks the better future, and
              Trevor, the exact past Michael is trying to run away from GTA Online
              will provide a lot of additional challenge even for the experienced
              players, coming fresh from the story mode. Now you will have other
              players around that can help you just as likely as ruin your mission.
              Every GTA mechanic up to date can be experienced by players through
              the unique customizable character, and community content paired with
              the leveling system tends to keep everyone busy and engaged."
            />
          </SwiperSlide>
          <SwiperSlide>
            <ContentSwiper
              imgUrl="assets/background/payday 2.png"
              title="Pay Day 2"
              to={!userData ? "/login" : "/detail/3939"}
              desc="The gang is back, and they have bigger and better plans. Objective based cooperative FPS became more complicated. The classic group of Hoxton, Dallas, Chains and Wolf got reinforcement, and now Payday Gang consists of 21 heisters, some of which are based on movie characters or even Youtubers. Players will be able to customize their own private arsenal, their masks, and skills, to complete the missions in their own way, be it stealthy sneak-in or full frontal assault. After completing missions, players will receive EXP points, money and a chance to get a special item that can be a gun modification, mask or a safe containing weapon skins. Payday 2 is a multiplayer game, meaning, that even during offline missions players will be followed by AI characters, whose loadouts, masks and perks can be customized as well. This game has been supported by the developers for many years, and amount of DLC speaks plenty of their dedication to the player base."
            />
          </SwiperSlide>
          <SwiperSlide>
            <ContentSwiper
              imgUrl="assets/background/horizon-zero-down.png"
              title="Horizon Zero Down"
              to={!userData ? "/login" : "/detail/278"}
              desc="Horizon Zero Dawn is an experiment. A very impressive experiment that actually succeeded. Having a very curious mix of cyberpunk and prehistorical styles and esthetic, the game provides us with quite a unique experience. We need to arm ourselves with arrows and a bow, with a spear or any other prehistorical-ish weapon in order to defeat out enemies - dinosaur-mechanisms that are spread around the world. If that wasn't enough, Aloy our main protagonist can control an AI named GAIA. What we're having here is an exciting connection with very old times and near future, even though the game is set up in the 31st century. Being an outcast with her father Rost, Aloy must restore her position in the tribe and save the world by stopping the Eclipse, a cult that wants to rule the world. Join her on that journey, exploring the world and people that live in such hard surroundings."
            />
          </SwiperSlide>
        </center>
      </Swiper>
    </div>
  );
};

export default HomeJumbotron;

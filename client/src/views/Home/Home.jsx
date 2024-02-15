import React from "react";
import FirstHero from "../../components/HomeHero/FirstHero";
import SecondHero from "../../components/HomeHero/SecondHero";
import Subcription from "../../components/Subcription/Subcription";
import Services from "../../components/Services/Services";
import Review from "../../components/Review/Review";
import CounterComponent from "../../components/Counter/CounterComponent";
function Home() {
  return (
   <>
   <div>
    <FirstHero/>
    <Services/>
    <CounterComponent/>
    <Subcription/>
    <Review/>
    
   </div>
   </>
  );
}

export default Home;

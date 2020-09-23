import React from "react";
import TouristInfoCard from "./TouristInfoCard";

const TouristInfoCards = () => {
  return (
    <div className="container">
      <div className="card-deck mt-5 mb-5">
        <TouristInfoCard
          link="https://peoplemakeglasgow.com"
          imageSource="https://www.visitbritain.com/sites/default/files/consumer/paragraphs-bundles/image-header-with-text/glasgow_clyde_arc_vb34161123.jpg"
          city="Glasgow"
        />
        <TouristInfoCard
          link="https://visitmanchester.com"
          imageSource="https://www.techcelerate.ventures/wp-content/uploads/2017/10/manchester.jpg"
          city="Manchester"
        />
        <TouristInfoCard
          link="https://visitlondon.com"
          imageSource="https://media.gettyimages.com/photos/skyscrapers-in-city-of-london-picture-id844050350?s=612x612"
          city="London"
        />
      </div>
    </div>
  );
};
export default TouristInfoCards;

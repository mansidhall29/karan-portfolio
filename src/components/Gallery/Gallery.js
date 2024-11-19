import React from "react";
import styled from "styled-components";
import ScrollAnimation from "react-animate-on-scroll";
import Slider from "react-slick"; // Import Slider component

const GalleryWrapper = styled.div`
  padding: 50px 20px;
  background-color: #f8f9fa;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 32px;
  margin-bottom: 40px;
  color: #333;
`;

const Card = styled.div`
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  max-width: 90%; /* Keep the card width reasonable */
  margin: 0 auto; /* Center the cards within the container */

  &:hover {
    transform: translateY(-10px); /* Add slight hover effect */
  }
`;

const MediaWrapper = styled.div`
  width: 100%;
  aspect-ratio: 16 / 9; /* Ensures proper scaling without cropping */
  display: flex;
  justify-content: center;
  align-items: center;

  img,
  video {
    max-width: 90%; /* Limit the width to 90% */
    max-height: 90%; /* Ensure the video/image is reduced without cropping */
    object-fit: contain; /* Ensures content is fully visible without cropping */
  }
`;

const videosAndPhotos = [
  { type: "image", src: "/gallery1.jpeg" },
  { type: "image", src: "/gallery2.jpeg" },
  { type: "video", src: "/video1.mp4" },
  { type: "video", src: "/video2.mp4" },
  { type: "video", src: "/video3.mp4" },
];

const GallerySlider = styled(Slider)`
  .slick-slide {
    padding: 10px;
  }

  .slick-prev,
  .slick-next {
    color: #333;
    font-size: 12px; /* Adjust the arrow size */
    z-index: 10; /* Make sure arrows are clickable */
  }

  .slick-prev {
    left: 10px; /* Position left arrow */
    top: 50%; /* Align vertically to the center */
    transform: translateY(-50%); /* Center vertically */
  }

  .slick-next {
    right: 10px; /* Position right arrow */
    top: 50%; /* Align vertically to the center */
    transform: translateY(-50%); /* Center vertically */
  }

  .slick-prev:before,
  .slick-next:before {
    font-family: "slick"; /* Ensure the correct icon font is used */
    color: #333; /* Arrow color */
    font-size: 2rem; /* Set the size of the arrows */
  }
`;

function Gallery() {
  const settings = {
    dots: true, // Show navigation dots
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 items per view
    slidesToScroll: 1, // Scroll 1 item at a time
    arrows: true, // Show arrows for navigation
    autoplay: true,
    autoplaySpeed: 3000, // Automatically transitions every 3 seconds
    responsive: [
      {
        breakpoint: 1024, // Adjust settings for medium screens
        settings: {
          slidesToShow: 2, // Show 2 items on medium screens
        },
      },
      {
        breakpoint: 768, // Adjust settings for small screens
        settings: {
          slidesToShow: 1, // Show 1 item on smaller screens
        },
      },
    ],
  };

  return (
    <GalleryWrapper id="gallery">
      <ScrollAnimation animateIn="fadeInDown">
        <SectionTitle className="SectionTitle">Photos & Videos</SectionTitle>
      </ScrollAnimation>
      <GallerySlider {...settings}>
        {videosAndPhotos.map((item, index) => (
          <ScrollAnimation animateIn="fadeInUp" key={index}>
            <Card>
              <MediaWrapper>
                {item.type === "image" ? (
                  <img src={item.src} alt={`Gallery item ${index + 1}`} />
                ) : (
                  <video controls>
                    <source src={item.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}
              </MediaWrapper>
            </Card>
          </ScrollAnimation>
        ))}
      </GallerySlider>
    </GalleryWrapper>
  );
}

export default Gallery;

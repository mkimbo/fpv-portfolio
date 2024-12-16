import About from "@/components/About";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import VideoCarousel from "@/components/VideoCarousel";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <VideoCarousel id="videos" videos={videos} />
      <VideoCarousel id="portfolio" videos={videos1} />
      <ContactForm />
      <Footer />
    </>
  );
}

const videos1 = [
  {
    id: 1,
    title: "Red Seats",
    src: "https://videos.pexels.com/video-files/29725551/12779576_2560_1440_30fps.mp4",
  },
  {
    id: 2,
    title: "Smooth Dancing",
    src: "https://videos.pexels.com/video-files/6899953/6899953-uhd_2732_1440_25fps.mp4",
  },
  {
    id: 3,
    title: "Brown Mountains",
    src: "https://videos.pexels.com/video-files/11675460/11675460-uhd_2560_1440_24fps.mp4",
  },
  {
    id: 6,
    title: "Bad Bandy",
    src: "https://videos.pexels.com/video-files/9808525/9808525-uhd_2732_1440_25fps.mp4",
  },
  {
    id: 7,
    title: "Roadster 2",
    src: "https://videos.pexels.com/video-files/4440820/4440820-hd_1920_1080_25fps.mp4",
  },
  {
    id: 8,
    title: "Frozen Wataa",
    src: "https://videos.pexels.com/video-files/2360537/2360537-hd_1920_1080_25fps.mp4",
  },
  {
    id: 4,
    title: "Beautiful Nature",
    src: "https://videos.pexels.com/video-files/19535472/19535472-uhd_2560_1440_30fps.mp4",
  },
  {
    id: 5,
    title: "Green Screen",
    src: "https://videos.pexels.com/video-files/9488250/9488250-uhd_2732_1440_25fps.mp4",
  },

  {
    id: 9,
    title: "Lota Smoka",
    src: "https://videos.pexels.com/video-files/5152378/5152378-hd_1280_720_24fps.mp4",
  },
];

const videos = [
  {
    id: 7,
    title: "Roadster 2",
    src: "https://videos.pexels.com/video-files/4440820/4440820-hd_1920_1080_25fps.mp4",
  },
  {
    id: 8,
    title: "Frozen Wataa",
    src: "https://videos.pexels.com/video-files/2360537/2360537-hd_1920_1080_25fps.mp4",
  },
  {
    id: 4,
    title: "Beautiful Nature",
    src: "https://videos.pexels.com/video-files/19535472/19535472-uhd_2560_1440_30fps.mp4",
  },
  {
    id: 5,
    title: "Green Screen",
    src: "https://videos.pexels.com/video-files/9488250/9488250-uhd_2732_1440_25fps.mp4",
  },
  {
    id: 2,
    title: "Smooth Dancing",
    src: "https://videos.pexels.com/video-files/6899953/6899953-uhd_2732_1440_25fps.mp4",
  },
  {
    id: 3,
    title: "Brown Mountains",
    src: "https://videos.pexels.com/video-files/11675460/11675460-uhd_2560_1440_24fps.mp4",
  },
  {
    id: 6,
    title: "Bad Bandy",
    src: "https://videos.pexels.com/video-files/9808525/9808525-uhd_2732_1440_25fps.mp4",
  },

  {
    id: 1,
    title: "Red Seats",
    src: "https://videos.pexels.com/video-files/7989640/7989640-uhd_2732_1440_25fps.mp4",
  },
  {
    id: 9,
    title: "Lota Smoka",
    src: "https://videos.pexels.com/video-files/5152378/5152378-hd_1280_720_24fps.mp4",
  },
];

"use client";

import { useCallback, useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, Play, Plus, X } from "lucide-react";

interface Video {
  id: number;
  title: string;
  src: string;
}

interface VideoCarouselProps {
  videos: Video[];
  id: string;
}

export default function VideoCarousel({ videos, id }: VideoCarouselProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState<Video | null>(null);
  const [showMore, setShowMore] = useState(false);
  const handlePlayClick = (video: Video) => {
    setCurrentVideo(video);
    setIsOpen(true);
  };

  const [cApi, setCApi] = useState<CarouselApi>();

  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    if (!cApi) return;

    setSlideIndex(cApi.selectedScrollSnap());

    cApi.on("select", () => {
      setSlideIndex(cApi.selectedScrollSnap());
    });
  }, [cApi]);

  const getSlideTitle = () => {
    if (cApi) {
      const index = cApi.selectedScrollSnap();
      const curId = Number(cApi.slideNodes()[index].dataset.id);
      return videos.find((product) => product.id === curId)?.title;
    }
  };

  const scrollNext = useCallback(() => {
    if (!cApi) return;

    cApi.scrollNext(true);
  }, [cApi]);

  const scrollPrev = useCallback(() => {
    if (!cApi) return;

    cApi.scrollPrev(true);
  }, [cApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (!cApi) return;

      cApi.scrollTo(index, true);
    },
    [cApi]
  );

  return (
    <div id={id} className="mb-1">
      <div className="relative">
        <Carousel setApi={setCApi} className="w-full">
          <CarouselContent>
            {videos.map((video) => (
              <CarouselItem key={video.id} data-id={video.id}>
                <div className="aspect-video w-full h-[350px] lg:h-[650px]">
                  <video
                    src={video.src}
                    className="w-full h-full object-cover"
                    //poster={`https://picsum.photos/seed/${video.id}/1920/1080`}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="hidden absolute inset-0 lg:flex flex-row items-center justify-between w-full">
          <ChevronLeft
            onClick={scrollPrev}
            className={`text-white w-10 h-10 ${
              !cApi?.canScrollPrev() && "invisible"
            }`}
          />
          <ChevronRight
            onClick={scrollNext}
            className={`text-white w-10 h-10 ${
              !cApi?.canScrollNext() && "invisible"
            }`}
          />
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center pointer-events-none">
          <h3 className="text-white text-2xl font-bold mb-4 tracking-widest">
            {getSlideTitle()}
          </h3>
          <button
            onClick={() => handlePlayClick(videos[slideIndex])}
            className="bg-white bg-opacity-20 hover:bg-opacity-30 transition-colors rounded-full p-4 pointer-events-auto"
          >
            <Play className="w-12 h-12 text-white" />
          </button>
        </div>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 hidden lg:block">
          <button
            onClick={() => setShowMore(!showMore)}
            className={`${
              showMore ? "" : "border"
            } border-[white] hover:border-gray-400 hover:text-gray-400 rounded-full p-2 flex flex-row align-baseline items-center gap-2 text-base`}
          >
            {showMore ? "Close" : "All Videos"}{" "}
            {showMore ? (
              <X className="w-6 h-6" />
            ) : (
              <Plus className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>
      {showMore && (
        <CarouselSmall
          videos={videos}
          scrollTo={scrollTo}
          handlePlayClick={handlePlayClick}
        />
      )}

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-7xl w-full p-0">
          <DialogTitle className="hidden"></DialogTitle>
          {currentVideo && (
            <video
              src={currentVideo.src}
              controls
              autoPlay
              className="w-full h-full"
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

export function CarouselSmall({
  scrollTo,
  handlePlayClick,
  videos,
}: {
  scrollTo: (index: number) => void;
  handlePlayClick: (video: Video) => void;
  videos: Video[];
}) {
  const [cApi, setCApi] = useState<CarouselApi>();

  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    if (!cApi) return;

    setSlideIndex(cApi.selectedScrollSnap());

    cApi.on("select", () => {
      setSlideIndex(cApi.selectedScrollSnap());
    });
  }, [cApi]);

  const scrollNext = useCallback(() => {
    if (!cApi) return;

    cApi.scrollNext();
  }, [cApi]);

  const scrollPrev = useCallback(() => {
    if (!cApi) return;

    cApi.scrollPrev();
  }, [cApi]);

  const getSlideVideo = (id: number): Video | undefined => {
    return videos.find((video) => video.id === id);
  };
  return (
    <div className="w-full relative">
      <ChevronLeft
        onClick={scrollPrev}
        className={`text-white w-10 h-10 absolute left-0 top-1/2 -translate-y-1/2 z-[1000]`}
      />
      <Carousel setApi={setCApi} className="w-full h-[250px]">
        <CarouselContent className="-ml-1">
          {videos.map((video, index) => (
            <CarouselItem
              key={video.id}
              data-id={video.id}
              className="pl-0 basis-1/4 h-[340px] "
              onClick={() => scrollTo(index)}
            >
              <div className="aspect-video w-full max-w-[600px] h-[250px] relative">
                <video
                  src={video.src}
                  className="w-full h-full object-cover"
                  //poster={`https://picsum.photos/seed/${video.id}/1920/1080`}
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center pointer-events-none">
                  <p className="text-white text-lg font-bold mb-4 tracking-widest">
                    {video.title}
                  </p>
                  <button
                    onClick={() => {
                      if (getSlideVideo(video.id)) {
                        handlePlayClick(getSlideVideo(video.id)!);
                      }
                    }}
                    className="bg-white bg-opacity-20 hover:bg-opacity-30 transition-colors rounded-full p-2 pointer-events-auto"
                  >
                    <Play className="w-6 h-6 text-white" />
                  </button>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <ChevronRight
        onClick={scrollNext}
        className={`text-white w-10 h-10 absolute right-0 top-1/2 -translate-y-1/2 z-[1000]`}
      />
    </div>
  );
}

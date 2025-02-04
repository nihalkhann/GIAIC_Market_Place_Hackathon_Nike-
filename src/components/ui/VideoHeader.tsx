"use client";
import { useEffect, useRef, useState } from "react";
import { Video } from "@/types/types";
import { client } from "@/sanity/lib/client";
import Link from "next/link"; // Changed from lucide-react to next/link

const VideoHeader = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoData, setVideoData] = useState<Video | null>(null);
  const [isFetching, setIsFetching] = useState<boolean>(false);

  const fetchVideoData = async () => {
    setIsFetching(true);
    const query = `*[_type == "videoAd"][1] {
      _id,
      title,
      videoFile {
        asset-> {
          url
        }
      },
      isLooping
    }`;

    try {
      const data = await client.fetch(query);
      setVideoData(data);
    } catch (error) {
      console.error("Error fetching video data:", error);
    } finally {
      setIsFetching(false);
    }
  };

  useEffect(() => {
    fetchVideoData();

    const interval = setInterval(() => {
      fetchVideoData();
    }, 300000); // 5 minutes

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const playVideo = async () => {
        try {
          await video.play();
        } catch (err) {
          console.log("Video autoplay failed:", err);
        }
      };

      playVideo();

      const handleVisibilityChange = () => {
        if (document.hidden) {
          video.pause();
        } else {
          video.play().catch(() => {});
        }
      };

      document.addEventListener("visibilitychange", handleVisibilityChange);
      return () => {
        document.removeEventListener(
          "visibilitychange",
          handleVisibilityChange,
        );
      };
    }
  }, []);

  if (isFetching || !videoData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <section className="relative w-full h-[450px] overflow-hidden">
        <div className="absolute inset-0">
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop={videoData.isLooping}
            playsInline
            preload="metadata"
            controls={false}
            title={videoData.title}
          >
            <source src={videoData.videoFile.asset.url} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Video Overlay */}
          <div className="absolute inset-0 bg-black/10" />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent pointer-events-none" />
        </div>
      </section>
      {/* Content Container - Added z-index and text color */}
      <div className="relative z-10 flex  py-8 justify-center items-center flex-col h-full text-center text-black">
        <p className="text-sm md:text-[16px] font-[550] mb-2">
          First Look at Nike 24.7 Collection
        </p>
        <h2 className="text-[35px] md:text-[60px] font-bold font-serif uppercase mb-2">
          Tailored for <br />
          All-day comfort
        </h2>
        <p className="text-sm md:text-[16px]  font-[550] px-1 mb-6">
          A new collection featuring polished looks and a luxurious feel.
        </p>
        <Link
          href="/products"
          className="bg-black text-white rounded-full px-6 py-3 hover:bg-gray-800 transition-colors duration-300"
        >
          Shop
        </Link>
      </div>
    </>
  );
};

export default VideoHeader;

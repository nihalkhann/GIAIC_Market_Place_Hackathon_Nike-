

//  ******static*******
// "use client";
// import Link from "next/link";
// import React, { useEffect, useRef } from "react";

// const VideoTwo = () => {
//   const videoRef = useRef<HTMLVideoElement>(null);

//   useEffect(() => {
//     const video = videoRef.current;
//     if (video) {
//       const playVideo = async () => {
//         try {
//           await video.play();
//         } catch (err) {
//           console.log("Video autoplay failed:", err);
//         }
//       };

//       playVideo();

//       const handleVisibilityChange = () => {
//         if (document.hidden) {
//           video.pause();
//         } else {
//           video.play().catch(() => {});
//         }
//       };

//       document.addEventListener("visibilitychange", handleVisibilityChange);
//       return () => {
//         document.removeEventListener(
//           "visibilitychange",
//           handleVisibilityChange,
//         );
//       };
//     }
//   }, []);

//   return (
//     <>
//       {/* Video Section */}
//       <section className="relative w-full h-[450px] overflow-hidden">
//               <div className="absolute inset-0">

//           <video
//             ref={videoRef}
//             className="w-full h-full object-cover"
//             autoPlay
//             muted
//             loop
//             playsInline
//             preload="metadata"
//             controls={false}
//           >
//                       <source src="/Nike Pegasus 41720p.mp4"
//                           type="video/mp4" />
//             Your browser does not support the video tag.
//           </video>

//           {/* Video Overlay - Fixed (removed touch-none) */}
//           <div className="absolute inset-0 bg-black/10" />

//           {/* Gradient Overlay */}
//           <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent pointer-events-none" />
//         </div>
//       </section>

//     </>
//   );
// };

// export default VideoTwo;


//dynamic from sanity********************************
"use client"
import { useEffect, useRef, useState } from "react";
import { Video } from "@/types/types";
import { client } from "@/sanity/lib/client";

const VideoTwo = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoData, setVideoData] = useState<Video | null>(null);
  const [isFetching, setIsFetching] = useState<boolean>(false);

  const fetchVideoData = async () => {
    setIsFetching(true);
    const query = `*[_type == "videoAd"][0] {
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
      // Optionally set an error state to show a user-friendly message
    } finally {
      setIsFetching(false);
    }
  };

  useEffect(() => {
    fetchVideoData();

    const interval = setInterval(() => {
      fetchVideoData();
    }, 300000); // 5 minutes

    return () => clearInterval(interval); // Clear interval on cleanup
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
  );
};

export default VideoTwo;

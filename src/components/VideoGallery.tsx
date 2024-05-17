import React from "react";
import { videoUrls } from "../utils/features";
import { usePlayerStore } from "../store/playerStore";

const VideoGallery: React.FC = () => {
    const { setMediaUrl, mediaUrl } = usePlayerStore();

    return (
        <div className="p-4 bg-gray-800 rounded-lg">
            <h2 className="text-white text-xl mb-4 text-center">
                Select Video Files
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
                {videoUrls.map((videoUrl, i) => (
                    <li
                        key={i}
                        className={`p-4 bg-gray-700 rounded-lg text-white cursor-pointer hover:bg-gray-600 flex items-center justify-center 
                     ${mediaUrl === videoUrl && "bg-gray-600"} `}
                        onClick={() => setMediaUrl(videoUrl)}
                    >
                        {`Video ${i + 1}`}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default VideoGallery;

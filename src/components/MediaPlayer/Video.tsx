import React, { useEffect, useRef, useState } from "react";
import { usePlayerStore } from "../../store/playerStore";
import SpinnerLoader from "../ui/SpinningLoader";
import { FaFileAudio } from "react-icons/fa";
import { isAudioFile } from "../../utils/features";

export const Video = () => {
    const { mediaUrl, videoRef, setVideoRef } = usePlayerStore();
    const [buffering, setBuffering] = useState<boolean>(false);
    const localVideoRef = useRef<HTMLVideoElement>(null);
    useEffect(() => {
        const video = localVideoRef.current;
        if (video) {
            video.onwaiting = () => {
                setBuffering(true);
            };
            video.onplaying = () => {
                setBuffering(false);
            };
        }
    }, [localVideoRef]);
    // Reload video when mediaUrl changes
    useEffect(() => {
        const video = localVideoRef.current;
        if (video) {
            video.src = ""; // Reset src
            video.load(); // Load empty video
            video.src = mediaUrl; // Set new src
            video.play(); // Play the new video
        }
    }, [mediaUrl]);
    useEffect(() => {
        setVideoRef(localVideoRef);
    }, [localVideoRef, mediaUrl, setVideoRef, videoRef]);
    return (
        <>
            {buffering && <SpinnerLoader />}
            {isAudioFile(mediaUrl) && (
                <div className="absolute rounded-md top-0 left-0 flex justify-center items-center text-5xl w-full h-full bg-black bg-opacty-70 text-white   ">
                    <FaFileAudio />
                </div>
            )}
            <video
                className="w-full rounded-md"
                ref={localVideoRef}
                controls={false}
            >
                <source src={mediaUrl} type="video/mp4" />
            </video>
        </>
    );
};

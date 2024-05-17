import React, { useEffect, useRef, useState } from "react";
import { usePlayerStore } from "../store/playerStore";
import SpinnerLoader from "./SpinningLoader";

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

import React, { useEffect, useState } from "react";
import Controls from "./Controls";
import { usePlayerStore } from "../store/playerStore";
import { Video } from "./Video";
import { CiMaximize1, CiPause1, CiPlay1 } from "react-icons/ci";
import { IoCloseSharp } from "react-icons/io5";
import Tooltip from "./Tooltip";

const Player: React.FC = () => {
    const { isPlaying, isMinimized, expandPlayer, togglePlayPause } =
        usePlayerStore();
    const [isControlsVisible, setControlsVisible] = useState<boolean>(true);

    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    const handleMouseEnter = () => {
        setControlsVisible(true);
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
    };

    const handleMouseLeave = () => {
        timeoutId = setTimeout(() => {
            if (isPlaying) {
                setControlsVisible(false);
            }
        }, 3000);
    };

    useEffect(() => {
        return () => {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
        };
    }, [timeoutId]);

    useEffect(() => {
        if (!isPlaying) {
            setControlsVisible(true);
        }
    }, [isPlaying]);

    return (
        <div
            className={`aspect-w-16 aspect-h-9   ${
                isMinimized
                    ? "absolute w-[300px] right-4 bottom-4 group"
                    : "relative w-full"
            }`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            id="player"
        >
            <Video />
            {isControlsVisible && !isMinimized && <Controls />}
            {isMinimized && (
                <div className="bg-black w-full h-full hidden group-hover:flex p-2 rounded-md opacity-90 text-2xl text-white absolute right-0 top-0 cursor-pointer transition-opacity duration-300">
                    <div className="absolute top-0 right-0 flex space-x-2 p-2">
                        <Tooltip content="Expand">
                            <CiMaximize1 onClick={expandPlayer} />
                        </Tooltip>
                        <Tooltip content="Close">
                            <IoCloseSharp onClick={expandPlayer} />
                        </Tooltip>
                    </div>
                    <div className="flex-grow flex justify-center items-center">
                        <Tooltip content={isPlaying ? "Pause" : "Play"}>
                            <button
                                onClick={togglePlayPause}
                                className="hover:scale-110 text-4xl"
                            >
                                {isPlaying ? <CiPause1 /> : <CiPlay1 />}
                            </button>
                        </Tooltip>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Player;

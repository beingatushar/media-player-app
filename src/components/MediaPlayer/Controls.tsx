import React from "react";
import ProgressBar from "./ProgressBar";
import VolumeControl from "./VolumeControl";
import PlaySpeedControl from "./PlaySpeedControl";
import KeyboardControls from "./KeyboardControls";
import { usePlayerStore } from "../../store/playerStore";
import { CiMinimize1, CiPause1, CiPlay1 } from "react-icons/ci";
import { MdFullscreen, MdFullscreenExit } from "react-icons/md";
import { FaBackwardStep, FaForwardStep } from "react-icons/fa6";
import { FaFastBackward, FaFastForward } from "react-icons/fa";
import Tooltip from "../ui/Tooltip";

const Controls = () => {
    const {
        isPlaying,
        togglePlayPause,
        isFullScreen,
        toggleFullScreen,
        previousMedia,
        nextMedia,
        seekBackward,
        seekForward,
        minimizePlayer,
    } = usePlayerStore();
    return (
        <div
            className={`absolute  rounded-b-lg bottom-0 left-0 w-full bg-black bg-opacity-80 text-white p-3 transition-opacity duration-300`}
        >
            <ProgressBar />
            <div className="flex items-center justify-between gap-3 md:text-3xl">
                <div className="flex items-center gap-3">
                    <Tooltip content="Previous">
                        <button
                            onClick={previousMedia}
                            className="hover:scale-110"
                        >
                            <FaBackwardStep />
                        </button>
                    </Tooltip>
                    <Tooltip content={isPlaying ? "Pause" : "Play"}>
                        <button
                            onClick={togglePlayPause}
                            className="hover:scale-110"
                        >
                            {isPlaying ? <CiPause1 /> : <CiPlay1 />}
                        </button>
                    </Tooltip>
                    <Tooltip content="Next">
                        <button onClick={nextMedia} className="hover:scale-110">
                            <FaForwardStep />
                        </button>
                    </Tooltip>
                </div>
                <div className="flex items-center gap-3">
                    <Tooltip content="Seek Backward">
                        <button
                            onClick={seekBackward}
                            className="hover:scale-75"
                        >
                            <FaFastBackward />
                        </button>
                    </Tooltip>
                    <Tooltip content="Seek Forward">
                        <button
                            onClick={seekForward}
                            className="hover:scale-75"
                        >
                            <FaFastForward />
                        </button>
                    </Tooltip>
                </div>
                <VolumeControl />
                <PlaySpeedControl />
                <Tooltip content={"Minimize"}>
                    <button
                        onClick={() => {
                            minimizePlayer();
                            if (isFullScreen) {
                                toggleFullScreen();
                            }
                        }}
                        className="hover:scale-110"
                    >
                        <CiMinimize1 />
                    </button>
                </Tooltip>
                <Tooltip
                    content={isFullScreen ? "Exit Fullscreen" : "Fullscreen"}
                >
                    <button
                        onClick={() => {
                            toggleFullScreen();
                        }}
                        className="hover:scale-110"
                    >
                        {isFullScreen ? <MdFullscreenExit /> : <MdFullscreen />}
                    </button>
                </Tooltip>
            </div>
            <KeyboardControls />
        </div>
    );
};

export default Controls;

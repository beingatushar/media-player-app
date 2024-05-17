import { CiMinimize1, CiPause1, CiPlay1 } from "react-icons/ci";
import { MdFullscreen, MdFullscreenExit } from "react-icons/md";
import { FaBackwardStep, FaForwardStep } from "react-icons/fa6";
import { FaFastBackward, FaFastForward } from "react-icons/fa";
import Tooltip from "../ui/Tooltip";
import ProgressBar from "./ProgressBar";
import VolumeControl from "./VolumeControl";
import PlaySpeedControl from "./PlaySpeedControl";
import KeyboardControls from "./KeyboardControls";
import { usePlayerStore } from "../../store/playerStore";

const Controls: React.FC = () => {
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

    // Render
    return (
        <div
            className={`absolute border-t border-white border-opacity-10 rounded-b-lg bottom-0 left-0 w-full bg-black bg-opacity-80 text-white p-3 transition-opacity duration-300`}
        >
            {/* Progress Bar */}
            <ProgressBar />

            {/* Media Controls */}
            <div className="flex items-center justify-between gap-3 md:text-3xl">
                {/* Playback Buttons */}
                <PlaybackControls
                    isPlaying={isPlaying}
                    togglePlayPause={togglePlayPause}
                    previousMedia={previousMedia}
                    nextMedia={nextMedia}
                />

                {/* Seek Buttons */}
                <SeekButtons
                    seekBackward={seekBackward}
                    seekForward={seekForward}
                />

                {/* Volume and Play Speed Controls */}
                <VolumeAndSpeedControls />

                {/* Minimize and Fullscreen Controls */}
                <MinimizeAndFullscreenControls
                    isFullScreen={isFullScreen}
                    toggleFullScreen={toggleFullScreen}
                    minimizePlayer={minimizePlayer}
                />
            </div>

            {/* Keyboard Controls */}
            <KeyboardControls />
        </div>
    );
};

// Subcomponents

// Playback Controls Component
const PlaybackControls: React.FC<{
    isPlaying: boolean;
    togglePlayPause: () => void;
    previousMedia: () => void;
    nextMedia: () => void;
}> = ({ isPlaying, togglePlayPause, previousMedia, nextMedia }) => {
    return (
        <div className="flex items-center gap-3">
            <Tooltip content="Previous">
                <button onClick={previousMedia} className="hover:scale-110">
                    <FaBackwardStep />
                </button>
            </Tooltip>
            <Tooltip content={isPlaying ? "Pause" : "Play"}>
                <button onClick={togglePlayPause} className="hover:scale-110">
                    {isPlaying ? <CiPause1 /> : <CiPlay1 />}
                </button>
            </Tooltip>
            <Tooltip content="Next">
                <button onClick={nextMedia} className="hover:scale-110">
                    <FaForwardStep />
                </button>
            </Tooltip>
        </div>
    );
};

// Seek Buttons Component
const SeekButtons: React.FC<{
    seekBackward: () => void;
    seekForward: () => void;
}> = ({ seekBackward, seekForward }) => {
    return (
        <div className="flex items-center gap-3">
            <Tooltip content="Seek Backward">
                <button onClick={seekBackward} className="hover:scale-75">
                    <FaFastBackward />
                </button>
            </Tooltip>
            <Tooltip content="Seek Forward">
                <button onClick={seekForward} className="hover:scale-75">
                    <FaFastForward />
                </button>
            </Tooltip>
        </div>
    );
};

// Volume and Play Speed Controls Component
const VolumeAndSpeedControls: React.FC = () => {
    return (
        <>
            <VolumeControl />
            <PlaySpeedControl />
        </>
    );
};

// Minimize and Fullscreen Controls Component
const MinimizeAndFullscreenControls: React.FC<{
    isFullScreen: boolean;
    toggleFullScreen: () => void;
    minimizePlayer: () => void;
}> = ({ isFullScreen, toggleFullScreen, minimizePlayer }) => {
    return (
        <>
            <Tooltip content={"Minimize"}>
                <button onClick={minimizePlayer} className="hover:scale-110">
                    <CiMinimize1 />
                </button>
            </Tooltip>
            <Tooltip content={isFullScreen ? "Exit Fullscreen" : "Fullscreen"}>
                <button onClick={toggleFullScreen} className="hover:scale-110">
                    {isFullScreen ? <MdFullscreenExit /> : <MdFullscreen />}
                </button>
            </Tooltip>
        </>
    );
};

export default Controls;

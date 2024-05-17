import { useEffect } from "react";
import { usePlayerStore } from "../../store/playerStore";

const KeyboardControls: React.FC = () => {
    const {
        togglePlayPause,
        setVolume,
        seekForward,
        seekBackward,
        toggleMute,
        toggleFullScreen,
        minimizePlayer,
        volume,
        previousMedia,
        nextMedia,
    } = usePlayerStore();

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            switch (e.key) {
                case " ":
                    togglePlayPause();
                    break;
                case "ArrowUp":
                    setVolume(
                        Math.min(1, Math.round((volume + 0.1) * 10) / 10)
                    );
                    break;
                case "ArrowDown":
                    setVolume(
                        Math.max(0, Math.round((volume - 0.1) * 10) / 10)
                    );
                    break;
                case "ArrowRight":
                    seekForward();
                    break;
                case "ArrowLeft":
                    seekBackward();
                    break;
                case "m":
                case "M":
                    toggleMute();
                    break;
                case "f":
                case "F":
                    toggleFullScreen();
                    break;
                case "Escape":
                    // Check if in full screen mode before exiting
                    // exitFullScreen();
                    break;
                case "w":
                case "W":
                    minimizePlayer();
                    break;
                case "n":
                case "N":
                    nextMedia();
                    break;
                case "p":
                case "P":
                    previousMedia();
                    break;
                default:
                    break;
            }
        };

        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [
        minimizePlayer,
        nextMedia,
        previousMedia,
        seekBackward,
        seekForward,
        setVolume,
        toggleFullScreen,
        toggleMute,
        togglePlayPause,
        volume,
    ]);

    return null;
};

export default KeyboardControls;

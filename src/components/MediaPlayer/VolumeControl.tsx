import { usePlayerStore } from "../../store/playerStore";
import { HiMiniSpeakerWave, HiMiniSpeakerXMark } from "react-icons/hi2";
import Tooltip from "../ui/Tooltip";

const VolumeControl = () => {
    const { toggleMute, volume, setVolume } = usePlayerStore();

    return (
        <div className="flex items-center gap-2">
            <Tooltip content={volume === 0 ? "Unmute" : "Mute"}>
                <button onClick={toggleMute}>
                    {volume === 0 ? (
                        <HiMiniSpeakerXMark />
                    ) : (
                        <HiMiniSpeakerWave />
                    )}
                </button>
            </Tooltip>
            <Tooltip content="Volume">
                <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    className="w-[50px]"
                    value={volume}
                    onChange={(e) => setVolume(parseFloat(e.target.value))}
                />
            </Tooltip>
        </div>
    );
};

export default VolumeControl;

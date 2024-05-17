import React, { useEffect } from "react";
import { usePlayerStore } from "../../store/playerStore";
import Tooltip from "../ui/Tooltip";

const PlaySpeedControl: React.FC = () => {
    const { playbackSpeed, setPlaybackSpeed } = usePlayerStore();

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newSpeed = parseFloat(e.target.value);
        setPlaybackSpeed(newSpeed);
    };

    const speedOptions = [];
    for (let i = 0.5; i <= 4; i += 0.25) {
        speedOptions.push(i.toFixed(2));
    }

    useEffect(() => {
        setPlaybackSpeed(playbackSpeed);
    }, [playbackSpeed, setPlaybackSpeed]);

    return (
        <div className="flex items-center gap-2">
            <Tooltip content="Playback Speed">
                <select
                    id="play-speed"
                    value={playbackSpeed.toFixed(2)}
                    onChange={handleChange}
                    className="p-1 bg-gray-700 border text-sm border-gray-500 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    {speedOptions.map((speed) => (
                        <option key={speed} value={speed}>
                            {speed}x
                        </option>
                    ))}
                </select>
            </Tooltip>
        </div>
    );
};

export default PlaySpeedControl;

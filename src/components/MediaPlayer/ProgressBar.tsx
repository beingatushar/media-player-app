import { usePlayerStore } from "../../store/playerStore";
import { formatTime } from "../../utils/features";

const ProgressBar: React.FC = () => {
    const { setCurrentTime } = usePlayerStore();
    const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
        const seekTime = (parseFloat(e.target.value) * duration) / 100;
        setCurrentTime(seekTime);
    };
    const { currentTime, duration } = usePlayerStore();
    return (
        <div className="py-2 w-full">
            <input
                type="range"
                min="0"
                max="100"
                value={(currentTime / duration) * 100}
                onChange={handleSeek}
                className="w-full h-[3px]"
            />
            <span>{formatTime(currentTime)}</span>:
            <span>{formatTime(duration)}</span>
        </div>
    );
};

export default ProgressBar;

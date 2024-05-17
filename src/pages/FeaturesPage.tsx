import { AiFillStar, AiOutlineClockCircle } from "react-icons/ai";
import { BiPause, BiPlay, BiSkipNext, BiSkipPrevious } from "react-icons/bi";
import { BsFullscreen, BsVolumeMute } from "react-icons/bs";
import { FaCompressAlt, FaExpandAlt } from "react-icons/fa";
import { IoVolumeHigh, IoVolumeLow } from "react-icons/io5";
import { MdKeyboard } from "react-icons/md";
import { RiArrowGoBackFill, RiArrowGoForwardFill } from "react-icons/ri";

interface FeatureProps {
    icon: JSX.Element;
    title: string;
    description: string;
}

const FeatureCard: React.FC<FeatureProps> = ({ icon, title, description }) => {
    return (
        <div className="p-6 bg-gray-900 rounded-lg shadow-lg grid-cols-1">
            {icon}
            <h2 className="text-xl font-semibold mb-4 text-center">{title}</h2>
            <p className="text-center">{description}</p>
        </div>
    );
};

const FeaturesPage: React.FC = () => {
    const commonClasses = "text-4xl mb-4 mx-auto";
    const features: FeatureProps[] = [
        {
            icon: <BiPlay className={commonClasses} />,
            title: "Play/Pause",
            description: "Control playback with a single click.",
        },
        {
            icon: <BiPause className={commonClasses} />,
            title: "Pause",
            description: "Pause the media playback.",
        },
        {
            icon: <BiSkipPrevious className={commonClasses} />,
            title: "Previous",
            description: "Navigate to the previous media.",
        },
        {
            icon: <BiSkipNext className={commonClasses} />,
            title: "Next",
            description: "Navigate to the next media.",
        },
        {
            icon: <IoVolumeHigh className={commonClasses} />,
            title: "Volume Control",
            description: "Adjust the volume with ease.",
        },
        {
            icon: <IoVolumeLow className={commonClasses} />,
            title: "Volume Mute",
            description: "Mute the volume.",
        },
        {
            icon: <BsFullscreen className={commonClasses} />,
            title: "Minimize",
            description: "Minimize the player to a floating box.",
        },
        {
            icon: <FaExpandAlt className={commonClasses} />,
            title: "Full Screen",
            description: "Expand the player to full screen.",
        },
        {
            icon: <RiArrowGoForwardFill className={commonClasses} />,
            title: "10 Seconds Forward",
            description: "Jump forward by 10 seconds.",
        },
        {
            icon: <RiArrowGoBackFill className={commonClasses} />,
            title: "10 Seconds Backward",
            description: "Go backward by 10 seconds.",
        },
        {
            icon: <AiOutlineClockCircle className={commonClasses} />,
            title: "Play Speed Control",
            description: "Adjust playback speed from 0.5x to 4x.",
        },
        {
            icon: <AiFillStar className={commonClasses} />,
            title: "Progress Bar",
            description: "See the current progress of the media.",
        },
        {
            icon: <BsVolumeMute className={commonClasses} />,
            title: "Media Buffering",
            description: "Display loading state overlay during buffering.",
        },
        {
            icon: <MdKeyboard className={commonClasses} />,
            title: "Keyboard Accessibility",
            description: "Control the player using keyboard shortcuts.",
        },
        {
            icon: <FaCompressAlt className={commonClasses} />,
            title: "Auto Hide Controls",
            description: "Controls automatically hide when not in use.",
        },
        {
            icon: <AiFillStar className={commonClasses} />,
            title: "Media Playback from Progress Bar",
            description:
                "Seek to any position in the media by clicking on the progress bar.",
        },
        {
            icon: <FaExpandAlt className={commonClasses} />,
            title: "Minimized Player",
            description:
                "Transition to a floating box at the bottom right corner when minimized, maintaining a 16:9 aspect ratio with 300px width.",
        },
        {
            icon: <FaExpandAlt className={commonClasses} />,
            title: "Close and Expand Button",
            description:
                "Minimized box includes a close and expand button for user convenience.",
        },
    ];

    return (
        <div className=" text-white w-full">
            <div className="container mx-auto py-8 px-4">
                <h1 className="text-3xl font-bold mb-8 text-center">
                    Features
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-2/3 mx-auto">
                    {features.map((feature, index) => (
                        <FeatureCard key={index} {...feature} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FeaturesPage;

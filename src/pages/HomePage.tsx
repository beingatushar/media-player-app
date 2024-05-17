import AudioGallery from "../components/AudioGallery";
import Player from "../components/MediaPlayer/Player";
import VideoGallery from "../components/VideoGallery";

const HomePage = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-9 gap-4">
            <div className="lg:col-span-2">
                <AudioGallery />
            </div>
            <div className="lg:col-span-5">
                <h1 className="text-5xl text-center text-white mb-4">
                    Media Player
                </h1>
                <Player />
            </div>
            <div className="lg:col-span-2">
                <VideoGallery />
            </div>
        </div>
    );
};

export default HomePage;

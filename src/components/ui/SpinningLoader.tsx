const SpinnerLoader: React.FC = () => {
    return (
        <div className="absolute top-0 left-0 flex justify-center items-center w-full h-full bg-black bg-opacty-70">
            <div className="animate-spin rounded-full h-[50px] w-[50px] border-t-2 border-b-1 border-white"></div>
        </div>
    );
};

export default SpinnerLoader;

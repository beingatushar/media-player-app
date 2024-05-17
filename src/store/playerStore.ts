import { create } from 'zustand';
import { MutableRefObject } from 'react';

interface PlayerState {
    isPlaying: boolean;
    isMinimized: boolean;
    volume: number;
    playbackSpeed: number;
    currentTime: number;
    duration: number;
    mediaUrls: string[];
    mediaUrl: string;
    videoRef: MutableRefObject<HTMLVideoElement | null> | null;
    setVideoRef: (videoRef: MutableRefObject<HTMLVideoElement | null>) => void;
    togglePlayPause: () => void;
    toggleFullScreen: () => void;
    setVolume: (volume: number) => void;
    toggleMute: () => void;
    setCurrentTime: (time: number) => void;
    expandPlayer: () => void;
    minimizePlayer: () => void;
    seekForward: () => void;
    seekBackward: () => void;
    setPlaybackSpeed: (speed: number) => void;
    nextMedia: () => void;
    previousMedia: () => void;

    isFullScreen: boolean,
}

export const usePlayerStore = create<PlayerState>((set, get) => ({
    isPlaying: false,
    isMinimized: false,
    volume: 0.5,
    currentTime: 0,
    duration: 0,
    mediaUrls: [
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4",
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4"
    ],
    // mediaUrl: "https://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3",
    mediaUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
    videoRef: null,
    setVideoRef: (videoRef) => {
        if (videoRef && videoRef.current) {
            const video = videoRef.current;
            set({
                videoRef,
                currentTime: video.currentTime,
                duration: video.duration,
                volume: video.volume,
                isPlaying: !video.paused,
            });

            // Add event listeners to keep store state in sync with the video element
            video.addEventListener('timeupdate', () => {
                set({ currentTime: video.currentTime });
            });

            video.addEventListener('durationchange', () => {
                set({ duration: video.duration });
            });

            video.addEventListener('volumechange', () => {
                set({ volume: video.volume });
            });

            video.addEventListener('play', () => {
                set({ isPlaying: true });
            });

            video.addEventListener('pause', () => {
                set({ isPlaying: false });
            });
        }
    },
    togglePlayPause: () => {
        const { isPlaying, videoRef } = get();
        if (videoRef && videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            set({ isPlaying: !isPlaying });
        }
    },
    isFullScreen: false,
    toggleFullScreen: () => {
        const { isFullScreen } = get();
        const player = document.getElementById("player");
        if (!document.fullscreenElement) {
            player?.requestFullscreen();
        } else if (document.exitFullscreen) {
            document.exitFullscreen();
        }
        set({ isFullScreen: !isFullScreen });
    },
    setVolume: (volume) => {
        const { videoRef } = get();
        if (videoRef && videoRef.current) {
            videoRef.current.volume = volume;
        }
        set({ volume });
    },
    toggleMute: () => {
        const { volume, setVolume } = get();
        const newVolume = volume === 0 ? 0.5 : 0;
        setVolume(newVolume);
    },
    setCurrentTime: (time) => {
        const { videoRef } = get();
        if (videoRef && videoRef.current) {
            videoRef.current.currentTime = time;
        }
        set({ currentTime: time });
    },
    expandPlayer: () => set({ isMinimized: false }),
    minimizePlayer: () => set({ isMinimized: true }),
    seekForward: () => {
        const { currentTime, duration, setCurrentTime } = get();
        const newTime = Math.min(currentTime + 10, duration);
        setCurrentTime(newTime);
    },
    seekBackward: () => {
        const { currentTime, setCurrentTime } = get();
        const newTime = Math.max(currentTime - 10, 0);
        setCurrentTime(newTime);
    },
    playbackSpeed: 1.0,
    setPlaybackSpeed: (speed) => {
        const { videoRef } = get();
        if (videoRef && videoRef.current) {
            videoRef.current.playbackRate = speed;
        }
        set({ playbackSpeed: speed });
    },
    nextMedia: () => {
        const { mediaUrls, setVideoRef } = get();
        const nextIndex = (mediaUrls.indexOf(get().mediaUrl) + 1) % mediaUrls.length;
        set({ mediaUrl: mediaUrls[nextIndex] });
    },

    previousMedia: () => {
        const { mediaUrls, setVideoRef } = get();
        const currentIndex = mediaUrls.indexOf(get().mediaUrl);
        const previousIndex = (currentIndex - 1 + mediaUrls.length) % mediaUrls.length;
        set({ mediaUrl: mediaUrls[previousIndex] });
    },
}));

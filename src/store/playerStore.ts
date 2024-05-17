import { create } from 'zustand';
import { MutableRefObject } from 'react';
import { audioUrls, videoUrls } from '../utils/features';

interface PlayerState {
    isPlaying: boolean;
    isMinimized: boolean;
    volume: number;
    playbackSpeed: number;
    currentTime: number;
    duration: number;
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
    setMediaUrl: (url: string) => void;
    isFullScreen: boolean;
}

export const usePlayerStore = create<PlayerState>((set, get) => ({
    isPlaying: false,
    isMinimized: false,
    volume: 0.5,
    playbackSpeed: 1.0,
    currentTime: 0,
    duration: 0,
    mediaUrl: videoUrls[0],
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
    setPlaybackSpeed: (speed) => {
        const { videoRef } = get();
        if (videoRef && videoRef.current) {
            videoRef.current.playbackRate = speed;
        }
        set({ playbackSpeed: speed });
    },
    nextMedia: () => {
        const mediaUrls = [...videoUrls, ...audioUrls]; // Combine videoUrls and audioUrls
        const currentIndex = mediaUrls.indexOf(get().mediaUrl);
        const nextIndex = (currentIndex + 1) % mediaUrls.length;
        set({ mediaUrl: mediaUrls[nextIndex] });
    },
    previousMedia: () => {
        const mediaUrls = [...videoUrls, ...audioUrls]; // Combine videoUrls and audioUrls
        const currentIndex = mediaUrls.indexOf(get().mediaUrl);
        const previousIndex = (currentIndex - 1 + mediaUrls.length) % mediaUrls.length;
        set({ mediaUrl: mediaUrls[previousIndex] });
    },
    setMediaUrl: (url: string) => {
        set({ mediaUrl: url });
    }
}));

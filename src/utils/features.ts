


export const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
};

// /src/utils/features.ts

export const audioUrls: string[] = [
    'https://actions.google.com/sounds/v1/alarms/assorted_computer_sounds.ogg',
    'https://actions.google.com/sounds/v1/alarms/dosimeter_alarm.ogg',
    'https://actions.google.com/sounds/v1/office/keyboard_typing_fast.ogg',
    'https://actions.google.com/sounds/v1/science_fiction/ringing_ambient_background.ogg',
    'https://actions.google.com/sounds/v1/science_fiction/windchime_drone.ogg',
    'https://actions.google.com/sounds/v1/science_fiction/alien_breath.ogg'
];

export const videoUrls: string[] = [
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
];
export const audioExtensions = [
    ".mp3",
    ".wav",
    ".ogg",
    ".m4a",
    ".flac",
    ".aac",
    ".aiff",
    ".alac",
    ".wma",
    ".amr",
    ".ape",
    ".au",
    ".dts",
    ".mka",
    ".opus",
    ".ra",
    ".tta",
    ".voc",
    ".vox"
];
export const isAudioFile = (url: string) => {
    const audioExtensions = [".mp3", ".wav", ".ogg"];
    return audioExtensions.some((ext) => url.endsWith(ext));
};
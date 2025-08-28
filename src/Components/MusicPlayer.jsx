import React, { useEffect, useRef, useState } from "react";
import { Play, Pause, ChevronLeft, ChevronRight, VolumeOff, Volume2 } from "lucide-react";
import { motion } from "framer-motion";
const MusicPlayer = ({ songs, currentIndex, setCurrentIndex, videoRef }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState("0:00");
  const [duration, setDuration] = useState("0:00");
  const audioRef = useRef(new Audio());
  const savedTimeRef = useRef(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const lastVolumeRef = useRef(volume);

  if (!songs || songs.length === 0 || currentIndex === null || !songs[currentIndex]) {
    return null;
  }

  const currentSong = songs[currentIndex];

  const formatTime = (time) => {
    if (!time || isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  // 1️⃣ Handle song change and play/pause
  useEffect(() => {
    const audio = audioRef.current;

    if (!audio.src.includes(currentSong.filepath)) {
      savedTimeRef.current = 0;
      audio.src = currentSong.filepath;
      audio.currentTime = 0;
    } else {
      audio.currentTime = savedTimeRef.current;
    }

    const updateProgress = () => {
      setProgress((audio.currentTime / audio.duration) * 100 || 0);
      setCurrentTime(formatTime(audio.currentTime));
      setDuration(formatTime(audio.duration));
      savedTimeRef.current = audio.currentTime;
    };

    audio.addEventListener("timeupdate", updateProgress);
    audio.addEventListener("loadedmetadata", updateProgress);
    audio.addEventListener("ended", handleNext);

    if (isPlaying) audio.play();
    else audio.pause();

    return () => {
      audio.removeEventListener("timeupdate", updateProgress);
      audio.removeEventListener("loadedmetadata", updateProgress);
      audio.removeEventListener("ended", handleNext);
      savedTimeRef.current = audio.currentTime;
    };
  }, [currentSong, isPlaying]);

  // 2️⃣ Handle volume and mute
  useEffect(() => {
    audioRef.current.volume = volume;
  }, [volume]);

  const toggleMute = () => {
    if (isMuted) {
      setIsMuted(false);
      setVolume(lastVolumeRef.current);
    } else {
      lastVolumeRef.current = volume;
      setIsMuted(true);
      setVolume(0);
    }
  };

  // Controls
  const handlePlayPause = () => setIsPlaying((prev) => !prev);

  const handleNext = () => {
    savedTimeRef.current = 0;
    setCurrentIndex((currentIndex + 1) % songs.length);
    setIsPlaying(true);
  };

  const handlePrev = () => {
    savedTimeRef.current = 0;
    setCurrentIndex((currentIndex - 1 + songs.length) % songs.length);
    setIsPlaying(true);
  };

  const handleProgressClick = (e) => {
    const bar = e.target;
    const clickX = e.nativeEvent.offsetX;
    const newTime = (clickX / bar.clientWidth) * audioRef.current.duration;
    audioRef.current.currentTime = newTime;
    savedTimeRef.current = newTime;
    setProgress((newTime / audioRef.current.duration) * 100);
  };

  return (
    <motion.div
  className="fixed bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 py-3 bg-white/10 backdrop-blur-lg px-6 rounded-4xl z-50 w-11/12 max-w-md"
  initial={{ y: 100, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  exit={{ y: 100, opacity: 0 }}
  transition={{ type: "spring", stiffness: 120, damping: 20 }}
>
  {/* Progress bar */}
  <div
    className="w-full h-2 bg-gray-300 rounded-full cursor-pointer"
    onClick={handleProgressClick}
  >
    <motion.div
      className="h-2 bg-yellow-600 rounded-full"
      style={{ width: `${progress}%` }}
      layout
      transition={{ type: "tween", duration: 0.2 }}
    />
  </div>

  <div className="flex justify-between w-full text-xs text-white">
    <span>{currentTime}</span>
    <span className="text-yellow-600">{duration}</span>
  </div>

  {/* Controls */}
  <div className="flex items-center gap-7 mt-2 w-full justify-center">
    <motion.div whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.2 }}>
      <ChevronLeft color="white" size={34} className="cursor-pointer" onClick={handlePrev} />
    </motion.div>

    <motion.div whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.2 }} onClick={handlePlayPause} className="cursor-pointer">
      {isPlaying ? <Pause color="white" size={34} /> : <Play color="white" size={30} />}
    </motion.div>

    <motion.div whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.2 }}>
      <ChevronRight color="white" size={34} className="cursor-pointer" onClick={handleNext} />
    </motion.div>
  </div>

  {/* Song Info & Volume */}
  <div className="flex gap-5 mt-2 w-full justify-between items-center">
    <motion.div
      className="flex flex-col text-center text-gray-400 border px-2 py-1 rounded-xl bg-gray-600"
      whileHover={{ scale: 1.03 }}
    >
      <span className="font-bold">{currentSong.title}</span>
      <span className="text-sm">{currentSong.artist}</span>
    </motion.div>

    <div className="flex items-center gap-3">
      <motion.button
        onClick={toggleMute}
        className="text-white cursor-pointer"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
      >
        {isMuted ? <VolumeOff /> : <Volume2 />}
      </motion.button>

      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={volume}
        onChange={(e) => {
          const val = parseFloat(e.target.value);
          setVolume(val);
          setIsMuted(val === 0);
        }}
        className="w-24 cursor-pointer"
      />
    </div>
  </div>
</motion.div>
  );
};

export default MusicPlayer;

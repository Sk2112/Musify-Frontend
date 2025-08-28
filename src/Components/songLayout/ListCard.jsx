import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import axios from "axios";
import { useOutsideClick } from "../../../hooks/use-outside-click";
import toast from "react-hot-toast";
import SongIconImage from '../../assets/Images/Music-Icon3.png'
import MusicPlayer from "../MusicPlayer"; 
import { ArrowDownUp } from 'lucide-react';


export function ListCard() {
  const [songs, setSongs] = useState([]);
  const [active, setActive] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null); 
  const id = useId();
  const ref = useRef(null);

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const res = await axios.get("https://musify-backend-efze.onrender.com/api/music/all");
        setSongs(res.data);
      } catch (err) {
        console.error(err);
        toast.error("Error fetching songs");
      }
    };
    fetchSongs();
  }, []);



  const selectSong = (index) => {
    setActive(songs[index]); 
  };

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") setActive(null);
    }
    document.body.style.overflow = active && typeof active === "object" ? "hidden" : "auto";
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  const listRef = useRef(null);
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const el = listRef.current;
    if (!el) return;

    const checkScroll = () => {
      const canScroll = el.scrollHeight > el.clientHeight;
      const atBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 5;
      setShowArrow(canScroll && !atBottom);
    };

    checkScroll();
    el.addEventListener("scroll", checkScroll);
    window.addEventListener("resize", checkScroll);

    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {active && typeof active === "object" && (
          <div className="fixed inset-0 grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <img
                  src={SongIconImage}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 object-cover object-top"
                />
              </motion.div>

 {/* y title  */}
              <div className="p-4 space-y-3">
                <motion.h3
                  layoutId={`title-${active.title}-${id}`}
                  className="font-bold text-neutral-200 text-3xl"
                >
                  {active.title}
                </motion.h3>
                {/* y artist  */}
                <motion.p
                  layoutId={`description-${active.artist}-${id}`}
                  className="text-neutral-600 dark:text-neutral-400 text-xl"
                >
                  {active.artist}
                </motion.p>
               {/* y facts ka  */}
                <motion.div
                  layoutId={`description-${active.fact}-${id}`}
                  className="text-left"
                >
                  <h4 className="text-gray-500  font-semibold mb-1">
                    Fact About Song
                  </h4>
                  <p className="text-purple-300 ">{active.fact}</p>
                </motion.div>


                {/* y description  */}
                <motion.div
                  layoutId={`description-${active.description}-${id}`}
                  className="text-left"
                >
                  <h4 className="text-gray-500 font-semibold mb-1">
                    Description
                  </h4>
                  <p className="text-purple-100 ">{active.description}</p>
                </motion.div>



              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>




{/* This is List View  */}
  <ul
  ref={listRef}
  className="relative max-h-[450px] overflow-y-auto scrollbar-hide sm:min-w-1/4 md:min-w-3/4 lg:w-full
             bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl p-2"
>
  {songs.map((song, index) => (
    <motion.div
      layoutId={`card-${song.title}-${id}`}
      key={song.musicId}
      onClick={() => selectSong(index)} 
      className="p-4 flex flex-col md:flex-row justify-between items-center hover:bg-white/20 dark:hover:bg-neutral-800/50 rounded-xl cursor-pointer transition"
    >
      <div className="flex gap-4 flex-col md:flex-row">
        <motion.div layoutId={`image-${song.title}-${id}`}>
          <img
            src={SongIconImage}
            alt={song.title}
            className="h-40 w-40 md:h-14 md:w-14 rounded-lg object-cover"
          />
        </motion.div>
        <div>
          <motion.h3
            layoutId={`title-${song.title}-${id}`}
            className="font-medium text-neutral-200 text-left"
          >
            {song.title}
          </motion.h3>
          <motion.p
            layoutId={`artist-${song.artist}-${id}`}
            className="text-yellow-400 text-left"
          >
            {song.artist}
          </motion.p>
        </div>
      </div>

      <motion.button
        layoutId={`button-${song.title}-${id}`}
        className="px-4 py-2 text-sm rounded-full font-bold bg-gray-100 hover:bg-yellow-600 hover:text-white text-black mt-4 md:mt-0 cursor-pointer transition"
        onClick={(e) => {
          e.stopPropagation();      
          setCurrentIndex(index);    
        }}
      >
        Play
      </motion.button>
    </motion.div>
  ))}

  {showArrow && (
    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 animate-pulse text-gray-500">
      ↓
    </div>
  )}
</ul>


      {songs.length > 0 && currentIndex !== null && (
        <MusicPlayer
          songs={songs}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
      )}
    </>
  );
}

export const CloseIcon = () => (
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-4 w-4 text-black"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M18 6l-12 12" />
    <path d="M6 6l12 12" />
  </motion.svg>
);

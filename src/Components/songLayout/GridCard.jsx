

  import React, { useEffect, useId, useRef, useState } from "react";
  import { AnimatePresence, motion } from "motion/react";
  import { useOutsideClick } from "../../../hooks/use-outside-click";
  import axios from "axios";
  import toast from "react-hot-toast";
  import SongIconImage from '../../assets/Images/Music-Icon3.png'


  export function GridCard() {
    const [active, setActive] = useState(null);
      const [songs, setSongs] = useState([]); 
    const id = useId();
    const ref = useRef(null);
    


    useEffect(() => {
      const fetchSongs = async () => {
        try {
          const res = await axios.get("http://localhost:8080/api/music/all");
          setSongs(res.data);
        } catch (err) {
          console.error("Error fetching songs:", err);
          toast.error("Error in Fetching Songs");
        }
      };
      fetchSongs();
    }, []);


    useEffect(() => {
      function onKeyDown(event) {
        if (event.key === "Escape") {
          setActive(false);
        }
      }

      if (active && typeof active === "object") {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }

      window.addEventListener("keydown", onKeyDown);
      return () => window.removeEventListener("keydown", onKeyDown);
    }, [active]);

    useOutsideClick(ref, () => setActive(null));

    return (
      <>
        <AnimatePresence>
          {active && typeof active === "object" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 h-full w-full z-10" />
          )}
        </AnimatePresence>


        <AnimatePresence>
          {active && typeof active === "object" ? (
            <div className="fixed inset-0  grid place-items-center z-[100]">
              <motion.button
                key={`button-${active.title}-${id}`}
                layout
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                exit={{
                  opacity: 0,
                  transition: {
                    duration: 0.05,
                  },
                }}
                className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
                onClick={() => setActive(null)}>
                <CloseIcon />
              </motion.button>
              <motion.div
  layoutId={`card-${active.title}-${id}`}
  ref={ref}
  className="w-full max-w-[500px] h-auto max-h-[90vh] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
>
  <motion.div layoutId={`image-${active.title}-${id}`}>
    <img
      width={200}
      height={200}
      src={SongIconImage}
      alt={active.title}
      className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
    />
  </motion.div>

  <div className="flex flex-col p-4 gap-2">
    <motion.h3
      layoutId={`title-${active.title}-${id}`}
      className="font-medium text-neutral-700 dark:text-neutral-200 text-2xl"
    >
      {active.title}
    </motion.h3>
    <motion.h3
      layoutId={`title-${active.artist}-${id}`}
      className="font-medium text-neutral-700 dark:text-neutral-200 text-lg"
    >
      {active.artist}
    </motion.h3>
    <motion.p
      layoutId={`description-${active.fact}-${id}`}
      className="text-gray-300 text-sm pt-2"
    >
      {active.description}
    </motion.p>

    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="text-neutral-600 text-xs md:text-sm lg:text-base flex flex-col gap-2 overflow-auto max-h-64 dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
    >
      {typeof active.content === "function" ? active.content() : active.fact}
    </motion.div>
  </div>
</motion.div>

            </div>
          ) : null}
        </AnimatePresence>



        {/* y normal form me hai  */}
        <ul
          className="  w-fit flex items-start">
          {songs.map((card) => (
            <motion.div
              layoutId={`card-${card.title}-${id}`}
              key={card.title}
              onClick={() => setActive(card)}
              className="p-4 flex flex-col  hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer">
              <div className="flex gap-4 flex-col  w-full">
                <motion.div layoutId={`image-${card.title}-${id}`}>
                  <img
                    width={100}
                    height={100}
                    src={SongIconImage}
                    alt={card.title}
                    className="h-60 w-full  rounded-lg object-cover object-top" />
                </motion.div>
                <div className="flex justify-center items-center flex-col">
                  <motion.h3
                    layoutId={`title-${card.title}-${id}`}
                    className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left text-base">
                    {card.title}
                  </motion.h3>
                  <motion.p
                    layoutId={`description-${card.description}-${id}`}
                    className="text-neutral-600 dark:text-neutral-400 text-center md:text-left text-base">
                    {card.artist}
                  </motion.p>
                </div>
              </div>
            </motion.div>
          ))}
        </ul>
      </>
    );
  }

  export const CloseIcon = () => {
    return (
      <motion.svg
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        exit={{
          opacity: 0,
          transition: {
            duration: 0.05,
          },
        }}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-4 w-4 text-black">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M18 6l-12 12" />
        <path d="M6 6l12 12" />
      </motion.svg>
    );
  };



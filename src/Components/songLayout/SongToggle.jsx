import React, { useState } from "react";
import { AlignJustify, Grid2x2 } from "lucide-react";
import { ListCard } from "./ListCard";
import { GridCard } from "./GridCard";
import { motion, AnimatePresence } from "framer-motion";

const SongToggle = () => {
  const [viewMode, setViewMode] = useState("list");

  return (
    <div className="">
      {/* Toggle Buttons */}
      <div className="flex gap-2 mb-2 text-yellow-400 justify-end ">
       <p
       className="text-white"
       >Layout</p>
        {viewMode === "list" ? (
          <button
            onClick={() => setViewMode("grid")}
            className="cursor-pointer text-yellow-300"
          >
            <Grid2x2 />
          </button>
        ) : (
          <button
            onClick={() => setViewMode("list")}
            className="cursor-pointer text-yellow-400"
          >
            <AlignJustify />
          </button>
        )}
      </div>

      {/* Animated View Switch */}
      <div >
        <AnimatePresence mode="wait">
          {viewMode === "list" ? (
            <motion.div
              key="list"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="w-full"
            >
              <ListCard />
            </motion.div>
          ) : (
            <motion.div
              key="grid"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="w-full"
            >
              <GridCard />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SongToggle;

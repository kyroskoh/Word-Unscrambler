import { motion } from "framer-motion";

const lengthColors = {
  2: "bg-slate-100 text-slate-600 border-slate-200",
  3: "bg-blue-50 text-blue-700 border-blue-200",
  4: "bg-violet-50 text-violet-700 border-violet-200",
  5: "bg-purple-50 text-purple-700 border-purple-200",
  6: "bg-pink-50 text-pink-700 border-pink-200",
  7: "bg-rose-50 text-rose-700 border-rose-200",
  8: "bg-orange-50 text-orange-700 border-orange-200",
};

export default function WordCard({ word, index }) {
  const color = lengthColors[word.length] || lengthColors[8];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2, delay: Math.min(index * 0.015, 0.5) }}
      className={`inline-flex items-center px-3 py-1.5 rounded-xl border text-sm font-semibold tracking-wide uppercase ${color}`}
    >
      {word}
      <span className="ml-1.5 text-xs font-normal opacity-60">({word.length})</span>
    </motion.div>
  );
}
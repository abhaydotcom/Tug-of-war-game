import { motion } from "framer-motion"

type Props = {
  redScore: number
  blueScore: number
}

export default function TugArena({ redScore, blueScore }: Props) {

  const diff = blueScore - redScore
  const move = diff * 35

  return (
    <div className="relative w-[420px] h-44 flex items-center justify-center">

      <div className="absolute w-full h-3 bg-yellow-700 rounded"/>

      <motion.div
        animate={{ x: move }}
        transition={{ type: "spring", stiffness: 120 }}
        className="flex items-center gap-6"
      >
        <motion.div
          animate={{ rotate: diff < 0 ? -15 : 0 }}
          className="text-6xl"
        >🐌
          
        </motion.div>

        <div className="text-5xl">
          🪢
        </div>

        <motion.div
          animate={{ rotate: diff > 0 ? 15 : 0 }}
          className="text-6xl"
        >
          🦍
        </motion.div>

      </motion.div>

    </div>
  )
}
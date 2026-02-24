type Props = {
  start: () => void
  setRed: (v: string) => void
  setBlue: (v: string) => void
  setDifficulty: (v: string) => void
}

export default function StartScreen({
  start,
  setRed,
  setBlue,
  setDifficulty
}: Props) {

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 via-indigo-500 to-blue-500">

      <div className="backdrop-blur-lg bg-white/20 border border-white/30 shadow-2xl rounded-3xl p-10 w-[380px] flex flex-col gap-5">

        <h1 className="text-4xl font-bold text-center text-white">
          Tug Of War Math
        </h1>

        <p className="text-center text-white/80 text-sm">
          Challenge your friend and solve math faster ⚡
        </p>

        <input
          placeholder="🔴 Team Red Name"
          onChange={(e) => setRed(e.target.value)}
          className="p-3 rounded-xl outline-none bg-white/80 focus:bg-white focus:ring-2 focus:ring-red-400 transition"
        />

        <input
          placeholder="🔵 Team Blue Name"
          onChange={(e) => setBlue(e.target.value)}
          className="p-3 rounded-xl outline-none bg-white/80 focus:bg-white focus:ring-2 focus:ring-blue-400 transition"
        />

        <select
          onChange={(e) => setDifficulty(e.target.value)}
          className="p-3 rounded-xl outline-none bg-white/80 focus:bg-white focus:ring-2 focus:ring-purple-400 transition"
        >
          <option value="easy">Easy Mode</option>
          <option value="medium">Medium Mode</option>
          <option value="hard">Hard Mode</option>
        </select>

        <button
          onClick={start}
          className="mt-3 bg-black text-white py-3 rounded-xl text-lg font-semibold hover:scale-105 hover:bg-gray-900 transition"
        >
          Start Game 🚀
        </button>

      </div>

    </div>
  )
}
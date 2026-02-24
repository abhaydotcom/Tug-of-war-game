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
    <div className="h-screen flex flex-col items-center justify-center gap-6 bg-yellow-200">

      <h1 className="text-5xl font-bold text-purple-600">
        Tug Of War Math
      </h1>

      <input
        placeholder="Team Red Name"
        onChange={(e) => setRed(e.target.value)}
        className="p-3 rounded"
      />

      <input
        placeholder="Team Blue Name"
        onChange={(e) => setBlue(e.target.value)}
        className="p-3 rounded"
      />

      <select
        onChange={(e) => setDifficulty(e.target.value)}
        className="p-3 rounded"
      >
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>

      <button
        onClick={start}
        className="bg-green-400 text-2xl px-8 py-3 rounded-xl"
      >
        Start Game
      </button>

    </div>
  )
}
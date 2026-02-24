import Confetti from "react-confetti"

type Props = {
  redScore: number
  blueScore: number
  redName: string
  blueName: string
  onRestart: () => void
}

export default function WinnerScreen({
  redScore,
  blueScore,
  redName,
  blueName,
  onRestart
}: Props) {

  let winner = "Draw 🤝"

  if (redScore > blueScore) winner = redName
  if (blueScore > redScore) winner = blueName

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-purple-600 via-pink-500 to-yellow-400 flex items-center justify-center">

      <Confetti />

      <div className="bg-white p-12 rounded-3xl shadow-2xl text-center max-w-lg w-full animate-bounce">

        <h1 className="text-5xl font-extrabold mb-4 text-gray-800">
          Game Over
        </h1>

        <h2 className="text-4xl font-bold text-green-600 mb-6">
          {winner} Wins 🎉
        </h2>

        <p className="text-xl mb-8">
          {redName}: <span className="font-bold text-red-500">{redScore}</span>
          {"  |  "}
          {blueName}: <span className="font-bold text-blue-500">{blueScore}</span>
        </p>

        <button
          onClick={onRestart}
          className="px-8 py-3 bg-black text-white text-lg rounded-xl hover:scale-110 transition"
        >
          Restart Game
        </button>

      </div>

    </div>
  )
}
import { useState, useEffect } from "react"
import StartScreen from "./components/StartScreen"
import Calculator from "./components/calculator"
import { generateQuestion } from "../src/components/games/generateQuestion"
import { useTimer } from "./hooks/useTimer"
import WinnerScreen from "./components/WinnerScreen"
import TugArena from "./components/TugArena"

export default function App() {

  const [started, setStarted] = useState(false)
  const [difficulty, setDifficulty] = useState("easy")

  const [redName, setRedName] = useState("Red")
  const [blueName, setBlueName] = useState("Blue")

  const [time, setTime] = useState(120)

  const [redWrong, setRedWrong] = useState(false)
  const [blueWrong, setBlueWrong] = useState(false)

  const [redScore, setRedScore] = useState(0)
  const [blueScore, setBlueScore] = useState(0)

  const [redQ, setRedQ] = useState(generateQuestion(difficulty))
  const [blueQ, setBlueQ] = useState(generateQuestion(difficulty))

  const [redInput, setRedInput] = useState("")
  const [blueInput, setBlueInput] = useState("")

  const [gameOver, setGameOver] = useState(false)
  const [winner, setWinner] = useState<string | null>(null)

  const MAX_PULL = 6

  useTimer(started && !gameOver, time, setTime)

  const restartGame = () => {
    setStarted(false)
    setRedScore(0)
    setBlueScore(0)
    setTime(120)
    setGameOver(false)
  }

  useEffect(() => {

    const diff = blueScore - redScore

    if (diff >= MAX_PULL) {
      setWinner(blueName)
      setGameOver(true)
    }

    if (diff <= -MAX_PULL) {
      setWinner(redName)
      setGameOver(true)
    }

  }, [redScore, blueScore])

  useEffect(() => {

    if (time === 0 && !gameOver) {
      if (redScore > blueScore) setWinner(redName)
      else if (blueScore > redScore) setWinner(blueName)
      else setWinner("Draw")

      setGameOver(true)
    }

  }, [time])

  const check = (team: "red" | "blue") => {

    if (gameOver) return

    if (team === "red") {

      if (Number(redInput) === redQ.answer) {
        setRedScore(s => s + 1)
        setRedQ(generateQuestion(difficulty))
        setRedWrong(false)
      } else {
        setRedWrong(true)
        setTimeout(() => setRedWrong(false), 600)
        setRedQ(generateQuestion(difficulty))
      }

      setRedInput("")
    }

    if (team === "blue") {

      if (Number(blueInput) === blueQ.answer) {
        setBlueScore(s => s + 1)
        setBlueQ(generateQuestion(difficulty))
        setBlueWrong(false)
      } else {
        setBlueWrong(true)
        setTimeout(() => setBlueWrong(false), 600)
        setBlueQ(generateQuestion(difficulty))
      }

      setBlueInput("")
    }
  }

  if (!started) {
    return (
      <StartScreen
        start={() => setStarted(true)}
        setRed={setRedName}
        setBlue={setBlueName}
        setDifficulty={setDifficulty}
      />
    )
  }

  return (
    <div className="min-h-screen bg-gray-200 px-4 py-6 flex flex-col items-center">

      <div className="w-full max-w-6xl flex flex-col items-center gap-6">

        <h1 className="text-2xl md:text-4xl font-bold text-center">
          ⏳ Time: {time}
        </h1>

        <div className="
        w-full
        flex
        flex-col
        lg:flex-row
        items-center
        justify-center
        gap-6
        ">

          <Calculator
            teamName={redName}
            color="bg-red-400"
            question={redQ.text}
            value={redInput}
            score={redScore}
            wrong={redWrong}
            setValue={setRedInput}
            submit={() => check("red")}
            disabled={gameOver}
          />

          <div className="w-full lg:w-auto flex justify-center">
            <TugArena
              redScore={redScore}
              blueScore={blueScore}
            />
          </div>

          <Calculator
            teamName={blueName}
            color="bg-blue-400"
            question={blueQ.text}
            value={blueInput}
            score={blueScore}
            wrong={blueWrong}
            setValue={setBlueInput}
            submit={() => check("blue")}
            disabled={gameOver}
          />

        </div>

      </div>

      {gameOver && (
        <WinnerScreen
          redScore={redScore}
          blueScore={blueScore}
          redName={redName}
          blueName={blueName}
          winner={winner}
          onRestart={restartGame}
        />
      )}

    </div>
  )
}
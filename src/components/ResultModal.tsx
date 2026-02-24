import Confetti from "react-confetti"

type Props = {
  red: number
  blue: number
  redName: string
  blueName: string
}

export default function ResultModal({
  red,
  blue,
  redName,
  blueName
}: Props) {

  let winner = "Draw"

  if (red > blue) winner = redName
  if (blue > red) winner = blueName

  return (
    <div className="text-center mt-10">

      <Confetti />

      <h1 className="text-4xl font-bold">
        {winner} Wins 🎉
      </h1>

      <p className="text-xl mt-2">
        {redName}: {red} | {blueName}: {blue}
      </p>

    </div>
  )
}
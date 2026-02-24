type Props = {
  teamName: string
  color: string
  question: string
  value: string
  score: number
  disabled: boolean
  wrong: boolean
  setValue: (v: string) => void
  submit: () => void
}

export default function Calculator({
  teamName,
  color,
  question,
  value,
  score,
  disabled,
  wrong,
  setValue,
  submit
}: Props) {

  const press = (num: number) => {
    if (disabled) return
    setValue(value + num)
  }

  return (
    <div className={`w-80 backdrop-blur-xl bg-white/20 border border-white/30 rounded-3xl shadow-2xl p-6`}>

      <div className="flex justify-between items-center mb-4">

        <h2 className="text-xl font-bold text-white">
          {teamName}
        </h2>

        <div className={`px-3 py-1 rounded-full text-white text-sm font-semibold ${color}`}>
          Score {score}
        </div>

      </div>

      <div
        className={`
        rounded-2xl p-4 text-2xl text-center mb-5 font-semibold
        transition-all duration-300
        keyframes: {
          shake: {
            '0%,100%': { transform: 'translateX(0)' },
            '25%': { transform: 'translateX(-4px)' },
            '75%': { transform: 'translateX(4px)' }
          }
          },
          animation: {
          shake: 'shake 0.3s ease-in-out'
          }
        ${wrong ? "bg-red-400 text-white animate-shake" : "bg-white"}
        `}
      >
        {question} = {value || "?"}
      </div>

      <div className="grid grid-cols-3 gap-3">

        {[1,2,3,4,5,6,7,8,9].map(n => (
          <button
            key={n}
            onClick={() => press(n)}
            disabled={disabled}
            className="
            bg-white hover:bg-yellow-200
            active:scale-90
            transition
            p-4 rounded-xl text-xl font-bold
            shadow
            "
          >
            {n}
          </button>
        ))}

        <button
          onClick={() => setValue("")}
          disabled={disabled}
          className="
          bg-red-500 hover:bg-red-600
          text-white
          rounded-xl p-4
          font-bold
          transition active:scale-90
          "
        >
          Clear
        </button>

        <button
          onClick={() => press(0)}
          disabled={disabled}
          className="
          bg-white hover:bg-yellow-200
          rounded-xl p-4 text-xl font-bold
          transition active:scale-90 shadow
          "
        >
          0
        </button>

        <button
          onClick={submit}
          disabled={disabled}
          className="
          bg-green-500 hover:bg-green-600
          text-white
          rounded-xl p-4
          font-bold
          transition active:scale-90
          "
        >
          Enter
        </button>

      </div>

    </div>
  )
}
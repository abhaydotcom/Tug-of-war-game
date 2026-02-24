

//  type Team = "red" | "blue"

   type Question = {
  text: string
  answer: number
}

export const generateQuestion = (difficulty: string): Question => {





  let max = 10

  if (difficulty === "medium") max = 20
  if (difficulty === "hard") max = 50

  const a = Math.floor(Math.random() * max)
  const b = Math.floor(Math.random() * max)

  const ops = ["+", "-", "*"]

  const op = ops[Math.floor(Math.random() * ops.length)]

  let ans = 0

  if (op === "+") ans = a + b
  if (op === "-") ans = a - b
  if (op === "*") ans = a * b

  return {
    text: `${a} ${op} ${b}`,
    answer: ans
  }
}
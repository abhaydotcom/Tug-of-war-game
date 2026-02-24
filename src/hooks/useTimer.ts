import { useEffect } from "react"

export const useTimer = (
  running: boolean,
  time: number,
  setTime: (v: any) => void
) => {

  useEffect(() => {

    if (!running) return
    if (time === 0) return

    const t = setInterval(() => {
      setTime((p: number) => p - 1)
    }, 1000)

    return () => clearInterval(t)

  }, [running, time])
}
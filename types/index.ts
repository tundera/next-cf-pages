export interface ErrorFallbackProps {
  error: Error & Record<any, any>
  resetErrorBoundary: (...args: Array<unknown>) => void
}

export type Player = {
  pid: number
  ln: string
  fn: string
  ta: string
  num: string
  pos: string
  pts: number | null
  reb: number | null
  ast: number | null
  stl: number | null
  headshot: string
  slug: string
}

export type Team = {
  tid: number
  ta: string
  city: string
  name: string
  color: string
  logo: string
}

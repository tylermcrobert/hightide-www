import { INPUTS } from '../constants'

export default function getGlobalValidity(state) {
  const inputValidity = !INPUTS.reduce(
    (acc, cur) => (cur.required ? [...acc, cur] : acc),
    []
  )
    .map(item => state[item.id].valid)
    .includes(false)

  const synopsisValidty = state.synopsis.valid
  return inputValidity && synopsisValidty
}

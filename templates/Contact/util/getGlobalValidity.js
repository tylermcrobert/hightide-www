import { INPUTS } from '../constants'

/*
  Get validity of entire form.
*/
export default function getGlobalValidity(state) {
  /*
    Get all valid `constants` inputs,
    check state for the validity of
    those inputs.
  */
  const inputValidity = !INPUTS.reduce(
    (acc, cur) => (cur.required ? [...acc, cur] : acc),
    []
  )
    .map(item => state[item.id].valid)
    .includes(false)

  const synopsisValidty = state.synopsis.valid

  return inputValidity && synopsisValidty
}

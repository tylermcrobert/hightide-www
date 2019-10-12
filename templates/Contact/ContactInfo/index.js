import { useContext } from 'react'

import { INPUTS } from '../constants'
import Warning from '../Warning'
import { ContactCtx } from '..'
import Styled from './Styled'

export default function ContactInfo() {
  const { state, setState } = useContext(ContactCtx)

  const handleChange = (e, id, validator) => {
    const { value } = e.target
    setState({
      ...state,
      [id]: { ...state[id], value, valid: validator(value) },
    })
  }

  const handleBlur = id => {
    setState({ ...state, [id]: { ...state[id], blurred: true } })
  }

  return (
    <Styled.Cols>
      {INPUTS.map(item => {
        const isErr =
          state[item.id].blurred && item.required && !state[item.id].valid
        return (
          <div key={item.id}>
            <Styled.TextInput
              type="text"
              onChange={e => handleChange(e, item.id, item.validator)}
              value={state[item.id].value}
              placeholder={`${item.placeholder}${item.required ? '*' : ''}`}
              onBlur={() => handleBlur(item.id)}
            />
            <Warning active={isErr}>{item.errMsg}</Warning>
          </div>
        )
      })}
    </Styled.Cols>
  )
}

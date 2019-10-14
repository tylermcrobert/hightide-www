import { useContext } from 'react'

import toKebabCase from 'util/toKebabCase'
import GlobalStyled from '../Styled'
import { BUDGET } from '../constants'
import { ContactCtx } from '..'

const Styled = {
  Global: GlobalStyled,
}

export default function Budget() {
  const { state, setState } = useContext(ContactCtx)

  const handleChange = item => {
    setState({ ...state, budget: item })
  }

  return (
    <div>
      <Styled.Global.Title>Budget</Styled.Global.Title>
      {BUDGET.map(budgetVal => (
        <div key={budgetVal}>
          <Styled.Global.OptionInput
            type="radio"
            name="budget"
            onChange={() => handleChange(budgetVal)}
            id={toKebabCase(budgetVal)}
            checked={budgetVal === state.budget}
          />
          <Styled.Global.Label htmlFor={toKebabCase(budgetVal)}>
            {budgetVal}
          </Styled.Global.Label>
        </div>
      ))}
    </div>
  )
}

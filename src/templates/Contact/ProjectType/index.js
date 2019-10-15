import { useContext } from 'react'

import { PROJECT_TYPE } from '../constants'
import { ContactCtx } from '..'
import Styled from './Styled'
import GlobalStyled from '../Styled'

Styled.Global = GlobalStyled

export default function ProjectType() {
  const { state, setState } = useContext(ContactCtx)

  const handleChange = (e, id) => {
    setState({
      ...state,
      projectTypes: { ...state.projectTypes, [id]: e.target.checked },
    })
  }

  return (
    <div>
      <Styled.Global.Title>Type Of Project</Styled.Global.Title>
      <Styled.ProjTypeWrapper>
        {PROJECT_TYPE.map(projType => (
          <div key={projType.id}>
            <Styled.Global.OptionInput
              onChange={e => handleChange(e, projType.id)}
              type="checkbox"
              id={projType.id}
              checked={state.projectTypes[projType.id]}
            />
            <Styled.Global.Label htmlFor={projType.id}>
              {projType.display}
            </Styled.Global.Label>
          </div>
        ))}
      </Styled.ProjTypeWrapper>
    </div>
  )
}

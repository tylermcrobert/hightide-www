import { useState, useContext } from 'react'
import GlobalStyled from '../Styled'
import { ContactCtx } from '..'

export default function Synopsis() {
  const [wordCount, setWordCount] = useState(0)
  const { state, setState } = useContext(ContactCtx)

  const handleChange = e => {
    const { value } = e.target
    setWordCount(value.length)
    setState({ ...state, synopsis: { value, valid: value.length >= 100 } })
  }

  return (
    <div>
      <GlobalStyled.Title>Project Synopsis</GlobalStyled.Title>
      <GlobalStyled.TextArea
        onChange={handleChange}
        rows="5"
        placeholder="Describe your project..."
      />
      {wordCount} / 100 Required
    </div>
  )
}

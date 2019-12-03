export interface FormState {
  email: string
  firstName: string
  lastName: string
  company: string
  synopsis: string
  isValid: boolean
}

export interface Context {
  handleChange: (e: any, objectKey: string) => void
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  setOpenState: React.Dispatch<React.SetStateAction<boolean>>
  isOpen: boolean
}

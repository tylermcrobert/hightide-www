export interface FormState {
  email: string
  firstName: string
  lastName: string
  company: string
  synopsis: string
  isReferral: boolean
  isValid: boolean
}

export interface FormMethods {
  handleChange: (e: any, objectKey: string) => void
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}

export interface PageState {
  setOpenState: React.Dispatch<React.SetStateAction<boolean>>
  isOpen: boolean
}

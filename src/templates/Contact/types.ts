// dynamically create?
export type FormEl =
  | 'email'
  | 'firstName'
  | 'lastName'
  | 'company'
  | 'synopsis'
  | 'isReferral'

export type FormEls = {
  [key in FormEl]: string
}

export interface FormState extends FormEls {
  isValid: boolean
}

export interface FormMethods {
  handleChange: (e: any, objectKey: FormEl) => void
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}

// dynamically create?
export type FormEl = 'email' | 'firstName' | 'lastName' | 'company' | 'synopsis'

export type FormEls = {
  [key in FormEl]: string | null
}

export interface FormState extends FormEls {
  isValid: boolean
}

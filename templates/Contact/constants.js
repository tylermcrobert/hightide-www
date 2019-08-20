import isEmail from 'validator/lib/isEmail'
import isMobilePhone from 'validator/lib/isMobilePhone'
import isURL from 'validator/lib/isURL'

const exists = input => input !== null && input !== ''

export const BUDGET = ['Above 100k', '75–100k', '50–75k', '25-50k', 'Below 25k']

export const INPUTS = [
  {
    placeholder: 'Name',
    id: 'name',
    errMsg: 'Please provide your full name.',
    validator: exists,
    required: true,
  },
  {
    placeholder: 'Email Address',
    id: 'email',
    errMsg: 'Please provide a valid email.',
    validator: isEmail,
    required: true,
  },
  {
    placeholder: 'Location',
    id: 'location',
    errMsg: 'Please provide a valid email.',
    validator: exists,
    required: false,
  },
  {
    placeholder: 'Phone Number',
    id: 'phone',
    errMsg: 'Please provide a valid phone number.',
    validator: val => isMobilePhone(val),
    required: true,
  },
  {
    placeholder: 'Company Name',
    id: 'company',
    errMsg: 'Please provide a valid company name.',
    required: false,
    validator: exists,
  },
  {
    placeholder: 'Website',
    id: 'website',
    errMsg: 'Please provide a valid website.',
    validator: isURL,
    required: false,
  },
]

export const PROJECT_TYPE = [
  { display: 'Branding', id: 'branding' },
  { display: 'Strategy', id: 'strategy' },
  { display: 'Website', id: 'website' },
  { display: 'Art Direction', id: 'artDirection' },
  { display: 'Packaging', id: 'packaging' },
  { display: 'Editorial', id: 'editorial' },
  { display: 'Campaign', id: 'campaign' },
  { display: 'Environmental', id: 'environmental' },
  { display: 'Copywriting', id: 'copywriting' },
  { display: 'Naming', id: 'naming' },
]

const toObj = (keys, defaultVal) =>
  keys.reduce((acc, current) => ({ ...acc, [current]: defaultVal }), {})

const inputsInitialState = toObj(INPUTS.map(item => item.id), {
  value: null,
  valid: false,
})

const projInitState = toObj(PROJECT_TYPE.map(item => item.id), false)

export const initialState = {
  ...inputsInitialState,
  projectTypes: { ...projInitState },
  budget: null,
  synopsis: { value: null, valid: false },
}

export const USER_LOCATION_CODE = 'd2fafa363a5f60d1bd48654faeab7d1413ea5db4'
export const COMPANY_CODE = '26a1801b3c1ef176b882672791a775ae760799b7'
export const WEBSITE_CODE = '973a90ed2bdaa1a15ae3c40f05a40a2d39efb926'
export const PROJECT_TYPE_CODE = '7625ec9bf26c798abdde1a427f4858ac294ef2a1'
export const BUDGET_CODE = 'bae7dfdd58831aa6492a5cbf8c804bd8b5cf6b59'
export const SYNOPSIS_CODE = 'a95adc7d999587f6a55466c6850f03f15bd8ccd7'

export const BUDGET = ['Above 100k', '75–100k', '50–75k', '25-50k', 'Below 25k']

export const INPUTS = [
  {
    placeholder: 'Name',
    id: 'name',
    required: true,
  },
  {
    placeholder: 'Email Address',
    id: 'email',
    required: true,
  },
  {
    placeholder: 'Location',
    id: 'location',
    required: false,
  },
  {
    placeholder: 'Phone Number',
    id: 'phone',
    required: true,
  },
  {
    placeholder: 'Company Name',
    id: 'company',
    required: false,
  },
  {
    placeholder: 'Website',
    id: 'website',
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
  projects: { ...projInitState },
  budget: null,
}

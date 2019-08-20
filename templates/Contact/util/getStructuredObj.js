import {
  USER_LOCATION_CODE,
  COMPANY_CODE,
  WEBSITE_CODE,
  PROJECT_TYPE_CODE,
  BUDGET_CODE,
  SYNOPSIS_CODE,
  PROJECT_TYPE,
} from '../constants'

const getProjTypesString = state =>
  Object.values(state)
    .reduce(
      (acc, cur, i) => (cur ? [...acc, PROJECT_TYPE[i].display] : acc),
      []
    )
    .join(', ')

const getStructuredObj = state => {
  return {
    name: state.name.value,
    email: state.email.value,
    phone: state.phone.value,
    [USER_LOCATION_CODE]: state.location.value,
    [COMPANY_CODE]: state.company.value,
    [WEBSITE_CODE]: state.website.value,
    [PROJECT_TYPE_CODE]: getProjTypesString(state.projectTypes),
    [BUDGET_CODE]: state.budget,
    [SYNOPSIS_CODE]: state.synopsis.value,
  }
}

export default getStructuredObj

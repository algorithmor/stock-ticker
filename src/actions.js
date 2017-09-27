
//action to display a list of companies when the search bar is updated
export function displayCompanies(dispCompanies){
    return{
        type: 'DISPLAY',
        payload: dispCompanies,
    }
}

export function trackCompany(newCompany){
    return{
      type: 'TRACK',
      payload: newCompany
    }
}

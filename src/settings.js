const apiBaseUrl = process.env.API_BASE_URL ||
  process.env.REACT_APP_API_BASE_URL || 
  'https://azure-tenant-lookup.herokuapp.com';

export const settings = {
  lookupApi: {
    byDomain: `${apiBaseUrl}/find-tenant/by-domain`,
  }
}
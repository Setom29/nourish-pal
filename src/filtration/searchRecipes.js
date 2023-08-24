// import { appId, appKey } from './constants';
const appId = `9e209a10`
const appKey = `c73dcc9bacfbda03002092bc1891785c`

export const searchRecipes = async (ingredients, filters) => {
  try {
    const queryString = Object.entries(filters)
      .filter(([key, value]) => value)
      .map(([key, value]) => `${key}=${value}`)
      .join('&')

    const response = await fetch(`https://api.edamam.com/search?q=${ingredients}&app_id=${appId}&app_key=${appKey}&${queryString}`)
    console.log(response)
    const data = await response.json()
    return data.hits
  } catch (error) {
    console.error('Error fetching recipes:', error)
  }
};
const appId = '9e209a10'
const appKey = 'c73dcc9bacfbda03002092bc1891785c'

export const fetchRecipes = async (ingredients) => {
    try {
      const response = await fetch(`https://api.edamam.com/search?q=${ingredients}&app_id=${appId}&app_key=${appKey}`)
      const data = await response.json()
      return data.hits

    } catch (error) {
      console.error('Error fetching recipes:', error)
    }
  };

export default defineEventHandler(async (event) => {
  try {
    const { $graphql } = useNuxtApp()
    const { data } = await $graphql.default.request(`
      query GetTaches {
        taches {
        collection{
          id
          title
          description
          completed
          owner {
            name
            username
            email
          }
        }
    }}
      }
    `)
    return data
  } catch (error) {
    console.error('Erreur lors de la récupération des tâches:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Erreur lors de la récupération des tâches'
    })
  }
})

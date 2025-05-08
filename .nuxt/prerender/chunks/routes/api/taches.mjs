import { defineEventHandler, createError } from 'file://C:/Users/bomberkiller/Desktop/monsite/todo-frontend/node_modules/h3/dist/index.mjs';

const taches = defineEventHandler(async (event) => {
  try {
    const { $graphql } = useNuxtApp();
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
    `);
    return data;
  } catch (error) {
    console.error("Erreur lors de la r\xE9cup\xE9ration des t\xE2ches:", error);
    throw createError({
      statusCode: 500,
      statusMessage: "Erreur lors de la r\xE9cup\xE9ration des t\xE2ches"
    });
  }
});

export { taches as default };
//# sourceMappingURL=taches.mjs.map

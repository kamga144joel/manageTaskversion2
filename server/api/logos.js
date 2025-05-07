const { ApolloServer } = require('apollo-server');
const { GraphQLObjectType, GraphQLString, GraphQLList, GraphQLSchema } = require('graphql');

// Type de Logo
const LogoType = new GraphQLObjectType({
  name: 'Logo',
  fields: {
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    url: { type: GraphQLString },
    description: { type: GraphQLString },
    category: { type: GraphQLString },
  }
});

// Type de Query
const Query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    logos: {
      type: new GraphQLList(LogoType),
      resolve: () => {
        // Ici vous pouvez implémenter la logique pour récupérer les logos
        // Pour l'exemple, nous retournons un tableau fixe
        return [
          {
            id: '1',
            name: 'Logo 1',
            url: '/images/logos/logo1.png',
            description: 'Premier logo',
            category: 'Entreprise'
          },
          {
            id: '2',
            name: 'Logo 2',
            url: '/images/logos/logo2.png',
            description: 'Deuxième logo',
            category: 'Produit'
          }
        ];
      }
    },
    logo: {
      type: LogoType,
      args: {
        id: { type: GraphQLString }
      },
      resolve: (_, { id }) => {
        // Logique pour récupérer un logo spécifique
        return {
          id,
          name: 'Logo spécifique',
          url: `/images/logos/${id}.png`,
          description: 'Description du logo',
          category: 'Catégorie'
        };
      }
    }
  }
});

// Type de Mutation
const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    createLogo: {
      type: LogoType,
      args: {
        name: { type: GraphQLString },
        url: { type: GraphQLString },
        description: { type: GraphQLString },
        category: { type: GraphQLString }
      },
      resolve: (_, { name, url, description, category }) => {
        // Logique pour créer un nouveau logo
        return {
          id: Date.now().toString(),
          name,
          url,
          description,
          category
        };
      }
    }
  }
});

// Création du schéma
const schema = new GraphQLSchema({
  query: Query,
  mutation: Mutation
});

// Création du serveur Apollo
const server = new ApolloServer({
  schema,
  context: () => ({})
});

module.exports = server;

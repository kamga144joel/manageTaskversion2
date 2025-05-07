const { ApolloServer } = require('apollo-server');
const { 
  GraphQLObjectType, 
  GraphQLString, 
  GraphQLList, 
  GraphQLSchema,
  GraphQLNonNull
} = require('graphql');

// Type de Logo
const LogoType = new GraphQLObjectType({
  name: 'Logo',
  fields: {
    id: { 
      type: GraphQLString,
      description: 'Identifiant unique du logo'
    },
    name: { 
      type: GraphQLString,
      description: 'Nom du logo'
    },
    url: { 
      type: GraphQLString,
      description: 'URL de l'image du logo'
    },
    description: { 
      type: GraphQLString,
      description: 'Description du logo'
    },
    category: { 
      type: GraphQLString,
      description: 'Catégorie du logo'
    },
    createdAt: { 
      type: GraphQLString,
      description: 'Date de création du logo'
    }
  }
});

// Type de Query
const Query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    // Récupérer tous les logos
    logos: {
      type: new GraphQLList(LogoType),
      resolve: () => [
        {
          id: '1',
          name: 'Logo 1',
          url: '/images/logos/logo1.png',
          description: 'Description du logo 1',
          category: 'Catégorie 1',
          createdAt: new Date().toISOString()
        },
        {
          id: '2',
          name: 'Logo 2',
          url: '/images/logos/logo2.png',
          description: 'Description du logo 2',
          category: 'Catégorie 2',
          createdAt: new Date().toISOString()
        }
      ]
      }
    },
    // Récupérer un logo spécifique
    logo: {
      type: LogoType,
      args: {
        id: { 
          type: new GraphQLNonNull(GraphQLString),
          description: 'ID du logo à récupérer'
        }
      },
      description: 'Récupérer un logo spécifique par son ID',
      resolve: (_, { id }) => {
        // Logique pour récupérer un logo spécifique
        return {
          id,
          name: 'MANAGETASKS Logo',
          url: '/logo.jpg',
          description: 'Logo principal de l\'application MANAGETASKS',
          category: 'Application',
          createdAt: new Date().toISOString()
        };
      }
    }
  }
});

// Type de Mutation
const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    // Créer un nouveau logo
    createLogo: {
      type: LogoType,
      args: {
        name: { 
          type: new GraphQLNonNull(GraphQLString),
          description: 'Nom du nouveau logo'
        },
        url: { 
          type: new GraphQLNonNull(GraphQLString),
          description: 'URL de l\'image du logo'
        },
        description: { 
          type: GraphQLString,
          description: 'Description du logo'
        },
        category: { 
          type: GraphQLString,
          description: 'Catégorie du logo'
        }
      },
      description: 'Créer un nouveau logo',
      resolve: (_, { name, url, description, category }) => {
        // Logique pour créer un nouveau logo
        return {
          id: Date.now().toString(),
          name,
          url,
          description,
          category,
          createdAt: new Date().toISOString()
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
  context: () => ({
    // Contexte pour les résolveurs
  }),
  introspection: true,
  playground: process.env.NODE_ENV !== 'production'
});

module.exports = server;

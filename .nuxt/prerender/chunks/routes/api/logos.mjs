import * as dist from 'file://C:/Users/bomberkiller/Desktop/monsite/todo-frontend/node_modules/apollo-server/dist/index.js';
import * as graphql from 'file://C:/Users/bomberkiller/Desktop/monsite/todo-frontend/node_modules/graphql/index.js';

function _mergeNamespaces(n, m) {
	for (var i = 0; i < m.length; i++) {
		const e = m[i];
		if (typeof e !== 'string' && !Array.isArray(e)) { for (const k in e) {
			if (k !== 'default' && !(k in n)) {
				const d = Object.getOwnPropertyDescriptor(e, k);
				if (d) {
					Object.defineProperty(n, k, d.get ? d : {
						enumerable: true,
						get: function () { return e[k]; }
					});
				}
			}
		} }
	}
	return Object.freeze(n);
}

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function getDefaultExportFromNamespaceIfNotNamed (n) {
	return n && Object.prototype.hasOwnProperty.call(n, 'default') && Object.keys(n).length === 1 ? n['default'] : n;
}

const require$$0 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(dist);

const require$$1 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(graphql);

const { ApolloServer } = require$$0;
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLSchema,
  GraphQLNonNull
} = require$$1;
const LogoType = new GraphQLObjectType({
  name: "Logo",
  fields: () => ({
    id: {
      type: GraphQLString,
      description: "Identifiant unique du logo"
    },
    name: {
      type: GraphQLString,
      description: "Nom du logo"
    },
    url: {
      type: GraphQLString,
      description: "URL de l'image du logo"
    },
    description: {
      type: GraphQLString,
      description: "Description du logo"
    },
    category: {
      type: GraphQLString,
      description: "Cat\xE9gorie du logo"
    },
    createdAt: {
      type: GraphQLString,
      description: "Date de cr\xE9ation du logo"
    }
  })
});
const Query = new GraphQLObjectType({
  name: "Query",
  fields: {
    // Récupérer tous les logos
    logos: {
      type: new GraphQLList(LogoType),
      resolve: () => [
        {
          id: "1",
          name: "Logo 1",
          url: "/images/logos/logo1.png",
          description: "Description du logo 1",
          category: "Cat\xE9gorie 1",
          createdAt: (/* @__PURE__ */ new Date()).toISOString()
        },
        {
          id: "2",
          name: "Logo 2",
          url: "/images/logos/logo2.png",
          description: "Description du logo 2",
          category: "Cat\xE9gorie 2",
          createdAt: (/* @__PURE__ */ new Date()).toISOString()
        }
      ]
    },
    // Récupérer un logo spécifique
    logo: {
      type: LogoType,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLString),
          description: "ID du logo \xE0 r\xE9cup\xE9rer"
        }
      },
      description: "R\xE9cup\xE9rer un logo sp\xE9cifique par son ID",
      resolve: (_, { id }) => {
        return {
          id,
          name: "MANAGETASKS Logo",
          url: "/logo.jpg",
          description: "Logo principal de l'application MANAGETASKS",
          category: "Application",
          createdAt: (/* @__PURE__ */ new Date()).toISOString()
        };
      }
    }
  }
});
const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    // Créer un nouveau logo
    createLogo: {
      type: LogoType,
      args: {
        name: {
          type: new GraphQLNonNull(GraphQLString),
          description: "Nom du nouveau logo"
        },
        url: {
          type: new GraphQLNonNull(GraphQLString),
          description: "URL de l'image du logo"
        },
        description: {
          type: GraphQLString,
          description: "Description du logo"
        },
        category: {
          type: GraphQLString,
          description: "Cat\xE9gorie du logo"
        }
      },
      description: "Cr\xE9er un nouveau logo",
      resolve: (_, { name, url, description, category }) => {
        return {
          id: Date.now().toString(),
          name,
          url,
          description,
          category,
          createdAt: (/* @__PURE__ */ new Date()).toISOString()
        };
      }
    }
  }
});
const schema = new GraphQLSchema({
  query: Query,
  mutation: Mutation
});
const server = new ApolloServer({
  schema,
  context: () => ({
    // Contexte pour les résolveurs
  }),
  introspection: true,
  playground: true
});
var logos = server;

const logos$1 = /*@__PURE__*/getDefaultExportFromCjs(logos);

const logos$2 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: logos$1
}, [logos]);

export { logos$2 as l };
//# sourceMappingURL=logos.mjs.map

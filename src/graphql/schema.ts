import { makeSchema, queryType, objectType, list } from "nexus";
import { nexusPrisma } from "nexus-plugin-prisma";
import path from "path";

const query = queryType({
  definition(t) {
    t.field('users', {type : list(user), resolve: (_,args,ctx) => ctx.prisma.user.findMany() })
  },
});

const user = objectType({
    name:"User",
    definition(t) {
        t.model.id(),
        t.model.name()
    }
})

export const schema = makeSchema({
  types: { query },
  plugins: [nexusPrisma()],
  outputs: {
    schema: path.join(process.cwd(), "generated/schema.graphql"),
    typegen: path.join(process.cwd(), "generated/nexus.ts"),
  },
  contextType:{ module: path.join(process.cwd(), "src/graphql/context.ts"), export:'PrismaContext'}
});

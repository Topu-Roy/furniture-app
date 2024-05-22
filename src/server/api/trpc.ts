/**
 * YOU PROBABLY DON'T NEED TO EDIT THIS FILE, UNLESS:
 * 1. You want to modify request context (see Part 1).
 * 2. You want to create a new middleware or type of procedure (see Part 3).
 *
 * TL;DR - This is where all the tRPC server stuff is created and plugged in. The pieces you will
 * need to use are documented accordingly near the end.
 */
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { TRPCError, initTRPC } from "@trpc/server";
import superjson from "superjson";
import { ZodError } from "zod";
import { getUserByAuthId } from "../queries";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

/**
 * 1. CONTEXT
 *
 * This section defines the "contexts" that are available in the backend API.
 *
 * These allow you to access things when processing a request, like the database, the session, etc.
 *
 * This helper generates the "internals" for a tRPC context. The API handler and RSC clients each
 * wrap this and provides the required context.
 *
 * @see https://trpc.io/docs/server/context
 */
export const createTRPCContext = async (opts: { headers: Headers }) => {
  return {
    db,
    ...opts,
  };
};

/**
 * 2. INITIALIZATION
 *
 * This is where the tRPC API is initialized, connecting the context and transformer. We also parse
 * ZodErrors so that you get typesafety on the frontend if your procedure fails due to validation
 * errors on the backend.
 */
const t = initTRPC.context<typeof createTRPCContext>().create({
  transformer: superjson,
  errorFormatter({ shape, error }) {
    return {
      ...shape,
      data: {
        ...shape.data,
        zodError:
          error.cause instanceof ZodError ? error.cause.flatten() : null,
      },
    };
  },
});

/**
 * Create a server-side caller.
 *
 * @see https://trpc.io/docs/server/server-side-calls
 */
export const createCallerFactory = t.createCallerFactory;

/**
 * 3. ROUTER & PROCEDURE (THE IMPORTANT BIT)
 *
 * These are the pieces you use to build your tRPC API. You should import these a lot in the
 * "/src/server/api/routers" directory.
 */

/**
 * This is how you create new routers and sub-routers in your tRPC API.
 *
 * @see https://trpc.io/docs/router
 */
export const createTRPCRouter = t.router;

/**
 * Public (unauthenticated) procedure
 *
 * This is the base piece you use to build new queries and mutations on your tRPC API. It does not
 * guarantee that a user querying is authorized.
 */
export const publicProcedure = t.procedure;

/**
 * Private (authenticated) procedure
 *
 * This is the base piece you use to build new queries and mutations on your tRPC API. It
 * guaranties that a user querying is authorized.
 */
export const privateProcedure = t.procedure.use(async (opts) => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) throw new TRPCError({ code: 'UNAUTHORIZED' })

  return opts.next({
    ctx: {
      user: user,
    },
  });
})

/**
 * Admin procedure
 *
 * This is the base piece you use to build new queries and mutations on your tRPC API. It
 * guaranties that a user querying is authorized and is an Admin.
 */
export const adminProcedure = t.procedure.use(async (opts) => {
  const { getUser } = getKindeServerSession();
  const user = await getUser()

  if (!user) throw new TRPCError({ code: 'UNAUTHORIZED' })

  const dbUser = await getUserByAuthId(user.id)

  if (!dbUser) throw new TRPCError({ code: 'NOT_FOUND' })

  if (dbUser.role !== 'ADMIN') throw new TRPCError({ code: 'FORBIDDEN' })

  return opts.next({
    ctx: {
      user: user,
    },
  });
})

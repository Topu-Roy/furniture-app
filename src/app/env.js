import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
    server: {
    NODE_ENV: z
      .enum(["development", "test", "production"])
      .default("development"),
    DATABASE_URL: z.string().url(),

    // * Uploadthing 
    UPLOADTHING_SECRET: z.string(),
    UPLOADTHING_APP_ID: z.string(),

    // * Kinde Auth
    KINDE_CLIENT_ID: z.string(),
    KINDE_CLIENT_SECRET: z.string(),
    KINDE_ISSUER_URL: z.string().url(),
    KINDE_SITE_URL: z.string().url(),
    KINDE_POST_LOGOUT_REDIRECT_URL: z.string().url(),
    KINDE_POST_LOGIN_REDIRECT_URL: z.string().url(),
    },
    runtimeEnv: {
        NODE_ENV: process.env.NODE_ENV,
        DATABASE_URL: process.env.DATABASE_URL,

        // * Uploadthing
        UPLOADTHING_SECRET: process.env.UPLOADTHING_SECRET,
        UPLOADTHING_APP_ID: process.env.UPLOADTHING_APP_ID,

        // * Kinde Auth
        KINDE_CLIENT_ID: process.env.KINDE_CLIENT_ID,
        KINDE_CLIENT_SECRET: process.env.KINDE_CLIENT_SECRET,
        KINDE_ISSUER_URL: process.env.KINDE_ISSUER_URL,
        KINDE_SITE_URL: process.env.KINDE_SITE_URL,
        KINDE_POST_LOGOUT_REDIRECT_URL: process.env.KINDE_POST_LOGOUT_REDIRECT_URL,
        KINDE_POST_LOGIN_REDIRECT_URL: process.env.KINDE_POST_LOGIN_REDIRECT_URL,
    },
    skipValidation: !!process.env.SKIP_ENV_VALIDATION,
    emptyStringAsUndefined: true,
});
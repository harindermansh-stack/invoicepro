import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

const emptyStringToUndefined = (value: unknown) =>
  value === "" ? undefined : value;

const optionalString = z.preprocess(
  emptyStringToUndefined,
  z.string().min(1).optional(),
);

const optionalEmail = z.preprocess(
  emptyStringToUndefined,
  z.string().email().optional(),
);

export const env = createEnv({
  server: {
    AUTH_TOKEN: optionalString,

    RESEND_API_KEY: optionalString,

    UPSTASH_REDIS_REST_URL: optionalString,
    UPSTASH_REDIS_REST_TOKEN: optionalString,

    TELEGRAM_BOT_TOKEN: optionalString,
    TELEGRAM_CHAT_ID: optionalString,

    SELLER_NAME: optionalString,
    SELLER_ADDRESS: optionalString,
    SELLER_VAT_NO: optionalString,
    SELLER_EMAIL: optionalEmail,
    SELLER_ACCOUNT_NUMBER: optionalString,
    SELLER_SWIFT_BIC: optionalString,

    BUYER_NAME: optionalString,
    BUYER_ADDRESS: optionalString,
    BUYER_VAT_NO: optionalString,
    BUYER_EMAIL: optionalEmail,

    INVOICE_NET_PRICE: optionalString,
    INVOICE_EMAIL_RECIPIENT: optionalEmail,
    INVOICE_EMAIL_COMPANY_TO: optionalEmail,

    GOOGLE_DRIVE_PARENT_FOLDER_ID: optionalString,
    GOOGLE_DRIVE_CLIENT_EMAIL: optionalEmail,
    GOOGLE_DRIVE_PRIVATE_KEY: optionalString,

    GITHUB_TOKEN: optionalString,
  },
  client: {
    NEXT_PUBLIC_SENTRY_DSN: optionalString,
  },
  // If you're using Next.js < 13.4.4, you'll need to specify the runtimeEnv manually
  runtimeEnv: {
    NEXT_PUBLIC_SENTRY_DSN: process.env.NEXT_PUBLIC_SENTRY_DSN,

    AUTH_TOKEN: process.env.AUTH_TOKEN,

    RESEND_API_KEY: process.env.RESEND_API_KEY,

    UPSTASH_REDIS_REST_URL: process.env.UPSTASH_REDIS_REST_URL,
    UPSTASH_REDIS_REST_TOKEN: process.env.UPSTASH_REDIS_REST_TOKEN,

    TELEGRAM_BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN,
    TELEGRAM_CHAT_ID: process.env.TELEGRAM_CHAT_ID,

    SELLER_NAME: process.env.SELLER_NAME,
    SELLER_ADDRESS: process.env.SELLER_ADDRESS,
    SELLER_VAT_NO: process.env.SELLER_VAT_NO,
    SELLER_EMAIL: process.env.SELLER_EMAIL,
    SELLER_ACCOUNT_NUMBER: process.env.SELLER_ACCOUNT_NUMBER,
    SELLER_SWIFT_BIC: process.env.SELLER_SWIFT_BIC,

    BUYER_NAME: process.env.BUYER_NAME,
    BUYER_ADDRESS: process.env.BUYER_ADDRESS,
    BUYER_VAT_NO: process.env.BUYER_VAT_NO,
    BUYER_EMAIL: process.env.BUYER_EMAIL,

    INVOICE_NET_PRICE: process.env.INVOICE_NET_PRICE,
    INVOICE_EMAIL_RECIPIENT: process.env.INVOICE_EMAIL_RECIPIENT,
    INVOICE_EMAIL_COMPANY_TO: process.env.INVOICE_EMAIL_COMPANY_TO,

    GOOGLE_DRIVE_PARENT_FOLDER_ID: process.env.GOOGLE_DRIVE_PARENT_FOLDER_ID,
    GOOGLE_DRIVE_CLIENT_EMAIL: process.env.GOOGLE_DRIVE_CLIENT_EMAIL,
    GOOGLE_DRIVE_PRIVATE_KEY: process.env.GOOGLE_DRIVE_PRIVATE_KEY,

    GITHUB_TOKEN: process.env.GITHUB_TOKEN,
  },
  emptyStringAsUndefined: true,
});

export const hasAuthConfig = Boolean(env.AUTH_TOKEN);

export const hasResendConfig = Boolean(env.RESEND_API_KEY);

export const hasRedisConfig = Boolean(
  env.UPSTASH_REDIS_REST_URL && env.UPSTASH_REDIS_REST_TOKEN,
);

export const hasTelegramConfig = Boolean(
  env.TELEGRAM_BOT_TOKEN && env.TELEGRAM_CHAT_ID,
);

export const hasGoogleDriveConfig = Boolean(
  env.GOOGLE_DRIVE_PARENT_FOLDER_ID &&
    env.GOOGLE_DRIVE_CLIENT_EMAIL &&
    env.GOOGLE_DRIVE_PRIVATE_KEY,
);

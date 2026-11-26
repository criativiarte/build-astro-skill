import { defineCollection } from "astro:content";
import { file, glob } from "astro/loaders";
import { z } from "astro/zod";
import { normalizeScriptSnippet } from "./utils/scripts";

const emptyToUndefined = (value: unknown) =>
  value === "" || value === null ? undefined : value;

const repoAssetPathToRelative = (value: unknown) => {
  const normalizedValue = emptyToUndefined(value);

  if (typeof normalizedValue !== "string") {
    return normalizedValue;
  }

  return normalizedValue.replace(/^\/?src\/assets\//, "../../assets/");
};

const posts = defineCollection({
  loader: glob({
    base: "./src/content/posts",
    pattern: "**/*.{md,mdx}",
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string().trim().min(1, "O título não pode ficar vazio.").max(100),
      description: z.string().trim().min(1, "A descrição não pode ficar vazia.").max(160),
      status: z.preprocess(
        emptyToUndefined,
        z.enum(["Publicado", "Rascunho"]).default("Publicado"),
      ),
      pubDate: z.coerce.date(),
      updatedDate: z.preprocess(emptyToUndefined, z.coerce.date().optional()),
      coverImage: z.preprocess(repoAssetPathToRelative, image().optional()),
      author: z.preprocess(emptyToUndefined, z.string().optional()),
      tags: z.preprocess(
        (value) => (Array.isArray(value) ? value : []),
        z.array(z.string()).default([]),
      ),
    }),
});

const optionalText = z.string().nullish().transform((value) => value ?? "");

const whatsapp = defineCollection({
  loader: glob({
    base: "./src/content",
    pattern: "whatsapp.json",
  }),
  schema: z.object({
    enabled: z.boolean(),
    phone: z.string().regex(/^[1-9]\d{7,14}$/),
    message: optionalText,
    tooltip: optionalText,
    showOnLoad: z.boolean(),
  }),
});

const scripts = defineCollection({
  loader: file("./src/content/scripts.json", {
    parser: (text) => ({ scripts: { items: JSON.parse(text) } }),
  }),
  schema: z.object({
    items: z.preprocess(
      (value) => value ?? [],
      z.array(z.object({
        name: z.string().trim().min(1, "Informe um nome para o script."),
        enabled: z.boolean(),
        position: z.enum(["head", "body"]),
        code: z.string().trim().transform((value, context) => {
          try {
            return normalizeScriptSnippet(value);
          } catch (error) {
            context.addIssue({ code: "custom", message: (error as Error).message });
            return z.NEVER;
          }
        }),
      })),
    ),
  }),
});

const policyText = optionalText.transform((value) => value.trim());

const privacyPolicy = defineCollection({
  loader: glob({
    base: "./src/content",
    pattern: "privacy-policy.json",
  }),
  schema: z.object({
    controllerName: policyText,
    controllerRegistration: optionalText,
    controllerAddress: optionalText,
    contactEmail: policyText,
    lastUpdated: z.union([z.iso.date(), z.literal("")]).nullish().transform((value) => value ?? ""),
    forms: z.array(z.object({
      name: policyText,
      data: policyText,
      purpose: policyText,
      legalBasis: policyText,
      recipients: policyText,
      retention: policyText,
    })).nullish().transform((forms) => forms ?? []),
    trackingServices: z.array(z.object({
      name: z.string().trim().min(1),
      enabled: z.boolean(),
      purpose: z.string().trim().min(1),
      privacyUrl: z.url({ protocol: /^https?$/ }),
    })).nullish().transform((services) => services ?? []),
  }),
});

export const collections = {
  posts,
  whatsapp,
  scripts,
  privacyPolicy,
};

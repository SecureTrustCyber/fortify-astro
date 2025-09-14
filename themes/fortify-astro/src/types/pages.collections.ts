import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

export const about = defineCollection({
  loader: glob({
    pattern: "**/-*.{md,mdx}",
    base: "src/content/about",
  }),
  schema: z.object({
    title: z.string(),
    meta_title: z.string(),
    description: z.string(),
    image: z.string(),
    draft: z.boolean(),
  }),
});

export const authors = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "src/content/authors",
  }),
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string(),
    email: z.string().email().optional(),
    image: z.string().optional(),
  }),
});

export const blog = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "src/content/blog",
  }),
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    image: z.string().optional(),
    description: z.string(),
    hero: z
      .object({
        subtitle: z.string(),
        title: z.string(),
        description: z.string(),
      })
      .optional(),
    date: z.date().optional(),
    categories: z.array(z.string()).optional(),
    author: z.string().optional(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().optional(),
  }),
});

export const changelog = defineCollection({
  loader: glob({
    pattern: "**/-*.{md,mdx}",
    base: "src/content/changelog",
  }),
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string(),
    draft: z.boolean(),
  }),
});

export const contact = defineCollection({
  loader: glob({
    pattern: "**/-*.{md,mdx}",
    base: "src/content/contact",
  }),
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string(),
    image: z.string().optional(),
    draft: z.boolean(),
    hero: z.object({
      subtitle: z.string(),
      title: z.string(),
      description: z.string(),
      list: z.array(
        z.object({
          icon: z.string(),
          title: z.string(),
          description: z.string(),
        }),
      ),
    }),
  }),
});

export const features = defineCollection({
  loader: glob({
    pattern: "**/-*.{md,mdx}",
    base: "src/content/features",
  }),
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string(),
    image: z.string().optional(),
    draft: z.boolean(),
    hero: z.object({
      subtitle: z.string(),
      title: z.string(),
      description: z.string(),
    }),
  }),
});

export const integration = defineCollection({
  loader: glob({
    pattern: "**/-*.{md,mdx}",
    base: "src/content/integration",
  }),
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string(),
    image: z.string().optional(),
    draft: z.boolean(),
  }),
});

export const pages = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "src/content/pages",
  }),
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string().optional(),
    image: z.string().optional(),
    draft: z.boolean().optional(),
  }),
});

export const pricing = defineCollection({
  loader: glob({
    pattern: "**/-*.{md,mdx}",
    base: "src/content/pricing",
  }),
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    image: z.string().optional(),
    description: z.string(),
    draft: z.boolean(),
    hero: z.object({
      subtitle: z.string(),
      title: z.string(),
      description: z.string(),
    }),
    testimonial: z
      .object({
        subtitle: z.string(),
        title: z.string(),
        description: z.string(),
      })
      .optional(),
  }),
});

export const review = defineCollection({
  loader: glob({
    pattern: "**/-*.{md,mdx}",
    base: "src/content/review",
  }),
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string(),
    image: z.string().optional(),
    draft: z.boolean(),
    testimonial: z.object({
      subtitle: z.string(),
      title: z.string(),
      description: z.string(),
    }),
  }),
});

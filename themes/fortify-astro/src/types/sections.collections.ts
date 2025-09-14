import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

export const aboutBannerSection = defineCollection({
  loader: glob({
    pattern: "about-banner.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    subtitle: z.string(),
    title: z.string(),
    description: z.string(),
    left_image: z.string(),
    right_image: z.string(),
    quote: z.object({
      avatar: z.string(),
      name: z.string(),
      designation: z.string(),
      content: z.string(),
    }),
  }),
});

export const blogSection = defineCollection({
  loader: glob({
    pattern: "blog.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    subtitle: z.string(),
    title: z.string(),
    description: z.string(),
  }),
});

export const ctaSection = defineCollection({
  loader: glob({
    pattern: "call-to-action.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    enable: z.boolean(),
    title: z.string(),
    image: z.string(),
    description: z.string(),
    button: z.object({
      enable: z.boolean(),
      label: z.string(),
      link: z.string(),
    }),
  }),
});

export const changelogSection = defineCollection({
  loader: glob({
    pattern: "changelog.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    subtitle: z.string(),
    title: z.string(),
    description: z.string(),
    list: z.array(
      z.object({
        title: z.string(),
        short_title: z.string(),
        image: z.string(),
        date: z.string(),
        version: z.string(),
        content: z.string(),
      }),
    ),
  }),
});

export const clientsSection = defineCollection({
  loader: glob({
    pattern: "clients.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    title: z.string(),
    list: z.array(z.string()),
  }),
});

export const faqSection = defineCollection({
  loader: glob({
    pattern: "faq.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    subtitle: z.string(),
    title: z.string(),
    description: z.string(),
    list: z.array(
      z.object({
        title: z.string(),
        description: z.string(),
        active: z.boolean().optional(),
      }),
    ),
  }),
});

export const featuresExplanationSection = defineCollection({
  loader: glob({
    pattern: "features-explanation.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    subtitle: z.string(),
    title: z.string(),
    description: z.string(),
    image: z.string(),
    list: z.array(
      z.object({
        row: z.array(
          z.object({
            title: z.string(),
            description: z.string(),
          }),
        ),
      }),
    ),
  }),
});

export const featuresGridSection = defineCollection({
  loader: glob({
    pattern: "features-grid.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    subtitle: z.string(),
    title: z.string(),
    description: z.string(),
    list: z.array(
      z.object({
        title: z.string(),
        description: z.string(),
        image: z.string(),
        button: z
          .object({
            enable: z.boolean(),
            label: z.string(),
            link: z.string(),
          })
          .optional(),
      }),
    ),
  }),
});

export const featuresSection = defineCollection({
  loader: glob({
    pattern: "features.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    subtitle: z.string(),
    title: z.string(),
    description: z.string(),
    list: z.array(
      z.object({
        title: z.string(),
        image: z.string(),
        description: z.string().optional(),
        bulletpoints_y: z
          .array(
            z.object({
              icon: z.string(),
              title: z.string(),
              description: z.string(),
            }),
          )
          .optional(),
        bulletpoints_x: z
          .array(
            z.object({
              icon: z.string(),
              title: z.string().optional(),
              description: z.string(),
            }),
          )
          .optional(),
        button: z
          .object({
            enable: z.boolean(),
            label: z.string(),
            link: z.string(),
          })
          .optional(),
      }),
    ),
  }),
});

export const homeBannerSection = defineCollection({
  loader: glob({
    pattern: "home-banner.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    bg_image: z.string(),
    images: z.array(
      z.object({
        src: z.string(),
        alt: z.string(),
        height: z.string().optional(),
      }),
    ),
    buttons: z.array(
      z.object({
        enable: z.boolean(),
        label: z.string(),
        link: z.string(),
      }),
    ),
  }),
});

export const howItWorksSection = defineCollection({
  loader: glob({
    pattern: "how-it-works.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
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
});

export const integrationSection = defineCollection({
  loader: glob({
    pattern: "integration.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    subtitle: z.string(),
    title: z.string(),
    description: z.string(),
    list: z.array(
      z.object({
        name: z.string(),
        image: z.string(),
        description: z.string(),
        button: z.object({
          enable: z.boolean(),
          label: z.string(),
          link: z.string(),
        }),
        list: z.array(z.string()),
      }),
    ),
  }),
});

export const ourTeamSection = defineCollection({
  loader: glob({
    pattern: "our-team.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    subtitle: z.string(),
    title: z.string(),
    description: z.string(),
    list: z.array(
      z.object({
        name: z.string(),
        image: z.string(),
        company: z.string(),
      }),
    ),
  }),
});

export const ourValuesSection = defineCollection({
  loader: glob({
    pattern: "our-values.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
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
    stats: z.array(
      z.object({
        label: z.string(),
        value: z.string(),
      }),
    ),
  }),
});

export const pricingSection = defineCollection({
  loader: glob({
    pattern: "pricing.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    subtitle: z.string(),
    title: z.string(),
    description: z.string(),
    plans_labels: z.array(z.string()),
    plans: z.array(
      z.object({
        title: z.string(),
        description: z.string(),
        price_prefix: z.string(),
        price_monthly: z.string(),
        price_yearly: z.string(),
        price_description_monthly: z.string(),
        price_description_yearly: z.string(),
        features: z.array(z.string()),
        badge: z.object({
          enable: z.boolean(),
          label: z.string(),
        }),
        button: z.object({
          enable: z.boolean(),
          label: z.string(),
          link: z.string(),
        }),
      }),
    ),
  }),
});

export const testimonialSection = defineCollection({
  loader: glob({
    pattern: "testimonial.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    subtitle: z.string(),
    title: z.string(),
    description: z.string(),
    list: z.array(
      z.object({
        name: z.string(),
        designation: z.string(),
        avatar: z.string(),
        content: z.string(),
      }),
    ),
  }),
});

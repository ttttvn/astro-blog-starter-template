import { glob } from "astro/loaders";
import { defineCollection } from "astro:content";
import { z } from "astro/zod";

const legalRef = z.object({
	label: z.string(),
	href: z.string(),
});

const blogCategory = z.enum([
	"chinh-sach-mat-hang",
	"thu-tuc-xnk",
	"cap-nhat-van-ban",
	"huong-dan",
]);

const blog = defineCollection({
	loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
	schema: z.object({
		/** Dùng bởi Decap CMS cho slug file; Astro không bắt buộc trường này khi render. */
		slug: z.string().optional(),
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
		draft: z.boolean().optional().default(false),
		category: blogCategory,
		tags: z.array(z.string()).default([]),
		hsCodes: z.array(z.string()).default([]),
		effectiveDate: z.coerce.date().optional(),
		legalBasis: z.array(legalRef).default([]),
	}),
});

export const collections = { blog };

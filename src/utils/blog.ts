import { getCollection, type CollectionEntry } from "astro:content";

export type BlogCategory =
	| "chinh-sach-mat-hang"
	| "thu-tuc-xnk"
	| "cap-nhat-van-ban"
	| "huong-dan";

export const CATEGORY_LABELS: Record<BlogCategory, string> = {
	"chinh-sach-mat-hang": "Chính sách mặt hàng",
	"thu-tuc-xnk": "Thủ tục XNK",
	"cap-nhat-van-ban": "Cập nhật văn bản",
	"huong-dan": "Hướng dẫn",
};

export function isBlogCategory(value: string): value is BlogCategory {
	return Object.prototype.hasOwnProperty.call(CATEGORY_LABELS, value);
}

export async function getPublishedPosts(): Promise<CollectionEntry<"blog">[]> {
	const all = await getCollection("blog");
	return all.filter((p) => !p.data.draft);
}

/** URL-safe slug for tags (Unicode normalized). */
export function slugifyTag(tag: string): string {
	return tag
		.normalize("NFC")
		.trim()
		.toLowerCase()
		.replace(/\s+/g, "-")
		.replace(/[/\\?#&]/g, "-")
		.replace(/-+/g, "-");
}

export function hsSlug(code: string): string {
	return code.replace(/\./g, "-").replace(/\s+/g, "");
}

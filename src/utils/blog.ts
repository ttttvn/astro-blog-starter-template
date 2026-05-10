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

/** Mô tả ngắn cho menu / trang chủ đề */
export const CATEGORY_HINTS: Record<BlogCategory, string> = {
	"chinh-sach-mat-hang": "Điều kiện, kiểm tra, biện pháp theo nhóm hàng",
	"thu-tuc-xnk": "Tờ khai, chứng từ, luồng thông quan",
	"cap-nhat-van-ban": "Thông báo, văn bản, điểm cần đối chiếu",
	"huong-dan": "Checklist, FAQ, cách tra cứu",
};

export function isBlogCategory(value: string): value is BlogCategory {
	return Object.prototype.hasOwnProperty.call(CATEGORY_LABELS, value);
}

export async function getPublishedPosts(): Promise<CollectionEntry<"blog">[]> {
	const all = await getCollection("blog");
	return all.filter((p) => !p.data.draft);
}

export function collectUniqueTags(
	posts: CollectionEntry<"blog">[],
): string[] {
	const s = new Set<string>();
	for (const p of posts) {
		for (const t of p.data.tags) s.add(t);
	}
	return [...s].sort((a, b) => a.localeCompare(b, "vi"));
}

export function collectUniqueHsCodes(
	posts: CollectionEntry<"blog">[],
): string[] {
	const s = new Set<string>();
	for (const p of posts) {
		for (const h of p.data.hsCodes) s.add(h);
	}
	return [...s].sort();
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

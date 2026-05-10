import { getCollection, type CollectionEntry } from "astro:content";

export type BlogCategory =
	| "cam-han-che"
	| "xnk-co-dieu-kien"
	| "kiem-tra-chuyen-nganh"
	| "nhom-hang-nhap-khau"
	| "nhom-hang-xuat-khau";

export const CATEGORY_LABELS: Record<BlogCategory, string> = {
	"cam-han-che": "Cấm, hạn chế & cấm tuyệt đối",
	"xnk-co-dieu-kien": "XNK có điều kiện",
	"kiem-tra-chuyen-nganh": "Kiểm tra chuyên ngành",
	"nhom-hang-nhap-khau": "Nhóm hàng nhập khẩu",
	"nhom-hang-xuat-khau": "Nhóm hàng xuất khẩu",
};

/** Nhãn ngắn kiểu “impact” cho danh sách tin (quét nhanh). */
export const CATEGORY_IMPACT_LABELS: Record<BlogCategory, string> = {
	"cam-han-che": "Rà soát trước HĐ",
	"xnk-co-dieu-kien": "Điều kiện & checklist",
	"kiem-tra-chuyen-nganh": "Chuyên ngành",
	"nhom-hang-nhap-khau": "Luồng nhập khẩu",
	"nhom-hang-xuat-khau": "Luồng xuất khẩu",
};

/** Mô tả ngắn cho menu / trang chủ đề */
export const CATEGORY_HINTS: Record<BlogCategory, string> = {
	"cam-han-che": "Rà soát trước ký hợp đồng để tránh nhóm hàng cấm hoặc hạn chế",
	"xnk-co-dieu-kien": "Giấy phép, kiểm định và điều kiện bắt buộc theo từng nhóm hàng",
	"kiem-tra-chuyen-nganh": "ATTP, kiểm dịch, nhãn năng lượng và yêu cầu cơ quan chuyên ngành",
	"nhom-hang-nhap-khau": "Chuỗi công việc từ phân loại HS đến hoàn tất thông quan hàng nhập",
	"nhom-hang-xuat-khau": "Lưu ý C/O, tiêu chuẩn thị trường đích và thủ tục trước khi xuất khẩu",
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

/** Chuẩn hóa chuỗi để so khớp tìm kiếm (bỏ dấu, chữ thường). */
export function normalizeSearchText(s: string): string {
	return s
		.normalize("NFD")
		.replace(/\p{M}/gu, "")
		.toLowerCase()
		.replace(/\s+/g, " ")
		.trim();
}

# Playbook biên tập bài (FASTPORT / cổng XNK)

Tài liệu dành cho người soạn bài trong Decap CMS hoặc chỉnh sửa Markdown trực tiếp. Mục tiêu: bài **dễ quét**, **đủ căn cứ**, **đúng kỳ vọng DN XNK**.

---

## 1. Trước khi viết

- **Ai đọc?** Kinh doanh / chứng từ / quản lý — chọn một làm “độc giả chính” và viết tiêu đề + đoạn mở cho họ.
- **Bài giải quyết việc gì trong 2 phút?** Một câu: “Sau khi đọc, người đọc làm được X.”
- **Không kết luận thay cơ quan nhà nước.** Diễn giải + dẫn link văn bản / CSDL công khai.

---

## 2. Front matter (bắt buộc đối chiếu CMS)

| Trường | Ghi chú |
|--------|---------|
| `title` | Cụ thể + ngữ cảnh (vd. nhập khẩu / trước tờ khai). |
| `description` | 1–2 câu, có thể dùng làm kết quả tìm kiếm. |
| `pubDate` | Ngày xuất bản. |
| `category` | Một trong 5 slug chuyên mục hiện hành trên cổng. |
| `tags` | 3–6 nhãn, viết thường + gạch ngang; trùng với từ khóa người đọc hay gõ. |
| `slug` | Chỉ dùng khi cần tách URL khác tên file; không đổi lung tung sau khi đã công bố. |
| `legalBasis` | Ít nhất 1 link cơ quan / CSDL khi bài đụng chính sách hoặc thủ tục. |

---

## 3. Cấu trúc bài chuẩn (Markdown)

Thứ tự gợi ý — **các `##` tạo mục lục tự động** trên trang chi tiết:

1. **Đoạn dẫn (không cần tiêu đề riêng)** — 2–4 câu: ai nên đọc + vấn đề + phạm vi.
2. **`## Tóm tắt nhanh cho chứng từ (30 giây)`** — 3–5 gạch đầu dòng, hành động rõ.
3. **`## Bối cảnh / Vì sao quan trọng`** — ngắn, tránh lý thuyết dài.
4. **`## Quy trình hoặc checklist`** — có thể dùng `- [ ]` nếu phù hợp.
5. **`## Lưu ý và giới hạn`** — disclaimer nghiệp vụ, khi nào cần chuyên gia / văn bản gốc.
6. **`## Tham chiếu thêm`** (tuỳ chọn) — link đã liệt kê trong `legalBasis` có thể nhắc lại trong bài.

**Tiêu đề cấp 2 (`##`)** — dùng cho mục lớn. **Cấp 3 (`###`)** — chi tiết trong mục.

---

## 4. Phong cách viết cho DN XNK

- Câu ngắn. Đoạn 2–4 câu.
- Thuật ngữ lần đầu: giải thích ngoặc (vd. HS, ATTP, C/O).
- Tránh từ mơ hồ: “thường”, “có thể” — nếu dùng, gắn **điều kiện** (vd. “khi hàng có kiểm tra chuyên ngành”).
- Số, ngày, mã: kiểm tra trùng khớp với ô pháp lý / `effectiveDate` nếu có.

---

## 5. Ảnh và media

- `heroImage`: chỉ khi ảnh thật sự hỗ trợ (sơ đồ, bảng); không cần thì để trống.
- Ảnh trong bài: mô tả ngắn trong alt khi có ý nghĩa — tránh alt rỗng trừ ảnh trang trí.

---

## 6. Sau khi xuất bản

- Đối chiếu bài trên site: breadcrumb, mục lục, khối “Thông tin tra cứu”.
- Nếu văn bản gốc thay đổi: cập nhật `updatedDate` và một dòng trong đoạn mở hoặc mục “Lưu ý”.

---

## 7. File mẫu (copy sang bài mới)

Tạo file mới trong `src/content/blog/` với nội dung khung:

```yaml
---
title: ""
description: ""
slug: ""
pubDate: YYYY-MM-DD
updatedDate: YYYY-MM-DD
category: "xnk-co-dieu-kien"
tags: []
hsCodes: []
effectiveDate: YYYY-MM-DD
draft: true
legalBasis: []
---

Đoạn mở 2–4 câu.

## Tóm tắt nhanh cho chứng từ (30 giây)

- …
- …

## Quy trình hoặc checklist

1. …

## Lưu ý và giới hạn

…
```

Xóa `draft: true` hoặc đặt `draft: false` khi sẵn sàng hiển thị.

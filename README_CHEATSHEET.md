# ⚡ CHEAT SHEET NHANH — VIỆC CẦN LÀM THEO VAI TRÒ

> Dùng file này như một **to-do list cá nhân** theo từng vai trò.  
> Mỗi tuần check lại xem bản thân đang ở đâu trong tiến độ.

---

## 🎯 BA / Product Manager

| Tuần | Việc cần làm |
|------|-------------|
| 1–2 | Lập Feature Matrix 3 vai trò |
| 3–4 | Phân tích sâu từng tính năng + nghiên cứu competitor (Shopee, Tiki, Amazon) |
| 5–7 | Review & approve toàn bộ diagrams từ Backend & QA |
| 8–10 | Coordinate integration, theo dõi tiến độ, update Gantt chart |
| 11–12 | Viết báo cáo hoàn chỉnh (Introduction, Analysis, Conclusion) + tổng hợp toàn bộ |

**Câu hỏi cần trả lời được:**
- Pain point của user là gì?
- Tại sao khách hàng chọn sản phẩm mình thay vì đối thủ?
- Những tính năng nào đột phá nhất?

---

## 🏗️ Backend / System Architect

| Tuần | Việc cần làm |
|------|-------------|
| 1–2 | Đánh giá technical feasibility, gợi ý công nghệ |
| 3–4 | Xác định technical components (Address 1-N, Product_Variant, Image API...) |
| 5–7 | **FOCUS:** Vẽ ERD (User–Address 1-N, Product–Variant 1-N), vẽ Use Case |
| 8–10 | Code backend — ít nhất **10 API endpoints** |
| 11–12 | Viết phần "Technical Architecture" trong báo cáo |

**Checklist cá nhân tuần 5–7:**
- [ ] ERD có User–Address là 1-N (không phải 1-1!)
- [ ] ERD có Product–ProductVariant là 1-N
- [ ] Use Case có ≥5 UC với include/extend
- [ ] BPMN có ≥10 nodes, 3 swimlane

---

## ⚙️ Frontend Developer

| Tuần | Việc cần làm |
|------|-------------|
| 1–2 | Tham gia brainstorm, gợi ý tech stack |
| 3–4 | Xác định technical stack chính thức |
| 5–7 | Review Figma, planning component structure, lập danh sách component |
| 8–10 | Setup React project → Build ≥8 components → Integrate API |
| 11–12 | Viết phần "Frontend Implementation" + chụp screenshots UI |

**Checklist cá nhân tuần 8–10:**
- [ ] SearchBar có icon camera (Visual Search)
- [ ] Cart có Quick Edit button (không chỉ có Delete)
- [ ] AddressSelector hiển thị danh sách từ API (1-N)
- [ ] Loading skeletons cho các screen chính
- [ ] Mobile responsive đã test

---

## 🎨 Designer / Figma

| Tuần | Việc cần làm |
|------|-------------|
| 1–2 | Tham gia brainstorm, gợi ý tính năng từ góc UX |
| 3–4 | Research UI patterns (Shopee, Tiki, Amazon) — ghi chú điểm mạnh/yếu |
| 5–6 | **Wireframe (Low-fi):** Toàn bộ flow chính |
| 6–7 | **Hi-Fi Design + Prototype:** Interactive flow |
| 8–10 | Hand off design spec cho Frontend, QA design implementation |
| 11–12 | Viết phần "UI/UX Design Process" + export design assets |

**Checklist Figma cá nhân:**
- [ ] Wireframe: Search → Results → Detail → Cart → Address → Checkout → Confirmation
- [ ] Hi-Fi: Color scheme, typography, spacing nhất quán
- [ ] Prototype: ≥3 interactive journeys
- [ ] Mobile frames đã làm song song desktop

---

## 🧪 QA / Tester

| Tuần | Việc cần làm |
|------|-------------|
| 1–2 | Gợi ý test scenarios ban đầu |
| 3–4 | Lập comprehensive test case list từ Feature Matrix |
| 5–7 | **FOCUS:** Vẽ BPMN + Use Case diagram (Draw.io) |
| 8–10 | Test code từ Backend & Frontend; report bugs; chụp screenshots |
| 11–12 | Viết phần "Testing & QA" + final checklist |

**Checklist cá nhân tuần 5–7:**
- [ ] BPMN có 3 swimlane (Customer, System, Warehouse)
- [ ] BPMN có ≥10 nodes
- [ ] BPMN có exception handling (lỗi, hủy đơn)
- [ ] Use Case có ≥5 UC
- [ ] Use Case có `<<include>>` và `<<extend>>`

**Khi testing (tuần 8–10), focus vào:**
- [ ] Visual Search: Upload ảnh → nhận kết quả?
- [ ] Cart Quick Edit: Đổi size mà không phải xóa rồi thêm lại?
- [ ] Address: Thêm nhiều địa chỉ, chọn địa chỉ khi checkout?
- [ ] Edge cases: Hàng hết stock, địa chỉ không hợp lệ, ảnh không nhận diện được

---

## 📌 Câu hỏi thầy/cô hay hỏi khi bảo vệ

> Chuẩn bị sẵn câu trả lời cho các câu hỏi sau:

1. **Tại sao chọn lĩnh vực này?** → Dẫn data pain point thực tế
2. **Tính năng đột phá của nhóm so với Shopee/Tiki là gì?** → Visual Search + Quick Edit + Address 1-N
3. **ERD của nhóm User–Address là quan hệ gì? Tại sao?** → 1-N vì user có nhiều địa chỉ giao hàng
4. **Khi user muốn đổi size trong giỏ hàng, flow như thế nào?** → Quick Edit button, không xóa rồi thêm lại
5. **Tìm kiếm bằng ảnh hoạt động như thế nào về mặt kỹ thuật?** → Image recognition API (VD: Google Vision), gửi ảnh → nhận tag → tìm product match

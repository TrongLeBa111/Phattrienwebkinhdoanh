# 📅 TIMELINE & MILESTONE — 10 TUẦN

| Tuần | Giai đoạn | Deliverable chính | Trạng thái |
|------|-----------|-------------------|------------|
| 1–2 | Phân tích Nghiệp vụ & Đối tượng | Pain Point Analysis, Feature Matrix, Moodboard THỔ | ⬜ Pending |
| 3–4 | Wireframe + BPMN | Figma Wireframes (≥12 screens), 3 file BPMN | ⬜ Pending |
| 5–6 | Hi-Fi Design + ERD + Use Case | Figma Hi-Fi + Prototype, ERD, Use Case | ⬜ Pending |
| 7–8 | Implementation | Backend API, Frontend components, live demo | ⬜ Pending |
| 9–10 | Testing & Báo cáo | Test Report, Final PDF, Slide | ⬜ Pending |

> **Cập nhật trạng thái:** ⬜ Pending → 🔄 In Progress → ✅ Done

---

## 🗓️ Chi tiết từng tuần

### Tuần 1 — Kickoff & Nghiên cứu
- Brainstorm toàn nhóm về domain gốm sứ (THỔ)
- BA/PM: Lên danh sách pain point sơ bộ (khách hàng, THỔ, hệ thống)
- Designer: Moodboard trên **impeccable.style** — màu Terracotta + Celadon, tone thủ công
- Tất cả: Nghiên cứu competitor (website gốm sứ, Etsy, Airbnb Experiences)
- **Output:** Moodboard, danh sách pain point, quyết định 3 nghiệp vụ chính

### Tuần 2 — Feature Matrix & Phân tích sâu
- BA/PM: Hoàn thiện Feature Matrix 3 nghiệp vụ (3 vai trò: User/Business/System)
- Backend: Phân tích kỹ thuật Hybrid Cart, Smart Slot, Ceramic Tracker state machine
- QA: Phác thảo test scenarios 3 luồng; xác định edge cases (nung lỗi, slot full)
- **Output:** Feature Matrix hoàn chỉnh, Technical Feasibility document

### Tuần 3 — Wireframe bắt đầu + BPMN Luồng 1 & 2
- Designer ⭐: Wireframe Low-fi: Homepage, Shop, Workshop Listing, Booking Form, Cart
- Backend + QA: Vẽ BPMN Luồng 1 (E-Commerce) + BPMN Luồng 2 (Workshop Booking)
- **Output:** Figma Page 1 (wireframes flow 1 & 2), `01_bpmn_ecommerce.drawio`, `02_bpmn_workshop.drawio`

### Tuần 4 — Wireframe hoàn thiện + BPMN Tracker
- Designer ⭐: Wireframe thêm: Tracker Dashboard, Tracker Timeline, Hybrid Cart, Notification
- Backend + QA: Vẽ **BPMN Luồng 3 (Ceramic Tracker)** — luồng quan trọng nhất
- BA/PM: Review wireframe; đảm bảo logic nghiệp vụ đúng
- **Output:** Figma Page 1 hoàn chỉnh (≥12 screens), `03_bpmn_tracker.drawio`

### Tuần 5 — Hi-Fi Design
- Designer ⭐: Chuyển toàn bộ wireframe lên Hi-Fi (màu THỔ, typography, component library)
- Backend: Thiết kế ERD — chú trọng WorkshopSlot + Instructor + Equipment + CeramicTracker
- **Output:** Figma Page 2 (Hi-Fi, ≥12 screens), ERD draft

### Tuần 6 — Prototype + ERD + Use Case hoàn thiện
- Designer ⭐: Build Prototype 4 user journeys; annotations cho mỗi screen
- Backend + QA: Hoàn thiện ERD + vẽ Use Case Diagram (6 UC)
- BA/PM: Review và approve toàn bộ diagrams + Figma
- **Output:** Figma Page 4 (Prototype interactive), `04_erd.drawio`, `05_usecase.drawio`

### Tuần 7 — Implementation bắt đầu
- Backend: Setup DB (schema.sql), code API endpoints cốt lõi (slot availability, tracker stage, cart split)
- Frontend: Setup Next.js project, build components: TrackerTimeline, HybridCart, SlotCalendar
- Designer: Hand off design spec; tạo Design Handbook (tokens, spacing)
- **Output:** DB chạy được, 5+ API endpoints, 4+ components

### Tuần 8 — Integration & Testing
- Backend: Hoàn thiện ≥10 API endpoints; notification service
- Frontend: Integrate API; live demo localhost
- QA: Testing 3 flows; báo bugs; test edge cases (nung lỗi, slot full, hybrid cart)
- **Output:** Live demo, Test Report draft, Bug list

### Tuần 9 — Viết báo cáo
- Mỗi thành viên viết phần báo cáo tương ứng vai trò
- **Yêu cầu:** Mỗi section phải có ảnh Figma minh họa
- BA/PM: Tổng hợp, chỉnh sửa format
- **Output:** Báo cáo PDF draft (20–30 trang)

### Tuần 10 — Hoàn thiện & Nộp
- Review báo cáo lần cuối (toàn nhóm)
- Chuẩn bị slide thuyết trình
- QA: Final testing checklist
- Nộp bài
- **Output:** Báo cáo PDF final, Slide, tất cả file drawio + Figma link

---

## ⚠️ Milestones quan trọng

| Milestone | Cuối tuần | Mô tả | Consequence nếu trễ |
|-----------|-----------|-------|---------------------|
| 🏁 M1 | 2 | Feature Matrix + Moodboard xong | Wireframe sẽ không có định hướng |
| 🏁 M2 | 4 | Wireframe + 3 BPMN hoàn chỉnh | Hi-Fi không có base để bắt đầu |
| 🏁 M3 | 6 | Figma Hi-Fi + Prototype + ERD approved | Code không có spec để implement |
| 🏁 M4 | 8 | Live demo chạy được | Báo cáo thiếu phần Implementation |
| 🏁 M5 | 10 | Nộp hoàn chỉnh | — |

---

## 🔑 Phân bổ thời gian theo mảng

```
Figma (Wireframe + Hi-Fi + Prototype):  Tuần 3-6  [4 tuần — trọng tâm]
BPMN + ERD + Use Case:                  Tuần 3-6  [song song]
Implementation (BE + FE):               Tuần 7-8  [2 tuần — minh họa]
Testing + Báo cáo:                      Tuần 8-10 [3 tuần]
```

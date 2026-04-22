# 👥 PHÂN CHIA VAI TRÒ & TRÁCH NHIỆM

> **Lưu ý quan trọng:** Theo yêu cầu thầy, **Figma là trung tâm** của báo cáo — mọi phân tích đều phải có màn hình Figma minh họa tương ứng. Designer và BA/PM cần phối hợp chặt nhất.

---

## 1️⃣ BA / Product Manager (PM)
**Thành viên:** `[Điền tên]`

**Trách nhiệm chính:**
- Định hình pain point của 3 nhóm đối tượng: Khách hàng / THỔ (doanh nghiệp) / Hệ thống
- Xây dựng Feature Matrix cho 3 nghiệp vụ (E-commerce, Workshop, Tracker)
- Phân tích competitor (website gốm sứ trong/ngoài nước)
- Kết nối phân tích nghiệp vụ với màn hình Figma tương ứng trong báo cáo
- Điều phối toàn bộ nhóm & viết báo cáo

**Output chính:** Feature Matrix, Pain Point Analysis, Competitor Comparison, phần Introduction + Analysis + Conclusion trong báo cáo

---

## 2️⃣ Backend / System Architect
**Thành viên:** `[Điền tên]`

**Trách nhiệm chính:**
- Thiết kế ERD cho nghiệp vụ gốm sứ (đặc biệt: WorkshopSlot — Instructor — Equipment)
- Xác định API endpoints cho 3 luồng nghiệp vụ
- Thiết kế logic Ceramic Tracker (trạng thái & notification trigger)
- Thiết kế Hybrid Cart: tách bill Logistic vs QR Booking
- Code backend demo các tính năng cốt lõi

**Chú ý thiết kế ERD:**
- `WorkshopSlot` kết nối với `Users` (1-N), `Instructors` (trạng thái Available/Busy), `Equipments` (trạng thái Active/In-maintenance)
- Ràng buộc: nếu `Instructor = 0` HOẶC `Equipment = 0` → `Slot.status = Full`
- `CeramicTracker` có các trường: stage (Forming/Drying/Bisque/Glazing/GlazeFiring/Ready), updated_at, notified_at

**Output chính:** ERD, API spec, schema.sql, code backend

---

## 3️⃣ Frontend Developer
**Thành viên:** `[Điền tên]`

**Trách nhiệm chính:**
- Chuyển màn hình Figma thành code UI (pixel-perfect với design)
- Tích hợp API: product listing, workshop booking, ceramic tracker status
- Xây dựng Hybrid Cart (UI xử lý 2 loại item: vật lý + vé)
- Hiển thị timeline Tracker với animation trạng thái

**Output chính:** `/frontend` repo, live demo localhost, screenshots UI

---

## 4️⃣ Designer / Figma ⭐ *Vai trò trọng tâm theo yêu cầu thầy*
**Thành viên:** `[Điền tên]`

**Trách nhiệm chính — Figma là deliverable CHÍNH của nhóm:**

**Wireframe (Low-fi) — tuần 3-4:**
- Toàn bộ flow 3 nghiệp vụ (E-commerce, Workshop Booking, Ceramic Tracker)
- Bao gồm: Homepage, Shop, Product Detail, Workshop Listing, Booking Form, Cart (Hybrid), Tracker Dashboard, Notification screen

**Hi-Fi Design — tuần 5-6:**
- Áp dụng bảng màu THỔ: Terracotta `#E2725B` + Celadon `#708238`
- Design System: typography, spacing, component library (buttons, cards, badges trạng thái, timeline component)
- Tracker Timeline UI: hiển thị 6 giai đoạn với progress bar và notification history

**Prototype — tuần 6-7:**
- Journey 1: Mua sản phẩm gốm (Browse → Detail → Add to Cart → Checkout)
- Journey 2: Đặt Workshop (Listing → Chọn slot → Booking → Nhận QR)
- Journey 3: Theo dõi Tracker (QR check-in → Timeline → Nhận notification → Ready)
- Journey 4: Hybrid Cart (Gộp 2 loại → Thanh toán → 2 email confirmation)

**Công cụ hỗ trợ:**
- **impeccable.style** (Visual Mode): Moodboard màu sắc, Stakeholder Radial Map, phác thảo flow trước Figma
- **Figma:** Wireframe → Hi-Fi → Prototype chính thức

**Output chính:** Figma file (4 pages), link prototype share để thầy review trực tiếp

---

## 5️⃣ QA / Tester & Diagram
**Thành viên:** `[Điền tên]`

**Trách nhiệm chính:**
- Vẽ BPMN cho **3 luồng nghiệp vụ** (Draw.io):
  - Luồng 1: Mua sản phẩm gốm sứ
  - Luồng 2: Đặt lịch Workshop
  - Luồng 3: Ceramic Tracker (từ Check-in QR → Ready) ← *tính năng đắt giá*
- Vẽ Use Case Diagram
- Kiểm thử flows và edge cases
- Viết Test Report

**Output chính:** 3 file BPMN + Use Case (Draw.io), Test Report

---

## 📌 Ma trận phân công báo cáo

| Vai trò | Phần báo cáo phụ trách | Dùng Figma minh họa? |
|---------|----------------------|----------------------|
| BA/PM | Introduction, Analysis (pain point, feature matrix, competitor), Conclusion | ✅ Dùng Figma làm cơ sở phân tích |
| Backend | Technical Architecture, ERD giải thích, API docs | ✅ Figma screen → ERD mapping |
| Frontend | Frontend Implementation, screenshots UI | ✅ Figma → Code so sánh |
| Designer | UI/UX Design Process, Design Rationale, Prototype walkthrough | ✅ Figma là deliverable chính |
| QA | BPMN giải thích, Use Case, Testing & QA section | ✅ Figma flow → Test cases |

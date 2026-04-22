# 🗓️ 5 GIAI ĐOẠN THỰC HIỆN — 10 TUẦN

> **Nguyên tắc:** Figma được xây dựng song song từ sớm (tuần 3) và là trung tâm tham chiếu cho cả nhóm.  
> **Đề tài:** THỔ — Nền tảng gốm sứ (E-Commerce + Workshop Booking + Ceramic Tracker)

---

## GIAI ĐOẠN 1 — Phân tích Nghiệp vụ & Đối tượng *(Tuần 1-2)*

**Mục tiêu:** Hiểu sâu 3 nghiệp vụ và 3 nhóm đối tượng. Dùng impeccable.style để phác thảo Stakeholder Map dạng Radial (THỔ ở giữa, các bên liên quan xung quanh: Khách hàng, Nghệ nhân, Shipper, Admin).

| Vai trò | Công việc cụ thể | Output |
|---------|-----------------|--------|
| 🎯 BA/PM | Phân tích pain point 3 đối tượng; xây dựng Feature Matrix 3 nghiệp vụ; research competitor gốm sứ | 📄 Pain Point Analysis + Feature Matrix |
| 🎨 Designer | Moodboard thương hiệu THỔ trên impeccable.style; tham khảo UI gốm sứ nước ngoài; xác định vibe thiết kế | 🎨 Moodboard + UI references |
| 🏗️ Backend | Đánh giá kỹ thuật Hybrid Cart, Ceramic Tracker, Smart Slot; đề xuất tech stack | 💬 Technical feasibility |
| ⚙️ Frontend | Tham gia brainstorm, đề xuất stack (React + Next.js), tham khảo animation tracker | 💬 Stack recommendation |
| 🧪 QA | Phác thảo test scenarios cho 3 luồng nghiệp vụ; xác định edge cases đặc thù gốm (vd: nung lỗi) | 📝 Test scenarios sơ bộ |

**Câu hỏi cần trả lời cuối giai đoạn này:**
- Khách hàng mua gốm online gặp khó khăn gì? (không thấy được texture, không biết tình trạng sản phẩm...)
- Điều gì khiến khách chọn THỔ mà không phải mua ở chợ/tiệm gốm offline?
- 3 nhóm đối tượng (Khách hàng, THỔ, Hệ thống) cần gì khác nhau?

---

## GIAI ĐOẠN 2 — Wireframe & Sơ đồ Hệ thống *(Tuần 3-4)*

**Mục tiêu:** Designer bắt đầu Wireframe sớm. Backend + QA vẽ diagrams. Figma trở thành "ngôn ngữ chung" của nhóm.

| Vai trò | Công việc cụ thể | Output |
|---------|-----------------|--------|
| 🎨 Designer ⭐ | **Wireframe (Low-fi) toàn bộ 3 luồng nghiệp vụ:** Homepage, Shop, Product Detail, Workshop Listing, Booking Form, Tracker Dashboard, Hybrid Cart, Checkout, Confirmation | 📐 Figma Page 1: Wireframes (≥12 screens) |
| 🏗️ Backend + 🧪 QA | **BPMN Luồng 1:** Mua sản phẩm gốm (Browse → Order → Ship → Delivered) | 📊 `01_bpmn_ecommerce.drawio` |
| 🏗️ Backend + 🧪 QA | **BPMN Luồng 2:** Workshop Booking (Chọn slot → Kiểm tra Nghệ nhân + Bàn xoay → Xác nhận → Check-in QR) | 📊 `02_bpmn_workshop.drawio` |
| 🏗️ Backend + 🧪 QA | **BPMN Luồng 3 ⭐:** Ceramic Tracker (Check-in QR → Forming → Drying → Bisque → Glazing → Glaze Firing → Ready → Notification gửi mỗi bước) | 📊 `03_bpmn_tracker.drawio` |
| 🎯 BA/PM | Viết phần phân tích tính năng; review wireframe; cập nhật Feature Matrix | 📊 Feature Matrix hoàn chỉnh |

---

## GIAI ĐOẠN 3 — Hi-Fi Design, ERD & Use Case *(Tuần 5-6)*

**Mục tiêu:** Figma lên Hi-Fi. Backend hoàn thiện ERD. Đây là giai đoạn "xương sống" của báo cáo.

| Vai trò | Công việc cụ thể | Output |
|---------|-----------------|--------|
| 🎨 Designer ⭐ | **Hi-Fi Design:** Áp dụng màu Terracotta `#E2725B` + Celadon `#708238`; Component library; Tracker Timeline UI (6 stages + progress bar); Hybrid Cart UI | 📐 Figma Page 2: Hi-Fi Design (≥12 screens) |
| 🎨 Designer ⭐ | **Prototype:** Kết nối interactive flow cho 4 user journeys | 📐 Figma Page 4: Prototype |
| 🏗️ Backend | **ERD:** Thiết kế đầy đủ — chú ý `WorkshopSlot` ↔ `Instructors` ↔ `Equipments`; `CeramicTracker` stages; `Orders` tách thành `PhysicalOrder` + `WorkshopBooking` | 📊 `04_erd.drawio` |
| 🧪 QA | **Use Case Diagram:** Tối thiểu 6 UC với include/extend | 📊 `05_usecase.drawio` |
| 🎯 BA/PM | Review & approve toàn bộ diagrams + Figma Hi-Fi | ✅ Approval |

**Use Cases bắt buộc:**
- UC01: Browse & Purchase Ceramic Product
- UC02: Book Workshop Slot (kiểm tra Instructor + Equipment)
- UC03: Check-in Workshop (QR)
- UC04: Track Ceramic Progress (Ceramic Tracker)
- UC05: Checkout Hybrid Cart (split order)
- UC06: Admin quản lý trạng thái lò nung

---

## GIAI ĐOẠN 4 — Implementation Demo *(Tuần 7-8)*

**Mục tiêu:** Code minh họa các tính năng cốt lõi. Figma → Code mapping là phần quan trọng trong báo cáo.

| Vai trò | Công việc cụ thể | Output |
|---------|-----------------|--------|
| 🏗️ Backend | Setup DB; code API endpoints chính; logic Ceramic Tracker (cập nhật stage + trigger notification); Hybrid Cart split order | `/backend` repo: schema.sql, routes, .env.example, README |
| ⚙️ Frontend | Convert Figma → Components; build Tracker Timeline UI; Hybrid Cart component; Workshop Booking form | `/frontend` repo: components, pages, live demo |
| 🎨 Designer | Hand off design spec; QA design implementation; ghi chú Figma → Code mapping | Design Handbook: tokens, components specs |
| 🧪 QA | Testing 3 luồng nghiệp vụ; test edge cases: nung lỗi (Cracked → hoàn tiền), slot full, tracker notification trễ | Test Report |
| 🎯 BA/PM | Theo dõi tiến độ; chuẩn bị nội dung báo cáo phần Analysis & Design | Draft báo cáo |

**API endpoints cốt lõi:**
```
GET  /api/products              — Danh sách sản phẩm gốm
GET  /api/workshops             — Danh sách workshop slots
POST /api/workshops/book        — Đặt lịch (kiểm tra Instructor + Equipment)
POST /api/cart/checkout         — Thanh toán Hybrid Cart (split order)
GET  /api/tracker/:bookingId    — Lấy trạng thái Ceramic Tracker
PUT  /api/tracker/:id/stage     — Admin cập nhật stage → trigger notification
POST /api/auth/checkin-qr       — Check-in workshop bằng QR
```

**⚠️ Lưu ý logic Hybrid Cart:**
```
Input: Cart (Sản phẩm vật lý + Vé workshop)
         ↓ Thanh toán tổng
Output Backend:
   → Tạo đơn vận chuyển (Logistic) cho sản phẩm vật lý
   → Tạo mã QR + lịch hẹn cho Workshop
   → Gửi 2 email xác nhận khác nhau
```

---

## GIAI ĐOẠN 5 — Báo cáo & Bảo vệ *(Tuần 9-10)*

**Mục tiêu:** Hoàn thiện báo cáo. Mỗi phần phân tích phải có ảnh Figma minh họa tương ứng.

| Vai trò | Phần viết | Yêu cầu Figma |
|---------|-----------|---------------|
| 🎯 BA/PM | Introduction, Analysis (pain point, feature matrix, competitor), Conclusion | Mỗi tính năng phân tích → kèm 1 screen Figma tương ứng |
| 🏗️ Backend | Technical Architecture, ERD giải thích, API documentation | ERD + Figma screen → API mapping |
| ⚙️ Frontend | Frontend Implementation, component structure, screenshots | Figma frame vs. code screenshot — so sánh trực tiếp |
| 🎨 Designer | UI/UX Design Process, Design Rationale, Prototype video/gif | Figma walkthrough theo từng user journey |
| 🧪 QA | BPMN giải thích, Use Case, Testing & QA, Bug Report | Figma screen tương ứng từng test case |

**Format báo cáo:**
- PDF, A4, 12pt Arial
- Cover page + Table of Contents + Executive Summary + 6 sections + References + Appendix
- Độ dài: **20–30 trang**
- **⭐ Mọi section đều có ảnh Figma làm cơ sở phân tích**

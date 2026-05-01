# 📄 CẤU TRÚC CHI TIẾT BÁO CÁO CUỐI KỲ — DỰ ÁN THỔ

> **Format:** PDF | A4 | 12pt Arial  
> **Độ dài:** 20–30 trang  
> **Nguyên tắc:** Figma là cơ sở phân tích & tham khảo — mỗi luận điểm phải có screen Figma minh hoạ

---

## 📑 COVER PAGE
- Tên dự án: **THỔ — Nền tảng Gốm Sứ Trực Tuyến**
- Tên nhóm & danh sách thành viên (kèm vai trò)
- Ngày nộp | Giảng viên hướng dẫn

---

## 📑 TABLE OF CONTENTS
Auto-generated từ headings

---

## 📑 EXECUTIVE SUMMARY *(1 trang)*
- **Problem:** Thị trường gốm sứ thiếu nền tảng số kết nối mua hàng + trải nghiệm workshop
- **Solution:** THỔ — tích hợp E-commerce + Workshop Booking + Ceramic Tracker trong một hệ thống
- **Breakthrough:** Ceramic Tracker giải quyết "khoảng trống thông tin" 2-3 tuần khách chờ thành phẩm

---

## 📑 I. INTRODUCTION *(2–3 trang)* — 🎯 BA/PM

- **1.1 Bối cảnh thị trường:** Xu hướng handmade & DIY; gốm sứ trong thời đại số
- **1.2 Mục tiêu dự án:** 3 nghiệp vụ THỔ cần giải quyết
- **1.3 Phạm vi:** Những gì hệ thống làm được (và chưa làm được)
- **1.4 Đối tượng người dùng & Stakeholders:**
  - Khách hàng (mua online, đặt workshop)
  - THỔ - Doanh nghiệp (quản lý đơn hàng, lịch lò nung, nghệ nhân)
  - Hệ thống (quản lý slot, trigger notification)

*📐 Figma: Stakeholder diagram hoặc homepage mockup minh họa*

---

## 📑 II. ANALYSIS *(5–6 trang)* — 🎯 BA/PM

**2.1 Pain Point Analysis — 3 đối tượng**

| Đối tượng | Pain Point |
|-----------|-----------|
| Khách hàng | Không thấy được texture gốm qua ảnh 2D; không biết tiến độ thành phẩm; không biết workshop còn chỗ không |
| THỔ (Business) | Quản lý lịch nghệ nhân + bàn xoay thủ công; khó theo dõi trạng thái hàng trăm "cục đất sét" đang nung |
| Hệ thống | Hybrid Cart khó xử lý (vật lý + vé số hóa); notification cần trigger theo stage thực tế lò nung |

*📐 Figma: Pain point → màn hình giải quyết tương ứng*

**2.2 Feature Matrix — 3 nghiệp vụ**

| Feature | User Benefit | Business KPI | Technical Challenge |
|---------|-------------|--------------|---------------------|
| Ceramic Tracker | Theo dõi thành phẩm theo thời gian thực | Tăng retention, giảm support tickets | CeramicTracker state machine + push notification |
| Smart Slot Booking | Đặt lịch chắc chắn có chỗ | Tránh overbooking, tối ưu nghệ nhân | Check Instructor + Equipment đồng thời |
| Hybrid Cart | Mua sản phẩm + đặt workshop trong 1 lần | Tăng AOV (average order value) | Split order: logistics + QR booking |
| DIY Kit | Làm gốm tại nhà với hướng dẫn | Mở rộng thị trường ra ngoài TP lớn | Bundle product + video content |

*📐 Figma: Screenshot Feature Matrix từ Figma (bảng so sánh UI)*

**2.3 Competitor Analysis**

So sánh THỔ với: các website gốm sứ hiện tại, Etsy (handmade marketplace), Airbnb Experiences (workshop booking).  
Điểm THỔ làm tốt hơn: **Ceramic Tracker** — không đối thủ nào có tính năng theo dõi lộ trình sản phẩm cá nhân hóa.

*📐 Figma: Comparison table screen*

**2.4 Information Architecture (IA)**
```
THỔ Website
├── Cửa hàng (E-commerce)
│   ├── Lọc theo dòng men
│   ├── Lọc theo loại sản phẩm
│   └── DIY Kit
├── Workshop (Booking)
│   ├── Lọc theo địa điểm
│   ├── Lọc theo cấp độ (Beginner/Expert)
│   └── Lọc theo loại hình (Bàn xoay/Vuốt tay)
└── Ceramic Tracker (Personalized)
    ├── Mã vé / QR
    ├── Timeline tiến độ lò nung
    └── Nhật ký đất sét (ảnh quá trình)
```

*📐 Figma: IA diagram hoặc Navigation flow*

---

## 📑 III. DESIGN *(8–10 trang)* — 🏗️ Backend + 🎨 Designer

**3.1 System Architecture Overview**
- Tổng quan: Frontend (Next.js) ↔ Backend (Node.js/Express) ↔ Database (PostgreSQL)
- Notification service: trigger theo stage update từ Admin

**3.2 BPMN — Luồng 1: Mua Sản Phẩm Gốm**
- Swimlane: Khách hàng | Hệ thống | Kho/Vận chuyển
- Include: `01_bpmn_ecommerce.png`

**3.3 BPMN — Luồng 2: Đặt lịch Workshop**
- Swimlane: Khách hàng | Hệ thống | Nghệ nhân
- Logic: Kiểm tra Instructor (Available?) + Equipment (Active?) → nếu thiếu 1 trong 2 → Slot Full
- Include: `02_bpmn_workshop.png`

**3.4 BPMN — Luồng 3: Ceramic Tracker ⭐**
- Swimlane: Khách hàng | Hệ thống | Nghệ nhân (Admin lò)
- Flow: Check-in QR → Forming → Drying → Bisque Firing → Glazing → Glaze Firing → Ready
- Exception: Nung lỗi (Cracked) → Quay lại làm đền hoặc hoàn tiền
- Tại mỗi bước: System gửi Notification cho khách
- Include: `03_bpmn_tracker.png`

*📐 Đây là luồng quan trọng nhất — giải thích chi tiết các touchpoints gửi notification*

**3.5 Use Case Diagram**
- Danh sách actors: Customer, Admin (THỔ), Instructor, System
- UC01–UC06 (xem README_CHECKLIST.md)
- Include: `05_usecase.png`

**3.6 Database Design (ERD)**

Các entities chính:
- `Users` ←→ `Addresses` (1-N)
- `Users` ←→ `Orders` (1-N)
- `Orders` → tách thành `PhysicalOrderItem` + `WorkshopBooking`
- `WorkshopSlot` ←→ `Instructors` (M-N, với trạng thái Available/Busy)
- `WorkshopSlot` ←→ `Equipments` (M-N, với trạng thái Active/In-maintenance)
- `WorkshopBooking` ←→ `CeramicTracker` (1-1)
- `CeramicTracker` ←→ `Notifications` (1-N)
- `Products` ←→ `ProductVariants` (1-N: size, màu men)

*⭐ Ràng buộc quan trọng: `if (instructor_count = 0 OR equipment_count = 0) → slot.status = 'Full'`*

Include: `04_erd.png`

**3.7 UI/UX Design (Figma) ⭐ — Trọng tâm báo cáo**

*Designer trình bày từng nhóm screen:*

- **Homepage & Navigation:** Aesthetic thương hiệu THỔ, màu Terracotta + Celadon
- **E-Commerce Flow:** Product listing (lọc men), Product Detail (texture close-up, DIY Kit badge), Cart
- **Workshop Booking Flow:** Slot calendar, Kiểm tra availability indicator, Booking confirmation + QR
- **Ceramic Tracker Dashboard ⭐:** Timeline 6 giai đoạn, progress bar, ảnh tại mỗi bước, notification history
- **Hybrid Cart & Checkout:** 2 loại item hiển thị riêng biệt, split confirmation email preview
- **Responsive Mobile:** Tracker đặc biệt phải đẹp trên mobile (khách check điện thoại)

**3.8 Design Rationale**
- Tại sao chọn màu Terracotta + Celadon? → Cảm xúc thủ công, tự nhiên
- Tracker UI tại sao dùng timeline dọc? → Phù hợp mobile, dễ theo dõi theo thời gian
- Hybrid Cart: tại sao phân tách 2 loại item rõ ràng? → Tránh nhầm lẫn, set đúng kỳ vọng giao hàng

---

## 📑 IV. IMPLEMENTATION *(6–8 trang)* — ⚙️ Frontend + 🏗️ Backend

**4.1 Technology Stack**
- Frontend: Next.js, Tailwind CSS, React Query
- Backend: Node.js + Express
- Database: PostgreSQL
- Notifications: WebSocket hoặc Polling

**4.2 Backend — API & Logic cốt lõi**
- Schema SQL (WorkshopSlot, CeramicTracker, Notifications)
- Logic tách Hybrid Cart thành 2 đơn
- State machine Ceramic Tracker + trigger notification

**4.3 Frontend — Figma → Code**
- Bảng so sánh: Figma frame ↔ Screenshot code thực tế
- Component Tracker Timeline
- Hybrid Cart UI

**4.4 Key Challenges & Solutions**

| Thách thức | Giải pháp |
|-----------|-----------|
| Slot overbooking | Check Instructor + Equipment đồng thời trong 1 transaction |
| Hybrid Cart split bill | Tách order thành 2 record tại backend sau khi thanh toán |
| Tracker notification delay | Admin cập nhật stage → webhook → push notification |
| Nung lỗi (exception) | State machine có branch "Cracked" → hoàn tiền / làm lại |

---

## 📑 V. TESTING & QA *(2–3 trang)* — 🧪 QA

**5.1 Test Strategy:** Unit, Integration, Flow testing

**5.2 Test Cases đặc thù THỔ:**
- Đặt slot khi Instructor đang bận → phải báo Full
- Ceramic Tracker: cập nhật sai thứ tự stage → không cho phép
- Hybrid Cart: thanh toán → kiểm tra 2 email confirmation gửi đúng
- Nung lỗi → flow hoàn tiền hoạt động

**5.3 Bug Report:** Critical / Major / Minor, trạng thái đã fix

**5.4 User Testing Feedback** *(nếu có)*

---

## 📑 VI. CONCLUSION *(1–2 trang)* — 🎯 BA/PM

- **6.1 Achievements:** 3 nghiệp vụ hoàn chỉnh, Ceramic Tracker là điểm đột phá
- **6.2 Breakthrough Points:** Không đối thủ nào có Tracker + Hybrid Cart cho gốm sứ
- **6.3 Limitations:** Chưa có real-time kiln monitoring (camera trong lò), chưa có Community feature
- **6.4 Future Work:**
  - Phase 2: "Kho ảnh quá trình nung" — Community sharing
  - Phase 3: AR xem sản phẩm tại nhà trước khi mua
  - Phase 4: IoT tích hợp cảm biến lò nung → auto-update stage
- **6.5 Lessons Learned:** Bài học thiết kế nghiệp vụ phức tạp (Hybrid Cart, State Machine)

---

## 📑 REFERENCES
Tài liệu, papers, tools sử dụng (APA / IEEE)

---

## 📑 APPENDICES

| Appendix | Nội dung |
|----------|----------|
| A | Code Listings (schema.sql, Tracker API, Cart split logic) |
| B | API Documentation (full spec) |
| C | Full ERD (SQL schema) |
| D | Screenshots toàn bộ flow (E-commerce, Workshop, Tracker) |
| E | BPMN full (3 luồng) |
| F | Figma link (share link view + prototype) |
| G | Test Report (full matrix) |

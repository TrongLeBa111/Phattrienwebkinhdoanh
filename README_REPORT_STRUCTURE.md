# 📄 CẤU TRÚC CHI TIẾT BÁO CÁO CUỐI KỲ

> **Format:** PDF | A4 | Double-spaced | Font Arial 12pt  
> **Độ dài:** 20–30 trang  
> **Ngôn ngữ:** Tiếng Việt (hoặc Anh, tùy yêu cầu thầy/cô)

---

## 📑 COVER PAGE

- Tên dự án
- Tên nhóm & danh sách thành viên (kèm vai trò)
- Ngày nộp
- Giảng viên hướng dẫn

---

## 📑 TABLE OF CONTENTS

Auto-generated từ headings (dùng Word styles hoặc LaTeX)

---

## 📑 EXECUTIVE SUMMARY *(1 trang)*

Tóm tắt ngắn gọn:
- **Vấn đề** (Problem): Pain point được xác định là gì?
- **Giải pháp** (Solution): Hệ thống giải quyết như thế nào?
- **Kết quả** (Result): Đạt được gì sau dự án?

---

## 📑 I. INTRODUCTION *(2–3 trang)*

- **1.1 Background:** Xu hướng E-Commerce hiện nay, lý do chọn lĩnh vực
- **1.2 Objective:** Mục tiêu dự án (đặt ra từ đầu)
- **1.3 Scope:** Phạm vi công việc (những gì làm được & không làm)

*🎯 BA/PM chủ trì*

---

## 📑 II. ANALYSIS *(5–6 trang)*

*🎯 BA/PM chủ trì*

- **2.1 Pain Point Analysis**
  - Vấn đề của User (người mua hàng)
  - Vấn đề của Business (admin, quản lý)
  - Vấn đề của System (kỹ thuật, hiệu suất)

- **2.2 Domain Selection**
  - Tại sao chọn Thời trang / Nội thất?
  - So sánh với các lĩnh vực khác

- **2.3 Feature Matrix** *(dạng bảng)*

  | Feature | User Benefit | Business KPI | Technical Challenge |
  |---------|-------------|--------------|---------------------|
  | Visual Search | Tìm sản phẩm bằng ảnh | Tăng conversion rate | Image recognition API |
  | Quick Edit Cart | Đổi size ngay, không cần xóa | Giảm cart abandonment | State management |
  | Address 1-N | Lưu nhiều địa chỉ giao hàng | Tăng retention | DB relationship design |

- **2.4 Breakthrough Features**
  - Visual Search (Tìm kiếm bằng ảnh)
  - Smart Cart (Quick Edit)
  - Smart Address Management

- **2.5 Competitor Comparison**
  - So sánh với Shopee, Tiki, Amazon
  - Những gì hệ thống của nhóm làm tốt hơn

---

## 📑 III. DESIGN *(8–10 trang)*

*🏗️ Backend + 🎨 Designer chủ trì*

- **3.1 System Architecture Overview** *(diagram)*
  - Tổng quan kiến trúc: Frontend ↔ Backend ↔ Database

- **3.2 Business Process (BPMN Diagram)**
  - Giải thích các swimlane, activities, gateways
  - Include file `01_bpmn.png` (export 300 DPI)

- **3.3 Use Case Diagram**
  - Danh sách tất cả actors & use cases
  - Giải thích relationships (`<<include>>`, `<<extend>>`)
  - Include file `02_usecase.png`

- **3.4 Database Design (ERD)**
  - ⭐ User — Address: **1-N**
  - Product — ProductVariant: **1-N**
  - Order — OrderItem: **1-N**
  - Giải thích normalization choices
  - Include file `03_erd.png`

- **3.5 UI/UX Design (Figma)**
  - Wireframes (Low-fi): Homepage, Search, Cart, Checkout...
  - High-fidelity Mockups (screenshot từ Figma)
  - Key screens: Search → Results → Detail → Cart → Address → Checkout → Confirmation
  - Responsive variants (Desktop & Mobile)

- **3.6 Design Rationale**
  - Tại sao design như vậy?
  - UX reasoning — dựa trên hành vi người dùng

---

## 📑 IV. IMPLEMENTATION *(8–10 trang)*

*⚙️ Frontend + 🏗️ Backend chủ trì*

- **4.1 Technology Stack**
  - Frontend: React / Next.js, Tailwind CSS, Redux
  - Backend: Node.js + Express (hoặc Python + FastAPI)
  - Database: PostgreSQL
  - Deployment: Docker, AWS / Heroku

- **4.2 Backend Implementation**
  - Database schema (SQL code snippet)
  - API Endpoints (REST table)
  - Image recognition integration
  - Error handling & validation

- **4.3 Frontend Implementation**
  - Component structure (folder tree)
  - State management approach
  - Key component code snippets
  - Screenshots of UI

- **4.4 API Documentation**
  - Swagger / OpenAPI spec (hoặc bảng request/response)
  - Ít nhất 10 endpoints

- **4.5 Figma → Code Mapping**
  - Giải thích cách convert design thành component
  - Design tokens (colors, spacing, typography)

- **4.6 Key Challenges & Solutions**

  | Thách thức | Giải pháp |
  |-----------|-----------|
  | Image processing latency | Async queue (job processing) |
  | Address validation | Map API integration |
  | Inventory conflict | Database locking / transaction |

---

## 📑 V. TESTING & QUALITY ASSURANCE *(2–3 trang)*

*🧪 QA chủ trì*

- **5.1 Test Strategy**
  - Unit testing
  - Integration testing
  - E2E testing (Cypress / Playwright)

- **5.2 Test Results**
  - Test cases passed: X / Y
  - Code coverage: X%
  - Performance metrics (response time, load time)

- **5.3 Bug Report**
  - Danh sách bugs (Critical / Major / Minor)
  - Bugs fixed vs. deferred

- **5.4 User Testing Feedback** *(nếu có)*
  - Feedback từ 3–5 test users
  - Các iterations thực hiện dựa trên feedback

---

## 📑 VI. CONCLUSION *(1–2 trang)*

*🎯 BA/PM chủ trì*

- **6.1 Achievements:** Đạt được những gì so với mục tiêu ban đầu?
- **6.2 Breakthrough Points:** Những điểm nổi bật so với đối thủ cạnh tranh
- **6.3 Limitations:** Hạn chế hiện tại của hệ thống
- **6.4 Future Work:**
  - Phase 2: Real-time recommendation
  - Phase 3: AR try-on (thử đồ ảo)
- **6.5 Lessons Learned:** Bài học rút ra từ quá trình thực hiện

---

## 📑 REFERENCES

Danh sách papers, documentation, tools đã sử dụng  
*(Định dạng APA hoặc IEEE)*

---

## 📑 APPENDICES

| Appendix | Nội dung |
|----------|----------|
| A | Code Listings (Backend + Frontend — các file quan trọng) |
| B | API Documentation (full spec) |
| C | Database Schema (SQL) |
| D | Screenshots (Full flow walkthrough — từng bước) |
| E | Test Report (Full test matrix) |
| F | Figma Links & Design Files |

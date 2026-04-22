# 🗓️ 5 GIAI ĐOẠN THỰC HIỆN & CÔNG VIỆC CỤ THỂ

---

## GIAI ĐOẠN 1 — Phân tích & Chọn Lĩnh vực *(Tuần 1-2)*

| Vai trò | Công việc cụ thể | Output / Deliverable |
|---------|-----------------|----------------------|
| 🎯 BA/PM | Khảo sát bài toán thực tế; xác định pain point; đề xuất 3 lĩnh vực; chọn lĩnh vực phù hợp; định hình scope | 📄 Document "Phân tích lĩnh vực" (pain point, tiêu chí lựa chọn, scope & constraints) |
| 🏗️ Backend | Tham gia brainstorm; đánh giá khả thi về kỹ thuật; gợi ý công nghệ | 💬 Technical feasibility input |
| 🎨 Designer | Tham gia brainstorm; gợi ý tính năng từ góc UX; tìm reference (competitor) | 🔗 UI/UX patterns từ competitor |
| ⚙️ Frontend | Tham gia brainstorm; gợi ý tech stack | 💬 Stack recommendation |
| 🧪 QA | Tham gia brainstorm; gợi ý test scenarios sơ bộ | 📝 Danh sách test scenarios ban đầu |

---

## GIAI ĐOẠN 2 — Phân tích Tính năng - 3 Vai trò *(Tuần 3-4)*

> **Mục tiêu:** Tạo bảng phân tích theo 3 góc nhìn: Người mua (User) | Doanh nghiệp (Admin) | Hệ thống (Technical)

| Vai trò | Công việc cụ thể | Output / Deliverable |
|---------|-----------------|----------------------|
| 🎯 BA/PM | Dẫn dắt phân tích; tạo Feature Matrix (3 vai trò); ưu tiên tính năng theo impact; xác định "breakthrough features" | 📊 Document "Feature Analysis Matrix" |
| 👤 Góc USER (BA + Designer) | Visual Search, Quick Edit giỏ hàng, Reorder recommendation, Smart address suggestion | ✅ Features list (ranked by frequency) |
| 💼 Góc BUSINESS (BA) | Smart promo dashboard, Inventory analytics, Customer behavior tracking, Revenue optimization | 📈 KPI & metrics to track |
| ⚙️ Góc TECHNICAL (Backend + FE) | Address 1-N, Product_Variant table, Image recognition API, Caching strategy | 🏗️ Technical components list |
| 🧪 QA | Lập danh sách test case từ features; xác định edge cases | 📋 Comprehensive test scenarios |

---

## GIAI ĐOẠN 3 — Thiết kế & Diagrams *(Tuần 5-7)*

> **Mục tiêu:** Tạo artifacts: BPMN, Use Case, ERD/Class. Chuẩn bị Figma. Đây là phần "xương sống" của báo cáo.

### Backend + QA — Vẽ Diagrams (Draw.io)

**BPMN** — Luồng đơn hàng từ "quẹt ảnh" → "nhận hàng":
- Swimlane: Customer | System | Warehouse
- Flow: Search → Add to Cart → Checkout → Delivery
- Tối thiểu **10 nodes**. Có xử lý exception (lỗi, hủy đơn)

**Use Case Diagram:**
- UC01: Visual Search
- UC02: Update Cart (MODIFY, không chỉ delete)
- UC03: Manage Address
- UC04: Apply Promo
- Có `<<include>>` và `<<extend>>`

**ERD / Class Diagram:**
- ⭐ User ←→ Address **(1-N)**
- Product ←→ ProductVariant **(1-N)**
- Order ← OrderItem
- Tối thiểu **8 entities**, attributes đầy đủ (ít nhất 3 per entity)

### Designer — Wireframe & Hi-Fi (Figma)

**Low-fi Wireframe:**
- Homepage với search icon camera
- Search results (grid + filters)
- Product detail + size selector
- Cart cải tiến (Quick Edit button)
- Checkout flow
- Address selector (dropdown từ danh sách 1-N)

**High-fidelity Design:**
- Color scheme, typography, component library
- Responsive (mobile-first)
- Micro-interactions spec & loading states

**Cấu trúc Figma file:**
```
Page 1: Wireframes
Page 2: Hi-Fi Design
Page 3: Components
Page 4: Prototype (interactive flow)
```

| Vai trò | Output |
|---------|--------|
| 🏗️ Backend + 🧪 QA | 3 file Draw.io: `01_bpmn.drawio`, `02_usecase.drawio`, `03_erd.drawio` |
| 🎨 Designer | Figma file hoàn chỉnh (4 pages) |
| ⚙️ Frontend | Component list (SearchBar, ProductCard, ImprovedCart…) |
| 🎯 BA/PM | Approval stamp trên tất cả diagrams |

---

## GIAI ĐOẠN 4 — Implementation & Integration *(Tuần 8-10)*

| Vai trò | Công việc cụ thể | Output / Deliverable |
|---------|-----------------|----------------------|
| 🏗️ Backend | Setup DB (PostgreSQL/MySQL); tạo API endpoints RESTful; implement image recognition; handle caching (Redis); error handling | `/backend` repo: schema.sql, routes, controllers, .env.example, README.md, Swagger/Postman docs |
| ⚙️ Frontend | Setup React/Next.js; convert Figma → Components; integrate API; state management (Redux/Context); loading/error states | `/frontend` repo: components, pages, hooks, api/client.js; Live demo localhost:3000 |
| 🎨 Designer | Hand off design spec; QA design implementation; tạo Design Handbook | Design Handbook: color palette, typography, component specs, spacing, interaction guidelines |
| 🧪 QA | Test toàn bộ flows; bug reporting; compatibility & performance testing; collect screenshots | Test Report: test cases passed/failed, screenshots, bug list, performance metrics |
| 🎯 BA/PM | Review code structure; coordinate integration; risk mitigation; timeline tracking | Status dashboard (Gantt chart) |

**⚠️ Lưu ý kỹ thuật khi code:**
- **Backend:** Validate input + XSS/CSRF protection. Handle image processing latency (queue jobs)
- **Frontend:** Implement error boundaries. Show loading skeletons. Lazy load images. Mobile-first
- **Database:** Index frequently queried fields (user_id, product_id). Dùng transactions cho order creation
- **Git:** Meaningful commit messages. Tạo branch per feature. PR review trước khi merge

---

## GIAI ĐOẠN 5 — Báo cáo & Bảo vệ *(Tuần 11-12)*

| Vai trò | Phần viết | Output |
|---------|-----------|--------|
| 🎯 BA/PM | Introduction, Analysis, Conclusion + điều phối toàn bộ báo cáo | 📄 Final Report PDF (20–30 trang) |
| 🏗️ Backend | Technical Architecture, Database design, API documentation | Architecture diagram, API specs (Swagger), code comments |
| ⚙️ Frontend | Frontend Implementation, component structure, screenshots UI | Screenshots major screens + responsive variants |
| 🎨 Designer | UI/UX Design Process, design rationale, Figma prototypes | Wireframes, Hi-fi mockups, prototype video, design rationale |
| 🧪 QA | Testing & QA section, bug reports, performance results | Test matrix, bug reports (fixed), performance stats |

**Format báo cáo cuối:**
- PDF, A4, double-spaced, 13pt Time new Roman
- Cover page + Table of Contents + Executive Summary + 5 sections + References + Appendix
- Độ dài: **30-50 trang**

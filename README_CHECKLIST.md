# ✅ CHECKLIST KỸ THUẬT TỪNG ARTIFACT

---

## 🖊️ Khi Vẽ Diagram (Draw.io)

### BPMN (`01_bpmn.drawio`)
- [ ] Có **3 swimlane**: Customer | System | Admin (Warehouse)
- [ ] Các event, activity, gateway được vẽ rõ ràng
- [ ] Tối thiểu **10 nodes**
- [ ] Vẽ "happy path" + xử lý exception (lỗi, hủy đơn)
- [ ] Ghi chú mục đích từng activity

### Use Case (`02_usecase.drawio`)
- [ ] Tối thiểu **5 use cases**
- [ ] Có `<<include>>` và `<<extend>>` để chỉ dependency
  - VD: "Update Cart" bao gồm `<<include>>` "Validate Inventory"
- [ ] Actors rõ ràng (Customer, Admin, System...)
- [ ] Ghi chú mục đích từng use case

**Use cases bắt buộc:**
- UC01: Visual Search (Tìm kiếm bằng ảnh)
- UC02: Update Cart — MODIFY không chỉ delete
- UC03: Manage Address (1-N)
- UC04: Apply Promo Code
- UC05: Place Order (checkout flow)

### ERD (`03_erd.drawio`)
- [ ] Tối thiểu **8 entities**
- [ ] Mỗi entity có ít nhất **3 attributes**
- [ ] Ghi rõ Primary Key (PK) và Foreign Key (FK)
- [ ] Cardinality đầy đủ: 1-1, 1-N, N-N
- [ ] ⭐ **User — Address: 1-N** (KHÔNG phải 1-1)
- [ ] ⭐ **Product — ProductVariant: 1-N**
- [ ] Order — OrderItem: 1-N

**Export bắt buộc:** PNG + PDF (300 DPI)  
**File naming:** `01_bpmn`, `02_usecase`, `03_erd`

---

## 🎨 Khi Thiết Kế Figma

### Cấu trúc file Figma
```
Page 1: [Wireframes]
Page 2: [Hi-Fi Design]
Page 3: [Components]
Page 4: [Prototype]
```

### Naming convention cho frames
```
[01] Homepage
[02] Search Results
[03] Product Detail
[04] Cart (Improved)
[05] Address Selection
[06] Checkout
[07] Order Confirmation
```

### Checklist thiết kế
- [ ] Wireframe Desktop + Mobile layout
- [ ] Hi-Fi: Color scheme, typography nhất quán
- [ ] Component library (button, card, input, modal...)
- [ ] **Prototype:** Ít nhất **3 interactive user journeys**
  - Journey 1: Search bằng ảnh → Xem kết quả → Xem detail
  - Journey 2: Thêm vào giỏ → Quick Edit size → Checkout
  - Journey 3: Chọn / thêm địa chỉ giao hàng
- [ ] Annotations tại mỗi screen: interaction, animation, error states
- [ ] Responsive: Đã test trên phone + tablet

---

## 🏗️ Khi Code Backend

### Folder structure
```
backend/
├── controllers/    # Business logic
├── routes/         # API endpoints
├── models/         # DB models
├── middlewares/    # Auth, validation
├── utils/          # Helpers
├── db/
│   └── schema.sql  # Database schema
├── .env.example
└── README.md       # Setup instructions
```

### Checklist backend
- [ ] Database migration files (có versioning)
- [ ] Seed data để testing
- [ ] **Ít nhất 10 API endpoints**, ví dụ:
  - `POST /api/auth/login`
  - `GET /api/products`
  - `POST /api/search/image`
  - `GET /api/user/addresses`
  - `POST /api/user/addresses`
  - `PUT /api/user/addresses/:id`
  - `POST /api/orders`
  - `DELETE /api/cart/item/:id`
  - `PUT /api/cart/item/:id` ← Quick Edit
  - `GET /api/orders/:id`
- [ ] Input validation + error messages rõ ràng
- [ ] XSS / CSRF protection
- [ ] Xử lý image processing latency (async queue)
- [ ] Unit test cho ít nhất **3 API endpoints**
- [ ] `.env.example` có đầy đủ keys
- [ ] API Swagger spec (hoặc Postman collection)

---

## ⚙️ Khi Code Frontend

### Folder structure
```
frontend/
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/          # Page-level components
│   ├── hooks/          # Custom React hooks
│   ├── store/          # Redux / Context state
│   └── api/
│       └── client.js   # Axios instance
├── .env.example
└── README.md
```

### Checklist frontend
- [ ] Ít nhất **8 reusable components:**
  - Button, Card, Input, Modal, Select
  - SearchBar (có icon camera cho Visual Search)
  - ProductCard
  - ImprovedCart (với Quick Edit button)
- [ ] Pages: Home | Search | ProductDetail | Cart | Checkout | Profile
- [ ] State management: Redux hoặc Context API
  - Global state: cart, user, filters
- [ ] Axios instance với interceptors (auth, error handling)
- [ ] Loading states: Skeleton screens, spinners
- [ ] Error handling: Try-catch, error boundaries
- [ ] Responsive: Mobile-first, tested trên phone + tablet
- [ ] Lazy load images

---

## 📂 Checklist Nộp Bài Cuối Kỳ

- [ ] `01_bpmn.png` + `01_bpmn.drawio`
- [ ] `02_usecase.png` + `02_usecase.drawio`
- [ ] `03_erd.png` + `03_erd.drawio`
- [ ] Link Figma file (view + prototype)
- [ ] `/backend` GitHub repo (với README setup)
- [ ] `/frontend` GitHub repo (với README setup)
- [ ] Báo cáo cuối: PDF (20–30 trang)
- [ ] Slide thuyết trình (nếu có bảo vệ)

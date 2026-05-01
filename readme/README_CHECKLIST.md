# ✅ CHECKLIST KỸ THUẬT TỪNG ARTIFACT — DỰ ÁN THỔ

---

## 🖊️ Khi Vẽ BPMN (Draw.io) — 3 Luồng

### Luồng 1: Mua Sản Phẩm Gốm (`01_bpmn_ecommerce.drawio`)
- [ ] Swimlane: **Khách hàng | Hệ thống | Kho/Vận chuyển**
- [ ] Flow: Browse → Lọc sản phẩm → Detail → Add to Cart → Checkout → Thanh toán → Xác nhận → Giao hàng → Nhận hàng
- [ ] Exception: Sản phẩm hết hàng → thông báo, gợi ý thay thế
- [ ] Tối thiểu **10 nodes**

### Luồng 2: Workshop Booking (`02_bpmn_workshop.drawio`)
- [ ] Swimlane: **Khách hàng | Hệ thống | Nghệ nhân**
- [ ] Flow: Xem workshop → Chọn slot → ⚠️ Kiểm tra Instructor (Available?) → Kiểm tra Equipment (Active?) → Nếu OK: Booking → Thanh toán → Nhận QR → Check-in → Workshop
- [ ] Exception: Instructor bận HOẶC Equipment hỏng → Slot Full → Gợi ý slot khác
- [ ] Tối thiểu **12 nodes** (phức tạp hơn luồng 1)

### Luồng 3: Ceramic Tracker ⭐ (`03_bpmn_tracker.drawio`)
- [ ] Swimlane: **Khách hàng | Hệ thống | Nghệ nhân (Admin lò)**
- [ ] Flow chính:
  ```
  Check-in QR → Tạo hình (Forming) → 🔔 → Phơi khô (Drying) → 🔔 →
  Nung sơ (Bisque Firing) → 🔔 → Tráng men (Glazing) → 🔔 →
  Nung hoàn thiện (Glaze Firing) → 🔔 → Sẵn sàng giao hàng (Ready) → 🎉 Notification
  ```
- [ ] Exception: **Nung lỗi (Cracked)** → Quay lại làm đền HOẶC Hoàn tiền
- [ ] Ghi rõ từng điểm 🔔 Notification gửi đến khách
- [ ] Tối thiểu **15 nodes** — đây là luồng "đắt giá" nhất

**Export:** PNG + PDF (300 DPI) cho cả 3 file  
**File naming:** `01_bpmn_ecommerce`, `02_bpmn_workshop`, `03_bpmn_tracker`

---

## 📐 Khi Vẽ Use Case (`05_usecase.drawio`)
- [ ] Tối thiểu **6 use cases**
- [ ] Actors: Customer, Admin (THỔ), Instructor, System
- [ ] Có `<<include>>` và `<<extend>>`

**Use Cases bắt buộc:**
- UC01: Browse & Purchase Ceramic Product
- UC02: Book Workshop Slot  
  - `<<include>>` UC: Check Instructor Availability  
  - `<<include>>` UC: Check Equipment Availability
- UC03: Check-in Workshop (QR)
- UC04: Track Ceramic Progress ⭐
  - `<<extend>>` UC: Receive Notification (triggered khi stage thay đổi)
- UC05: Checkout Hybrid Cart
  - `<<include>>` UC: Split Order (Physical + Workshop)
- UC06: Admin cập nhật Tracker Stage

---

## 🗄️ Khi Vẽ ERD (`04_erd.drawio`)
- [ ] Tối thiểu **10 entities**
- [ ] Mỗi entity có ít nhất **3 attributes** (kèm data type)
- [ ] Ghi rõ PK, FK, cardinality

**Entities bắt buộc và quan hệ:**

```
Users (user_id, name, email, phone, created_at)
  |--1-N--> Addresses (address_id, user_id, label, full_address, is_default)
  |--1-N--> Orders (order_id, user_id, total, status, created_at)

Orders
  |--1-N--> PhysicalOrderItems (item_id, order_id, product_id, qty, price)
  |--1-N--> WorkshopBookings (booking_id, order_id, slot_id, qr_code, status)

Products (product_id, name, description, glaze_type, category, price)
  |--1-N--> ProductVariants (variant_id, product_id, size, color, stock)

WorkshopSlots (slot_id, date, time, capacity, status: Available/Full)
  |--M-N--> Instructors (instructor_id, name, specialty, status: Available/Busy)
  |--M-N--> Equipments (equipment_id, name, type: BanXoay/VuotTay, status: Active/Maintenance)

WorkshopBookings
  |--1-1--> CeramicTrackers (tracker_id, booking_id, stage, stage_updated_at, image_url)

CeramicTrackers
  |--1-N--> Notifications (notif_id, tracker_id, message, sent_at, channel: email/push)
```

⭐ **Ràng buộc nghiệp vụ cần ghi trong ERD:**
- `if (instructor_available = 0 OR equipment_active = 0) → slot.status = 'Full'`
- `CeramicTracker.stage` chỉ được tăng tiến (không được đi ngược), trừ exception Cracked

---

## 🎨 Khi Thiết Kế Figma

### Cấu trúc file Figma THỔ
```
Page 1: [Wireframes]       — Low-fi toàn bộ flow
Page 2: [Hi-Fi Design]     — High quality với màu THỔ
Page 3: [Components]       — Design System
Page 4: [Prototype]        — Interactive journeys
```

### Bảng màu bắt buộc
| Token | Hex | Dùng cho |
|-------|-----|----------|
| `color-primary` | `#E2725B` | Buttons, headlines, CTAs |
| `color-secondary` | `#708238` | Badges, accents, success states |
| `color-bg` | `#FAF7F2` | Background (cream ấm) |
| `color-text` | `#2C2C2C` | Body text |

### Screens bắt buộc (≥14 screens)
```
[01] Homepage
[02] Shop — Product Listing (lọc men/loại)
[03] Product Detail (texture, DIY Kit badge)
[04] Workshop Listing (lọc địa điểm, cấp độ)
[05] Workshop Detail + Slot Calendar
[06] Booking Confirmation + QR Preview
[07] Hybrid Cart (2 loại item phân biệt rõ)
[08] Checkout + Split Bill Preview
[09] Order Confirmation (2 email preview)
[10] Ceramic Tracker Dashboard ⭐
[11] Tracker Detail — Timeline 6 stages
[12] Notification History
[13] Profile / My Orders + My Bookings
[14] Mobile variant (Tracker screen tối thiểu)
```

### Prototype — 4 user journeys bắt buộc
- [ ] **Journey 1:** Browse Shop → Product Detail → Add to Cart → Checkout
- [ ] **Journey 2:** Workshop Listing → Chọn slot → Booking → Nhận QR
- [ ] **Journey 3 ⭐:** Tracker — Check-in QR → Xem timeline → Nhận notification → Ready
- [ ] **Journey 4:** Hybrid Cart (cả 2 loại) → Checkout → 2 confirmation

---

## 🏗️ Khi Code Backend

### Folder structure
```
backend/
├── controllers/
│   ├── productController.js
│   ├── workshopController.js
│   ├── trackerController.js
│   └── cartController.js
├── routes/
├── models/
├── services/
│   └── notificationService.js  ← quan trọng
├── db/
│   └── schema.sql
├── .env.example
└── README.md
```

### API endpoints bắt buộc (≥10)
```
GET    /api/products
GET    /api/workshops
GET    /api/workshops/:slotId/availability   ← kiểm tra Instructor + Equipment
POST   /api/workshops/book
POST   /api/cart/checkout                   ← split order logic
GET    /api/tracker/:bookingId
PUT    /api/tracker/:trackerId/stage        ← Admin cập nhật + trigger notification
POST   /api/auth/checkin-qr
GET    /api/user/orders
GET    /api/user/bookings
```

---

## ⚙️ Khi Code Frontend

### Components bắt buộc (≥8)
- `TrackerTimeline` — 6 stages với progress bar + notification badges
- `HybridCart` — phân tách Physical Item vs Workshop Ticket
- `SlotCalendar` — hiển thị available/full slots
- `ProductCard` — có badge DIY Kit
- `BookingQR` — hiển thị mã QR
- `NotificationBadge`
- `SearchBar` (lọc men, cấp độ)
- `StageStatusBadge` — màu theo stage

---

## 📂 Checklist Nộp Bài Cuối Kỳ

- [ ] `01_bpmn_ecommerce.png` + `.drawio`
- [ ] `02_bpmn_workshop.png` + `.drawio`
- [ ] `03_bpmn_tracker.png` + `.drawio` ⭐
- [ ] `04_erd.png` + `.drawio`
- [ ] `05_usecase.png` + `.drawio`
- [ ] Figma link (view mode + prototype link)
- [ ] `/backend` GitHub repo
- [ ] `/frontend` GitHub repo
- [ ] Báo cáo PDF (20–30 trang) — có Figma screenshots trong từng section
- [ ] Slide thuyết trình

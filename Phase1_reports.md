# 🏺 THỔ — The Handcrafted Ceramics Commerce & Workshop Platform
> **README TỔNG HỢP — Tài liệu cốt lõi cho báo cáo & xây dựng phần mềm**
> *Tổng hợp từ: THỔ.docx · HG_Phase1.docx · Phân_tích_stakeholder.docx · Chức_năng_chính.docx · Phân_tích_thiết_kế_web.docx*

---

## 1. TỔNG QUAN DỰ ÁN

**Tên đề tài:** THỔ — Nền tảng tích hợp Thương mại và Không gian trải nghiệm Gốm thủ công

**Loại hình hệ thống:** Service Booking Website + E-Commerce Platform

**Lĩnh vực:** Nghệ thuật gốm sứ thủ công — tập trung vào Artisan Studios hiện đại và Làng nghề truyền thống (Bát Tràng, Thanh Hà, Bàu Trúc).

**Vấn đề cốt lõi (Problem Statement):** Các studio gốm hiện nay nhận lịch thủ công qua Facebook/Zalo, không kiểm soát được tài nguyên (bàn xoay + giáo viên), không có hệ thống tracking cá nhân hóa cho từng thành phẩm sau workshop — dẫn đến trùng lịch, quên booking, và trải nghiệm khách hàng bị đứt gãy.

**Lợi thế cạnh tranh (Why THỔ?):**
- Studio truyền thống: inbox → xác nhận thủ công → thanh toán riêng → hỏi tiến độ qua Zalo.
- THỔ: đặt lịch real-time → thanh toán 1 lần → theo dõi tiến độ nung tự động qua Ceramic Tracker → nhận thông báo từng giai đoạn.

---

## 2. STAKEHOLDERS

### 2.1 Khách hàng (End-User) — 3 phân khúc
| Phân khúc | Nhu cầu chính | Điểm đau hiện tại |
|-----------|--------------|-------------------|
| Experience Seeker (Gen Z, Millennial, cặp đôi) | Đặt vé workshop nhanh, biết lịch rõ ràng | Phải inbox và chờ xác nhận thủ công |
| Home Decorator | Mua gốm độc bản, biết chi tiết chất liệu/men | Thiếu thông tin sản phẩm rõ ràng online |
| Khách B2B (Doanh nghiệp) | Đặt quà tặng gốm in logo số lượng lớn | Không có kênh Custom Order chính thức |

**Dữ liệu & phân quyền:** Chỉ xem tracker của sản phẩm mình; Khách DIY Kit được xem video hướng dẫn độc quyền.

### 2.2 Nghệ nhân / Giảng viên (Instructor / Artisan)
- **Vận hành thực tế:** Tay thường dính đất sét → UI phải tối giản, nút to. Cần buffer 15-30 phút giữa ca dạy để dọn bàn xoay.
- **Phân quyền:** Xem danh sách học viên ca mình + bấm cập nhật trạng thái gốm (quét QR). Không được xem doanh thu.

### 2.3 Quản trị viên (Studio Admin) — Super Admin
- **Pain point hiện tại:** Quản lý bằng Excel/sổ tay → nhầm lịch, trùng giáo viên, thất lạc gốm.
- **Chức năng đặc biệt:** Gom mẻ nung — chọn nhiều sản phẩm cùng lúc, gửi thông báo hàng loạt đến khách.
- **Phân quyền:** Toàn quyền: kho hàng, doanh thu, lịch dạy, tracker, xử lý đơn.

### 2.4 Đơn vị Giao vận (Third-party Logistics)
- **Đặc thù:** Gốm là hàng dễ vỡ → phải truyền thuộc tính "Fragile" qua API để tính phí bảo hiểm.
- **Phân quyền:** Chỉ thấy thông tin giao hàng (Tên, SĐT, Địa chỉ) + Nhãn cảnh báo đỏ "Hàng dễ vỡ / Độc bản". Ẩn mọi thông tin tài chính.

### 2.5 Hệ thống bên thứ 3
- Cổng thanh toán: VNPAY / MoMo
- Vận chuyển: GHTK / GHN (API tích hợp phí bảo hiểm)

---

## 3. PAIN POINTS — DỮ LIỆU THỰC TẾ

*(Dựa trên quan sát từ: vietclay.com, workshopsaigon.com, thescentnote.com, ceramic4you.art)*

| Góc nhìn | Pain Point | Bằng chứng |
|----------|-----------|------------|
| **Khách hàng** | Quy trình đặt lịch thủ công, phải kiểm tra slot rồi xác nhận qua email | vietclay.com yêu cầu liên hệ trước |
| **Khách hàng** | Không biết tiến độ gốm sau workshop, phải nhắn tin hỏi studio | Không có hệ thống tracking cá nhân |
| **Khách hàng** | Chi phí không rõ ràng upfront (giá phụ thuộc: kích thước, màu men, phí nung, ship) | Thiếu bảng giá rõ ràng trên web |
| **Doanh nghiệp** | Không quản lý đồng thời được tài nguyên kép (bàn xoay + giáo viên) | workshopsaigon.com chỉ nhận qua hotline |
| **Doanh nghiệp** | Không thể scale vì phụ thuộc nhân sự trực inbox 24/7 | Không có hệ thống tự động |
| **Logistics** | Không có chuẩn tích hợp bảo hiểm hàng dễ vỡ | Phí nung và giao hàng tính rời rạc |

---

## 4. CHỨC NĂNG HỆ THỐNG

### 4.1 Nhóm bắt buộc làm sâu (Core Features)

| STT | Chức năng | Mô tả ngắn | Độ phức tạp |
|-----|-----------|-----------|-------------|
| 1 | **E-commerce** | Xem, tìm kiếm, lọc, mua sản phẩm gốm; chọn biến thể màu men/kích thước | Medium |
| 2 | **Workshop Booking** | Chọn loại hình → chọn slot → kiểm tra đồng thời Instructor & Equipment → thanh toán → QR check-in | High |
| 3 | **Ceramic Tracker** | Theo dõi 6 giai đoạn chế tác sau workshop; cập nhật theo lô; gửi notification tự động | High |
| 4 | **Hybrid Cart** | Giỏ hàng nhận cả sản phẩm vật lý + vé workshop; 1 lần thanh toán; tách bill backend | High |
| 5 | **Admin Slot/Tracker** | Quản lý lịch workshop, tài nguyên, booking, tracker, xử lý lỗi nung | High |

### 4.2 Nhóm bổ trợ (Supporting Features)
Custom Order · Notification System · Logistics hàng dễ vỡ · User Account & Dashboard · Review / Wishlist / Voucher / Support

### 4.3 Giai đoạn Ceramic Tracker
```
Forming → Drying → Bisque Firing → Glazing → Glaze Firing → Ready
                                                              ↓
                                                    [Exception: Vỡ/Nứt]
                                                    → Voucher + Làm lại
```

---

## 5. BUSINESS RULES (Quy tắc nghiệp vụ bắt buộc)

### BR-01: Dual Resource Allocation (Cấp phát tài nguyên kép)
```
Slot khả dụng = TRUE chỉ khi:
  (1) Sức chứa còn chỗ, VÀ
  (2) Instructor trống trong khung giờ đó, VÀ
  (3) Equipment (bàn xoay) đang hoạt động

Slot thực tế = Min(Số bàn trống, Số GV_trống × Max_HV_mỗi_GV)
```

### BR-02: Ticket Hold (Chống overbooking)
```
Khi khách đưa vé vào giỏ hàng:
  → Hệ thống LOCK tài nguyên trong 15 phút
  → Quá hạn chưa thanh toán → tự động RELEASE
```

### BR-03: Order Splitting (Tách đơn)
```
1 lần thanh toán (1 Transaction)
  → Luồng A: Mã vận đơn giao hàng (sản phẩm vật lý)
  → Luồng B: Mã QR check-in gửi Email/App (vé Workshop)
```

### BR-04: Tracker State Machine (Trạng thái tịnh tiến)
```
Forming → Drying → Bisque Firing → Glazing → Glaze Firing → QC → Ready
Quy tắc: Chỉ được cập nhật tiến trình về phía trước, không được nhảy bước.
```

### BR-05: Kiln Exception Handling (Xử lý rủi ro nung)
```
Nếu sản phẩm bị nứt/vỡ ở bước QC:
  → Tự động gửi Email xin lỗi + Voucher đền bù
  → Cung cấp tùy chọn: Làm lại sản phẩm / Hoàn tiền
```

### BR-06: Batch Processing (Gom mẻ nung)
```
Admin chọn N sản phẩm đã khô
  → Gộp vào 1 mẻ nung
  → Bấm 1 nút → Hệ thống gửi notification cho N khách hàng cùng lúc
```

### BR-07: Buffer Time (Thời gian nghỉ giữa ca)
```
Hệ thống tự động chèn 15-30 phút buffer sau mỗi ca workshop
  → Nghệ nhân có thời gian dọn bàn xoay
  → Slot này không được phép đặt lịch
```

---

## 6. THIẾT KẾ HỆ THỐNG — ĐỊNH HƯỚNG

### 6.1 Bảng màu & Phong cách
| Token | Màu | Ý nghĩa |
|-------|-----|---------|
| `--color-primary` | Terracotta #C4622D | Gạch nung — màu chủ đạo |
| `--color-secondary` | Beige #F5F0E8 | Nền sáng, organic |
| `--color-accent` | Celadon #8DB8A3 | Xanh ngọc men gốm |
| `--color-earth` | Brown #6B4C3B | Nâu đất sét |
| `--color-light` | Ivory #FDFAF4 | Trắng ngà |

**Phong cách:** Minimalist / Zen / Organic — ít animation rối, nhiều khoảng trắng, hình ảnh chất lượng cao.

### 6.2 Sitemap đề xuất
```
/ (Homepage)
/about          — Câu chuyện THỔ, nghệ nhân, không gian studio
/shop           — Danh sách sản phẩm gốm
/shop/:id       — Chi tiết sản phẩm
/workshop       — Danh sách loại hình workshop
/workshop/:id   — Chi tiết + lịch đặt slot
/booking        — Luồng đặt lịch
/cart           — Hybrid Cart
/checkout       — Thanh toán
/gallery        — Ảnh sản phẩm & workshop
/dashboard      — Tài khoản khách hàng: lịch sử, tracker
/tracker/:id    — Chi tiết Ceramic Tracker
/contact        — Liên hệ + Q&A
/admin/*        — Khu vực quản trị (protected)
```

### 6.3 Web tham khảo chính
| Web | Học gì | Tránh gì |
|-----|--------|----------|
| thescentnote.com | CTA "Begin your experience" cuối mỗi trang, Dashboard KH, Q&A + chat widget | — |
| ceramic4you.art | Layout tinh tế cho sản phẩm gốm cao cấp | Không có Dashboard riêng cho KH |
| Klook / Traveloka | Luồng booking trải nghiệm, trust signals | Quá phức tạp cho studio nhỏ |

---

## 7. NON-FUNCTIONAL REQUIREMENTS

| Yêu cầu | Mô tả |
|---------|-------|
| **UX/UI** | Minimalist/Zen. Ceramic Tracker hiện ngay khi đăng nhập, không phải nhập mã. Tối thiểu số lần click để booking. |
| **Concurrency** | Chống overbooking khi nhiều user đặt cùng 1 slot hot. Cơ chế lock + release 15 phút. |
| **Bảo mật** | Mã hóa thông tin thanh toán. Truyền attribute "Fragile" đúng chuẩn qua Logistics API. |
| **Performance** | Booking calendar load real-time. Notification gửi ngay khi stage thay đổi. |
| **Mobile** | Artisan interface: nút to, thao tác tối giản (tay dính đất). Khách hàng: Tracker dễ xem trên mobile. |

---

## 8. MÀN HÌNH FIGMA CẦN LÀM

| Module | Màn hình bắt buộc |
|--------|------------------|
| E-commerce | Homepage · Shop Listing · Product Detail · Order Confirmation |
| Workshop Booking | Workshop Listing · Workshop Detail · Slot Calendar · Booking Form · QR Confirmation |
| Ceramic Tracker | Tracker Dashboard · Tracker Detail Timeline · Mobile Tracker · Admin Tracker Mgmt |
| Hybrid Cart | Cart (phân loại rõ 2 nhóm item) · Checkout · Split Bill Preview · Order Confirmation |
| Admin | Admin Dashboard · Slot Mgmt · Instructor Mgmt · Equipment Mgmt · Booking Mgmt |

---

## 9. DIAGRAMS CẦN VẼ (Draw.io)

### BPMN — Luồng ưu tiên
1. **Workshop Booking Flow:** Customer chọn slot → System kiểm tra Instructor & Equipment → Thanh toán → QR sinh
2. **Hybrid Cart & Order Splitting:** 1 giỏ hàng → 1 thanh toán → 2 luồng backend
3. **Ceramic Tracker State Machine:** Từ Forming đến Ready, có nhánh exception

### Use Case — Bắt buộc
- UC01: Book Workshop Slot (include: Check Instructor, include: Check Equipment)
- UC02: Checkout Hybrid Cart (include: Split Order)
- UC03: Track Ceramic Progress (extend: Receive Notification)
- UC04: Admin Update Tracker Stage (include: Send Batch Notification)
- UC05: Handle Kiln Exception (extend: Send Compensation Voucher)

### ERD — Entities quan trọng
```
User ──< Address (1-N)
User ──< Order (1-N)
Order ──< OrderItem (1-N)
OrderItem ──> Product hoặc WorkshopTicket
WorkshopSlot ──> Instructor (N-1)
WorkshopSlot ──> Equipment (N-1)
WorkshopTicket ──> CeramicTracker (1-1)
CeramicTracker ──< TrackerHistory (1-N)
KilnBatch ──< CeramicTracker (1-N)
```

---

## 10. TECH STACK ĐỀ XUẤT (cần nhóm confirm)

| Layer | Công nghệ đề xuất | Lý do |
|-------|------------------|-------|
| Frontend | React / Next.js + Tailwind CSS | SSR tốt cho SEO, component-based |
| State Management | Zustand hoặc Redux Toolkit | Quản lý giỏ hàng, tracker state |
| Backend | Node.js + Express hoặc FastAPI (Python) | REST API, dễ integrate image API |
| Database | PostgreSQL | Quan hệ phức tạp (1-N, state machine) |
| Real-time | WebSocket hoặc SSE | Booking slot update real-time |
| Auth | JWT + Refresh Token | Phân quyền 3 vai trò |
| Payment | VNPAY / MoMo SDK | Phù hợp thị trường VN |
| Notification | Firebase Cloud Messaging hoặc Email (Nodemailer) | Push notification + Email |
| Deployment | Docker + VPS hoặc Railway | Đủ cho demo đồ án |

---

## 11. TIMELINE & MILESTONE

| Giai đoạn | Tuần | Deliverable chính |
|-----------|------|-------------------|
| Phase 1: Phân tích | 1–4 | ✅ Stakeholder · Pain Point · Business Rules · Feature List |
| Phase 2: Design | 5–7 | 🔄 BPMN · Use Case · ERD · Figma Wireframe + Hi-Fi |
| Phase 3: Code | 8–10 | ⏳ Backend API (≥10 endpoints) · Frontend (≥8 components) |
| Phase 4: Test & Report | 11–12 | ⏳ QA Report · Final PDF (20-30 trang) · Slide |

**Milestone quan trọng nhất sắp tới:** Hoàn thành ERD + BPMN cuối tuần 7 (Phase 2 là xương sống của báo cáo).

---

## 12. CÂU HỎI BẢO VỆ — ĐÁP ÁN CHUẨN BỊ SẴN

| Câu hỏi | Đáp án ngắn |
|---------|-------------|
| Tại sao chọn gốm thủ công? | Studio gốm có pain point rõ: đặt lịch thủ công, không tracking được, không quản lý tài nguyên kép |
| Điểm đột phá so với đối thủ? | Ceramic Tracker (theo dõi gốm từng bước như theo dõi đơn Shopee) + Hybrid Cart (mua gốm + đặt workshop 1 lần) |
| Dual Resource Allocation là gì? | Slot chỉ open khi đủ: bàn xoay trống VÀ giáo viên rảnh — không thể chỉ kiểm tra 1 điều kiện |
| Hybrid Cart xử lý backend thế nào? | 1 transaction → tách thành 2: luồng logistics (sản phẩm vật lý) và luồng booking (QR vé workshop) |
| Nếu gốm bị vỡ khi nung thì sao? | Hệ thống kích hoạt Exception Flow: auto email + voucher + offer làm lại hoặc hoàn tiền |

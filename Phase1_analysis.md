# 📊 PHÂN TÍCH TỔNG HỢP — DỰ ÁN THỔ (PHASE 1)
> Kiểm tra mức độ đáp ứng của 5 file tài liệu theo 5 đề mục yêu cầu

---

## 1. PHÂN TÍCH STAKEHOLDER

**Nguồn:** `Phân_tích_stakeholder.docx` + `HG_Phase1.docx` (mục 1)

### ✅ Đã đáp ứng
- **4 nhóm tác nhân** được xác định rõ: Khách hàng (3 loại con), Nghệ nhân/Thợ xưởng, Quản trị viên (Admin), Đơn vị giao vận.
- **Vai trò + Kỳ vọng** được phân tích đầy đủ cho từng nhóm. Đặc biệt nghệ nhân được mô tả sát thực tế vận hành (tay dính đất, cần nghỉ giữa ca, cần UI tối giản).
- **Phân quyền** (Permission) được làm rõ: Nghệ nhân chỉ thấy lịch ca mình; Admin là Super Admin; Shipper chỉ thấy thông tin giao hàng + nhãn "Hàng dễ vỡ".
- **Third-party systems** có trong `HG_Phase1.docx`: cổng thanh toán VNPAY/MoMo, đơn vị vận chuyển GHTK/GHN.

### ⚠️ Còn thiếu / Cần bổ sung
- **Conflict & Trade-off giữa stakeholders** chưa được khai thác. Ví dụ: Admin muốn gom mẻ nung lớn (chờ lâu) nhưng Khách hàng muốn nhận gốm sớm → cần quy tắc nghiệp vụ giải quyết mâu thuẫn này.
- **Nhóm khách hàng B2B** được đề cập trong `THỔ.docx` nhưng **không xuất hiện** trong file phân tích stakeholder — cần bổ sung.
- **User journey map** theo từng loại khách hàng (Experience Seeker, Home Decorator, B2B) chưa có.

### 📌 Kết luận: ĐÃ ĐỦ NỀN TẢNG — cần bổ sung B2B & xử lý xung đột stakeholder

---

## 2. CHỨC NĂNG CHÍNH

**Nguồn:** `Chức_năng_chính.docx`

### ✅ Đã đáp ứng
- **Phân loại 2 nhóm** rõ ràng: 5 chức năng bắt buộc làm sâu + 5 chức năng bổ trợ. Phù hợp với yêu cầu "đánh giá độ phức tạp, phân theo mức độ khác nhau" của giảng viên.
- **Mô tả chức năng con** dưới dạng bảng cho từng module lớn — dễ liên kết sang Use Case Diagram.
- **Giá trị nghiệp vụ** được giải thích rõ, không chỉ liệt kê kỹ thuật mà nêu được lợi ích với người dùng & doanh nghiệp.
- **Mapping với màn hình Figma** ở cuối mỗi module — rất tốt để designer biết cần làm gì.
- **Ceramic Tracker** với 6 giai đoạn rõ ràng là điểm đột phá nổi bật.

### ⚠️ Còn thiếu / Cần bổ sung
- **Chưa có bảng đánh giá độ phức tạp / Priority Matrix** (VD: High/Medium/Low complexity + MoSCoW prioritization). Giảng viên yêu cầu đánh giá mức độ rõ ràng.
- **Hybrid Cart** cần làm rõ hơn logic backend "tách bill": khi nào tách, tách thành mấy luồng, ai nhận luồng nào.
- **Chức năng bổ trợ** (Custom Order, Logistics, Notification) còn mô tả sơ lược — cần ít nhất 1 Business Rule cho mỗi cái.
- **Interactive Customizer** (từ `THỔ.docx`) không xuất hiện trong file chức năng — cần kiểm tra có đưa vào không.

### 📌 Kết luận: ĐÃ RẤT TỐT — cần thêm bảng độ phức tạp và Business Rules cho nhóm bổ trợ

---

## 3. NGHIÊN CỨU PAIN POINT — TÌM DỮ LIỆU

**Nguồn:** `Phân_tích_thiết_kế_web.docx`

### ✅ Đã đáp ứng
- **Pain point được dẫn từ thực tế** với URL cụ thể (vietclay.com, workshopsaigon.com) thay vì lý thuyết chung chung — đây là điểm rất mạnh.
- **Phân tích từ 3 góc nhìn**: khách hàng (quy trình đặt lịch thủ công), doanh nghiệp (không quản lý được tài nguyên kép), bên thứ 3 (logistics gốm dễ vỡ chưa có chuẩn ngành).
- **Competitor analysis** có thescentnote.com và ceramic4you.art với nhận xét cụ thể về UX (CTA "begin your experience", Q&A section, dashboard khách hàng).
- **Loại hình web được xác định**: Service Booking Website — định hướng đúng cho thiết kế.

### ⚠️ Còn thiếu / Cần bổ sung
- **Không có số liệu định lượng**: Bao nhiêu % studio vẫn dùng Facebook/Zalo? Tỉ lệ trùng lịch? Thời gian chờ trung bình? → Nếu không có data thật thì cần nêu rõ đây là quan sát định tính.
- **Câu hỏi của giảng viên** — "điều gì khiến khách hàng chọn THỔ thay vì đối thủ?" — chưa được trả lời trực tiếp và thuyết phục trong file này. Cần 1 đoạn "Competitive Advantage" rõ ràng.
- **User behavior data** chưa có: số lần click trung bình để đặt lịch, tỉ lệ drop-off tại bước nào.

### 📌 Kết luận: TỐT NHƯNG CẦN SỐ LIỆU — nên thêm ít nhất 3-5 data point định lượng và 1 đoạn Competitive Advantage

---

## 4. THAM KHẢO MÀU VÀ KIẾN TRÚC CƠ BẢN

**Nguồn:** `QH_Web.docx` + `THỔ.docx` (mục 12 & 11)

### ✅ Đã đáp ứng
- **Bảng màu Earthy/Terracotta** được xác định từ sớm và nhất quán: Gạch nung, Nâu đất sét, Beige, Ivory, Celadon.
- **Sitemap cơ bản** được đề xuất: Homepage, About, Dịch vụ/Workshop, Booking, Gallery, Dashboard, Feedback, Contact.
- **Phong cách thiết kế** xác định rõ: Minimalist/Zen, Organic — phù hợp với đặc tính sản phẩm gốm.
- **Web tham khảo** đa dạng và phù hợp: từ booking workshop (thescentnote), ceramics cao cấp (ceramic4you), đến booking tour (Klook, Traveloka).

### ⚠️ Còn thiếu / Cần bổ sung
- **Typography chưa được chốt**: Font chữ, size hierarchy (H1/H2/Body), line-height — cần xác định để designer dùng nhất quán trong Figma.
- **Kiến trúc kỹ thuật hệ thống** (System Architecture) hoàn toàn vắng mặt: Frontend ↔ Backend ↔ Database ↔ Third-party APIs. Cần thêm 1 sơ đồ kiến trúc tổng quan.
- **Tech stack chưa được chốt**: Framework (React/Next.js?), Backend (Node.js/FastAPI?), DB (PostgreSQL?), Deployment.
- **Responsive breakpoints** chưa xác định: Thiết kế Mobile-first hay Desktop-first?
- Phân tích 2 web tham khảo còn thiếu: chưa rút ra "nên làm gì" và "tránh gì" thành checklist.

### 📌 Kết luận: MỚI Ở MỨC ĐỊNH HƯỚNG — cần bổ sung typography, tech stack và system architecture diagram

---

## 5. PHÂN TÍCH NGHIỆP VỤ

**Nguồn:** `HG_Phase1.docx`

### ✅ Đã đáp ứng
- **Business Rules** cực kỳ chi tiết và sát thực tế nghiệp vụ:
  - Quy tắc cấp phát tài nguyên kép: `Slot = Min(Bàn trống, GV_trống × Max_HV/GV)`.
  - Quy tắc hold vé 15 phút — chống overbooking.
  - Quy tắc tách đơn (Order Splitting) — 1 thanh toán → 2 luồng.
  - Quy tắc trạng thái mẻ nung tịnh tiến — không được nhảy bước.
  - Quy tắc xử lý ngoại lệ (gốm nứt/vỡ) → tự động gửi voucher/offer làm lại.
- **Non-functional requirements** có đủ 3 mảng: UX/UI, Concurrency (chống overbooking), Security.
- **Functional Requirements** chia theo module rõ ràng, liên kết được sang ERD và BPMN.

### ⚠️ Còn thiếu / Cần bổ sung
- **BPMN / Use Case thực tế** chưa có — đây là deliverable chính của Phase thiết kế, cần ưu tiên.
- **ERD chưa có** — đặc biệt cần thiết kế bảng để reflect Business Rules (Dual Resource Allocation, Order Splitting, Tracker State Machine).
- **Batch Processing** của Admin (gom nhiều sản phẩm vào 1 mẻ nung, gửi thông báo hàng loạt) được đề cập trong `Phân_tích_stakeholder.docx` nhưng **chưa được đưa vào Business Rules** của file này.
- **Cancellation flow** chưa được làm rõ: Khách hủy booking workshop sau khi đặt → slot được giải phóng như thế nào? Hoàn tiền ra sao?

### 📌 Kết luận: NGHIỆP VỤ RẤT MẠNH — cần bổ sung Batch Processing rule và Cancellation flow; ưu tiên chuyển sang BPMN/ERD

---

## 🎯 BẢNG TỔNG HỢP MỨC ĐỘ ĐÁP ỨNG

| Đề mục | Mức độ | Điểm mạnh chính | Cần bổ sung ngay |
|--------|--------|-----------------|------------------|
| 1. Stakeholder | 🟡 Khá | 4 nhóm rõ, có phân quyền | B2B client, conflict resolution |
| 2. Chức năng chính | 🟢 Tốt | Phân loại 2 nhóm, business value rõ | Bảng độ phức tạp/priority |
| 3. Pain Point | 🟡 Khá | Dẫn URL thực, 3 góc nhìn | Số liệu định lượng, Competitive Advantage |
| 4. Màu & Kiến trúc | 🔴 Thiếu | Bảng màu, sitemap, phong cách | Typography, tech stack, system diagram |
| 5. Nghiệp vụ | 🟢 Tốt | Business Rules chi tiết, edge case | Batch Processing rule, Cancellation flow |

---

## 💡 3 ĐIỀU NÊN LÀM NGAY TUẦN NÀY

1. **Bổ sung Competitive Advantage statement** — 1 đoạn ngắn trả lời: "Tại sao khách chọn THỔ thay vì inbox studio trên Zalo?"
2. **Chốt Tech Stack & Typography** — để designer và developer bắt đầu đồng bộ (font, màu hex cụ thể, React vs Next.js, Node.js vs FastAPI).
3. **Bắt đầu phác thảo ERD và BPMN** từ Business Rules đã có trong `HG_Phase1.docx` — đây là deliverable bắt buộc quan trọng nhất của Phase 2-3.

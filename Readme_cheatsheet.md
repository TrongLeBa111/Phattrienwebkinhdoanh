# ⚡ CHEAT SHEET NHANH — VIỆC CẦN LÀM THEO VAI TRÒ

> To-do list cá nhân theo từng vai trò trong 10 tuần.  
> Check lại mỗi tuần — **Figma là đầu ra quan trọng nhất** theo yêu cầu thầy.

---

## 🎯 BA / Product Manager

| Tuần | Việc cần làm |
|------|-------------|
| 1 | Phân tích pain point 3 đối tượng (Khách hàng, THỔ, Hệ thống); lên Feature Matrix sơ bộ |
| 2 | Hoàn thiện Feature Matrix 3 nghiệp vụ; research competitor gốm sứ (Etsy, Airbnb Exp.) |
| 3–4 | Review wireframe Designer; đảm bảo logic 3 luồng đúng nghiệp vụ |
| 5–6 | Review Hi-Fi + approve ERD + Use Case; chuẩn bị nội dung báo cáo phần Analysis |
| 7–8 | Coordinate integration; track tiến độ code |
| 9–10 | Viết Introduction, Analysis, Conclusion; tổng hợp toàn bộ báo cáo; chuẩn bị slide |

**Câu hỏi thầy sẽ hỏi — cần trả lời được:**
- Khách hàng mua gốm online gặp vấn đề gì mà các shop bình thường không giải quyết được?
- Ceramic Tracker giải quyết "khoảng trống thông tin" 2-3 tuần như thế nào?
- Tại sao THỔ dùng Hybrid Cart thay vì tách 2 website riêng?
- 3 đối tượng (Customer / THỔ / System) có nhu cầu gì khác nhau?

---

## 🏗️ Backend / System Architect

| Tuần | Việc cần làm |
|------|-------------|
| 1–2 | Đánh giá kỹ thuật Hybrid Cart, Smart Slot, Tracker state machine |
| 3–4 | Vẽ BPMN Luồng 1 + 2; tham gia vẽ Luồng 3 (Tracker) cùng QA |
| 5 | Thiết kế ERD đầy đủ — WorkshopSlot + Instructor + Equipment + CeramicTracker |
| 6 | Hoàn thiện ERD; vẽ Use Case; được BA/PM approve |
| 7–8 | Code backend: schema.sql → API endpoints → notification service |
| 9–10 | Viết phần Technical Architecture trong báo cáo |

**Checklist ERD tuần 5:**
- [ ] `WorkshopSlot` kết nối với `Instructors` (M-N) và `Equipments` (M-N)
- [ ] `CeramicTracker` có các stage: Forming/Drying/BisqueFiring/Glazing/GlazeFiring/Ready
- [ ] `CeramicTracker` → `Notifications` (1-N) — lưu lịch sử gửi thông báo
- [ ] `Orders` tách thành `PhysicalOrderItems` và `WorkshopBookings`
- [ ] `Users` → `Addresses` là 1-N (không phải 1-1!)
- [ ] Ghi rõ ràng buộc: `if instructor=0 OR equipment=0 → slot.status = Full`

---

## ⚙️ Frontend Developer

| Tuần | Việc cần làm |
|------|-------------|
| 1–2 | Tham gia brainstorm; đề xuất stack (Next.js, React Query, Tailwind) |
| 3–4 | Review Figma wireframe; lên component list |
| 5–6 | Review Figma Hi-Fi; planning component structure chi tiết |
| 7 | Setup Next.js project; build TrackerTimeline, HybridCart, SlotCalendar |
| 8 | Integrate API; live demo; loading/error states |
| 9–10 | Viết phần Frontend Implementation; chụp screenshots so sánh Figma ↔ Code |

**Checklist components tuần 7-8:**
- [ ] `TrackerTimeline`: Hiển thị 6 stages với progress indicator + notification history
- [ ] `HybridCart`: Phân tách rõ Physical Item vs Workshop Ticket
- [ ] `SlotCalendar`: Show available/full (disabled) slots
- [ ] `BookingQR`: Render QR code sau khi booking thành công
- [ ] `StageStatusBadge`: Màu khác nhau theo stage (Terracotta khi đang nung, Celadon khi Ready)
- [ ] Mobile responsive — Tracker đặc biệt phải đẹp trên mobile

---

## 🎨 Designer / Figma ⭐ *Vai trò quan trọng nhất giai đoạn đầu*

| Tuần | Việc cần làm |
|------|-------------|
| 1 | Moodboard trên **impeccable.style**: màu Terracotta + Celadon, tone thủ công; tham khảo UI gốm nước ngoài |
| 2 | Xác định Design System: màu, font, spacing, component types |
| 3 | Wireframe Low-fi: Homepage, Shop, Product Detail, Workshop Listing, Booking Form |
| 4 | Wireframe Low-fi: Tracker Dashboard, Timeline, Hybrid Cart, Checkout, Confirmation |
| 5 | Hi-Fi Design: Áp dụng màu THỔ; Component library (buttons, cards, badges, timeline) |
| 6 | Hi-Fi tiếp: Tracker Timeline UI đặc biệt; Hybrid Cart; Build Prototype 4 journeys |
| 7–8 | Hand off design spec cho FE; QA implementation; tạo Design Handbook |
| 9–10 | Viết phần UI/UX Design Process; export screenshot từng screen; ghi chú Design Rationale |

**Checklist Figma tuần 5-6:**
- [ ] Tracker Timeline UI: progress bar theo chiều dọc (mobile-friendly), 6 giai đoạn với icon và màu stage
- [ ] Hybrid Cart: 2 sections phân biệt — "🏺 Sản phẩm gốm" vs "🎫 Vé Workshop"
- [ ] Workshop Slot: Hiển thị rõ "Available ✅" vs "Full ❌" vs "Gần đầy ⚠️"
- [ ] Notification screen: Timeline nhận thông báo kèm ảnh giai đoạn
- [ ] Mobile version: Tracker screen tối thiểu 1 frame

**Sử dụng impeccable.style cho:**
- Radial Map stakeholder (THỔ ở giữa)
- Flow diagram Hybrid Cart (input → process → output)
- Palette nodes với mã hex để confirm vibe thương hiệu

---

## 🧪 QA / Tester & Diagram

| Tuần | Việc cần làm |
|------|-------------|
| 1–2 | Phác thảo test scenarios cho 3 luồng; xác định edge cases đặc thù gốm |
| 3 | Vẽ BPMN Luồng 1 + 2 (cùng Backend) |
| 4 | **FOCUS:** Vẽ BPMN Luồng 3 — Ceramic Tracker (luồng phức tạp nhất) |
| 5–6 | Vẽ Use Case Diagram (6 UC); review ERD cùng Backend |
| 7–8 | Testing 3 flows; báo bugs; performance check |
| 9–10 | Viết phần BPMN giải thích + Testing & QA; final checklist |

**Checklist BPMN Luồng 3 (Tracker) — tuần 4:**
- [ ] Swimlane 3 phần: Khách hàng | Hệ thống | Nghệ nhân (Admin lò)
- [ ] Có 6 stage nodes + 1 start node (Check-in QR) + 1 end node (Giao hàng)
- [ ] Mỗi stage → có gateway gửi Notification
- [ ] Exception branch: "Nung lỗi (Cracked)" → Làm đền HOẶC Hoàn tiền
- [ ] Tối thiểu **15 nodes**

**Edge cases cần test (tuần 8):**
- [ ] Đặt workshop khi Instructor bận → hiển thị "Full", gợi ý slot khác
- [ ] Tracker: Admin cập nhật stage sai thứ tự → hệ thống từ chối
- [ ] Hybrid Cart: Thanh toán → kiểm tra 2 email gửi đúng nội dung
- [ ] Nung lỗi → flow hoàn tiền hoạt động đúng
- [ ] Slot calendar: đồng thời 2 người đặt cùng 1 slot → race condition

---

## 📌 Câu hỏi thầy/cô hay hỏi khi bảo vệ

1. **Ceramic Tracker hoạt động như thế nào về mặt kỹ thuật?**
   → Admin lò cập nhật stage trên hệ thống → trigger notification service → push to khách qua email/app

2. **Hybrid Cart phức tạp ở điểm nào?**
   → Backend phải tách 1 order thành 2 luồng xử lý hoàn toàn khác: logistics cho sản phẩm vật lý, QR + lịch hẹn cho workshop

3. **Tại sao Smart Slot cần kiểm tra cả Nghệ nhân lẫn Bàn xoay?**
   → Thiếu 1 trong 2 đều không tổ chức được workshop — đây là nghiệp vụ thực tế, không phải chỉ check số lượng slot

4. **ERD User-Address quan hệ gì? Tại sao?**
   → 1-N, vì 1 người có thể có nhiều địa chỉ giao hàng (nhà riêng, văn phòng, tặng người khác)

5. **Ceramic Tracker giải quyết vấn đề gì cụ thể?**
   → 2-3 tuần chờ gốm là "khoảng trống thông tin" — khách không biết tiến độ, dễ lo lắng → Tracker giải quyết bằng cách cá nhân hóa hành trình sản phẩm, tăng gắn kết cảm xúc

6. **Tại sao dùng Figma làm cơ sở phân tích trong báo cáo?**
   → Figma prototype cho phép thấy trực quan cách hệ thống phản hồi pain point; mỗi screen Figma tương ứng 1 quyết định thiết kế có lý do rõ ràng

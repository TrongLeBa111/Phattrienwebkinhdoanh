# 🏺 DỰ ÁN THỔ — NỀN TẢNG GỐM SỨ TRỰC TUYẾN
> Nhóm 5 người | 10 tuần | Website bán gốm sứ + Đặt lịch Workshop + Ceramic Tracker

---

## 🗂️ Cấu trúc tài liệu

| File | Nội dung |
|------|----------|
| [`README.md`](./README.md) | File này — Tổng quan dự án |
| [`README_ROLES.md`](./README_ROLES.md) | Phân chia 5 vai trò & trách nhiệm (Figma là trọng tâm) |
| [`README_PHASES.md`](./README_PHASES.md) | 5 Giai đoạn thực hiện trong 10 tuần |
| [`README_REPORT_STRUCTURE.md`](./README_REPORT_STRUCTURE.md) | Cấu trúc chi tiết báo cáo cuối kỳ |
| [`README_CHECKLIST.md`](./README_CHECKLIST.md) | Checklist kỹ thuật: BPMN, ERD, Figma, Code |
| [`README_TIMELINE.md`](./README_TIMELINE.md) | Timeline & milestone 10 tuần |
| [`README_CHEATSHEET.md`](./README_CHEATSHEET.md) | Cheat sheet nhanh theo từng vai trò |

---

## 🎯 Bối cảnh & Nghiệp vụ chính

**THỔ** là nền tảng số cho cộng đồng gốm sứ Việt Nam, tích hợp 3 mảng:

### Nghiệp vụ 1 — Cửa hàng Gốm Sứ (E-Commerce)
Bán sản phẩm gốm trưng bày trên gian hàng web.  
Lọc theo dòng men, loại sản phẩm, DIY Kit về làm tại nhà.

### Nghiệp vụ 2 — Đặt lịch Workshop (Booking)
Gói full tour: từ nặn đất sét → theo dõi nung lò → nhận thành phẩm.  
Lọc theo địa điểm, cấp độ (Beginner / Expert), loại hình (Bàn xoay / Vuốt tay).

### Nghiệp vụ 3 — Ceramic Tracker ⭐ *Tính năng đắt giá*
Khách theo dõi hành trình sản phẩm của mình theo thời gian thực.  
Hệ thống tự động gửi **Notification** tại mỗi giai đoạn chuyển trạng thái:

```
Check-in QR
   ↓
Tạo hình (Forming)
   ↓ 🔔 Notification
Phơi khô (Drying)
   ↓ 🔔 Notification
Nung sơ (Bisque Firing)
   ↓ 🔔 Notification
Tráng men (Glazing)
   ↓ 🔔 Notification
Nung hoàn thiện (Glaze Firing)
   ↓ 🔔 Notification
Sẵn sàng giao hàng (Ready) 🎉
```

> Gốm mất 2-3 tuần → khoảng thời gian chờ này là cơ hội giữ chân người dùng (Retention) qua Tracker, Community, kho ảnh quá trình nung.

---

## 🚀 Tính năng đột phá

| Tính năng | Mô tả | Điểm khác biệt |
|-----------|-------|----------------|
| 🔔 Ceramic Tracker | Theo dõi "cục đất sét" của mình từ khi tạo hình đến khi nhận hàng | Chưa nơi nào có |
| 🛒 Hybrid Cart | Giỏ hàng lai: sản phẩm vật lý + vé workshop trong cùng 1 đơn | Tách bill tự động (logistics + QR booking) |
| 📅 Smart Slot | Kiểm tra đồng thời Nghệ nhân + Bàn xoay trước khi cho đặt lịch | Tránh overbooking thực sự |
| 🏺 DIY Kit | Mua kit gốm về làm tại nhà, kèm video hướng dẫn | Mở rộng đối tượng khách hàng |

---

## 🎨 Nhận diện thương hiệu THỔ

| Màu | Hex | Ý nghĩa |
|-----|-----|---------|
| Terracotta | `#E2725B` | Đất nung — chất liệu gốc |
| Celadon | `#708238` | Men ngọc — tinh tế, bền vững |

> 💡 Sử dụng **[impeccable.style](https://impeccable.style)** (Visual Mode) để moodboard màu sắc, vẽ Stakeholder Map dạng Radial, và phác thảo flow trước khi vào Figma chính thức.

---

## ✅ Tiêu chí thành công (theo yêu cầu thầy)

| Tiêu chí | Trọng tâm |
|----------|-----------|
| ✅ Figma là trung tâm báo cáo | Prototype đủ screen để thầy review & chấm |
| ✅ Phân tích 3 đối tượng | Khách hàng / THỔ (doanh nghiệp) / Hệ thống |
| ✅ BPMN 3 luồng nghiệp vụ | E-Commerce, Workshop Booking, Ceramic Tracker |
| ✅ ERD đúng nghiệp vụ gốm | WorkshopSlot — Instructor — Equipment rõ ràng |
| ✅ Báo cáo dùng Figma làm cơ sở | Mỗi phân tích phải có màn hình Figma minh hoạ |

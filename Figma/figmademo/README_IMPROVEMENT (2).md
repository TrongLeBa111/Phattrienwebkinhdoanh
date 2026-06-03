# THO Studio — Kế hoạch cải thiện dự án

> Tổng hợp từ: phản hồi giảng viên + góp ý nội bộ nhóm.  
> Mỗi mục ghi rõ **file cần sửa**, **việc cần làm** và **lý do**.  
> Ưu tiên: 🔴 Làm ngay · 🟡 Làm tiếp · 🟢 Điểm cộng

---

## Mục lục

1. [Lỗi kỹ thuật cơ bản](#1-lỗi-kỹ-thuật-cơ-bản)
2. [Trang Home](#2-trang-home)
3. [Trang Workshop](#3-trang-workshop)
4. [Trang Booking Workshop](#4-trang-booking-workshop)
5. [Trang Sản phẩm](#5-trang-sản-phẩm)
6. [Giỏ hàng & Checkout](#6-giỏ-hàng--checkout)
7. [Trang Tracking](#7-trang-tracking)
8. [Trang Review](#8-trang-review)
9. [Header & Tìm kiếm](#9-header--tìm-kiếm)
10. [Chatbot tư vấn workshop](#10-chatbot-tư-vấn-workshop)
11. [Đăng nhập mạng xã hội](#11-đăng-nhập-mạng-xã-hội)
12. [Staff Dashboard](#12-staff-dashboard)
13. [Database — Bảng cần thêm/sửa](#13-database--bảng-cần-thêmsửa)
14. [Checklist tổng hợp](#14-checklist-tổng-hợp)

---

## 1. Lỗi kỹ thuật cơ bản

🔴 **Làm trước mọi thứ khác.**

### 1.1 Thống nhất ngôn ngữ toàn dự án

Hiện tại UI lẫn lộn tiếng Việt và tiếng Anh (label, placeholder, toast, error message...).

**Việc cần làm:**  
Chọn **một ngôn ngữ duy nhất** — đề xuất tiếng Việt vì đối tượng khách hàng là nội địa.  
Kiểm tra toàn bộ các file component, đặc biệt:
- Button label
- Placeholder input
- Toast / alert message
- Tên tab, tên cột

---

### 1.2 Sửa lỗi encoding (mojibake)

**File:** `test/src/app/components/DesignPrimitives.tsx`

**Việc cần làm:**  
Tìm các chuỗi bị lỗi (ký tự lạ như `Ã`, `â`, `á»`…), thay bằng UTF-8 đúng.  
Lưu file với encoding `UTF-8 without BOM`.

---

### 1.3 Đồng nhất font chữ toàn dự án

🔴 **Làm ngay.**

**File:** `test/src/index.css` hoặc `tailwind.config.js`

Hiện tại nhiều trang đang dùng font không nhất quán — một số chỗ dùng font hệ thống mặc định, một số chỗ dùng Google Fonts riêng lẻ, gây cảm giác rời rạc khi xem toàn trang.

**Việc cần làm:**

Chọn bộ font cố định cho toàn dự án và khai báo một lần duy nhất:

```css
/* index.css */
@import url('https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@300;400;500;600;700&display=swap');

body {
  font-family: 'Be Vietnam Pro', sans-serif;
}
```

Hoặc trong `tailwind.config.js`:

```js
theme: {
  extend: {
    fontFamily: {
      sans: ['Be Vietnam Pro', 'sans-serif'],
    },
  },
},
```

Sau đó kiểm tra và xóa mọi `font-family` inline hoặc class font riêng lẻ còn sót trên từng component.

**Gợi ý font phù hợp brand gốm thủ công:**
- `Be Vietnam Pro` — hiện đại, dễ đọc, hỗ trợ tiếng Việt tốt
- `Lora` — thanh lịch, serif nhẹ, phù hợp brand artisan
- Chỉ dùng tối đa 2 loại: 1 font body + 1 font heading

---

### 1.4 Scale nhỏ element & responsive toàn dự án

🔴 **Làm ngay — ảnh hưởng toàn bộ trang.**

**File:** `test/src/index.css` + `tailwind.config.js` + từng component

Hiện tại các element (card, button, padding, font-size, gap...) đang khá to, khiến mỗi trang hiển thị ít nội dung và mất cân đối khi xem trên màn hình lớn hoặc nhỏ hơn.

---

#### A. Thiết lập base font-size responsive

Thay vì dùng font-size cố định, dùng `clamp()` để tự co giãn theo viewport:

```css
/* index.css */
html {
  font-size: clamp(13px, 1vw, 15px); /* nhỏ hơn mặc định 16px một chút */
}
```

Tất cả đơn vị `rem` trong Tailwind sẽ tự scale theo — không cần sửa từng component.

---

#### B. Checklist sửa nhanh theo từng trang

| Trang | File | Element cần scale nhỏ |
|---|---|---|
| **Tất cả** | `index.css` | Base font-size (xem mục A) |
| **ProductPage** | `ProductPage.tsx` | Card: giảm `p-4→p-3`, ảnh `h-48→h-36`, tên `text-base→text-sm` |
| **WorkshopPage** | `WorkshopPage.tsx` | Card: giảm padding, thumbnail, font heading |
| **HomePage** | `HomePage.tsx` | Hero: giảm `py-24→py-16`, heading `text-5xl→text-3xl` |
| **CartPage** | `CartPage.tsx` | Row item: giảm ảnh `w-20→w-14`, padding dòng |
| **CheckoutPage** | `CheckoutPage.tsx` | Form input: giảm `py-3→py-2`, label `text-sm→text-xs` |
| **PaymentSuccess** | `PaymentSuccess.tsx` | Toàn bộ — xem mục 6.5 |
| **TrackingPage** | `TrackingPage.tsx` | Timeline dot, stage label, card thông tin |
| **StaffAdminPage** | `StaffAdminPage.tsx` | Table row height, badge, tab padding |

---

#### C. Responsive breakpoint — quy tắc chung

Áp dụng nhất quán prefix responsive Tailwind theo thứ tự `mobile-first`:

```
class mặc định (mobile) → sm:640px → md:768px → lg:1024px → xl:1280px
```

**Grid sản phẩm — hiển thị nhiều hơn trên màn lớn:**

```tsx
// ProductPage
<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
  {products.map(p => <ProductCard key={p.id} {...p} />)}
</div>
```

**Container chính — không để quá rộng:**

```tsx
<div className="max-w-6xl mx-auto px-4 sm:px-6">
```

**Heading co giãn theo màn hình:**

```tsx
<h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold">
```

**Button — không full-width trên desktop:**

```tsx
<Button className="w-full sm:w-auto px-6 py-2 text-sm">
```

---

#### D. Mục tiêu sau khi sửa

Kiểm tra bằng DevTools Chrome ở các breakpoint:
- `375px` — iPhone SE
- `768px` — iPad
- `1280px` — Laptop thông thường
- `1440px` — Màn hình lớn

Kết quả mong đợi: ProductPage hiển thị **4 cột** trên 1280px, **3 cột** trên 768px, **2 cột** trên mobile.

---

### 1.5 Chọn một source duy nhất

Repo đang có 2 cây source: `src/` và `test/src/`. Chọn `test/` làm source chính.

**Việc cần làm:**  
Rename `src/` thành `src_archive/` hoặc xóa hẳn.  
Cập nhật `README.md` gốc ghi rõ entry point là `test/`.

---

## 2. Trang Home

**File:** `test/src/app/components/HomePage.tsx`

### 2.1 Dọn bố cục

| Vị trí | Vấn đề | Việc cần làm |
|---|---|---|
| Khung thứ 2 | Thừa, gây rối | Xóa đi |
| CTA cuối trang | Cả 2 nút đều trỏ về `/workshop` | Tách: 1 nút → Workshop, 1 nút → Product |
| Section giới thiệu workshop | Quá dài, trùng với trang Workshop | Cân nhắc thay bằng link "Xem tất cả workshop →" |

---

## 3. Trang Workshop

**File:** `test/src/app/components/WorkshopPage.tsx`

### 3.1 Bộ lọc

Hiện tại 3 cột lọc chưa đủ thực tiễn và có nội dung trùng.

| Cột lọc hiện tại | Vấn đề | Thay bằng |
|---|---|---|
| Cột 1 | Ổn | Giữ nguyên (lọc theo loại: Pottery / Painting…) |
| Cột 2 | Ổn | Giữ nguyên (lọc theo giá) |
| Cột 3 | "Đắt nhất / Rẻ nhất" — trùng nội dung cột 2 | Thay bằng: **Thời gian** — Tuần này / Tháng này / Tháng sau |
| Thiếu | — | Thêm lọc theo **nhóm khách**: Cá nhân / Gia đình / Nhóm bạn |

### 3.2 Danh sách workshop

- Hiện ít workshop → thêm seed data để danh sách dài hơn.
- Mỗi workshop cần có **trang chi tiết** riêng (nếu chưa đủ nội dung, ưu tiên trang này).

---

## 4. Trang Booking Workshop

**File:** `test/src/app/components/BookingForm.tsx`

### 4.1 Form đặt chỗ

| Vấn đề | Việc cần làm |
|---|---|
| Yêu cầu cả email lẫn SĐT | Chỉ bắt buộc **một trong hai** (email hoặc SĐT) |
| Chưa hiển thị countdown giữ chỗ | Thêm countdown 15 phút ngay sau khi submit form |
| Nút "Workshop" bị sai nghĩa | Đổi thành "Quay lại" hoặc "← Về trang Workshop" |
| Text filter "mọi thời gian / mọi workshop / mọi nhóm khách" | Đổi thành "Tất cả thời gian / Tất cả workshop / Tất cả nhóm khách" |
| Thiếu hình ảnh minh họa | Thêm ảnh workshop, nghệ nhân, không gian studio |

### 4.2 Thông tin booking không được nhập lại ở Checkout

> 📸 *Xem ảnh minh hoạ trong file `HG_tâm_sự_(1).docx` — phần booking form điền tên/SĐT và trang thanh toán yêu cầu điền lại.*

**File:** `test/src/app/components/BookingForm.tsx` + `CheckoutPage.tsx`

Hiện tại khách điền tên và SĐT ở form đặt chỗ workshop, nhưng khi chuyển sang trang Checkout lại phải điền thêm thông tin một lần nữa. Đây là trải nghiệm gây khó chịu.

**Luồng đúng:**

```
BookingForm (điền tên, SĐT/email)
  → lưu vào context/localStorage
    → CheckoutPage tự điền sẵn, không cho chỉnh sửa
      → khách chỉ RÀ SOÁT thông tin, không phải nhập lại
```

**Việc cần làm:**
- Sau khi submit `BookingForm`, lưu `{ name, phone, email }` vào `WorkshopCartContext` hoặc `localStorage` key `tho-booking-contact`.
- `CheckoutPage` đọc dữ liệu này và pre-fill các trường tương ứng.
- Các trường thông tin liên hệ trong Checkout nên ở trạng thái **read-only** (không cho sửa), chỉ hiển thị để xác nhận.
- Nếu khách muốn sửa → thêm link nhỏ "Sửa thông tin" quay về BookingForm.
- Countdown giữ chỗ 15 phút **vẫn phải chạy** xuyên suốt qua trang Checkout.

---

### 4.3 Workshop Custom (điểm cộng)

🟢 Thêm mini game nhỏ: khách click từng bước để "tạo hình" sản phẩm gốm.

**Mục tiêu:** Phục vụ trải nghiệm UI/UX, không cần backend thật.

**Luồng gợi ý:**
```
1. Chọn hình dáng (bát / ly / bình / đĩa)
2. Chọn màu men (trắng / nâu đất / xanh / đen)
3. Chọn họa tiết (trơn / vân gỗ / thủ công)
4. Preview sản phẩm mẫu → nút "Đặt workshop này"
```

**File đề xuất:** `test/src/app/components/WorkshopCustomizer.tsx`

---

## 5. Trang Sản phẩm

**File:** `test/src/app/components/ProductPage.tsx` và `ProductDetailPage.tsx`

### 5.1 Danh sách sản phẩm

| Vấn đề | Việc cần làm |
|---|---|
| Danh sách quá ngắn | Thêm seed data |
| Sản phẩm hết hàng lẫn với có hàng | Tách sản phẩm hết hàng thành dòng riêng cuối danh sách, label `Hết hàng` |
| Chọn nhiều hơn tồn kho | Hiện popup "Chỉ còn X sản phẩm trong kho" thay vì cho tăng số lượng |
| Phân trang | Đánh số trang 1 / 2 / 3 (thay vì load all) |

### 5.2 Card sản phẩm (optional)

- Hiện thị số sao tổng (overall rating) ngay trên card thu nhỏ.
- Thêm nút "Thông báo khi có hàng" với popup nhập email cho sản phẩm hết hàng.

### 5.3 Trang chi tiết sản phẩm

**File:** `test/src/app/components/ProductDetailPage.tsx`

- Bỏ countdown thanh toán (không phù hợp nghiệp vụ mua sản phẩm vật lý).
- Sửa nút "Quay lại" — hiện đang quay về trang checkout thay vì về trang sản phẩm.
- Thêm gallery nhiều ảnh (ít nhất 2–3 góc chụp).

---

## 6. Giỏ hàng & Checkout

### 6.1 Tách 2 giỏ hàng

🔴 **Ưu tiên cao — thầy yêu cầu trực tiếp.**

**File:** `test/src/app/contexts/CartContext.tsx`

Tách thành 2 context riêng:

```
test/src/app/contexts/
├── ProductCartContext.tsx   ← sản phẩm vật lý
└── WorkshopCartContext.tsx  ← vé workshop
```

| Thuộc tính | ProductCart | WorkshopCart |
|---|---|---|
| localStorage key | `tho-product-cart` | `tho-workshop-cart` |
| Phí ship | Có (35.000đ) | Không |
| Yêu cầu địa chỉ | Có | Không |
| Timeout tự xóa | Không | 15 phút giữ chỗ |
| Prefix mã đơn | `ORD-` | `WS-` |

### 6.2 Trang giỏ hàng

**File:** `test/src/app/components/CartPage.tsx`

| Vấn đề | Việc cần làm |
|---|---|
| 2 nút "Quay lại mua sắm" và "Tiếp tục mua sắm" giống nhau | Giữ 1 nút, xóa nút kia |
| 2 nút "Quay lại giỏ hàng" | Xóa bớt 1 |
| Chưa có checkbox chọn từng item | Thêm checkbox — khách tick mặt hàng muốn mua rồi mới checkout |
| Nút quay lại bị lỗi điều hướng | Sửa: quay về `/product` hoặc `/` thay vì về checkout |

### 6.3 Trang Checkout

**File:** `test/src/app/components/CheckoutPage.tsx`

| Vấn đề | Việc cần làm |
|---|---|
| Workshop và sản phẩm dùng chung 1 luồng checkout | Tách: workshop không cần địa chỉ giao hàng |
| Hiện "địa chỉ đề xuất" khi chưa đăng nhập | Ẩn phần này nếu user chưa login |
| Chỉ có 1 loại phí ship nhưng ghi 2 mức giá khác nhau | Chọn 1 mức cố định và ghi rõ thời gian giao hàng (ví dụ: giao trong 3–7 ngày nội thành) |
| Sau khi hủy thanh toán, slot workshop chưa được trả lại ngay | Backend cần release slot khi cancel |
| QR thanh toán hiện ra nhưng không có countdown | Thêm countdown 5 phút ngay dưới QR |
| Chưa tải được biên lai | Thêm nút "Tải biên lai PDF" sau khi thanh toán thành công |
| Thông tin booking bị yêu cầu nhập lại | Pre-fill từ dữ liệu BookingForm, để read-only để khách rà soát — xem mục 4.2 |

### 6.5 Sửa layout trang Thanh toán thành công

🔴 **Làm ngay.**

**File:** `test/src/app/components/PaymentSuccess.tsx`

Trang hiện tại các phần tử đang quá to, chiếm nhiều không gian, nhìn mất cân đối.

**Vấn đề cụ thể:**

| Phần tử | Vấn đề | Hướng sửa |
|---|---|---|
| Icon / illustration thành công | Quá lớn | Giảm xuống còn khoảng `w-16 h-16` hoặc `w-20 h-20` |
| Tiêu đề "Thanh toán thành công" | Font-size quá lớn | Dùng `text-2xl` thay vì `text-4xl` hoặc lớn hơn |
| Mã đơn hàng / barcode | Padding quá rộng | Giảm padding container, căn giữa gọn hơn |
| Thông tin chi tiết đơn | Khoảng cách dòng quá lớn | Giảm `gap` hoặc `mb` giữa các dòng |
| Nút CTA (Về trang chủ, Tracking...) | Nút quá rộng full-width | Đổi thành `w-auto` hoặc `max-w-xs`, căn giữa |

**Hướng sửa tổng thể:**

```tsx
// Thay vì để container full height với padding lớn
<div className="min-h-screen flex items-center justify-center p-8">
  <div className="max-w-md w-full space-y-6">

    {/* Icon nhỏ gọn */}
    <div className="flex justify-center">
      <CheckCircle className="w-16 h-16 text-green-500" />
    </div>

    {/* Tiêu đề vừa phải */}
    <h1 className="text-2xl font-semibold text-center">
      Thanh toán thành công
    </h1>

    {/* Thông tin đơn hàng compact */}
    <div className="bg-gray-50 rounded-lg p-4 space-y-2 text-sm">
      <div className="flex justify-between">
        <span className="text-gray-500">Mã đơn</span>
        <span className="font-medium">ORD-12345</span>
      </div>
      {/* ... các dòng khác tương tự */}
    </div>

    {/* Nút CTA nhỏ gọn, không full-width */}
    <div className="flex gap-3 justify-center">
      <Button variant="outline" size="sm">Về trang chủ</Button>
      <Button size="sm">Theo dõi đơn hàng</Button>
    </div>

  </div>
</div>
```

**Mục tiêu:** Toàn bộ nội dung trang vừa trong màn hình không cần scroll, bố cục gọn và dễ nhìn.

---

### 6.6 Sửa Gift Flow — bỏ form người nhận riêng

> 📸 *Xem ảnh minh hoạ trong file `HG_tâm_sự_(1).docx` — phần chọn "mua làm quà" hiện ra form nhập thông tin người nhận, sau đó vẫn phải nhập lại ở checkout.*

**File:** `test/src/app/components/ProductDetailPage.tsx` + `CheckoutPage.tsx`

Hiện tại khi nhấn "Mua làm quà", hệ thống bắt nhập thông tin người nhận (tên, địa chỉ người được tặng), nhưng sau đó checkout lại yêu cầu nhập địa chỉ giao hàng một lần nữa — gây nhầm lẫn: cuối cùng hàng sẽ giao đến địa chỉ nào?

**Hướng sửa — gộp về 1 luồng đơn giản:**

Bỏ form thông tin người nhận riêng biệt. Thay vào đó:

```
Trang sản phẩm
  → Nút "Thêm vào giỏ" (mặc định)
  → Checkbox / toggle nhỏ: "🎁 Đây là quà tặng"
      → Nếu tick: hiện thêm ô "Ghi chú cho người nhận" (tuỳ chọn)
                  hiện lựa chọn "Thêm giấy gói quà" (checkbox)
  → Checkout bình thường: địa chỉ giao hàng = địa chỉ người mua nhập
```

**Việc cần làm:**
- Xóa màn hình form thông tin người nhận hiện tại.
- Thêm toggle `isGift: boolean` vào `ProductCartContext`.
- Thêm field `giftNote: string` (tuỳ chọn, tối đa 100 ký tự).
- Thêm checkbox `includeWrapping: boolean`.
- Trong trang Checkout, nếu `isGift = true`: hiện thêm section nhỏ "Thông tin quà tặng" gồm ghi chú và tùy chọn gói quà.
- Địa chỉ giao hàng vẫn là địa chỉ của người mua — không tách riêng địa chỉ người nhận (quá phức tạp cho scope demo).

---

### 6.7 Policy

**File:** `test/src/app/components/PolicyPage.tsx`

Bổ sung 2 section riêng biệt:

```
Chính sách vé workshop
- Hủy trước 48h: hoàn 100%
- Hủy trước 24h: hoàn 50%
- Hủy trong ngày: không hoàn
- Đổi lịch: báo trước 24h, còn slot thì miễn phí

Chính sách sản phẩm vật lý
- Đổi trả trong 7 ngày nếu lỗi sản xuất
- Bảo hiểm vỡ khi vận chuyển: hoàn 100% hoặc gửi lại
- Không áp dụng cho sản phẩm custom order
```

---

## 7. Trang Tracking

**File:** `test/src/app/components/TrackingPage.tsx`

### 7.1 UI tìm kiếm

| Vấn đề | Việc cần làm |
|---|---|
| 3 nút phương thức tracking | Bỏ đi, chỉ cần 1 ô tìm kiếm tổng |
| Dòng chú thích hỗ trợ | Giữ lại 1 dòng text nhỏ: "Nhập mã đơn hàng, mã vé hoặc mã theo dõi thành phẩm" |

Khi nhập mã, hệ thống tự nhận diện loại theo prefix:
- `ORD-` → đơn hàng sản phẩm
- `WS-` → vé workshop
- `GOMA-` (hoặc prefix tương tự) → thành phẩm gốm

### 7.2 Timeline trạng thái

Hiện tại timeline còn thiếu và chưa trực quan.

**Trạng thái đơn hàng sản phẩm:**
```
Đã xác nhận → Đang đóng gói → Chờ vận chuyển → Đang giao → Đã nhận → Hoàn thành
```

**Trạng thái thành phẩm gốm (sau workshop):**
```
Đã tham gia workshop → Tạo hình → Phơi khô → Nung sơ → Tráng men → Nung hoàn thiện → Sẵn sàng nhận / giao
```

Mỗi stage hiển thị:
- Thời gian cập nhật
- Tên nhân viên phụ trách (nếu có)
- Ghi chú ngắn từ xưởng

### 7.3 Nút hành động trong tracking

| Nút hiện tại | Trạng thái | Việc cần làm |
|---|---|---|
| Liên hệ studio | Không hoạt động | Sửa hoặc bỏ nếu chưa có tính năng |
| Hướng dẫn bảo quản | Không phù hợp (chưa nhận hàng) | Chỉ hiện khi stage = `Đã nhận` |

### 7.4 Khoảnh khắc workshop (điểm cộng)

🟢 Thêm section "Khoảnh khắc của bạn tại THỔ" trong trang tracking.

- Gallery ảnh demo (staff upload): khách nặn gốm, sản phẩm sau phơi, sau tráng men, thành phẩm.
- Mỗi ảnh có nhãn stage tương ứng.
- Nút "Lưu khoảnh khắc" → lưu vào `localStorage` (demo).
- Khi tracking đến stage `Sẵn sàng`, hiển thị CTA: "Viết cảm nhận" / "Đặt workshop tiếp theo".

**Schema bổ sung:**

```sql
CREATE TABLE tracking_media (
  id          INTEGER PRIMARY KEY AUTOINCREMENT,
  tracking_code TEXT REFERENCES tracking_records(code),
  media_type  TEXT NOT NULL,  -- 'image' | 'video'
  stage       TEXT,
  title       TEXT,
  url         TEXT NOT NULL,
  uploaded_by TEXT,
  created_at  DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

---

## 8. Trang Review

**File:** `test/src/app/components/ReviewPage.tsx`

### 8.1 Hiển thị review

| Vấn đề | Việc cần làm |
|---|---|
| Review chỉ chung toàn bộ, không phân loại | Thêm nhãn nhỏ trên mỗi review: `Sản phẩm` hoặc `Workshop` |
| Chưa phân trang | Thêm phân trang 1 / 2 / 3 |
| Nút "Hữu ích" chưa hoạt động | Implement: click → tăng count, giới hạn 1 lần / người |

### 8.2 Form viết review

| Vấn đề | Việc cần làm |
|---|---|
| Tiêu đề bắt buộc | Đổi thành không bắt buộc; gợi ý tag có sẵn để khách chọn nhanh |
| Chưa có số sao | Thêm input chọn sao (1–5) bắt buộc |
| Chưa cho upload ảnh | Thêm input upload ảnh (tối đa 3 ảnh) |
| Chưa rõ trường nào bắt buộc | Đánh dấu `*` hoặc ghi rõ "Bắt buộc" |

### 8.3 Phân quyền review

```
Khách chưa đăng nhập   → Review được, không cần mã đơn
Khách đã đăng nhập     → Review + nhập mã đơn đã hoàn thành để có badge "Đã mua hàng"
Admin / Staff          → Reply review, xem tất cả review
```

**Việc cần làm:**
- Thêm badge `Đã mua hàng` nếu khách nhập mã đơn hợp lệ và đã hoàn thành.
- Staff/admin thấy nút "Trả lời" dưới mỗi review.
- Reply hiển thị block riêng: "Phản hồi từ THỔ Studio".

### 8.4 Định hướng lại trang Review — community thay vì comment

> 📸 *Xem ảnh minh hoạ trong file `HG_tâm_sự_(1).docx` — trang Review hiện trông giống trang comment bình thường.*

**File:** `test/src/app/components/ReviewPage.tsx`

Hiện tại trang Review trông giống một trang comment thông thường. Góp ý từ nhóm: **chọn 1 trong 2 hướng**, không làm cả hai cùng lúc:

| Hướng | Mô tả | Đặt ở đâu |
|---|---|---|
| **A — Review sản phẩm** | Đánh giá ngắn, số sao, dưới từng sản phẩm cụ thể | Trong trang `ProductDetailPage` |
| **B — Community trải nghiệm** | Khách up ảnh + kể chuyện sau workshop/mua hàng, không chỉ là comment | Trang `/review` riêng |

**Đề xuất:** Chọn hướng B cho trang `/review` — biến nó thành **community feed** kiểu Instagram/Pinterest nhỏ:

```
Layout gợi ý:
┌─────────────────────────────────────────────┐
│  [Ảnh sản phẩm / khoảnh khắc workshop]      │
│  @tên_khách · Workshop Gốm Căn Bản · ⭐⭐⭐⭐⭐ │
│  "Lần đầu làm gốm, mình rất bất ngờ..."     │
│  [👍 Hữu ích 12] [💬 Xem phản hồi]           │
└─────────────────────────────────────────────┘
```

**Việc cần làm:**
- Đổi layout trang `/review` từ danh sách comment → card dạng feed với ảnh nổi bật.
- Mỗi card: ảnh (upload tối đa 3), tên khách, loại trải nghiệm (sản phẩm/workshop), số sao, nội dung ngắn.
- Nút "Chia sẻ trải nghiệm" thay cho "Viết review".
- Staff có thể ghim card nổi bật lên đầu.
- Review ngắn theo sản phẩm (số sao + 1-2 dòng) vẫn đặt trong `ProductDetailPage` — không liên quan đến trang community này.

---

### 8.5 Lọc review

- Thêm lọc theo số sao: 5 sao / 4 sao / 3 sao trở xuống.
- Thêm lọc theo loại: Sản phẩm / Workshop.

**Schema bổ sung:**

```sql
ALTER TABLE reviews ADD COLUMN parent_id    INTEGER REFERENCES reviews(id);
ALTER TABLE reviews ADD COLUMN is_studio_reply BOOLEAN DEFAULT FALSE;
ALTER TABLE reviews ADD COLUMN helpful_count   INTEGER DEFAULT 0;
ALTER TABLE reviews ADD COLUMN review_type     TEXT;    -- 'product' | 'workshop'
ALTER TABLE reviews ADD COLUMN has_verified_purchase BOOLEAN DEFAULT FALSE;
ALTER TABLE reviews ADD COLUMN image_urls      TEXT;    -- JSON array
```

---

## 9. Header & Tìm kiếm

**File:** `test/src/app/App.tsx` hoặc `Header.tsx`

| Vấn đề | Việc cần làm |
|---|---|
| Icon kính lúp trên header dẫn về trang tracking | Bỏ icon này hoặc đổi thành search sản phẩm |
| Chức năng tìm kiếm chung chưa rõ mục tiêu | Nếu giữ: search chỉ tìm sản phẩm + workshop, không phải tracking code |

---

## 10. Chatbot tư vấn workshop

🟡 **IDEA chính — thầy đề xuất trực tiếp.**

**File mới:** `test/src/app/components/WorkshopChatbot.tsx`

### 10.1 Luồng hội thoại

```
Bot: Bạn muốn tạo sản phẩm gốm phong cách nào?
  → [Tối giản] [Màu sắc] [Thô mộc tự nhiên] [Chưa biết]

Bot: Bạn đã từng làm gốm chưa?
  → [Lần đầu] [1–2 lần rồi] [Có kinh nghiệm]

Bot: Mục đích lần này?
  → [Cho bản thân] [Làm quà tặng] [Trang trí nhà] [Thư giãn]

Bot: Bạn có muốn làm sản phẩm cụ thể không? (tự nhập)
  → [Ô text]

→ Hiện gợi ý workshop phù hợp + nút "Đặt chỗ ngay"
```

### 10.2 Lưu dữ liệu

Session chatbot được lưu và gắn với booking để staff/nghệ nhân xem trước khi workshop.

```sql
CREATE TABLE chatbot_sessions (
  id                     INTEGER PRIMARY KEY AUTOINCREMENT,
  session_id             TEXT UNIQUE NOT NULL,
  user_id                INTEGER REFERENCES users(id),
  style_preference       TEXT,   -- minimalist | colorful | rustic | unknown
  experience_level       TEXT,   -- beginner | intermediate | experienced
  purpose                TEXT,   -- self | gift | decor | relaxation
  custom_request         TEXT,
  recommended_workshop_id INTEGER REFERENCES workshops(id),
  created_at             DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

### 10.3 API endpoint

```
POST  /api/v1/chatbot/session          — tạo session mới
PATCH /api/v1/chatbot/session/{id}     — cập nhật câu trả lời từng bước
GET   /api/v1/chatbot/recommend        — lấy workshop gợi ý
GET   /api/v1/staff/chatbot-notes/{booking_id} — staff xem ghi chú trước workshop
```

**File mới:** `test/backend/app/api/routes/chatbot.py`

---

## 11. Đăng nhập mạng xã hội

🟡 **Điểm cộng — phục vụ cá nhân hóa.**

**File đề xuất:** `test/src/app/components/LoginModal.tsx`

### 11.1 UX mục tiêu

- Khách không cần tạo tài khoản dài dòng.
- Click "Tiếp tục với Google / Facebook / Zalo" → mock trả về user demo.
- Header hiển thị avatar nhỏ sau khi đăng nhập.
- Checkout và Review tự điền tên / email từ thông tin đã đăng nhập.

### 11.2 Mock data demo

```typescript
// Khi click "Tiếp tục với Google"
const mockUser = {
  display_name: "Nguyễn Thị Lan",
  email: "lan.nguyen@gmail.com",
  avatar_url: "https://...",
  provider: "google"
};
localStorage.setItem("tho-user", JSON.stringify(mockUser));
```

### 11.3 Schema

```sql
CREATE TABLE users (
  id           INTEGER PRIMARY KEY AUTOINCREMENT,
  email        TEXT UNIQUE,
  display_name TEXT,
  avatar_url   TEXT,
  phone        TEXT,
  created_at   DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE social_logins (
  id               INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id          INTEGER REFERENCES users(id),
  provider         TEXT NOT NULL,          -- google | facebook | zalo
  provider_user_id TEXT NOT NULL,
  display_name     TEXT,
  avatar_url       TEXT,
  email            TEXT,
  created_at       DATETIME DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(provider, provider_user_id)
);
```

---

## 12. Staff Dashboard

**File:** `test/src/app/components/StaffAdminPage.tsx`

### 12.1 Tab Bookings

- Thêm cột "Ghi chú từ chatbot" trong danh sách booking.
- Click vào booking → xem chi tiết: phong cách mong muốn, level, mục đích của khách.

### 12.2 Tab Trackers (thành phẩm gốm)

- Thêm khu "Media khách hàng": staff upload ảnh / thumbnail video theo từng stage.
- Media gắn với `tracking_code` → hiển thị trong trang Tracking của khách.

### 12.3 Tab Thông báo (nếu có thời gian)

```
Review mới chưa đọc
Review rating thấp (1–2 sao) chưa phản hồi
Nút "Trả lời ngay" → chuyển đến review đó
```

---

## 13. Database — Bảng cần thêm/sửa

### 13.1 Tổng hợp

| Bảng | Trạng thái | Việc cần làm |
|---|---|---|
| `users` | Cần tạo | Xem mục 11.3 |
| `social_logins` | Cần tạo | Xem mục 11.3 |
| `chatbot_sessions` | Cần tạo | Xem mục 10.2 |
| `tracking_media` | Cần tạo | Xem mục 7.4 |
| `reviews` | Đã có | Thêm 6 cột — xem mục 8.4 |
| `products` | Đã có | Thêm cột `style_tags TEXT` (JSON array) |
| `tracking_records` | Đã có | Kiểm tra enum trạng thái đủ chưa |
| `workshop_bookings` | Đã có | Thêm FK `chatbot_session_id` |

### 13.2 File SQL cần cập nhật

```
test/db/03_sqlite_schema.sql       ← schema chính
test/backend/db/*.sql              ← seed data
```

### 13.3 ERD tối thiểu cho báo cáo

```
users ──< social_logins
users ──< workshop_bookings ──< ceramic_trackers ──< tracking_records
users ──< orders ──< order_items ──< products
orders ──< tracking_records
workshop_bookings ──< chatbot_sessions
workshops ──< workshop_bookings
reviews ──< reviews (self-ref: reply)
tracking_records ──< tracking_media
```

---

## 14. Checklist tổng hợp

### 🔴 Làm ngay (bắt buộc trước khi nộp)

- [x] **Scale nhỏ element & responsive toàn dự án** — đã có base `clamp()` trong `theme.css`, các trang chính đã compact/responsive.
- [x] **Đồng nhất font chữ toàn dự án** — dùng `Be Vietnam Pro` toàn app trong `theme.css`.
- [x] **Sửa layout trang Thanh toán thành công** — `PaymentSuccess.tsx` đã compact icon, title, barcode, CTA và có tải biên lai.
- [x] Thống nhất toàn bộ ngôn ngữ UI về tiếng Việt — đã rà nhãn hiển thị chính, sửa các cụm còn sót như `Booking`, `Follow us`, `Countdown`, `Stage/Product ID`.
- [x] Sửa encoding mojibake trong `DesignPrimitives.tsx` — đã kiểm tra file hiển thị UTF-8 đúng.
- [x] Chọn `test/` làm source chính, archive `src/` — đã có `src_archive/`, `README.md` gốc ghi entry point là `test/`.
- [x] Xóa khung thứ 2 trên HomePage, sửa 2 CTA cuối — đã kiểm tra HomePage theo luồng hiện tại.
- [x] Sửa bộ lọc WorkshopPage: thay cột 3 thành lọc thời gian, thêm lọc nhóm khách — đã có lọc loại, giá, thời gian, nhóm khách.
- [x] Form Booking: chỉ bắt buộc email hoặc SĐT (không cần cả 2), sửa nút "Workshop" — đã kiểm tra validation và nút "Về trang Workshop".
- [x] Thêm countdown giữ chỗ 15 phút sau khi submit BookingForm — đã có countdown sau submit và lưu contact.
- [x] Tách `CartContext` thành `ProductCartContext` + `WorkshopCartContext` — đã tách localStorage key và logic timeout workshop.
- [x] Sửa giỏ hàng: thêm checkbox chọn item, xóa nút trùng, sửa điều hướng "Quay lại" — đã có chọn từng sản phẩm trước checkout.
- [x] Checkout: tách luồng sản phẩm và workshop, ẩn địa chỉ đề xuất khi chưa login — workshop không yêu cầu địa chỉ, địa chỉ gợi ý chỉ hiện khi có sản phẩm.
- [x] Thêm countdown 5 phút sau khi hiện QR thanh toán — đã có countdown trong modal QR.
- [x] Bổ sung policy riêng cho vé workshop và sản phẩm vật lý — đã có trong `PolicyPage.tsx`.
- [x] Tracking: gộp 3 nút về 1 ô tìm kiếm, thêm timeline trạng thái rõ ràng — đã có ô nhập mã tổng và timeline theo loại tracking.
- [x] Review: thêm nhãn loại, thêm số sao bắt buộc, thêm lọc theo sao / loại — đã triển khai trong `ReviewPage.tsx`.
- [x] Review: đổi layout trang `/review` sang community feed (ảnh + story) — xem mục 8.4.
- [x] Gift flow: bỏ form người nhận riêng, thay bằng toggle "Đây là quà tặng" + ghi chú — đã sửa trong `ProductDetailPage.tsx`, `CartPage.tsx`, `CheckoutPage.tsx`.
- [x] Booking → Checkout: pre-fill thông tin liên hệ, để read-only — đã lưu `tho-booking-contact` vào `localStorage`, checkout đọc lại và khóa field khi thanh toán workshop.
- [x] Sửa icon kính lúp header (bỏ hoặc đổi mục tiêu tìm kiếm) — header hiện không còn icon kính lúp dẫn sai sang tracking.
- [x] Cập nhật schema SQL với các bảng và cột mới — đã cập nhật schema SQLite, schema backend và migration cho DB cũ.

### 🟡 Làm tiếp (nâng điểm)

- [x] Chatbot tư vấn workshop (component + API + lưu DB)
- [x] Hiển thị chatbot notes trong Staff Bookings tab
- [x] Thu thập behavior tags demo và cá nhân hóa HomePage / WorkshopPage
- [x] Mock social login Google / Facebook / Zalo
- [x] Reply review từ Studio + badge "Đã mua hàng"
- [x] Thông báo review mới / rating thấp trong Staff Dashboard
- [x] Timeline gốm trực quan rõ stage trên trang Tracking
- [x] Gallery ảnh khoảnh khắc workshop trong trang Tracking
- [x] Mini vlog workshop trong trang Tracking
- [x] Nút "Lưu khoảnh khắc" → localStorage
- [x] Staff upload media gắn với tracking code
- [ ] Nút "Thông báo khi có hàng" cho sản phẩm hết hàng
- [ ] CTA "Viết cảm nhận / Đặt workshop tiếp theo" khi tracking đến stage hoàn thành

### 🟢 Điểm cộng (nếu còn thời gian)

- [x] Analytics dashboard: doanh thu, tỷ lệ quay lại, khu vực khách hàng
- [x] Gift flow: nút "Mua làm quà" → chọn dịp → gợi ý gift wrapping + thiệp
- [ ] Mini game Workshop Customizer (chọn hình dáng + màu men + họa tiết → preview)

---

*Cập nhật lần cuối: 03/06/2026 — Đã rà checklist bắt buộc, sửa các mục còn lệch scope và chạy kiểm thử: `npm run build` pass, `python -m pytest` pass 8/8.*

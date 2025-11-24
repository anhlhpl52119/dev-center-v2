Thay vì tải 3 file riêng biệt: `Inter-Regular.woff2`, `Inter-SemiBold.woff2`, `Inter-Bold.woff2`, chúng ta sẽ chỉ tải **1 file duy nhất**: `Inter-Variable.woff2`.

Dưới đây là cách cấu hình từng bước:

### 1\. Khai báo `@font-face`

Điểm khác biệt lớn nhất nằm ở thuộc tính `font-weight`. Thay vì để một số cố định, chúng ta khai báo một **khoảng (range)**.

```css
@font-face {
  font-family: 'Inter Var';
  /* Định dạng woff2 là chuẩn nén tốt nhất hiện nay */
  /* format('woff2-variations') giúp trình duyệt hiểu đây là font biến đổi */
  src: url('/fonts/Inter-Variable.woff2') format('woff2-variations');

  /* QUAN TRỌNG: Khai báo khoảng weight mà file này hỗ trợ (từ 100 đến 900) */
  font-weight: 100 900;

  font-style: normal;
  font-display: swap;
}
```

### 2\. Sử dụng trong CSS

Bây giờ bạn có thể dùng bất kỳ số nào từ 100 đến 900, thậm chí là các số lẻ (như 550) mà font tĩnh (static font) không làm được.

```css
/* Sử dụng như bình thường */
body {
  font-family: 'Inter Var', sans-serif;
}

/* Regular */
p {
  font-weight: 400;
}

/* Bold chuẩn */
h1 {
  font-weight: 700;
}

/* ĐẶC BIỆT: Semi-Bold tùy chỉnh */
/* Với font thường, bạn chỉ có 500 hoặc 600. */
/* Với Variable font, bạn có thể chỉnh 550 để vừa mắt nhất */
.button-text {
  font-weight: 550;
}
```

---

### 3\. Ví dụ nâng cao: Animation với Font Weight

Đây là "quyền năng" mà chỉ Variable Font mới làm được: **Hiệu ứng chuyển động độ đậm nhạt mượt mà**.

Nếu bạn làm điều này với font tĩnh, chữ sẽ bị giật cục (từ Regular nhảy bụp sang Bold). Với Variable Font, chữ sẽ "béo lên" từ từ rất đẹp mắt.

```css
.hover-text {
  font-weight: 400;
  transition: font-weight 0.3s ease; /* Hiệu ứng chuyển mượt */
}

.hover-text:hover {
  /* Chữ sẽ đậm dần lên mượt mà khi di chuột vào */
  font-weight: 700;
}
```

### Tóm tắt lợi ích trong ví dụ này

1. **Giảm Request:** Trình duyệt chỉ cần gọi server 1 lần thay vì 3-4 lần.
2. **Tự do thiết kế:** Designer muốn độ đậm là 630 hay 850 đều được, không bị giới hạn ở các mức 400, 500, 700 cứng nhắc.
3. **Trải nghiệm mượt mà:** Các hiệu ứng hover, focus trở nên tinh tế hơn hẳn.

---

## có nên dùng `local()` Không?

Câu trả lời ngắn gọn là: **KHÔNG NÊN**.

Trong phát triển web hiện đại, đặc biệt là khi bạn cần sự chính xác về thiết kế (pixel-perfect) hoặc đang sử dụng Variable Fonts như đã bàn ở trên, việc khai báo `local()` mang lại nhiều rủi ro hơn là lợi ích.

Dưới đây là phân tích chi tiết tại sao bạn nên bỏ qua `local()`:

### 1\. Rủi ro lớn nhất: "Xung đột phiên bản" (Version Mismatch)

Đây là kịch bản ác mộng thường gặp:

- **Trên web:** Bạn dùng font **Inter** phiên bản mới nhất (v4.0) có chỉnh sửa khoảng cách (kerning) và hỗ trợ tiếng Việt cực tốt.
- **Trên máy người dùng:** Họ đã cài sẵn font **Inter** từ 5 năm trước (v1.0) để làm Photoshop, phiên bản này bị lỗi dấu tiếng Việt hoặc nét chữ hơi khác.

Nếu bạn dùng `src: local('Inter'), url(...)`:
\=\> Trình duyệt thấy máy người dùng có font tên là "Inter" -\> **Nó dùng luôn font cũ rích đó**.
\=\> **Hậu quả:** Web của bạn hiển thị lỗi font hoặc xấu tệ trên máy khách hàng, trong khi trên máy bạn vẫn đẹp lung linh. Bạn sẽ không bao giờ debug được lỗi này.

### 2\. Kẻ thù của Variable Fonts

Nếu bạn làm theo lời khuyên trước của tôi là dùng **Variable Font**, thì `local()` là điều tối kỵ.

- **Web:** Bạn khai báo Variable Font (hỗ trợ weight 100-900).
- **Máy người dùng:** Có cài sẵn file Static (chỉ có Bold và Regular).

Khi CSS gọi `font-weight: 550`:

- Font Variable (Web) sẽ hiển thị chính xác độ đậm 550.
- Font Local (Máy người dùng) không hiểu 550 là gì, nó sẽ ép về 400 hoặc 700. Giao diện và hiệu ứng của bạn sẽ bị vỡ hoàn toàn.

### 3\. Tên Font không đồng nhất (Naming Chaos)

Tên font trong máy tính (System name) và tên font bạn gọi trong CSS (PostScript name) đôi khi không khớp nhau giữa Windows, macOS và Linux. Việc đoán đúng tên `local()` để chạy tốt trên mọi hệ điều hành là rất mệt mỏi và dễ sai sót.

---

### So sánh Code: Nên và Không Nên

**❌ Cách cũ (Có rủi ro):**

```css
@font-face {
  font-family: 'Inter Var';
  /* Ưu tiên tìm trong máy người dùng trước -> RỦI RO */
  src:
    local('Inter'),
    local('Inter-Regular'),
    url('/fonts/Inter.woff2') format('woff2');
}
```

**✅ Cách hiện đại (Khuyên dùng):**

```css
@font-face {
  font-family: 'Inter Var';
  /* Bỏ qua máy người dùng, bắt buộc tải font chuẩn từ server */
  /* Đừng lo, trình duyệt sẽ lưu cache (bộ nhớ đệm), user chỉ tải 1 lần thôi */
  src: url('/fonts/Inter-Variable.woff2') format('woff2-variations');
  font-weight: 100 900;
  font-display: swap; /* Giúp chữ hiện ra ngay lập tức bằng font mặc định trước khi font xịn tải xong */
}
```

### Khi nào thì CÓ thể dùng `local`?

Trường hợp duy nhất bạn nên dựa vào local là khi bạn dùng **System Fonts Stack** (Font mặc định của hệ thống) để tối ưu tốc độ tuyệt đối và không quan tâm lắm đến vẻ đẹp riêng biệt. Ví dụ:

```css
/* Không cần @font-face, khai báo trực tiếp */
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
```

**Tóm lại:** Để đảm bảo mọi người dùng đều nhìn thấy chính xác những gì bạn thiết kế, hãy **bỏ qua `local()`** và chấp nhận tốn một chút băng thông tải font từ server về.

**Kế tiếp, bạn có muốn tôi chia sẻ cách sử dụng `font-display: swap` để trang web không bị trắng trơn (FOIT) khi mạng chậm trong lúc đang tải font không?**

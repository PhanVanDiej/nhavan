# Làng lồng đèn Phú Bình

Website giới thiệu tĩnh gồm ba trang: Trang chủ, Câu chuyện làng nghề và Lồng đèn truyền thống. Dự án dùng HTML, CSS và JavaScript thuần, không có backend hay bước build.

## Mở website

Mở `index.html` trực tiếp hoặc chạy bằng VS Code Live Server. Website dùng ảnh địa phương ở `assets/images/`; GSAP + ScrollTrigger và font chữ được tải từ CDN khi có kết nối mạng. Nếu CDN không sẵn có, nội dung và điều hướng vẫn hoạt động, font có fallback hệ thống và các hiệu ứng nâng cao sẽ được bỏ qua.

## Cấu trúc

```text
index.html                              # Trang chủ
pages/cau-chuyen-lang-nghe.html         # Câu chuyện làng nghề
pages/long-den-truyen-thong.html        # Lồng đèn truyền thống
styles/site.css                         # Biến thiết kế, thành phần và responsive
scripts/site.js                         # Menu, header cuộn và animation
assets/images/main_cover.jpg            # Ảnh hero dùng chung
context/                                # Context thiết kế và ảnh tham khảo
AGENTS.md                               # Quy ước chung cho các lần triển khai tiếp theo
```

## Thành phần dùng chung

Các trang dùng chung header/nav, wordmark, hero, button/link, container, footer, font và biến màu trong `styles/site.css`. Các giá trị nhận diện nằm trong `:root` để dễ tinh chỉnh. Menu mobile và animation được xử lý trong `scripts/site.js`.

Các trang khung cũ (`pages/about.html`, `pages/destinations.html`, `pages/experiences.html`) chưa được nối vào điều hướng mới.

# Context trang chủ — Làng lồng đèn Phú Bình

Đọc thêm quy ước chung trong [`../AGENTS.md`](../AGENTS.md) trước khi triển khai.

## Mục đích

Giới thiệu nhanh làng nghề, tạo cảm giác chào đón và dẫn người xem tới hai trang nội dung: Câu chuyện làng nghề và Lồng đèn truyền thống. Đây là trang đầu vào của website, không phải trang đăng ký hay bán hàng.

## Cấu trúc đề xuất

1. **Header chung**: wordmark bên trái, ba tab điều hướng theo thứ tự Trang chủ / Câu chuyện làng nghề / Lồng đèn truyền thống; trạng thái Trang chủ đang chọn.
2. **Hero**: ảnh giàu màu sắc về lồng đèn/nghệ nhân làm nền, phủ lớp tối đỏ để chữ rõ. Tiêu đề chính “Làng lồng đèn Phú Bình”, đoạn giới thiệu ngắn và có thể có liên kết khám phá nội dung. Trên desktop đặt chữ lệch trái, chừa phần ảnh nổi bật bên phải; trên mobile xếp chữ gọn phía dưới/trên vùng ảnh dễ đọc.
3. **Lời chào từ làng nghề**: section nền đỏ `#731515`, lời dẫn ngắn căn giữa, có nhịp điệu trang trọng và thân tình.
4. **Một vài dấu mốc**: ba con số/nhãn như tuổi nghề, mẫu lồng đèn, công đoạn có thể theo bố cục mockup. Chỉ điền số liệu sau khi được cung cấp hoặc kiểm chứng; không để placeholder hoặc tự tạo số.
5. **Lối vào hai chủ đề**: các khối ảnh và liên kết đến Câu chuyện làng nghề và Lồng đèn truyền thống. Có thể giữ một khối khám phá/ảnh làng nghề nếu nó bổ sung nội dung và không làm điều hướng vượt quá ba trang chính.
6. **Thông tin tham quan**: mockup gợi ý bảng địa chỉ và giờ mở cửa. Chỉ hiển thị khi có dữ liệu xác thực; nếu chưa có, bỏ khối hoặc để nội dung biên tập chờ cung cấp trong quá trình triển khai, không đoán địa chỉ/giờ.
7. **Hình ảnh làng nghề**: gallery ảnh nhiều cột trên desktop, ít cột hơn trên tablet/mobile. Dùng ảnh thực tế và alt mô tả.
8. **Footer gọn**: tên làng nghề và các liên kết ba trang; không thêm biểu mẫu hoặc khu vực tài khoản.

## Tông và trình bày

Ấm áp, tự hào và gần gũi. Nền sáng kem/ivory cho phần khám phá và gallery, xen section đỏ rượu vang làm điểm neo thị giác. Các con số nổi bật nhưng không lấn át câu chuyện. Nút dạng viền hoặc nền tương phản, chữ ngắn và rõ.

## Bố cục mobile

- Thiết kế ưu tiên viewport `390 × 844 px`, bảo đảm hiển thị từ chiều rộng `320 px`; kiểm tra thêm `360 × 800 px`.
- Ở breakpoint mobile `≤ 640 px`, header dùng menu gọn nếu ba nhãn điều hướng không vừa; hero xếp tiêu đề và đoạn dẫn trên ảnh theo vùng dễ đọc, không thu nhỏ chữ quá mức.
- Ba dấu mốc xếp thành hàng ba chỉ khi còn đủ chỗ đọc; nếu không, chuyển thành lưới 1–2 cột. Khối lối vào chủ đề và thông tin tham quan xếp dọc; gallery dùng 2 cột ở chiều rộng phù hợp và 1 cột ở màn hình hẹp.
- Kiểm tra tablet `768 × 1024 px` và desktop `1440 × 900 px`; các section không được kéo rộng quá mức.

## Nội dung cần chuẩn bị khi triển khai

- Ảnh hero, ảnh gallery và ảnh đại diện cho hai trang chủ đề.
- Lời giới thiệu chính thức, số liệu làng nghề và thông tin tham quan nếu muốn hiển thị.
- Giữ nguyên tắc chung: không để lorem ipsum, nhãn “*hình”, số liệu giả hoặc dữ kiện lịch sử chưa xác minh trong bản bàn giao.

# Context trang Câu chuyện làng nghề

Đọc thêm quy ước chung trong [`../AGENTS.md`](../AGENTS.md) trước khi triển khai.

## Mục đích

Kể về nguồn gốc và con người làm nên làng nghề, theo nhịp đọc tĩnh, giàu hình ảnh. Trang tập trung vào di sản và nghệ nhân; không biến nội dung thành bài quảng cáo.

## Cấu trúc đề xuất

1. **Header chung**: wordmark và ba liên kết điều hướng; mục “Câu chuyện làng nghề” đang chọn.
2. **Hero ảnh**: ảnh lồng đèn/nghệ nhân phủ lớp tối đỏ. Tiêu đề “Về làng nghề” hoặc “Câu chuyện làng nghề”, đoạn dẫn ngắn, chiều rộng vừa phải. Trên màn hình rộng đặt chữ bên trái và giữ chi tiết ảnh ở bên phải.
3. **Câu chuyện nguồn gốc**: section nền `#731515`, tiêu đề lớn và các cột nội dung ngắn trên desktop. Nội dung cần có tiêu đề/đoạn văn biên tập thật; không dùng lorem ipsum hoặc tuyên bố lịch sử chưa được cung cấp.
4. **Các chân dung nghệ nhân**: chuỗi các khối ảnh và bài viết luân phiên trái/phải như PNG. Mỗi khối có ảnh vuông hoặc gần vuông, bóng/viền lệch nhẹ màu đỏ trầm, tên hoặc nhãn chân dung và một đoạn kể chuyện. Không tự gán tên “Nghệ nhân 1” cho người thật; dùng tên đã xác nhận hoặc cách gọi biên tập được duyệt.
5. **Kết thúc trang**: footer ngắn với các liên kết điều hướng chung. Có thể thêm liên kết sang trang Lồng đèn truyền thống nếu mạch nội dung phù hợp.

## Tông và trình bày

Trang có hai nhịp: phần mở đầu và nguồn gốc đậm, sâu trên nền đỏ; phần chân dung thoáng trên nền kem ấm. Dùng tiêu đề serif thanh lịch, đoạn văn sans-serif dễ đọc, ảnh nghệ nhân làm trọng tâm. Các hàng chân dung đảo vị trí trên desktop nhưng xếp cùng một cột trên mobile, giữ thứ tự đọc tự nhiên.

## Bố cục mobile

- Ưu tiên viewport `390 × 844 px`, hỗ trợ chiều rộng tối thiểu `320 px`; kiểm tra thêm `360 × 800 px`.
- Ở mobile (`≤ 640 px`), hero giảm chiều cao hợp lý để tiêu đề và đoạn dẫn không che mất chủ thể ảnh. Phần nguồn gốc chuyển từ hai cột sang một cột.
- Các chân dung nghệ nhân xếp ảnh trước, nội dung sau trong một cột; bỏ đảo trái/phải để giữ thứ tự đọc rõ. Giảm khoảng cách dọc vừa đủ, không ép chữ thành cột hẹp.
- Kiểm tra tablet `768 × 1024 px` và desktop `1440 × 900 px`; trên tablet chỉ giữ bố cục hai cột nếu ảnh và nội dung vẫn đủ rộng.

## Tương tác và nội dung

Chỉ cần cuộn trang và liên kết điều hướng. Không cần carousel, tài khoản hay biểu mẫu. Nếu thêm hiệu ứng xuất hiện khi cuộn, cần hoạt động tốt khi JavaScript tắt hoặc khi người dùng bật giảm chuyển động; nội dung không được phụ thuộc vào animation mới hiện ra.

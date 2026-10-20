# Ngữ cảnh thiết kế website làng nghề lồng đèn

## Mục tiêu và phạm vi

- Đây là website giới thiệu tĩnh về làng nghề lồng đèn Phú Bình, gồm đúng ba trang chính: Trang chủ, Câu chuyện làng nghề và Lồng đèn truyền thống.
- **Phạm vi yêu cầu chỉnh sửa**: mặc định chỉ sửa đúng một vị trí/thành phần mà người dùng chỉ định. Không tự áp dụng cùng thay đổi cho các trang hoặc thành phần tương tự ở nơi khác. Chỉ mở rộng phạm vi khi người dùng nói rõ “toàn bộ”, nêu các trang/vị trí khác, hoặc yêu cầu dùng chung.
- Không xây dựng đăng nhập, tài khoản, database, API, thanh toán, CMS hay chức năng quản trị. Nội dung và dữ liệu trang được viết trực tiếp trong các tài liệu HTML.
- Mã nguồn hiện tại là khung tạo trước và không còn là chỉ dẫn thiết kế. Khi bắt đầu triển khai, làm lại giao diện theo tài liệu context và ba PNG tham chiếu; không cố giữ các trang Điểm đến/Trải nghiệm/Giới thiệu chỉ vì chúng đang tồn tại.
- Đọc file context phù hợp trước khi triển khai một trang:
  - `context/main.md`
  - `context/cau-chuyen-lang-nghe.md`
  - `context/long-den-truyen-thong.md`

## Ngôn ngữ thiết kế

- Dùng tiếng Việt có dấu cho nội dung và giao diện. Tên ba mục điều hướng là “Trang chủ”, “Câu chuyện làng nghề”, “Lồng đèn truyền thống”.
- Cảm giác tổng thể: văn hóa thủ công, giàu chất nghệ thuật, ấm áp và trang nhã; bố cục hiện đại, gọn, dễ đọc. Tránh vẻ giao diện bán hàng, dashboard hoặc du lịch đại trà.
- Màu chủ đạo là đỏ rượu vang `#731515`. Dùng các sắc đỏ trầm/đỏ nâu cho nền nhấn; nền sáng ngà/kem ấm cho các vùng nội dung dài; chữ sáng trên nền tối và chữ than trên nền sáng.
- Không bê nguyên màu xanh lá chói trong các mockup. Có thể dùng màu vàng lồng đèn dịu làm điểm nhấn nhỏ nếu cần; màu đỏ `#731515` phải giữ vai trò nhận diện chính.
- Chữ tiêu đề mang nét mỹ thuật/thanh lịch, ưu tiên serif có dấu tiếng Việt tốt (ví dụ Cormorant Garamond hoặc Playfair Display nếu được tải và kiểm tra đủ glyph). Chữ nội dung dùng sans-serif sạch, dễ đọc (ví dụ Be Vietnam Pro). Có fallback hệ thống phù hợp; không để font trang trí làm giảm độ rõ của đoạn dài.
- Ảnh lồng đèn thủ công, nghệ nhân, quy trình và không gian làng nghề là trọng tâm. Dùng ảnh thật phù hợp, cắt ảnh có chủ đích; không để placeholder “*hình” hay lorem ipsum xuất hiện trong bản hoàn thiện. Không tự bịa tư liệu lịch sử, tên nghệ nhân, số liệu, địa chỉ hoặc thông tin giờ mở cửa.

## Bố cục và thành phần dùng chung

- Header điều hướng nằm trên đầu trang, có logo/wordmark bên trái và ba liên kết trang ở bên phải nhưng nằm gần vùng giữa hơn để chừa khoảng thở phía mép phải. Trên hero ảnh, header có thể phủ lên ảnh với nền đỏ bán trong suốt; giữ tương phản đủ đọc.
- Logo hiện chưa được cung cấp: dùng wordmark chữ giản dị làm tạm, không tự vẽ biểu trưng chính thức. Trỏ logo về Trang chủ.
- Header dùng cùng thứ tự điều hướng trên cả ba trang; chỉ báo trang hiện tại bằng trạng thái dễ nhận biết, không chỉ dựa vào màu.
- Dùng một hệ thống container có chiều rộng đọc thoải mái, khoảng cách section nhất quán và lưới co giãn theo viewport. Không kéo dòng văn bản quá dài trên màn hình lớn.
- Thành phần dùng chung: header/nav, hero ảnh có lớp phủ, tiêu đề section, nút/link dạng viền, lưới ảnh, khối nội dung ảnh-văn bản và footer gọn. Chỉ tạo component/code dùng chung khi phù hợp cấu trúc HTML/CSS thuần của dự án.
- Ảnh cần có alt tiếng Việt mô tả đúng nội dung; ảnh trang trí dùng alt rỗng. Link và nút phải có tên rõ ràng, trạng thái hover/focus nhìn thấy được, điều hướng bằng bàn phím được.

## Chuyển động và thích ứng

- **Viewport tham chiếu**: ưu tiên thiết kế/kiểm tra mobile ở `390 × 844 px`; đảm bảo bố cục dùng được từ `320 px` chiều rộng trở lên. Kiểm tra thêm `360 × 800 px`, tablet dọc khoảng `768 × 1024 px`, desktop `1440 × 900 px` và màn hình rộng `1920 × 1080 px`. Đây là kích thước viewport CSS, không phải độ phân giải vật lý của thiết bị.
- **Breakpoint khởi điểm**: mobile `≤ 640 px`, tablet `641–1023 px`, desktop `≥ 1024 px`. Có thể tinh chỉnh theo nội dung thực tế, nhưng không để xuất hiện tràn ngang ở các chiều rộng trung gian.
- Trên mobile, gom điều hướng thành nút menu truy cập được (có tên, trạng thái mở/đóng và hỗ trợ bàn phím) nếu ba nhãn không vừa một hàng; khi menu mở, vẫn giữ nguyên ba liên kết và thứ tự. Trên tablet/desktop, hiển thị điều hướng đầy đủ trong header.
- Chuyển động nhẹ và có chủ đích: fade/translate ngắn khi nội dung vào vùng nhìn, hover ảnh/nút rất nhẹ, cuộn mượt chỉ cho liên kết neo khi phù hợp. Ưu tiên CSS; không thêm thư viện animation lớn.
- Tôn trọng `prefers-reduced-motion`; không dùng parallax mạnh, hiệu ứng lặp gây xao nhãng hoặc animation làm chậm việc đọc.
- Thiết kế responsive từ màn hình nhỏ: nav không tràn, các cột nội dung xếp thành một cột, timeline chuyển thành một trục dễ theo dõi, gallery giảm số cột; ảnh không méo và nút đủ vùng chạm.
- Duy trì độ tương phản, thứ bậc tiêu đề hợp lý và ngữ nghĩa HTML. Tránh dùng màu làm cách duy nhất để truyền tải trạng thái.

## Lựa chọn thư viện và nền tảng

- Giữ HTML/CSS/JavaScript thuần, không thêm bundler chỉ để dùng hiệu ứng.
- Dùng GSAP core `3.15.0` cùng `ScrollTrigger` cho timeline vào trang, reveal khi cuộn và chuyển động ảnh có kiểm soát. Phiên bản cần ghim giống nhau ở mọi trang. Nếu CDN không tải được hoặc người dùng bật giảm chuyển động, nội dung vẫn phải hiển thị đầy đủ và không phụ thuộc vào animation.
- Không dùng smooth-scroll thay thế cuộn trình duyệt, không pin/jack cuộn nội dung dài và không cài thêm plugin GSAP trừ khi có yêu cầu cụ thể.
- Dùng SVG nội tuyến cho các biểu tượng nhỏ trong giao diện. Không cần bộ icon font/toàn thư viện cho số lượng icon ít; giữ nét vẽ đồng nhất, `aria-hidden="true"` cho icon trang trí và tên rõ ràng cho điều khiển.
- Dùng biến CSS trong `:root` cho bảng màu, font, gutter, chiều rộng nội dung và nhịp chuyển động. Style button, text link, header/nav, hero và footer phải tái sử dụng giữa ba trang.

## Giới hạn triển khai

- Giữ nền tảng website tĩnh HTML/CSS/JavaScript thuần, không cần bước build hay backend.
- Tương tác được phép chỉ phục vụ duyệt nội dung (liên kết giữa ba trang, cuộn tới section, mở ảnh nếu thật sự cần). Không tạo form gửi dữ liệu hay tính năng cần lưu trạng thái người dùng.
- Ba PNG của người dùng là bản tham khảo bố cục và phong cách nội dung, không phải yêu cầu sao chép nguyên pixel. Thông số màu đỏ `#731515` và định hướng font ở yêu cầu của người dùng được ưu tiên khi mockup thể hiện màu/font khác.
- Trang tham khảo `https://quan5xinchao.vn/` chưa truy cập được trong lúc chuẩn bị context; không suy diễn chi tiết từ trang đó. Dùng các PNG và yêu cầu chữ làm nguồn thiết kế đã xác nhận.

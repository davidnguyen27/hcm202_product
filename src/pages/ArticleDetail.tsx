import { useParams } from 'react-router-dom';
import { FaRegNewspaper, FaArrowLeft } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const articles = [
  {
    id: 1,
    title: "Tư tưởng Hồ Chí Minh về độc lập dân tộc gắn liền với chủ nghĩa xã hội",
    excerpt: "Tư tưởng độc lập dân tộc không chỉ là thoát khỏi ách đô hộ mà còn hướng tới tự do, hạnh phúc của nhân dân...",
    content: `
1. Độc lập dân tộc gắn liền với chủ nghĩa xã hội - Con đường tất yếu của cách mạng Việt Nam trong thời đại mới
Giữa thế kỷ XIX, thực dân Pháp nổ súng xâm lược nước ta, độc lập dân tộc bị xâm phạm, trong tình hình đó, triều đình nhà Nguyễn trong thì sợ nhân dân, ngoài thì bạc nhược trước kẻ thù, lúc đầu có chống cự yếu ớt, sau đã từng bước nhân nhượng cầu hoà, cuối cùng là cam chịu đầu hàng để giữ lấy ngai vàng và lợi ích riêng của hoàng tộc. Năm 1883 và 1884, triều đình nhà Nguyễn lần lượt ký các hàng ước với thực dân Pháp, nước ta bị đặt dưới ách thống trị của chúng. Mặc dầu bị đặt vào tình thế phải chống “cả triều lẫn Tây" nhưng nhân dân ta với tinh thần yêu nước nhiệt thành và chí căm thù giặc sôi sục đã dấy lên phong trào vũ trang kháng chiến chống Pháp rầm rộ và lan rộng trong cả nước: từ Trương Định, Nguyễn Trung Trực… ở miền Nam; Trần Tấn, Đặng Như Mai, Nguyễn Xuân Ôn, Phan Đình Phùng... ở miền Trung đến Nguyễn Thiện Thuật, Hoàng Hoa Thám, Nguyễn Quang Bích… ở miền Bắc. Nhưng các cuộc khởi nghĩa này đều bị thất bại vì chưa có một đường lối kháng chiến đúng đắn; lãnh đạo khởi nghĩa là các sĩ phu văn thân với ý thức hệ phong kiến mang nặng tư tưởng tôn quân.

Sang đầu thế kỷ XX, phong trào yêu nước chống thực dân Pháp của nhân dân ta chuyển sang xu hướng dân chủ tư sản. Tiêu biểu cho xu hướng này có các phong trào Đông Du, Đông Kinh nghĩa thục, Duy Tân, Việt Nam Quang phục hội... Các phong trào này chưa lôi cuốn được mọi tầng lớp nhân dân, tư tưởng dân chủ tư sản chưa có cơ sở xã hội vững chắc. Do vậy phong trào chỉ rộ lên được một thời gian ngắn rồi lần lượt bị đàn áp và thất bại.

Khi phong trào chống sưu thuế ở Huế và các tỉnh miền Trung, trong đó có Hồ Chí Minh tham gia bị đàn áp (1908) cũng là lúc các phong trào yêu nước chống Pháp ở thời điểm cực kỳ khó khăn, bế tắc. Đứng trước cuộc khủng hoảng con đường cứu nước, Hồ Chí Minh xác định: “Tôi muốn đi ra nước ngoài xem nước Pháp và các nước khác. Sau khi xem xét họ làm như thế nào, tôi sẽ trở về giúp đồng bào chúng ta”(1).

Đầu tháng 6-1911, Hồ Chí Minh xuống làm phụ bếp trên chiếc tàu Pháp mang tên Amiran Latusơ Tơrêvin của hãng Năm Sao đang cập bến cảng Nhà Rồng (Sài Gòn). Ngày 5/6/1911, con tàu rời Sài Gòn đi Pháp, Hồ Chí Minh bắt đầu một cuộc hành trình lịch sử - đi tìm con đường cứu nước, con đường giải phóng.

Xuất phát từ lòng yêu nước ra đi tìm đường cứu nước, trải qua gần 10 năm đầy gian truân và thử thách, Hồ Chí Minh đã đi khắp các châu lục khảo sát nhiều nước thuộc địa và các nước tư bản phát triển Mỹ, Anh, Pháp... Người nhận rõ: chủ nghĩa đế quốc là một hệ thống thế giới, chúng vừa tranh giành, xâu xé thuộc địa, vừa vào hùa với nhau để nô dịch các dân tộc nhỏ yếu trong hệ thống thuộc địa của chúng. Mỗi thuộc địa là một mắt khâu của chủ nghĩa đế quốc, do vậy cuộc đấu tranh giải phóng dân tộc của mỗi nước chỉ tiến hành riêng rẽ thì không thể giành thắng lợi.

Cuối năm 1917, Hồ Chí Minh từ Anh về Pari, thủ đô nước Pháp, một trung tâm văn hoá khoa học và cách mạng của châu Âu. Hồ Chí Minh hoạt động trong phong trào công nhân Pari, đến với phái tả của cách mạng Pháp, gia nhập Đảng Xã hội Pháp, một chính đảng bênh vực các thuộc địa.

Năm 1919, nhân danh những người yêu nước Việt Nam, Hồ Chí Minh gửi tới Hội nghị hoà bình Vécxây bản Yêu sách của nhân dân An Nam đối các quyền tự do, dân chủ tối thiểu cho Việt Nam. Yêu sách đó không được chấp nhận. Người đã rút ra bài học “muốn được giải phóng, các dân tộc chỉ có thể trông cậy vào bản thân mình”.

Hồ Chí Minh nghiên cứu những cuộc cách mạng xã hội lớn trên thế giới. Với cách mạng giải phóng dân tộc năm 1776 của Mỹ và cách mạng nhân quyền và dân quyền Pháp năm 1789, Người rút ra kết luận: cách mạng Pháp và cách mạng Mỹ là cách mạng tư sản, cách mạng không đến nơi, không giải phóng những người lao động mà lại đi áp bức các dân tộc khác. Cách mạng Việt Nam không thể đi theo con đường đó.

Đầu tháng Mười năm 1917, cách mạng vô sản Nga thành công. Tháng 3 năm 1919,  Lênin sáng lập Quốc tế Cộng sản. Rồi nhà nước Xôviết chiến thắng cuộc chiến tranh can thiệp của 14 nước đế quốc. Từ năm 1920 tiếng vang và ảnh hưởng của cuộc Cách mạng tháng Mười lan rộng ra châu Âu và toàn thế giới. Nghiên cứu Cách mạng tháng Mười Nga năm 1917, Hồ Chí Minh nhận rõ: chỉ có Cách mạng tháng Mười Nga mới thành công đến nơi, mang lại tự do bình đẳng thật cho tất cả nhân dân lao động và giúp đỡ giải phóng các dân tộc thuộc địa. Hồ Chí Minh đi đến kết luận: Cách mạng Việt Nam phải đi theo con đường Cách mạng Tháng Mười Nga - con đường cách mạng vô sản.

Tháng 7-1920, Người đọc Sơ thảo lần thứ nhất những luận cương về vấn đề dân tộc và vấn đề thuộc địa của Lênin đăng trên báo L’Humanité. Luận cương của Lênin đã giúp Hồ Chí Minh tìm ra “cái cẩm nang thần kỳ cho sự nghiệp cứu nước, giải phóng dân tộc” - con đường giải phóng dân tộc theo quỹ đạo cách mạng vô sản. Con đường đó được Hồ Chí Minh khẳng định rõ ràng trong những văn kiện thông qua tại Hội nghị hợp nhất ngày 3-2-1930 “làm tư sản dân quyền cách mệnh và thổ địa cách mệnh để đi tới xã hội cộng sản”. Sự xác định trên đây của Hồ Chí Minh là một sáng tạo lớn về con đường cách mạng ở một nước thuộc địa nửa phong kiến. Đó là con đường giải phóng dân tộc một cách triệt để, con đường độc lập dân tộc gắn liền với chủ nghĩa xã hội. Đó là kết quả tất yếu quá trình tìm đường cứu nước của Hồ Chí Minh. Đây là sự lựa chọn duy nhất đúng, phù hợp với đòi hỏi và nguyện vọng của dân tộc, nhân dân Việt Nam, phù hợp với xu thế phát triển của thời đại mới, mở ra từ Cách mạng Tháng Mười Nga năm 1917.

2. Độc lập dân tộc gắn liền với chủ nghĩa xã hội - nội dung cốt lõi xuyên suốt toàn bộ tư tưởng Hồ Chí Minh

Độc lập dân lộc gắn liền với chủ nghĩa xã hội thể hiện sự nhất quán trong tư duy lý luận và hoạt động thực tiễn của Hồ Chí Minh. Từ khi trở thành người cộng sản cho đến khi trở thành lãnh tụ, nguyên thủ quốc gia, mối quan tâm hàng đầu của Hồ Chí Minh là gắn độc lập dân tộc với chủ nghĩa xã hội phù hợp với từng thời kỳ của cách mạng Việt Nam. Hồ Chí Minh chỉ rõ các bài viết của Người chỉ có một “đề tài” là: chống thực dân đế quốc, chống phong kiến địa chủ, tuyên truyền độc lập dân tộc và chủ nghĩa xã hội.

Độc lập dân tộc gắn liền với chủ nghĩa xã hội thể hiện một cách tập trung những luận điểm sáng tạo lớn về lý luận của Hồ Chí Minh. Những luận điểm đó có giá trị lâu dài chỉ đạo đường lối cách mạng Việt Nam và đóng góp quan trọng vào việc phát triển lý luận về cách mạng vô sản. Đảng Cộng sản Việt Nam khẳng định: “Trong khi giải quyết những vấn đề của cách mạng Việt Nam, Chủ tịch Hồ Chí Minh đã góp phần phát triển chủ nghĩa Mác - Lênin trên nhiều vấn đề quan trọng, đặc biệt là lý luận về cách mạng giải phóng dân tộc và tiến lên chủ nghĩa xã hội ở các nước thuộc địa và phụ thuộc”(2).

Độc lập dân tộc gắn liền với chủ nghĩa xã hội là sự phản ánh chính xác mục đích, lý tưởng, khát vọng và ham muốn tột bậc của danh nhân văn hoá Hồ Chí Minh: nước ta được hoàn toàn độc lập, dân ta được hoàn toàn tự do, đồng bào ta ai cũng có cơm ăn, áo mặc, ai cũng được học hành.

Độc lập dân tộc gắn liền với chủ nghĩa xã hội phản ánh tính triệt để cách mạng của tư tưởng Hồ Chí Minh. Tư tưởng đó đặt vấn đề giải phóng con người, hạnh phúc của con người ở mục tiêu cao nhất của sự nghiệp cách mạng.

II- NHỮNG NỘI DUNG CƠ BẢN CỦA TƯ TƯỞNG HỒ CHÍ MINH VỀ ĐỘC LẬP DÂN TỘC GẮN LIỀN VỚI CHỦ NGHĨA XÃ HỘI

1. Mối quan hệ giữa độc lập dân tộc với tiến lên chủ nghĩa xã hội

1.1. Độc lập dân tộc là mục tiêu trực tiếp, trước hết, là cơ sở tiền đề để tiến lên chủ nghĩa xã hội

Theo Hồ Chí Minh, con đường cách mạng Việt Nam có hai giai đoạn: cách mạng dân tộc dân chủ nhân dân và cách mạng xã hội chủ nghĩa. Trong cách mạng dân tộc dân chủ có hai nhiệm vụ chiến lược cơ bản, trong đó giải phóng dân tộc là nhiệm vụ hàng đầu, nhiệm vụ dân chủ được rải ra thực hiện từng bước và phục tùng nhiệm vụ giải phóng dân tộc. Vì thế, ở giai đoạn cách mạng dân tộc dân chủ thì độc lập dân tộc là mục tiêu trực tiếp, trước mắt, cấp bách. Kết luận này được Hồ Chí Minh rút ra từ sự phân tích tình hình thực tế và những mâu thuẫn khách quan tồn tại của xã hội Việt Nam thuộc địa nửa phong kiến.

Lịch sử phát triển loài người chứng tỏ, độc lập dân tộc là khát vọng mang tính phổ biến. Với dân tộc Việt Nam, đó còn là một giá trị thiêng liêng, được bảo vệ và giữ gìn bởi máu xương, sức lực của biết bao thế hệ người Việt Nam.

Với Hồ Chí Minh, độc lập dân tộc bao hàm trong đó cả nội dung dân tộc và dân chủ. Đó là nền độc lập thật sự, độc lập hoàn toàn, chứ không phải là thứ độc lập giả hiệu, độc lập nửa vời, độc lập hình thức. Trong tư tưởng Hồ Chí Minh, độc lập dân tộc phải gắn liền với thống nhất, chủ quyền và toàn vẹn lãnh thổ của đất nước, độc lập dân tộc bao giờ cũng gắn với tự do, dân chủ, ấm no hạnh phúc của nhân dân lao động.

Khi nhấn mạnh mục tiêu độc lập dân tộc, Hồ Chí Minh không bao giờ coi đó là mục tiêu cuối cùng của cách mạng Việt Nam. Trong tư tưởng Hồ Chí Minh, giành độc lập để đi tới xã hội cộng sản; độc lập dân tộc phải gắn liền với chủ nghĩa xã hội. Độc lập dân tộc là mục tiêu cốt yếu, trực tiếp của cách mạng dân tộc dân chủ, là mục tiêu trước hết của quá trình cách mạng Việt Nam do Đảng Cộng sản lãnh đạo, đồng thời là điều kiện hàng đầu, quyết định để cách mạng dân tộc dân chủ nhân dân chuyển sang giai đoạn kế tiếp - cách mạng xã hội chủ nghĩa. Do vậy, cách mạng dân tộc dân chủ càng triệt để thì những điều kiện tiến lên chủ nghĩa xã hội càng được tạo ra đầy đủ. Tính chất tạo tiền đề của cách mạng dân tộc dân chủ được thể hiện:

- Về chính trị: xác định và xây dựng các yếu tố của hệ thống chính trị do giai cấp công nhân lãnh đạo.

- Về kinh tế: bước đầu xây dựng được các cơ sở kinh tế mang tính chất xã hội chủ nghĩa, từng bước cải thiện đời sống nhân dân.

- Về văn hoá, xã hội, đời sống tinh thần: trong cách mạng dân tộc dân chủ, khối quần chúng công - nông - trí thức và các giai tầng xã hội khác đã có ý thức giác ngộ, đoàn kết trong một mặt trận dân tộc thống nhất; những nhân tố mới của văn hoá, giáo dục đã được hình thành dưới ánh sáng của chủ nghĩa Mác - Lênin và tư tưởng Hồ Chí Minh.

Tóm lại, độc lập dân tộc tạo tiền đề, điều kiện để nhân dân lao động tự quyết định con đường đi tới chủ nghĩa xã hội, dưới sự lãnh đạo của Đảng Cộng sản.

Theo tư tưởng Hồ Chí Minh, trong thời đại mới chủ nghĩa xã hội là xu hướng phát triển tất yếu của cách mạng dân tộc dân chủ nhân dân. Điều này làm cho con đường cứu nước giải phóng dân tộc của Hồ Chí Minh khác biệt về chất với con đường cứu nước những năm đầu thế kỷ ở nước ta và nhiều nhân vật nổi tiếng trên thế giới.

Cách mạng Việt Nam thuộc phạm trù cách mạng vô sản. Điều đó quyết định vai trò lãnh đạo cách mạng tất yếu thuộc về giai cấp công nhân mà đội tiên phong của nó là Đảng Cộng sản Việt Nam. Lực lượng tiến hành cách mạng giải phóng dân tộc là toàn dân Việt Nam yêu nước mà nòng cốt là khối liên minh công - nông - trí thức. Những nhân tố này lại quy định tính tất yếu dẫn đến phương hướng phát triển lên chủ nghĩa xã hội của cách mạng giải phóng dân tộc. Rõ ràng định hướng đi lên chủ nghĩa xã hội của cách mạng dân tộc dân chủ nhân dân ở Việt Nam được chi phối và chế định bởi các nhân tố bên trong của cuộc cách mạng đó.

1.2. Chủ nghĩa xã hội là con đường củng cố vững chắc độc lập dân tộc, giải phóng dân tộc một cách hoàn toàn triệt để

Về lý luận, độc lập dân tộc tiến lên chủ nghĩa xã hội thể hiện mối quan hệ giữa mục tiêu trước mắt và mục tiêu cuối cùng; mối quan hệ giữa hai giai đoạn của một quá trình cách mạng. Lôgíc lịch sử khách quan cho thấy: thực hiện mục tiêu trước mắt là điều kiện tiên quyết để đi tới mục tiêu cuối cùng và chỉ thực hiện được mục tiêu cuối cùng thì mục tiêu trước mắt mới củng cố vững chắc một cách hoàn toàn, triệt để. Giữa hai giai đoạn cách mạng không có bức tường ngăn cách, cách mạng dân tộc dân chủ xác lập cơ sở, tiền đề cho cách mạng xã hội chủ nghĩa, cách mạng xã hội chủ nghĩa khẳng định và bảo vệ vững chắc nền độc lập dân tộc.

Theo Hồ Chí Minh, độc lập dân tộc bao giờ cũng gắn liền với đời sống ấm no, hạnh phúc của quần chúng nhân dân, những người đã trực tiếp làm nên thắng lợi của cách mạng dân tộc dân chủ. Để đảm bảo vững chắc độc lập dân tộc, để không rơi vào lệ thuộc, đói nghèo lạc hậu, chặng đường tiếp theo chỉ có thể là đi lên chủ nghĩa xã hội. Do những đặc trưng nội tại của mình, chủ nghĩa xã hội sẽ củng cố những thành quả đã giành được trong cách mạng dân tộc dân chủ, tạo điều kiện để bảo đảm cho độc lập và phát triển dân tộc.

Tư tưởng độc lập dân tộc của Hồ Chí Minh mang một nội dung sâu sắc, triệt để: độc lập tự do, ấm no, hạnh phúc. Chủ nghĩa xã hội không chỉ củng cố những giá trị nêu trên, mà còn làm phong phú thêm về mặt nội dung, xác lập các điều kiện để hiện thực hoá các nội dung đó. Hồ Chí Minh khẳng định: chỉ có chủ nghĩa xã hội, chủ nghĩa cộng sản mới giải phóng triệt để các dân tộc bị áp bức khỏi ách nô lệ; chỉ có cách mạng xã hội chủ nghĩa mới bảo đảm cho một nền độc lập thật sự, chân chính.

Chủ nghĩa xã hội theo tư tưởng Hồ Chí Minh là một xã hội tốt đẹp, xoá bỏ mọi áp bức, bóc lột; công bằng hợp lý - làm nhiều hưởng nhiều, làm ít hưởng ít, không làm không hưởng; bảo đảm phúc lợi cho người già, trẻ mồ côi; một xã hội có nền sản xuất phát triển gắn liền với sự phát triển khoa học - kỹ thuật và không ngừng nâng cao đời sống vật chất, tinh thần của nhân dân lao động. Đó là một xã hội có kỷ cương, đạo đức, văn minh trong đó người với người là bạn bè, đồng chí, anh em, mọi người được phát triển hết khả năng của mình; hòa bình hữu nghị, làm bạn với các nước; một xã hội do nhân dân lao động làm chủ dưới sự lãnh đạo của Đảng Cộng sản.

Theo Hồ Chí Minh, xây dựng chủ nghĩa xã hội chính là xây dựng tiềm lực phát triển của dân tộc trên tất cả các lĩnh vực chính trị, kinh tế, văn hoá, xã hội. Với các thiết chế đó và nền tảng tinh thần riêng có, chủ nghĩa xã hội có khả năng vận động liên tục, tự bảo vệ vững chắc các thành quả cách mạng của nhân dân. Trên phạm vi quốc tế, chủ nghĩa xã hội lớn mạnh sẽ có sức hấp dẫn thu hút các dân tộc, đặc biệt các dân tộc chậm phát triển đi theo con đường chủ nghĩa xã hội; mặt khác chủ nghĩa xã hội sẽ là bệ đỡ của hoà bình thế giới, hạn chế và ngăn chặn các cuộc chiến tranh đế quốc, chiến tranh xâm lược, xoá bỏ tình trạng dân tộc này đi áp bức dân tộc khác.

Hồ Chí Minh chỉ rõ, chủ nghĩa xã hội càng phát triển, càng đạt đến độ chín muồi thì các tiềm lực, nhất là tiềm lực vật chất kỹ thuật của dân tộc càng mạnh, đất nước càng có điều kiện củng cố độc lập của mình, tăng cường khả năng phòng thủ. Không có một chế độ xã hội nào có thể đảm bảo vững chắc độc lập dân tộc bằng chủ nghĩa xã hội. Trong toàn bộ cấu trúc nội tại của mình, chủ nghĩa xã hội thể hiện khả năng tự bảo vệ và biết cách bảo vệ.

Hồ Chí Minh khẳng định, trong chủ nghĩa xã hội, nhân dân lao động là người chủ duy nhất. Đó là sự khác biệt về chất giữa chủ nghĩa xã hội với các chế độ xã hội trước đó. Chế độ dân chủ là chế độ do nhân dân làm chủ, dân chủ là vấn đề thuộc bản chất của nhà nước ta. Theo Hồ Chí Minh, dân chủ xã hội chủ nghĩa phải được phát huy trên tất cả các lĩnh vực, phải được thể chế hoá bằng pháp luật, được hoàn thiện, nâng cao trong quá trình phát triển kinh tế, xã hội và nâng cao dân trí. Đây là điều kiện cơ bản và quyết định vận mệnh của dân tộc, tạo ra sức đề kháng trên phạm vi xã hội, loại trừ và có khả năng chống trả bất kỳ một hành động nào đe dọa độc lập, tự do của dân tộc. Thực hiện được một xã hội như vậy thì độc lập dân tộc mới thực sự vững chắc, sự nghiệp giải phóng dân tộc mới thắng lợi một cách hoàn toàn và triệt để.

2. Những điều kiện bảo đảm cho độc lập dân tộc gắn liền với chủ nghĩa xã hội trong quá trình cách mạng Việt Nam

Độc lập dân tộc tiến lên chủ nghĩa xã hội ở Việt Nam là một tất yếu lịch sử. Nhưng để hiện thực hóa tính tất yếu này, theo Hồ Chí Minh cần phải có những điều kiện cơ bản sau đây:

Trước hết, Hồ Chí Minh khẳng định, xác lập, tăng cường vai trò lãnh đạo và sức chiến đấu của Đảng Cộng sản là điều kiện cơ bản để độc lập dân tộc gắn liền với chủ nghĩa xã hội. Không có sự lãnh đạo của Đảng Cộng sản thì cách mạng Việt Nam không thể vận động theo cách mạng vô sản và chắc chắn sự nghiệp độc lập dân tộc sẽ đi theo vết xe đổ của các phong trào cứu nước trước đó. Một khi Đảng Cộng sản đánh mất vai trò lãnh đạo thì chế độ xã hội chủ nghĩa sẽ sụp đổ, cách mạng bị phản bội và hoàn toàn chệch hướng. Thực tiễn ở Liên Xô và các nước Đông Âu, đầu những năm 90 của thế kỷ XX đã chứng tỏ điều đó.

Hồ Chí Minh chỉ ra rằng, với tư cách là điều kiện cơ bản bảo đảm để độc lập dân tộc tiến lên chủ nghĩa xã hội, vai trò lãnh đạo của Đảng Cộng sản được thể hiện trên các mặt chủ yếu sau đây:

- Hoạch định cương lĩnh, đường lối, chủ trương để đưa sự nghiệp của dân tộc phát triển đúng định hướng xã hội chủ nghĩa.

- Lãnh đạo xã hội, trước hết là lãnh đạo nhà nước thực hiện thắng lợi cương lĩnh độc lập dân tộc gắn liền với chủ nghĩa xã hội bằng cách thông qua tổ chức và đội ngũ cán bộ, đảng viên của mình.

- Thông qua công tác kiểm tra, kể cả kiểm tra trong nội bộ Đảng và lãnh đạo công tác kiểm tra trong các tổ chức của hệ thống chính trị để lãnh đạo toàn dân giành độc lập dân tộc đi lên chủ nghĩa xã hội.

Hồ Chí Minh chỉ rõ vai trò lãnh đạo cách mạng của Đảng Cộng sản Việt Nam mang tính khách quan. Để hoàn thành sứ mệnh của mình, Đảng phải trong sạch, vững mạnh và thường xuyên chỉnh đốn để nâng cao năng lực lãnh đạo, sức chiến đấu, đủ trí tuệ, đủ bản lĩnh vượt qua những thử thách gay gắt nhất, phải thực hiện xây dựng Đảng về mọi mặt: chính trị, tư tưởng và tổ chức, trong đó công tác cán bộ bao giờ cũng là vấn đề cốt tử.

Hai là, xây dựng, củng cố và tăng cường khối liên minh giai cấp công nhân, nông dân và trí thức làm nền tảng khối đại đoàn kết dân tộc.

Quan niệm của Hồ Chí Minh về lực lượng cách mạng Việt Nam trong quá trình thực hiện cách mạng dân tộc dân chủ nhân dân tiến lên chủ nghĩa xã hội là hết sức sáng tạo. Người xác định: công - nông là gốc, là chủ lực của cách mạng, các giai tầng, cá nhân yêu nước là bầu bạn của cách mạng. Khi đất nước bước vào xây dựng chủ nghĩa xã hội Người đòi hỏi công nông trí thức đoàn kết lại. Tất cả được tập hợp trong Mặt trận dân tộc thống nhất.

Hồ Chí Minh cho rằng trong cách mạng dân tộc dân chủ cũng như cách mạng xã hội chủ nghĩa đều cần đến và không thể thiếu được Mặt trận dân tộc thống nhất. Mặt trận được xây dựng theo tư tưởng Hồ Chí Minh có hạt nhân cốt lõi là liên minh công - nông và trí thức để đoàn kết toàn dân thành một khối. Hạt nhân và toàn dân là mối quan hệ biện chứng được Hồ Chí Minh quan tâm đúng mức cả hai, không coi nhẹ hoặc thiên lệch bên nào. Mặt trận đó được đặt dưới sự lãnh đạo của Đảng Cộng sản Việt Nam.

Ba là, Hồ Chí Minh chỉ rõ Việt Nam là một bộ phận của thế giới, cách mạng Việt Nam và cách mạng thế giới liên hệ chặt chẽ với nhau. Suốt cuộc đời hoạt động cách mạng của mình, Hồ Chí Minh luôn có những chủ trương, đường lối và biện pháp phù hợp để tranh thủ sự ủng hộ, giúp đỡ của các lực lượng cách mạng, hoà bình dân chủ trên thế giới. Thắng lợi của cách mạng Việt Nam Tháng Tám 1945, trong những năm chống Pháp, chống Mỹ, trong thời kỳ hoà bình, xây dựng và bảo vệ Tổ quốc đều không tách rời sự ủng hộ, giúp đỡ quốc tế.

Ba nhân tố nêu trên gắn bó chặt chẽ với nhau tạo nên sức mạnh tổng hợp quyết định mọi thắng lợi của cách mạng Việt Nam. Hồ Chí Minh kết luận: “Đó là ba bài học lớn mà mỗi cán bộ và đảng viên ta cần ghi sâu vào lòng và phát huy thêm mãi”(3).

Như vậy, độc lập dân tộc gắn liền với chủ nghĩa xã hội là một tất yếu khách quan. Tính tất yếu đó chỉ được hiện thực hoá khi gắn liền với những điều kiện bảo đảm, trong đó yếu tố quan trọng nhất là xác lập và tăng cường vai trò lãnh đạo của Đảng Cộng sản Việt Nam.

3. Sự thể hiện trên thực tế tư tưởng Hồ Chí Minh về độc lập dân tộc gắn liền với chủ nghĩa xã hội

Tư tưởng Hồ Chí Minh về độc lập dân tộc gắn liền với chủ nghĩa xã hội ra đời và phát triển ở thời đại quá độ từ chủ nghĩa tư bản lên chủ nghĩa xã hội trên phạm vi thế giới. Tư tưởng đó hình thành ở Hồ Chí Minh từ đầu những năm 20 và đến mùa xuân năm 1930 với sự kiện Hồ Chí Minh sáng lập Đảng Cộng sản Việt Nam thì con đường cách mạng độc lập dân tộc gắn liền với chủ nghĩa xã hội đã thành ngọn cờ dẫn dắt giai cấp công nhân và toàn thể dân tộc Việt Nam liên tục giành những thắng lợi lịch sử suốt hơn 70 năm qua. Tư tưởng Hồ Chí Minh về độc lập dân tộc gắn liền với chủ nghĩa xã hội được thể hiện trên thực tế, có thể chia ra làm ba thời kỳ.

3.1. Thời kỳ 1930-1945: ở thời kỳ này tư tưởng độc lập dân tộc gắn liền với chủ nghĩa xã hội được thể hiện qua những hoạt động lý luận và thực tế chủ yếu sau đây của Hồ Chí Minh:

- Xác định tính chất cách mạng Việt Nam: giải phóng dân tộc bằng con đường cách mạng vô sản, gắn giải phóng dân tộc với giải phóng giai cấp, nhân dân lao động, với toàn thể dân tộc bị nô lệ dưới ách đế quốc Pháp và tay sai của chúng; xác định nhiệm vụ, mục tiêu của cách mạng Việt Nam “làm tư sản dân quyền cách mạng và thổ địa cách mạng để đi tới xã hội cộng sản”. Con đường cách mạng Việt Nam được Hồ Chí Minh thể hiện rõ nét trong Cương lĩnh chính trị đầu tiên của Đảng.

- Xác định đối tượng đấu tranh của cách mạng Việt Nam là đế quốc xâm lược, phong kiến tay sai, tầng lớp tư sản và địa chủ chống lại độc lập dân tộc.

- Xác định rõ lực lượng cách mạng Việt Nam là toàn thể nhân dân, bao gồm công nhân, nông dân, tầng lớp tiểu tư sản, tư sản dân tộc, trung, tiểu địa chủ, các cá nhân yêu nước, trong đó nòng cốt là liên minh công - nông. Lực lượng cách mạng hùng hậu này được tập hợp dưới ngọn cờ giải phóng dân tộc do đảng của giai cấp công nhân lãnh đạo.

- Xác định đúng đắn cách mạng giải phóng dân tộc ở Việt Nam là một bộ phận của cách mạng vô sản thế giới, có mối quan hệ khăng khít với cách mạng vô sản “chính quốc”, cách mạng giải phóng dân tộc có tính chủ động, có thể giành thắng lợi trước cách mạng vô sản “chính quốc", tác động tích cực tới cách mạng “chính quốc".

Dưới sự lãnh đạo trực tiếp của Hồ Chí Minh, Cách mạng Tháng Tám 1945 đã giành thắng lợi. Đó là thắng lợi lịch sử đầu tiên của tư tưởng Hồ Chí Minh về con đường cách mạng giải phóng dân tộc thuộc phạm trù cách mạng vô sản. Thắng lợi này đã mở ra kỷ nguyên độc lập dân tộc gắn liền với chủ nghĩa xã hội.

3.2. Thời kỳ 1945-1954: thời kỳ bảo vệ độc lập dân tộc và xây dựng những cơ sở đầu tiên của chủ nghĩa xã hội, thực hiện “kháng chiến và kiến quốc”.

Ở thời kỳ này Hồ Chí Minh tiếp tục bổ sung, phát triển những quan điểm lý luận về con đường cách mạng Việt Nam. Nội hàm khái niệm cách mạng dân tộc dân chủ nhân dân, chế độ dân chủ mới đã được Hồ Chí Minh làm rõ bằng cách xác định mục tiêu, động lực, các điều kiện bảo đảm thắng lợi của từng giai đoạn cách mạng, trong mỗi giai đoạn đều kết hợp giải quyết các nhiệm vụ dân tộc, dân chủ và chủ nghĩa xã hội, tạo tiền đề đẩy cách mạng phát triển lên giai đoạn cao hơn nhưng cũng khó khăn phức tạp hơn. Để thực hiện mục tiêu cách mạng, Hồ Chí Minh kiên trì quan điểm phát huy cao độ ý thức độc lập tự chủ, tự lực tự cường, đi đôi với ra sức tranh thủ sự ủng hộ và giúp đỡ quốc tế.

Nét độc đáo, đặc sắc trong tư tưởng Hồ Chí Minh về con đường cách mạng Việt Nam ở thời kỳ này là Người đã đề ra và thực thi nhất quán đường lối “vừa kháng chiến, vừa kiến quốc”. Đường lối đó phù hợp với quy luật phát triển lịch sử dân tộc: dựng nước đi đôi với giữ nước, bảo vệ độc lập của Tổ quốc và xây dựng từng bước chế độ mới.

Trong hoàn cảnh hiểm nghèo, Hồ Chí Minh đã vận dụng một cách linh hoạt, mềm dẻo phương pháp “dĩ bất biến, ứng vạn biến”, kiên trì mục tiêu độc lập dân tộc, phân hoá, cô lập kẻ thù, tăng cường sức mạnh đoàn kết toàn dân, tranh thủ được sự giúp đỡ, ủng hộ của quốc tế. Tài thao lược, bản lĩnh kiên cường, khả năng quyết đoán của Hồ Chí Minh dựa trên sự hiểu biết thấu đáo thực tiễn đất nước, quy luật và xu thế phát triển của dân tộc, thời đại, vững vàng lái con thuyền cách mạng Việt Nam đến bến bờ thắng lợi huy hoàng.

3.3. Thời kỳ 1954-1975: thời kỳ Hồ Chí Minh tiếp tục hoàn thiện, bổ sung, phát triển tư tưởng về độc lập dân tộc gắn liền với chủ nghĩa xã hội trong điều kiện mới. Ở thời kỳ này sáng tạo lý luận của Hồ Chí Minh thể hiện tập trung trong việc xây dựng và chỉ đạo đường lối tiến hành đồng thời hai nhiệm vụ chiến lược: xây dựng chủ nghĩa xã hội ở miền Bắc, hoàn thành cách mạng dân tộc dân chủ ở miền Nam, thống nhất Tổ quốc, đưa cả nước đi lên chủ nghĩa xã hội. Quan điểm, tư tưởng nêu trên được thể hiện ở các nội dung chính sau đây:

- Trung thành với chủ nghĩa Mác - Lênin, Hồ Chí Minh đã giải quyết đúng đắn thành công mối quan hệ giữa cách mạng hai miền. Trong mối quan hệ này, Hồ Chí Minh xác định rất rõ vị trí, vai trò nhiệm vụ cách mạng từng miền và tác động lẫn nhau của chúng. Về thực chất, đây là sự cụ thể hoá nội dung con đường cách mạng vô sản, sự gắn bó chặt chẽ giữa nhiệm vụ dân tộc, dân chủ với chủ nghĩa xã hội - con đường mà Hồ Chí Minh đã đề xuất và kiên trì bảo vệ.

- Hồ Chí Minh tiếp tục hoàn chỉnh và phát triển lý luận về cách mạng giải phóng dân tộc, xác định rõ kẻ thù số một mà dân tộc ta cần tập trung mọi lực lượng để đánh đổ là đế quốc Mỹ. Hồ Chí Minh nêu tư tưởng “không có gì quý hơn độc lập tự do” thể hiện ý chí, quyết tâm lớn lao của cả dân tộc trong việc bảo vệ giá trị thiêng liêng, bất khả xâm phạm. Về tập hợp lực lượng, Hồ Chí Minh có những quan niệm và cách làm sáng tạo, trên cơ sở đánh giá đúng vị trí, vai trò của chiến lược đại đoàn kết trong chiến tranh cách mạng. Hồ Chí Minh đã xây dựng cho cách mạng Việt Nam cái nền sức mạnh của “ba tầng mặt trận”: Mặt trận dân tộc thống nhất Việt Nam chống Mỹ, cứu nước; Mặt trận ba nước Đông Dương cùng chống Mỹ; Mặt trận nhân dân thế giới ủng hộ nhân dân Việt Nam chống Mỹ. Sức mạnh của “ba tầng mặt trận" đã tạo cho cách mạng Việt Nam trở thành vô địch.

- Hồ Chí Minh tiếp tục hoàn thiện lý luận cách mạng dân tộc dân chủ nhân dân tiến lên chủ nghĩa xã hội. Hồ Chí Minh đã xây dựng một quan niệm tương đối hoàn chỉnh, thống nhất về chủ nghĩa xã hội và con đường đi lên chủ nghĩa xã hội ở nước ta. Quan niệm của Hồ Chí Minh chủ nghĩa xã hội mang tính hệ thống, có nhiều nội dung phát triển sáng tạo, nhưng vẫn trung thành với chủ nghĩa Mác - Lênin. Hồ Chí Minh đã làm rõ đặc điểm lớn nhất của Việt Nam khi bước vào thời kỳ quá độ lên chủ nghĩa xã hội, mối quan hệ giữa tính phổ biến và tính đặc thù của công cuộc xây dựng chủ nghĩa xã hội trong phạm vi một nước. Đặc biệt, Hồ Chí Minh đã có những chỉ dẫn khoa học về những cách thức, phương thức, biện pháp, bước đi thực hiện công cuộc xây dựng chủ nghĩa xã hội ở Việt Nam.

Ngày 2-9-1969, Chủ tịch Hồ Chí Minh qua đời. Biến đau thương thành hành động cách mạng, toàn Đảng, toàn dân, toàn quân ta quán triệt sâu sắc quan điểm của Người tiếp tục xây dựng chủ nghĩa xã hội ở miền Bắc, giải phóng miền Nam thống nhất tổ quốc. Thông qua chiến dịch mang tên Hồ Chí Minh, sự nghiệp cách mạng đó đã giành thắng lợi trọn vẹn vào ngày 30-4-1975.

III- VẬN DỤNG TƯ TƯỞNG HỒ CHÍ MINH VỀ ĐỘC LẬP DÂN TỘC GẮN LIỀN VỚI CHỦ NGHĨA XÃ HỘI TRONG SỰ NGHIỆP ĐỔI MỚI

1. Thực hiện hai nhiệm vụ chiến lược: xây dựng chủ nghĩa xã hội đi đôi với bảo vệ Tổ quốc xã hội chủ nghĩa

Đại hội Đảng toàn quốc lần thứ IV - đại hội thống nhất Tổ quốc, cả nước đi lên chủ nghĩa xã hội đã khẳng định: "Trong quá trình lãnh đạo cách mạng, khi cả nước làm một nhiệm vụ chiến lược hoặc làm hai nhiệm vụ chiến lược, Đảng ta từ khi ra đời đến nay vẫn luôn luôn giương cao ngọn cờ độc lập dân tộc và chủ nghĩa xã hội, đó là đường lối, là sức mạnh, là nguồn gốc mọi thắng lợi của cách mạng Việt Nam". Cương lĩnh xây dựng đất nước trong thời kỳ quá độ lên chủ nghĩa xã hội do Đại hội VII thông qua đã khẳng định trong thời kỳ đổi mới: "Toàn Đảng, toàn dân tiếp tục nắm vững ngọn cờ độc lập, dân tộc và chủ nghĩa xã hội, ngọn cờ vinh quang mà Chủ tịch Hồ Chí Minh đã trao lại cho thế hệ hôm nay và thế hệ mai sau”.

Hiện nay, cuộc đấu tranh vì độc lập dân tộc và chủ nghĩa xã hội ở Việt Nam vẫn đang tiếp diễn. Đảng ta khẳng định: "Trong giai đoạn đổi mới, phải giữ vững mục tiêu độc lập dân tộc và chủ nghĩa xã hội”(4). Trong bất kỳ tình huống nào cũng phải thực hiện thắng lợi hai nhiệm vụ chiến lược: xây dựng thành công chủ nghĩa xã hội và bảo vệ vững chắc Tổ quốc Việt Nam xã hội chủ nghĩa.

Trong quan hệ quốc tế phức tạp, chằng chéo như hiện nay, để thực hiện thắng lợi hai nhiệm vụ chiến lược của cách mạng nước ta, đòi hỏi phải có nhận thức sâu sắc các yếu tố tác động đến độc lập dân tộc và chủ nghĩa xã hội.

Chiến tranh lạnh trên thế giới kết thúc, hoà bình, hợp tác phát triển là xu thế chung, nhưng cuộc đấu tranh dân tộc và giai cấp vẫn diễn biến phức tạp, gay gắt. Nguy cơ xung đột vũ trang và chiến tranh cục bộ vẫn chưa bị loại trừ; mâu thuẫn dân tộc, sắc tộc, tôn giáo, tranh chấp lãnh thổ nổ ra ở nhiều nơi và gây mất ổn định nhiều khu vực. Chủ nghĩa đế quốc đang lợi dụng ưu thế về kinh tế và kỹ thuật, nhân danh chống khủng bố, để thực hiện chiến lược “diễn biến hoà bình” can thiệp vào công việc nội bộ các nước, buộc các nước xã hội chủ nghĩa, các nước đang phát triển đi vào quỹ đạo của chúng. Hiện nay giao lưu kinh tế, giao lưu văn hoá giữa các dân tộc tăng lên. Trong khi giao lưu văn hoá phát triển mạnh mẽ, thì các nước đang phát triển cũng đứng trước sự “xâm lăng văn hoá” từ phía các nước đế quốc. Trong bối cảnh hiện nay, quan niệm về độc lập dân tộc và chủ nghĩa xã hội phải được chú ý toàn diện từ độc lập về lãnh thổ, về chủ quyền an ninh quốc gia đến độc lập, tự do về kinh tế, chính trị, văn hóa, lối sống và đạo đức xã hội. Không thể có và không thể chấp nhận quan niệm nhân quyền cao hơn chủ quyền quốc gia. Việc rêu rao nhân quyền của các nước tư bản, trước hết là Mỹ, thực chất là một hình thức mỵ dân, lấy cớ nhân quyền đề can thiệp vào công việc nội bộ nước khác. Không thể có độc lập tự do về chính trị nếu bị lệ thuộc về kinh tế. Không thể giữ vững độc lập tự chủ nếu lối sống, đạo đức xã hội bị suy thoái, văn hoá dân tộc bị coi rẻ hoặc bị biến dạng. Để thực hiện tốt hai nhiệm vụ chiến lược hiện nay cần chú ý một số nguyên tắc có tính chất phương pháp luận:

- Xây dựng thành công xã hội xã hội chủ nghĩa, bảo vệ vững chắc độc lập dân tộc trước hết phải bằng nguồn nội lực của đất nước, không lệ thuộc vào bên ngoài, nhưng phải biết tranh thủ các điều kiện quốc tế thuận lợi để gia tăng nguồn lực phát triển quốc gia. Kết hợp sức mạnh dân tộc và sức mạnh thời đại theo tư tưởng Hồ Chí Minh để thực hiện thành công hai nhiệm vụ chiến lược.

- Trên cơ sở nhận thức toàn cầu hoá, khu vực hoá và kinh tế là một tất yếu khách quan, từ đó xác định rõ các bước đi và chủ động hội nhập phù hợp với năng lực của đất nước. Hội nhập phải làm tăng sức mạnh đất nước và làm giàu bản sắc dân tộc.

- Độc lập dân tộc gắn bó chặt chẽ với chủ nghĩa xã hội phải được thể hiện trong suốt quá trình cách mạng trên mọi lĩnh vực của sự nghiệp xây dựng và bảo vệ Tổ quốc.

2. Giữ vững định hướng xã hội chủ nghĩa trong tiến trình đổi mới

Ngày nay, độc lập dân tộc và chủ nghĩa xã hội chỉ có thể có được nếu Đảng và nhân dân ta giải quyết thành công hàng loạt vấn đề trên tất cả các lĩnh vực: kinh tế, chính trị, văn hoá, xã hội, đối nội và đối ngoại theo định hướng xã hội chủ nghĩa, trung thành với con đường Hồ Chí Minh đã vạch ra. Đảng ta khẳng định trong bất kỳ tình huống nào, cũng phải giữ vững định hướng xã hội chủ nghĩa, kiên quyết đề phòng và chống nguy cơ chệch hướng xã hội chủ nghĩa.

Hiện nay, đang xuất hiện nhiều vấn đề lý luận nằm trong tổng thể quan niệm chung về chủ nghĩa xã hội ở Việt Nam. Nhu cầu phát triển đất nước đang đặt ra, đòi lại phải nhận diện và hiểu biết về chủ nghĩa xã hội vừa mang tính tổng thể, vừa trong những chi tiết, đường nét cụ thể. Do vậy, giữ vững định hướng xã hội chủ nghĩa theo tư tưởng Hồ Chí Minh, trước hết cần làm sáng tỏ các vấn đề cơ bản sau:

- Cả trong lý luận và thực tiễn cần khẳng định vấn đề định hướng đưa đất nước đi lên chủ nghĩa xã hội là duy nhất đúng đắn, phù hợp với nguyện vọng của dân tộc và xu thế thời đại.

- Làm rõ và cụ thể hoá mục tiêu của đổi mới theo định hướng xã hội chủ nghĩa là dân giàu, nước mạnh, xã hội công bằng, dân chủ, văn minh. Sức hấp dẫn của chủ nghĩa xã hội, trước hết là ở mục tiêu mang đậm bản chất nhân văn này.

- Xác định rõ bản chất đặc trưng và mô hình cấu trúc của chủ nghĩa xã hội ở Việt Nam.

- Làm rõ các động lực phát triển của chủ nghĩa xã hội, trong đó động lực con người với nhu cầu và lợi ích của họ giữ vị trí trung tâm. Mặt khác việc phát hiện động lực, có chính sách phát huy và kết hợp các động lực phát triển sẽ làm cho chủ nghĩa xã hội sinh động, năng động và mang tính thực tiễn.

- Xác định rõ bước đi và cách làm chủ nghĩa xã hội ở Việt Nam.

Trong công cuộc đổi mới hiện nay con đường cách mạng độc lập dân tộc gắn liền với chủ nghĩa xã hội đang bị chi phối, tác động mạnh mẽ của rất nhiều yếu tố khách quan và chủ quan; thách thức rất lớn, nhưng cũng rất nhiều thời cơ, vận hội. Trên cơ sở quan niệm đúng đắn của Hồ Chí Minh về độc lập dân tộc và chủ nghĩa xã hội, lại có kinh nghiệm thực tiễn hơn 70 năm qua, đặc biệt là thực tiễn của gần 20 năm đổi mới, cho phép chúng ta hiểu được thực chất con đường độc lập dân tộc tiến lên chủ nghĩa xã hội trong bối cảnh hiện nay. Độc lập dân tộc tiến lên chủ nghĩa xã hội là nhu cầu sống còn, là sự lựa chọn duy nhất đúng của Việt Nam.

 

–––––––––––––––––

 

Chú thích:

* Theo Giáo trình Tư tưởng Hồ Chí Minh, Nxb Chính trị - Hành chính, H.2011.

(1) Trần Dân Tiên: Những mẩu chuyện về đời hoạt động của Hồ Chủ tịch, Nxb. Văn học, H.1970, tr.11.

(2) Đảng Cộng sản Việt Nam: Nghị quyết của Bộ Chính trị về một số định hướng lớn trong công tác tư tưởng hiện nay, tr.7.

(3) Hồ Chí Minh: Toàn tập, Nxb. Chính trị quốc gia, H. 2000, t.11, tr.372.

(4) Đảng Cộng sản Việt Nam: Văn kiện Đại hội đại biểu toàn quốc lần thứ VIII, Nxb.Chính trị quốc gia, H.1996, tr.14.`
  },
  {
    id: 2,
    title: "Đạo Đức Cách Mạng Trong Tư Tưởng Hồ Chí Minh",
    excerpt: "Hồ Chí Minh đề cao phẩm chất cách mạng như cần, kiệm, liêm, chính và chí công vô tư, thể hiện qua lối sống giản dị...",
    content: `Chủ tịch Hồ Chí Minh luôn đặc biệt quan tâm đến vấn đề đạo đức cách mạng. Tư tưởng về đạo đức của Người bao gồm những quan điểm cơ bản về vai trò, nội dung và những nguyên tắc trong xây dựng đạo đức mới, thể hiện qua các tác phẩm cô đọng và sâu sắc. Nghiên cứu, học tập tư tưởng Hồ Chí Minh về đạo đức cách mạng không những là một đòi hỏi khách quan của sự nghiệp cách mạng mà còn góp phần quan trọng trong việc tu dưỡng, rèn luyện đạo đức cách mạng cho đội ngũ cán bộ, đảng viên.

 



Là người sáng lập, lãnh đạo và rèn luyện Đảng ta, sinh thời, Chủ tịch Hồ Chí Minh đặc biệt quan tâm đến vấn đề xây dựng đạo đức cách mạng (ĐĐCM). Theo tư tưởng của Người, ĐĐCM mang bản chất giai cấp công nhân, kết hợp chặt chẽ với truyền thống đạo đức dân tộc và những tinh hoa đạo đức của nhân loại để đấu tranh nhằm giải phóng dân tộc, giải phóng xã hội và giải phóng con người.

Tư tưởng Hồ Chí Minh về đạo đức cách mạng
Trong suốt cuộc đời hoạt động của mình, từ bài giảng đầu tiên trong tác phẩm Đường Kách mệnh (năm 1927) đến bản Di chúc cuối cùng (hoàn chỉnh vào tháng 5/1969), Chủ tịch Hồ Chí Minh luôn quan tâm đến vấn đề đạo đức và việc tu dưỡng đạo đức, coi đạo đức là “cái gốc” của người cách mạng. ĐĐCM trong tư tưởng của Hồ Chí Minh luôn có sự nhất quán và tính logic cao về tinh thần cách mạng cũng như phương pháp tư duy, nhất là phương pháp tư duy khoa học, tư duy biện chứng của chủ nghĩa Mác – Lênin. Trên cơ sở truyền thống đạo đức tốt đẹp của dân tộc, chắt lọc tinh hoa đạo đức của nhân loại, Người còn phát triển và sáng tạo những giá trị tư tưởng đạo đức mới phù hợp với điều kiện Việt Nam.

Thứ nhất, đạo đức là gốc, nền tảng của người cách mạng. Khi bàn về vai trò quan trọng của đạo đức, Hồ Chí Minh cho rằng, đạo đức là yếu tố không thể thiếu trong đời sống xã hội loài người và đối với cá nhân con người. Đối với người cách mạng, đạo đức có một vai trò vô cùng quan trọng, Người chỉ rõ: “Cũng như sông thì có nguồn mới có nước, không có nguồn thì sông cạn. Cây phải có gốc, không có gốc thì cây héo. Người cách mạng phải có đạo đức, không có đạo đức thì dù tài giỏi mấy cũng không lãnh đạo được Nhân dân”1.

Với cán bộ, đảng viên (CBĐV), càng phải yêu cầu cao về đạo đức, bởi: “Làm cách mạng để cải tạo xã hội cũ thành xã hội mới là một sự nghiệp rất vẻ vang, nhưng nó cũng là nhiệm vụ rất nặng nề, một cuộc đấu tranh rất phức tạp, lâu dài, gian khổ. Sức có mạnh mới gánh được nặng và đi được xa. Người cách mạng phải có đạo đức cách mạng làm nền tảng, mới hoàn thành được nhiệm vụ cách mạng vẻ vang”2.

Như vậy, tiêu chuẩn đầu tiên của người cán bộ là phẩm chất đạo đức: “Đạo đức là gốc”, người cán bộ phải thường xuyên tu dưỡng, rèn luyện đạo đức mới có thể trở thành người cán bộ chân chính, “mọi việc thành hay là bại, chủ chốt là do cán bộ có thấm nhuần đạo đức cách mạng, hay là không”3.

Trong bài “Đạo đức cách mạng” năm 1958, Hồ Chí Minh khái quát: “Nói tóm tắt thì đạo đức cách mạng là: quyết tâm suốt đời đấu tranh cho Đảng, cho cách mạng, đó là điều chủ chốt nhất. Ra sức làm việc cho Đảng, giữ vững kỷ luật của Đảng, thực hiện tốt đường lối, chính sách của Đảng. Đặt lợi ích của Đảng và của nhân dân lao động lên trên, lên trước lợi ích riêng của cá nhân mình. Hết lòng hết sức phục vụ Nhân dân. Vì Đảng, vì dân mà đấu tranh quên mình, gương mẫu trong mọi việc. Ra sức học tập chủ nghĩa Mác – Lênin, luôn dùng tự phê bình và phê bình để nâng cao tư tưởng và cải tiến công tác của mình và cùng đồng chí mình tiến bộ”4.

Rõ ràng, đạo đức là động lực to lớn giúp người cách mạng vượt qua mọi khó khăn, thử thách, hiểm nguy. Nhận thức đúng đắn vị trí, ý nghĩa và tầm quan trọng của đạo đức đối với người cách mạng cho nên ngay từ đầu cũng như trong suốt toàn bộ sự nghiệp cách mạng của dân tộc, Hồ Chí Minh đã rất quan tâm, coi trọng xây dựng đạo đức mới – ĐĐCM cho CBĐV và Nhân dân ta.

Thứ hai, ĐĐCM được thể hiện ở các phẩm chất: trung với nước, hiếu với dân; yêu thương con người; cần, kiệm, liêm, chính, chí công vô tư; tinh thần quốc tế trong sáng. Những phẩm chất đó có mối quan hệ tác động qua lại biện chứng với nhau, thiếu một phẩm chất thì người CBĐV không thể làm tròn nhiệm vụ do Đảng, Nhân dân và cách mạng giao phó.

Vấn đề ĐĐCM và giáo dục ĐĐCM cho đội ngũ CBĐV được Chủ tịch Hồ Chí Minh đề cập tới trong nhiều tác phẩm quan trọng. Trong thời kỳ mở đầu cuộc kháng chiến chống thực dân Pháp, “vừa kháng chiến vừa kiến quốc”, vào năm 1947, Người viết tác phẩm “Sửa đổi lối làm việc” và “Đời sống mới”. Sau đó, vào năm 1949, Người viết tác phẩm “Cần kiệm liêm chính” và “Dân vận”, nêu bật yêu cầu đạo đức trong tiêu chuẩn cán bộ. Hơn mười năm sau, kể từ khi viết “Sửa đổi lối làm việc” và “Đời sống mới”, vào năm 1958, Người viết tác phẩm “Đạo đức cách mạng”.

Cho đến cuối đời, vào năm 1969, Người viết “Nâng cao đạo đức cách mạng, quét sạch chủ nghĩa cá nhân” và “Di chúc”, lại một lần nữa, Người đặt lên hàng đầu ĐĐCM, theo đó, phải ra sức quét sạch “giặc nội xâm” là chủ nghĩa cá nhân – kẻ thù nguy hiểm nhất, ẩn nấp trong lòng mỗi người. Người đã đi sâu, cụ thể hóa các tiêu chuẩn về ĐĐCM, đó là:

(1) Trung với nước, trung với Đảng, hiếu với dân: đây là phẩm chất, chuẩn mực có ý nghĩa quan trọng hàng đầu của người cách mạng, là tiêu chuẩn để xem xét, đánh giá đạo đức của con người, của mỗi chiến sỹ cách mạng. Người nhấn mạnh: “Người cán bộ phải có đạo đức cách mạng. Phải giữ đạo đức cách mạng mới là người cán bộ cách mạng chân chính. Đạo đức cách mạng có thể nói tóm tắt là: nhận rõ phải trái, giữ vững lập trường. Tận trung với nước. Tận hiếu với dân”5.

“Trung với nước”, “hiếu với dân” được coi là nội dung cơ bản nhất, bao trùm nhất trong tư tưởng ĐĐCM của Người, thể hiện mối quan hệ giữa con người với Tổ quốc và Nhân dân. “Trung với nước” là trung thành với sự nghiệp dựng nước và giữ nước của dân tộc, phải đặt lợi ích của cách mạng, của Tổ quốc lên trên hết, trước hết và quyết tâm đấu tranh cho sự phồn vinh của đất nước, đem lại ấm no, hạnh phúc cho Nhân dân. Do đó, theo Hồ Chí Minh, “trung với nước” cũng là “trung với Đảng”, trung thành với mục tiêu, lý tưởng cách mạng của Đảng, với sự nghiệp cách mạng của dân tộc do Đảng lãnh đạo, đó là độc lập dân tộc và chủ nghĩa xã hội.

“Hiếu với dân” – theo Hồ Chí Minh là phải tôn trọng, yêu kính Nhân dân, gắn bó máu thịt với Nhân dân, khẳng định sức mạnh to lớn của Nhân dân và phải coi dân là gốc, nền tảng của sự nghiệp cách mạng. Vì “dân” trong quan niệm của Hồ Chí Minh, dân phải gắn liền với nước, dân là chủ của đất nước, dân có quyền quyết định vận mệnh quốc gia, “bao nhiêu quyền hành, lực lượng đều thuộc về dân”. Vì vậy, hiếu với dân là phải một lòng, một dạ “phụng sự Nhân dân. Nghĩa là làm đầy tớ cho dân”6. Ở Người, lý luận luôn gắn chặt với thực tiễn, lời nói luôn đi đôi với việc làm. Cuộc đời của Người là minh chứng sinh động về tư tưởng tận trung với nước, tận hiếu với dân.

(2) Yêu thương con người: nếu như trung với nước, hiếu với dân là phẩm chất của mỗi con người – công dân đối với Tổ quốc, đối với Nhân dân, thì yêu thương con người là trách nhiệm của mỗi con người đối với con người. Chủ tịch Hồ Chí Minh cho rằng đây là phẩm chất cao đẹp nhất của con người. Yêu thương con người trước hết là tình cảm dành cho những người bị áp bức, bóc lột, những người cùng khổ. Yêu thương con người còn được thể hiện trong mối quan hệ hằng ngày với những người đồng chí xung quanh, trong cuộc sống bình thường. Phải luôn nghiêm khắc với bản thân, nhưng rộng rãi độ lượng với người khác.

Người từng dạy: “Mỗi con người đều có thiện và ác ở trong lòng. Ta phải biết làm cho phần tốt ở trong mỗi con người nảy nở như hoa mùa xuân và phần xấu mất dần đi, đó là thái độ của người cách mạng”7. Điều đặc biệt là ở Người, yêu thương con người luôn luôn gắn với niềm tin vào con người, tin vào lương tri, tin vào lòng dũng cảm, tin vào sức sáng tạo của họ trong hành trình con người tự giải phóng lấy mình, để con người làm chủ xã hội, làm chủ bản thân mình.


Bác Hồ với bà con Cao Bằng (Ảnh: tư liệu).
(3) Cần, kiệm, liêm, chính, chí công vô tư: có thể nói đây chính là phẩm chất trung tâm của ĐĐCM trong tư tưởng đạo đức của Hồ Chí Minh. Người chỉ rõ: “Trời có bốn mùa: Xuân, Hạ, Thu, Đông. Đất có bốn phương: Đông, Tây, Nam, Bắc. Người có bốn đức: Cần, Kiệm, Liêm, Chính. Thiếu một mùa, thì không thành trời. Thiếu một phương, thì không thành đất. Thiếu một đức, thì không thành người”8.

Theo Hồ Chí Minh, “cần” là phải lao động cần cù, siêng năng, sáng tạo, năng suất, hiệu quả cao, không lười biếng; “kiệm” là phải tiết kiệm sức lao động, thì giờ, tài sản, tiền bạc của dân, của nước, của bản thân mình, không xa xỉ, phô trương, hình thức…; “liêm” là phải luôn tôn trọng giữ gìn của công, không tham địa vị, tiền tài, danh vọng…; “chính” là không tà, thẳng thắn, đúng đắn, chân thành, khiêm tốn, không tự cao, tự đại, không dối trá, lừa lọc; việc thiện dù nhỏ mấy cũng làm, việc ác dù nhỏ mấy cũng tránh. Cần, kiệm, liêm, chính còn là thước đo trình độ văn minh, tiến bộ của một dân tộc. Theo Người: “Một dân tộc biết cần, kiệm, biết liêm, là một dân tộc giàu về vật chất, mạnh về tinh thần, là một dân tộc văn minh tiến bộ”9.

“Chí công vô tư” là đặt lợi ích của Đảng, của cách mạng, của Tổ quốc và của Nhân dân lên trên lợi ích của bản thân; lo trước cái lo của thiên hạ, vui sau cái vui của thiên hạ. Cho nên, thực hành chí công vô tư cũng có nghĩa là kiên quyết quét sạch chủ nghĩa cá nhân, nâng cao ĐĐCM. Trước lúc đi xa, trong bản Di chúc để lại cho toàn Đảng, toàn dân và toàn quân ta, Người vẫn căn dặn: “Đảng ta là một Đảng cầm quyền. Mỗi đảng viên và cán bộ phải thật sự thấm nhuần đạo đức cách mạng, thực sự cần, kiệm, liêm, chính, chí công vô tư. Phải giữ gìn Đảng ta thật trong sạch, phải xứng đáng là người lãnh đạo, người đầy tớ thật trung thành của Nhân dân”10.

Như vậy, cần, kiệm, liêm, chính, chí công vô tư có mối quan hệ mật thiết, khăng khít với nhau, tạo nên sự thống nhất trong phẩm chất đạo đức của người cách mạng. Đây là phẩm chất được Người đề cập nhiều nhất, thường xuyên nhất với một nội dung mới rất cách mạng mà vẫn giữ được nền tảng của các khái niệm đạo đức cũ rất quen thuộc với mọi người. Về thực chất, chí công vô tư là nối tiếp cần, kiệm, liêm, chính. Cần, kiệm, liêm, chính sẽ dẫn đến chí công vô tư và ngược lại. Người cho rằng những CBĐV có đầy đủ đức tính nêu trên sẽ đứng vững trước mọi thử thách.

(4) Tinh thần quốc tế trong sáng: tinh thần quốc tế trong sáng trong tư tưởng đạo đức Hồ Chí Minh được bắt nguồn từ bản chất quốc tế của giai cấp công nhân và tính ưu việt của chế độ xã hội chủ nghĩa, là một phẩm chất quan trọng trong tư tưởng đạo đức của Người. Hồ Chí Minh coi cách mạng Việt Nam là một bộ phận khăng khít của cách mạng thế giới, cho nên theo Người: “Ai làm cách mệnh trong thế giới đều là đồng chí của dân An Nam cả. Đã là đồng chí, thì sung sướng cực khổ phải có nhau”11. Đó là cơ sở bền vững để xây dựng tình cảm cách mạng trong sáng, thuỷ chung giữa các dân tộc bị áp bức và nhân dân lao động trên thế giới trong cuộc đấu tranh chống kẻ thù chung, vì nền độc lập của mỗi quốc gia dân tộc và quyền tự do, hạnh phúc của mỗi con người.

Tinh thần quốc tế trong sáng phải được thể hiện trong việc kết hợp chặt chẽ giữa chủ nghĩa yêu nước chân chính với chủ nghĩa quốc tế vô sản, gắn mục tiêu cách mạng của mỗi nước với mục tiêu chung của thời đại: hoà bình, độc lập dân tộc, dân chủ và tiến bộ xã hội. Nhận thức rõ điều đó nên trong quá trình tìm đường cứu nước cũng như sau này trở thành lãnh tụ của dân tộc Việt Nam, Hồ Chí Minh luôn coi trọng việc giáo dục chủ nghĩa quốc tế vô sản cho Nhân dân ta. Người nhắc nhở: “Tinh thần yêu nước chân chính khác với tinh thần “vị quốc” của bọn đế quốc phản động. Nó là một bộ phận của tinh thần quốc tế”12. Có thể nói, từ rất sớm, Người đã chủ trương quan hệ với các quốc gia dân tộc và các tổ chức trên thế giới để thêm bạn, bớt thù. Quan điểm dân tộc đã được thổi vào thời đại, đã vượt qua biên giới quốc gia, hướng tới mục tiêu độc lập, dân chủ, hòa bình, hữu nghị và hợp tác.

Vận dụng tư tưởng Hồ Chí Minh để rèn luyện đạo đức cách mạng cho đội ngũ cán bộ, đảng viên trong giai đoạn hiện nay
Vận dụng tư tưởng Hồ Chí Minh về rèn luyện ĐĐCM cho CBĐV có ý nghĩa đặc biệt quan trọng đối với công tác xây dựng đội ngũ CBĐV và công tác xây dựng Đảng trong giai đoạn hiện nay. Dưới tác động của nhiều yếu tố: sự cám dỗ của lợi ích vật chất, mặt trái cơ chế thị trường, hội nhập quốc tế, hoạt động chống phá của các thế lực thù địch, sự kiểm tra, giám sát của tổ chức chưa chặt chẽ, việc tự rèn luyện kém… làm cho một bộ phận không nhỏ CBĐV, trong đó có những đảng viên giữ vị trí lãnh đạo, quản lý, kể cả một số cán bộ cao cấp, suy thoái về tư tưởng, chính trị, đạo đức, lối sống với những biểu hiện khác nhau về phai nhạt lý tưởng, sa vào chủ nghĩa cá nhân, ích kỷ, cơ hội, thực dụng, chạy theo danh lợi, tiền tài, kèn cựa địa vị, cục bộ, tham nhũng, lãng phí, tùy tiện, vô nguyên tắc…

Văn kiện Đại hội đại biểu toàn quốc lần thứ XII của Đảng chỉ rõ: “Tình trạng suy thoái về tư tưởng chính trị, đạo đức, lối sống của một bộ phận không nhỏ cán bộ, đảng viên chưa bị đẩy lùi; có mặt, có bộ phận còn diễn biến phức tạp hơn; một số rất ít cán bộ, đảng viên bị phần tử xấu lợi dụng lôi kéo, kích động, xúi giục, mua chuộc đã có tư tưởng, việc làm chống đối Đảng, Nhà nước”13.

Chính vì vậy, việc rèn luyện ĐĐCM cho đội ngũ CBĐV càng cần được coi trọng hơn bao giờ hết, nhất là khi chúng ta đang đứng trước thềm Đại hội XIII của Đảng. Để việc rèn luyện phẩm chất ĐĐCM cho đội ngũ CBĐV theo tư tưởng Hồ Chí Minh có hiệu quả thiết thực, cần chú trọng một số nội dung sau:

Một là, tiếp tục nâng cao nhận thức cho đội ngũ CBĐV về ý nghĩa, vai trò, tầm quan trọng và sự cần thiết của việc học tập, nghiên cứu, vận dụng sáng tạo và phát triển tư tưởng Hồ Chí Minh về ĐĐCM. Thực hiện nghiêm túc, có hiệu quả Chỉ thị số 05-CT/TW ngày 15/5/2016 của Bộ Chính trị khóa XII về đẩy mạnh học tập và làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh.

Trong đó, tập trung xây dựng ĐĐCM cho CBĐV: tuyệt đối trung thành, kiên định lý tưởng cách mạng, đặt lợi ích của Đảng, của đất nước, dân tộc lên trên hết; hết lòng, hết sức phụng sự Tổ quốc, phục vụ Nhân dân, thật sự là công bộc của Nhân dân; cần, kiệm, liêm, chính, chí công vô tư, kiên quyết chống chủ nghĩa cá nhân, cơ hội. Mỗi CBĐV cần nhận thức rõ, ĐĐCM sẽ tạo cơ sở vững chắc để người cán bộ giữ vững phẩm cách của mình trước mọi cám dỗ tầm thường, giúp người cán bộ hình thành và củng cố phương pháp, tác phong làm việc khoa học, nâng cao chất lượng công việc đảm nhiệm.

Hai là, mỗi CBĐV cần không ngừng tu dưỡng, rèn luyện đạo đức, thực hiện đồng bộ các giải pháp nhằm đấu tranh ngăn chặn, đẩy lùi tình trạng suy thoái về tư tưởng chính trị, đạo đức, lối sống, những biểu hiện “tự diễn biến”, “tự chuyển hóa” trong nội bộ. Hồ Chí Minh đã chỉ rõ: “Đạo đức cách mạng không phải trên trời sa xuống. Nó do đấu tranh, rèn luyện bền bỉ hàng ngày mà phát triển và củng cố. Cũng như ngọc càng mài càng sáng, vàng càng luyện càng trong”14. Do đó, việc tu dưỡng, rèn luyện đạo đức của mỗi CBĐV vừa phải tích cực, thường xuyên, liên tục, đồng thời phải được gắn liền với mục tiêu, nhiệm vụ của cách mạng và kết quả hoàn thành nhiệm vụ của mỗi người trên cương vị, chức trách được giao.

Ba là, phát huy vai trò, trách nhiệm của cấp ủy đảng các cấp và người đứng đầu trong việc tu dưỡng, rèn luyện ĐĐCM cho đội ngũ CBĐV. Cấp ủy đảng và người đứng đầu phải luôn quán triệt và thực hiện tốt việc tu dưỡng, rèn luyện đạo đức cho đội ngũ CBĐV ở mọi nơi, mọi lúc, mọi công việc và trong các mối quan hệ. Đẩy mạnh tự phê bình và phê bình, thẳng thắn chỉ rõ khuyết điểm, đề cao tinh thần “tự soi”, “tự sửa” trong mỗi CBĐV và tổ chức đảng. Cấp trên làm gương cho cấp dưới, cán bộ làm gương cho chiến sĩ, đảng viên làm gương trước quần chúng.

Tại Hội nghị lần thứ tám Ban Chấp hành Trung ương Đảng (khóa XII), Đảng ta đã ban hành Quy định về trách nhiệm nêu gương của CBĐV, trước hết là Ủy viên Bộ Chính trị, Ủy viên Ban Bí thư, Ủy viên Ban Chấp hành Trung ương (Quy định số 08-QĐi/TW ngày 25/10/2018), trong đó yêu cầu CBĐV, nhất là người đứng đầu phải “không ngừng học tập, tu dưỡng, rèn luyện, trau dồi đạo đức cách mạng. Mẫu mực về đạo đức, lối sống. Thực sự cần, kiệm, liêm, chính, chí công vô tư; trung thực, giản dị, thẳng thắn, chân thành”.

Như vậy, xây dựng đội ngũ CBĐV có lập trường, quan điểm vững vàng; luôn gương mẫu về phẩm chất đạo đức, lối sống, phát huy tinh thần trách nhiệm, nâng cao năng lực công tác, phong cách lãnh đạo, sâu sát quần chúng, luôn đặt lợi ích của tập thể, quốc gia, dân tộc lên trên lợi ích cá nhân là vô cùng cần thiết. Chú trọng rèn luyện cho cán bộ tinh thần chủ động khắc phục mọi khó khăn, gian khổ, dám nghĩ, dám làm, dám chịu trách nhiệm, sẵn sàng nhận và hoàn thành tốt mọi nhiệm vụ được giao.

Bên cạnh đó, cần sớm xây dựng hệ thống chuẩn mực các mối quan hệ của CBĐV với tổ chức đảng và với Nhân dân, phù hợp với yêu cầu nhiệm vụ cách mạng trong tình hình mới để mỗi CBĐV lấy đó làm tiêu chí tự giác phấn đấu, tu dưỡng, rèn luyện theo chuẩn mực ĐĐCM. Hằng năm, người đứng đầu và từng CBĐV có cam kết rèn luyện, giữ gìn phẩm chất đạo đức, lối sống, không suy thoái, “tự diễn biến”, “tự chuyển hóa”. Các cấp ủy, tổ chức đảng kiểm tra, giám sát việc thực hiện cam kết của cán bộ, đảng viên ở địa phương, cơ quan, đơn vị mình theo tinh thần Chỉ thị số 05-CT/TW của Bộ Chính trị và Nghị quyết Trung ương 4 (khóa XII).

Bốn là, chú trọng bồi dưỡng nâng cao trình độ, năng lực toàn diện cho đội ngũ CBĐV, giúp họ vươn lên chiếm lĩnh tri thức, làm chủ khoa học công nghệ, vững vàng chuyên môn nghiệp vụ. Trong một xã hội vận động và biến đổi nhanh chóng, đất nước hội nhập sâu rộng với thế giới đã và đang đặt ra yêu cầu, đòi hỏi rất cao về năng lực, trình độ chuyên môn, phẩm chất, đạo đức, bản lĩnh chính trị đối với mỗi người CBĐV, công chức, viên chức. Do vậy, để tránh tụt hậu, đáp ứng được yêu cầu của công việc, tiến tới có đủ năng lực làm việc được trong môi trường quốc tế, mỗi người cần có tinh thần cầu thị, không ngừng cố gắng, nỗ lực học tập, rèn luyện để tự hoàn thiện bản thân. Có như vậy, chúng ta mới xây dựng được một đội ngũ cán bộ đáp ứng yêu cầu đổi mới và hội nhập, góp phần đưa đất nước phát triển nhanh và bền vững.

Chú thích:

1, 8. Hồ Chí Minh. Toàn tập. Tập 5. H. NXB Chính trị quốc gia, 2002, tr. 252 – 253, 631.

2, 4, 14. Hồ Chí Minh. Toàn tập. Tập 9. H. NXB Chính trị quốc gia, 2002, tr. 283, 285, 293.

3, 5. Hồ Chí Minh. Toàn tập. Tập 9. H. NXB Chính trị quốc gia, 2011, tr. 354, 354.

6, 12. Hồ Chí Minh. Toàn tập. Tập 6. H. NXB Chính trị quốc gia, 2002, tr. 88, 172.

7, Hồ Chí Minh. Toàn tập. Tập 12. H. NXB Chính trị quốc gia, 2002, tr. 558.

8, Hồ Chí Minh. Toàn tập. Tập 6. H. NXB Chính trị quốc gia, 2011, tr. 128.

9, Hồ Chí Minh. Toàn tập. Tập 15. H. NXB Chính trị quốc gia, 2011, tr. 622.

10, Hồ Chí Minh. Toàn tập. Tập 2. H. NXB Chính trị quốc gia, 2002, tr. 301.

11, Đảng Cộng sản Việt Nam. Văn kiện Đại hội đại biểu toàn quốc lần thứ XII. Văn phòng Trung ương Đảng, H. 2016, tr. 185.`
  }
];

export default function ArticleDetail() {
  const { id } = useParams();
  const article = articles.find(a => a.id === Number(id));

  if (!article) {
    return (
      <div className="article-detail">
        <div className="article-header">
          <h1>Không tìm thấy bài viết</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="article-detail-container">
    <div className="article-detail">
      <Link to="/" className="back-button">
        <FaArrowLeft /> Quay lại
      </Link>
      
      <div className="article-header">
        <div className="article-icon">
          <FaRegNewspaper size={48} />
        </div>
        <h1>{article.title}</h1>
      </div>

      <div className="article-content">
        {article.content.split('\n\n').map((paragraph, index) => {
          // Kiểm tra nếu đoạn văn bắt đầu bằng số và dấu chấm
          if (/^\d+\./.test(paragraph)) {
            return (
              <ul key={index}>
                {paragraph.split('\n').map((item, itemIndex) => (
                  <li key={itemIndex}>{item.replace(/^\d+\.\s*/, '')}</li>
                ))}
              </ul>
            );
          }
          return <p key={index}>{paragraph}</p>;
          })}
        </div>
      </div>
    </div>
  );
} 
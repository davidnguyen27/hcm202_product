import { FaBookOpen } from "react-icons/fa6";
import { useState } from "react";
import ResourceModal from "../components/ResourceModal";
import "../styles/ResourceModal.scss";

interface Resource {
  id: number;
  title: string;
  description: string;
  details: string;
}

export default function Resources() {
  const [selectedResource, setSelectedResource] = useState<Resource | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const resources: Resource[] = [
    {
      id: 1,
      title: "Đường Kách Mệnh",
      description:
        "Tác phẩm kinh điển của Hồ Chí Minh, trình bày tư tưởng cách mạng và con đường giải phóng dân tộc.",
      details: `Từ "Đường Kách mệnh"...
Cuối năm 1924, lãnh tụ Nguyễn Ái Quốc về Quảng Châu, Trung Quốc, xúc tiến công cuộc giải phóng dân tộc. Tại đây, Người thành lập Hội Việt Nam Cách mạng Thanh niên, mở lớp huấn luyện chính trị, ra Báo Thanh niên, truyền giảng cho đội ngũ cán bộ cốt cán đầu tiên của Việt Nam những nội dung cơ bản của học thuyết Mác-Lênin, chuẩn bị cho sự ra đời một chính đảng vô sản kiểu mới ở Việt Nam.

Năm 1927, những bài giảng của Người được Bộ Tuyên truyền của Hội Liên hợp các dân tộc bị áp bức in thành tập bài giảng mang tên: "Đường Kách mệnh".

Từ tập bài giảng "Đường Kách mệnh"                  

"Đường Kách mệnh" được viết một cách mộc mạc, đơn giản, ngắn gọn nhưng nội dung phong phú, hàm chứa những tư tưởng lớn mang tính quốc gia và quốc tế vĩ đại về chủ nghĩa xã hội (CNXH) của Hồ Chí Minh. "Đường Kách mệnh" đề cập nhiều nội dung, trong đó Nguyễn Ái Quốc nêu rõ chuẩn mực đạo đức của những chiến sĩ cách mạng; giới thiệu tính chất, nội dung các cuộc cách mạng điển hình trên thế giới. Thông qua những nội dung này, Người chỉ rõ tư tưởng cách mạng triệt để: Muốn sống thì phải làm cách mạng và muốn làm cách mạng thành công phải có đảng lãnh đạo, có Chủ nghĩa Mác-Lênin làm nòng cốt, phải có phương pháp cách mạng v.v.., phải gắn cách mạng Việt Nam là một bộ phận khăng khít của phong trào cách mạng thế giới. Từ "Đường Kách mệnh", Người khẳng định: Cách mạng giải phóng dân tộc là sự nghiệp của toàn dân chứ không phải của một vài cá nhân. Vì vậy, đoàn kết trong đảng, đoàn kết toàn dân tộc là một trong những nhân tố quan trọng bảo đảm thắng lợi cho cách mạng Việt Nam... 

"Đường Kách mệnh" xác định rõ mục tiêu độc lập dân tộc và CNXH, khẳng định con đường cách mạng Việt Nam phải trải qua hai giai đoạn, đó là dân tộc cách mệnh (quốc gia) và cách mạng xã hội chủ nghĩa (quốc tế). "Đường Kách mệnh" trình bày một cách khái quát những quan điểm cốt lõi của Chủ nghĩa Mác-Lênin về con đường cách mạng Việt Nam, con đường: Độc lập dân tộc gắn liền với CNXH, nhưng trước hết phải tập trung vào nhiệm vụ "dân tộc cách mệnh"(1), giành lấy quyền tự do bình đẳng của dân nước mình, để chuẩn bị những tiền đề cho cuộc cách mạng thứ hai (thế giới cách mệnh) về chính trị, tổ chức, kinh tế, văn hóa. Đối tượng của "dân tộc cách mệnh" là đánh đổ chính quyền thuộc địa Pháp. Chủ thể là toàn dân tộc, lấy quần chúng công nông làm nền tảng. 

Từ "Đường Kách mệnh"...
Cuốn "Đường Kách mệnh"-Bảo vật quốc gia được trưng bày tại Bảo tàng Lịch sử quốc gia Việt Nam. Ảnh tư liệu  
"Đường Kách mệnh" nhấn mạnh vai trò quan trọng hàng đầu của Đảng-nhân tố quyết định mọi thắng lợi của cách mạng Việt Nam và việc lựa chọn mô hình nhà nước trong tương lai. Cùng với những định hướng cụ thể về mục đích, đối tượng, nhiệm vụ, lực lượng và tổ chức tiền phong lãnh đạo cách mạng giải phóng dân tộc, "Đường Kách mệnh" cũng đồng thời nêu lên mô hình nhà nước trong tương lai khi cách mạng thành công. Theo Hồ Chí Minh: Muốn dân tộc được độc lập, muốn nhân dân lao động khỏi thân phận người nô lệ thì phải làm cách mạng một cách triệt để, không thể đi theo con đường cách mạng tư sản, không thể thiết lập mô hình nhà nước cộng hòa tư sản, nơi chính quyền chủ yếu thuộc về giai cấp hữu sản, Người đã viết: "Chúng ta đã hy sinh làm cách mệnh rồi thì quyền giao cho dân chúng số nhiều, chớ để trong tay một bọn ít người. Thế mới khỏi hy sinh nhiều lần, thế dân chúng mới được hạnh phúc"(2).

Đến Hội nghị thành lập Đảng đầu năm 1930, lãnh tụ Nguyễn Ái Quốc nêu rõ hơn về con đường đi lên CNXH. Chính cương vắn tắt của Đảng Cộng sản Việt Nam vạch rõ tính chất, nhiệm vụ, đối tượng của cách mạng Việt Nam, trong đó xác định rõ chủ trương của những người cộng sản là làm "tư sản dân quyền cách mạng và thổ địa cách mạng để đi tới xã hội cộng sản". Nhiệm vụ của cuộc cách mạng lúc này là đánh đổ đế quốc Pháp và bọn phong kiến, làm cho nước Việt Nam được hoàn toàn độc lập; dân chúng được tự do tổ chức; nam nữ bình quyền; phổ thông giáo dục theo công nông hóa; quốc hữu hóa tất cả các xí nghiệp của tư bản đế quốc; dựng ra chính phủ công nông binh; tổ chức ra quân đội công nông; thủ tiêu hết các thứ quốc trái; thi hành luật ngày làm 8 giờ...

Cách mạng Tháng Tám thành công, nhà nước Việt Nam Dân chủ cộng hòa ra đời. Chín năm tiếp theo đó, Đảng lãnh đạo nhân dân đấu tranh giữ vững chính quyền cách mạng, tiếp tục cuộc cách mạng dân tộc, dân chủ nhân dân. Tổng Bí thư Trường Chinh giải thích: Dân tộc là chống đế quốc, Dân chủ là chống phong kiến, Nhân dân là lực lượng của cuộc cách mạng đó.

Với Hiệp định Geneva 1954, Việt Nam tạm thời bị chia cắt làm hai miền. Miền Nam tiếp tục cuộc đấu tranh giải phóng. Miền Bắc vừa chi viện cuộc đấu tranh của nhân dân miền Nam, vừa chống chiến tranh phá hoại của đế quốc Mỹ, vừa bắt tay xây dựng CNXH. Lúc này, đường lối tiến hành làm dân tộc cách mệnh (quốc gia) và cách mạng xã hội chủ nghĩa (quốc tế)-theo cách nói hôm nay là: Độc lập dân tộc đi lên CNXH trở thành hiện thực ở miền Bắc.

Đến hiện thực hóa mô hình xã hội mới...

Ở thập niên 1950 đến 1989, khi thế giới đang chia làm hai phe, phe xã hội chủ nghĩa (XHCN) do Liên Xô đứng đầu đang phát triển lớn mạnh, vấn đề đi lên CNXH ở Việt Nam như một lẽ đương nhiên. Hồi đó, các nhà lý luận không cần phải chứng minh nhiều về những giá trị của CNXH. Bản thân lãnh tụ Hồ Chí Minh cũng chưa có thời gian bàn nhiều về CNXH. Người chỉ có một số bài viết về CNXH như khẳng định tính tất yếu của thời kỳ quá độ, bỏ qua giai đoạn phát triển tư bản để đi tới CNXH, cổ động cho phong trào hợp tác xã, bàn về tiến vững chắc đi lên CNXH...

Người định nghĩa CNXH, mà cũng chính là nêu mục tiêu của CNXH rất giản dị, dễ hiểu: "Mục đích của CNXH là gì? Nói một cách đơn giản và dễ hiểu là: Không ngừng nâng cao đời sống vật chất và tinh thần của nhân dân, trước hết là nhân dân lao động"(3). Hay "mục đích của CNXH là không ngừng nâng cao mức sống của nhân dân"(4). Hoặc Người diễn giải mục đích tổng quát này thành các tiêu chí cụ thể: "CNXH là làm sao cho nhân dân đủ ăn, đủ mặc, ngày càng sung sướng, ai nấy được đi học, ốm đau có thuốc, già không lao động được thì nghỉ, những phong tục tập quán không tốt dần được xóa bỏ... Tóm lại, xã hội ngày càng tiến bộ, vật chất ngày càng tăng, tinh thần ngày càng tốt, đó là CNXH"(5), "CNXH là nhằm nâng cao đời sống vật chất và văn hóa của nhân dân, và do nhân dân tự xây dựng lấy. Muốn đạt mục đích đó, thì nhân dân ta phải ra sức thi đua tăng gia sản xuất và thực hành tiết kiệm; mỗi người phải cố gắng trở thành lao động tiên tiến, chiến sĩ thi đua, anh hùng lao động, mỗi người phải nâng cao tinh thần làm chủ nước nhà"; CNXH là "ai cũng được làm việc, được ăn no mặc ấm, được học hành, người già yếu thì được giúp đỡ, các cháu bé thì được săn sóc"; "CNXH là mọi người cùng ra sức lao động sản xuất để được ăn no, mặc ấm, và có nhà ở sạch sẽ". "Muốn có CNXH thì không có cách nào khác là phải dốc lực lượng của mọi người ra để sản xuất. Sản xuất là mặt trận chính của chúng ta hiện nay ở miền Bắc... Muốn phát triển sức sản xuất thì trước hết phải nâng cao năng suất lao động và muốn nâng cao năng suất lao động thì phải tổ chức lao động cho tốt". Bởi vậy, Người cho rằng: "CNXH là phải có biện pháp. Kế hoạch một phần, biện pháp phải hai phần, và quyết tâm phải ba phần, có như thế mới có thể hoàn thành và hoàn thành vượt mức kế hoạch nhà nước". Chủ tịch Hồ Chí Minh chỉ rõ: "Cách mạng XHCN là cuộc cách mạng sâu sắc nhất, triệt để nhất, chưa từng có trong lịch sử nước nhà: "Biến đổi một xã hội cũ thành một xã hội mới, không phải là một chuyện dễ. Nhưng đó là những khó khăn trong sự trưởng thành. Toàn Đảng, toàn dân đồng sức đồng lòng thì khó khăn gì cũng nhất định khắc phục được"(6).

Trích dẫn lời Chủ tịch Hồ Chí Minh như trên để thấy rõ một điều, dù: "Không có chế độ nào tôn trọng con người, chú ý xem xét những lợi ích cá nhân đúng đắn và bảo đảm cho nó được thỏa mãn bằng chế độ XHCN và cộng sản chủ nghĩa", song để có CNXH, không thể trông chờ vào ai khác, ngoài bàn tay, khối óc của chính chúng ta, bằng lao động sáng tạo của mỗi người. Dưới sự lãnh đạo của Đảng tiên phong, toàn thể dân tộc sát cánh cùng xây dựng xã hội XHCN, bởi chỉ có CNXH, mới thực sự vì con người, mới thực sự giải phóng giai cấp lao động, giải phóng con người.

TS CHU ĐỨC TÍNH, Nguyên Giám đốc Bảo tàng Hồ Chí Minh

(1), (2), (3), (4), (5), (6): Hồ Chí Minh toàn tập, Nxb Chính trị Quốc gia, H.2011, tập 2, 11, 12, 13`,
    },
    {
      id: 2,
      title: "Bản Án Chế Độ Thực Dân Pháp",
      description:
        "Tác phẩm tố cáo tội ác của thực dân Pháp, kêu gọi nhân dân đứng lên đấu tranh.",
      details: `Trải qua quá trình học tập, rèn luyện và đấu tranh trong phong trào công nhân quốc tế, với những điều mắt thấy tai nghe ở các nước thuộc địa và những tài liệu sưu tầm được ở Thư viện quốc gia Pháp, đồng chí Nguyễn Ái Quốc đã hoàn thành cuốn Bản án chế độ thực dân Pháp (Le Procès de la colonisation Francaise).

Đây là tác phẩm dựa trên cơ sở một số bài viết của Người trong khoảng thời gian từ năm 1921 đến năm 1924. Tác phẩm này được một số đồng chí của Người xuất bản lần đầu tiên tại Thư quán lao động (Libraire du travail) ở Pari vào năm 1925.

Bản án chế độ thực dân Pháp gồm 12 chương, trong đó có một số bài đã đăng trên báo Le Paria. Nội dung của tác phẩm không chỉ tố cáo tội ác của chủ nghĩa đế quốc Pháp đối với dân tộc Việt Nam cũng như với các thuộc địa khác trên các mặt chính trị, kinh tế, văn hoá, xã hội mà điều quan trọng là đã nêu lên những luận điểm cơ bản về vấn đề dân tộc và vấn đề thuộc địa.

Trước hết, Bản án chế độ thực dân Pháp làm rõ mối quan hệ mật thiết giữa cách mạng thuộc địa với cách mạng vô sản ở chính quốc, khẳng định cách mạng thuộc địa là một bộ phận không thể tách rời của cách mạng vô sản thế giới. Luận điểm ấy được diễn đạt rất sinh động: "Chủ nghĩa tư bản là một con đỉa có một cái vòi bám vào giai cấp vô sản ở chính quốc và một cái vòi khác bám vào giai cấp vô sản ở thuộc địa. Nếu muốn giết con vật ấy, người ta phải đồng thời cắt cả hai vòi. Nếu người ta chỉ cắt một vòi thôi, thì cái vòi còn lại kia vẫn tiếp tục hút máu của giai cấp vô sản, con vật vẫn tiếp tục sống và cái vòi bị cắt đứt lại sẽ mọc ra". Khối liên minh của các dân tộc thuộc địa phương Đông "sẽ là một trong những cái cánh của cách mạng vô sản".

Người không chỉ nêu rõ mối quan hệ biện chứng giữa cách mạng thuộc địa, cách mạng vô sản ở chính quốc, mà còn chỉ rõ nhiệm vụ của giai cấp vô sản ở chính quốc là phải đoàn kết, ủng hộ triệt để cuộc đấu tranh cách mạng của giai cấp vô sản và nhân dân các nước thuộc địa không phải chỉ bằng lời nói mà phải bằng hành động cách mạng cùng nhau tiêu diệt kẻ thù chung.

Bản án chế độ thực dân Pháp vạch rõ đối tượng cách mạng, lực lượng cách mạng và giai cấp lãnh đạo cách mạng giải phóng dân tộc; đặt rõ vấn đề giành độc lập dân tộc phải đi đôi với sự nghiệp thống nhất Tổ quốc, khẳng định sự nghiệp đánh đổ chủ nghĩa đế quốc, giải phóng dân tộc là sự nghiệp của quần chúng nhân dân ở các nước thuộc địa và phụ thuộc; cuộc cách mạng giải phóng dân tộc phải đi theo con đường của Cách mạng Tháng Mười Nga, đi theo đường lối của Quốc tế Cộng sản.

Cuối tác phẩm, Nguyễn Ái Quốc còn giới thiệu về Trường Đại học phương Đông và thư gửi thanh niên Việt Nam.

Tác phẩm Bản án chế độ thực dân Pháp của Nguyễn Ái Quốc thể hiện tinh thần cách mạng tiến công, tư tưởng cách mạng triệt để. Tác phẩm đã làm sáng tỏ thêm quan điểm của Lênin về chủ nghĩa đế quốc, góp phần làm phong phú thêm chủ nghĩa Lênin về vấn đề dân tộc và thuộc địa. Đó là đóng góp quý báu của Nguyễn Ái Quốc vào quá trình truyền bá chủ nghĩa Mác- Lênin vào các thuộc địa của đế quốc Pháp nói chung và là sự chuẩn bị về tư tưởng và chính trị cho việc thành lập một chính đảng cách mạng ở Việt Nam.

Lịch sử biên niên Đảng Cộng sản Việt Nam, NXB Chính trị Quốc gia, 2008.`,
    },
    {
      id: 3,
      title: "Nhật Ký Trong Tù",
      description:
        "Tập thơ được Hồ Chí Minh sáng tác trong thời gian bị giam cầm tại Trung Quốc (1942-1943).",
      details: `"Nhật ký trong tù" hay "Ngục trung nhật ký" là một tập thơ nổi tiếng của Bác (Hồ Chí Minh) gồm 133 bài thơ được viết bằng chữ Hán. 
Tháng 8 năm 1942, dưới danh nghĩa là đại biểu của "Việt Nam độc lập đồng minh hội" Bác lấy tên là "Hồ Chí Minh".  Ngày 27/8 Bác bị Tưởng Giới Thạch bắt vì bị tình nghi là gián điệp. Từ đây, Bác đã trải qua hành trình gian khổ "Quảng Tây giải khắp mười ba huyện/ Mười tám nhà lao đã ở qua".

Chính trong bối cảnh này, tập thơ "Nhật ký trong tù" đã ra đời. "Nhật ký trong tù" là một chặng đường dài và gian khổ mà Bác đã trải qua trên con đường cứu nước của mình, những bài thơ thể hiện tính nhân văn và tinh thần yêu nước sâu sắc nhất của Bác. Dưới đây là một số bài thơ hay trong tập thơ "Nhật ký trong tù".

Hoàng hôn

Gió sắc tựa gươm mài đá núi

Rét như dùi nhọn chích cành cây

Chùa xa chuông giục người nhanh bước

Trẻ dắt trâu về tiếng sáo bay.

Bốn tháng rồi

"Một ngày tù, nghìn thu ở ngoài"

Lời nói người xưa đâu có sai

Sống khác loài người vừa bốn tháng

Tiều tụy còn hơn mười năm trời.

Bởi vì:

Bốn tháng cơm không no

Bốn tháng đêm thiếu ngủ

Bốn tháng áo không thay

Bốn tháng không giặt giũ.

Cho nên:

Răng rụng mất một chiếc

Tóc bạc thêm mấy phần

Gầy đen như quỷ đói

Ghẻ lở mọc đầy thân.

May mà:

Kiên trì và nhẫn nại

Không chịu lui một phân

Vật chất tuy đau khổ

Không nao núng tinh thần.

Không ngủ được

Một canh... hai canh... lại ba canh

Trằn trọc băn khoăn giấc chẳng lành

Canh bốn, canh năm vừa chợp mắt

Sao vàng năm cánh mộng hồn bay.

Nghe tiếng chày giã gạo

Gạo đem vào giã bao đau đớn

Gạo giã xong rồi trắng tựa bông

Sống trên đời người cũng vậy

Gian nan rèn luyện mới thành công.

Đi đường

"Đi đường mới biết gian lao,

Núi cao rồi lại núi cao trập trùng;

Núi cao lên đến tận cùng,

Thu vào tầm mắt muôn trùng nước non".

Chiều tối

Chim mỏi về rừng tìm chốn ngủ,

Chòm mây trôi nhẹ giữa tầng không.

Cô em xóm núi xay ngô tối,

Xay hết, lò than đã rực hồng.

Nắng sớm

Nắng sớm xuyên qua nơi ngục thất,

Đốt tan khói đặc với sương dày;

Đất trời phút chốc tràn sinh khí,

Tù phạm cười tươi nở mặt mày.

Ngắm trăng

Trong tù không rượu cũng không hoa

Cảnh đẹp đêm nay khó hững hờ

Người ngắm trăng soi ngoài cửa sổ

Trăng nhòm khe cửa ngắm nhà thơ.

Xế chiều

Cơm xong bóng đã xuống trầm trầm

Vang tiếng đàn ca rộn tiếng ngân

Nhà ngục Tĩnh tây mờ mịt tối

Bổng thành nhạc quán viện hàm lâm.

Tự khuyên mình

Ví không có cảnh đông tàn

Thì đâu có cảnh huy hoàng ngày xuân

Nghĩ mình trong bước gian truân

Tai ương rèn luyện tinh thần thêm hăng.`,
    },
    {
      id: 4,
      title: "Tuyên Ngôn Độc Lập",
      description:
        "Văn kiện lịch sử do Hồ Chí Minh soạn thảo, tuyên bố độc lập của Việt Nam ngày 2/9/1945.",
      details: `Ngày 2/9/1945, tại cuộc mít tinh ở vườn hoa Ba Đình (Hà Nội), Chủ tịch Hồ Chí Minh thay mặt Chính phủ lâm thời của nước Việt Nam Dân chủ Cộng hoà trịnh trọng đọc bản Tuyên ngôn độc lập.
      Bản Tuyên ngôn độc Lập do Người khởi thảo, được Ban Thường vụ Trung ương Đảng đóng góp ý kiến và nhất trí thông qua.
      Hỡi đồng bào cả nước,

"Tất cả mọi người đều sinh ra có quyền bình đẳng. Tạo hóa cho họ những quyền không ai có thể xâm phạm được; trong những quyền  ấy, có quyền được sống, quyền tự do và quyền mưu cầu hạnh phúc".

Lời bất hủ ấy ở trong bản Tuyên ngôn độc lập năm 1776 của nước Mỹ. Suy rộng ra, câu ấy có ý nghĩa là: tất cả các dân tộc trên thế giới đều sinh ra bình đẳng; dân tộc nào cũng có quyền sống, quyền sung sướng và quyền tự do.

Bản Tuyên ngôn nhân quyền và dân quyền của Cách mạng Pháp năm 1791 cũng nói:

"Người ta sinh ra tự do và bình đẳng về quyền lợi, và phải luôn luôn được tự do và bình đẳng về quyền lợi".

Đó là những lẽ phải không ai chối cãi được.

Thế mà hơn tám mươi năm nay, bọn thực dân Pháp lợi dụng lá cờ tự do, bình đẳng, bác ái, đến cướp đất nước ta, áp bức đồng bào ta. Hành động của chúng trái hẳn với nhân đạo và chính nghĩa.

Về chính trị, chúng tuyệt đối không cho nhân dân ta một chút tự do dân chủ nào.

Chúng thi hành những luật pháp dã man. Chúng lập ba chế độ khác nhau ở Trung, Nam, Bắc để ngăn cản việc thống nhất nước nhà của ta, để ngăn cản dân tộc ta đoàn kết.

Chúng lập ra nhà tù nhiều hơn trường học. Chúng thẳng tay chém giết những người yêu nước thương nòi của ta. Chúng tắm các cuộc khởi nghĩa của ta trong những bể máu.

Chúng ràng buộc dư luận, thi hành chính sách ngu dân.

Chúng dùng thuốc phiện, rượu cồn để làm cho nòi giống ta suy nhược.

Về kinh tế, chúng bóc lột dân ta đến tận xương tủy, khiến cho dân ta nghèo nàn, thiếu thốn, nước ta xơ xác, tiêu điều.

Chúng cướp không ruộng đất, hầm mỏ, nguyên liệu.

Chúng giữ độc quyền in giấy bạc, xuất cảng và nhập cảng.

Chúng đặt ra hàng trăm thứ thuế vô lý, làm cho dân ta, nhất là dân cày và dân buôn, trở nên bần cùng.

Chúng không cho các nhà tư sản ta ngóc đầu lên. Chúng bóc lột công nhân ta một cách vô cùng tàn nhẫn.

Mùa thu năm 1940, phát-xít Nhật đến xâm lăng Đông - Dương để mở thêm căn cứ đánh Đồng minh, thì bọn thực dân Pháp quỳ gối đầu hàng, mở cửa nước ta rước Nhật. Từ đó dân ta chịu hai tầng xiềng xích: Pháp và Nhật. Từ đó dân ta càng cực khổ, nghèo nàn. Kết quả là cuối năm ngoái sang đầu năm nay, từ Quảng trị đến Bắc kỳ hơn hai triệu đồng bào ta bị chết đói.

Ngày 9 tháng 3 năm nay, Nhật tước khí giới của quân đội Pháp. Bọn thực dân Pháp hoặc bỏ chạy hoặc đầu hàng. Thế là chẳng những chúng không "bảo hộ" được ta, trái lại, trong 5 năm, chúng đã bán nước ta hai lần cho Nhật.

Trước ngày mồng 9 tháng 3, biết bao lần Việt minh đã kêu gọi người Pháp liên minh để chống Nhật. Bọn thực dân Pháp đã không đáp ứng, lại thẳng tay khủng bố Việt minh hơn nữa.

Thậm chí đến khi thua chạy, chúng còn nhẫn tâm giết nốt số đông tù chính trị ở Yên Bái và Cao Bằng.

Tuy vậy, đối với nước Pháp, đồng bào ta vẫn giữ một thái độ khoan hồng và nhân đạo. Sau cuộc biến động ngày mồng 9 tháng 3, Việt minh đã giúp cho nhiều người Pháp chạy qua biên thùy, lại cứu cho nhiều người Pháp ra khỏi nhà giam Nhật, và bảo vệ tính mạng và tài sản cho họ.

Sự thật là từ mùa thu năm 1940, nước ta đã thành thuộc địa của Nhật, chứ không phải thuộc địa của Pháp nữa. Khi Nhật hàng Đồng minh thì nhân dân cả nước ta đã nổi dậy giành chính quyền lập nên nước Việt Nam Dân chủ Cộng hòa.

Sự thật là dân ta đã lấy lại nước Việt Nam từ tay Nhật, chứ không phải từ tay Pháp.

Pháp chạy, Nhật hàng, vua Bảo Đại thoái vị. Dân ta đã đánh đổ các xiềng xích thực dân gần một trăm năm nay để gây dựng nên nước Việt Nam độc lập. Dân ta lại đánh đổ chế độ quân chủ mấy mươi thế kỷ mà lập nên chế độ dân chủ cộng hòa.

Bởi thế cho nên, chúng tôi, Lâm thời Chính phủ của nước Việt Nam mới, đại biểu cho toàn dân Việt Nam, tuyên bố thoát ly hẳn quan hệ với Pháp, xóa bỏ hết những hiệp ước mà Pháp đã ký về nước Việt Nam, xóa bỏ tất cả mọi đặc quyền của Pháp trên đất nước Việt Nam.

Toàn dân Việt Nam, trên dưới một lòng, kiên quyết chống lại âm mưu của bọn thực dân Pháp.

Chúng tôi tin rằng các nước Đồng minh đã công nhận những nguyên tắc dân tộc bình đẳng ở các Hội nghị Tê-hê-răng và Cựu-kim-sơn, quyết không thể không công nhận quyền độc lập của dân Việt Nam.

Một dân tộc đã gan góc chống ách nô lệ của Pháp hơn tám mươi năm nay, một dân tộc đã gan góc đứng về phe Đồng minh chống phát-xít mấy năm nay, dân tộc đó phải được tự do ! Dân tộc đó phải được độc lập !

Vì những lẽ trên, chúng tôi, Chính phủ Lâm thời của nước Việt Nam Dân chủ Cộng hòa, trịnh trọng tuyên bố với thế giới rằng:

Nước Việt Nam có quyền hưởng tự do và độc lập, và sự thật đã thành một nước tự do, độc lập. Toàn thể dân tộc Việt Nam quyết đem tất cả tinh thần và lực lượng, tính mạng và của cải để giữ vững quyền tự do, độc lập ấy.
      `,
    },
    {
      id: 5,
      title: "Lời Kêu Gọi Toàn Quốc Kháng Chiến",
      description:
        "Bài viết kêu gọi toàn dân đứng lên bảo vệ độc lập, thể hiện tinh thần quyết chiến.",
      details: `Trải qua một thời gian nhân nhượng, chuẩn bị tiềm lực mọi mặt, ngày 19/12/1946, kháng chiến toàn quốc bùng nổ, đánh dấu một bước chuyển lớn của cách mạng Việt Nam. Ra đời trong thời khắc lịch sử đặc biệt, “Lời kêu gọi toàn quốc kháng chiến” của Chủ tịch Hồ Chí Minh đã tác động đến sâu thẳm lòng yêu nước và ý chí quật cường của dân tộc, trở thành biểu tượng lớn của sức mạnh đại đoàn kết.
      Cách mạng tháng Tám thành công, ngày 2/9/1945, tại vườn hoa Ba Đình lịch sử, Chủ tịch Hồ Chí Minh thay mặt Chính phủ cách mạng lâm thời trịnh trọng đọc bản Tuyên ngôn độc lập khai sinh nước Việt Nam Dân chủ Cộng hòa - Nhà nước công nông đầu tiên ở Đông Nam Á. Nhưng không lâu sau ngày tuyên bố độc lập ấy, thực dân Pháp trở lại xâm lược Việt Nam.

Trải qua một thời gian nhân nhượng, chuẩn bị tiềm lực mọi mặt, ngày 19/12/1946, kháng chiến toàn quốc bùng nổ, đánh dấu một bước chuyển lớn của cách mạng Việt Nam. Ra đời trong thời khắc lịch sử đặc biệt, “Lời kêu gọi toàn quốc kháng chiến” của Chủ tịch Hồ Chí Minh đã tác động đến sâu thẳm lòng yêu nước và ý chí quật cường của dân tộc, trở thành biểu tượng lớn của sức mạnh đại đoàn kết.
Khơi dậy sức mạnh của chủ nghĩa yêu nước

Cuối năm 1946, sau khi có thêm viện binh, thực dân Pháp liên tiếp có những hành động khiêu khích, công khai mưu đồ xâm lược, thiết lập lại nền cai trị thuộc địa đối với nước ta. Tháng 11/1946, chúng ngang nhiên đưa lực lượng chiếm đóng Hải Phòng, Lạng Sơn. Tại Hà Nội, từ đầu tháng 12/1946, quân Pháp liên tục dùng đại bác, súng cối bắn phá vào nhiều khu phố tàn sát dân thường, chiếm một số trụ sở của Chính phủ cách mạng. Đặc biệt, ngày 18 và 19/12/1946, thực dân Pháp liên tiếp gửi tối hậu thư buộc Chính phủ Việt Nam Dân chủ Cộng hòa phải giải tán lực lượng tự vệ, giao quyền kiểm soát Thủ đô cho chúng.

Trước âm mưu, hành động xâm lược của kẻ thù, nhân dân Việt Nam không có con đường nào khác là cầm súng chiến đấu để bảo vệ nền độc lập, tự do vừa giành được. Ngày 18 và 19/12/1946, Ban Thường vụ Trung ương Đảng họp hội nghị tại Vạn Phúc (Hà Đông), ra quyết định lịch sử: phát động Toàn quốc kháng chiến. Ngay đêm 19/12/1946, Chủ tịch Hồ Chí Minh thay mặt Trung ương Đảng và Chính phủ ra lời kêu gọi đồng bào cả nước kháng chiến. Sáng 20/12/1946, "Lời kêu gọi Toàn quốc kháng chiến" của Chủ tịch Hồ Chí Minh được phát đi khắp cả nước:

“Hỡi đồng bào toàn quốc!

Chúng ta muốn hòa bình, chúng ta phải nhân nhượng. Nhưng chúng ta càng nhân nhượng, thực dân Pháp càng lấn tới, vì chúng quyết tâm cướp nước ta một lần nữa!

Không! Chúng ta thà hy sinh tất cả, chứ nhất định không chịu mất nước, nhất định không chịu làm nô lệ.

Hỡi đồng bào!

Chúng ta phải đứng lên!

Bất kỳ đàn ông, đàn bà, bất kỳ người già, người trẻ, không chia tôn giáo, đảng phái, dân tộc. Hễ là người Việt Nam thì phải đứng lên đánh thực dân Pháp để cứu Tổ quốc. Ai có súng dùng súng. Ai có gươm dùng gươm, không có gươm thì dùng cuốc, thuổng, gậy gộc. Ai cũng phải ra sức chống thực dân Pháp cứu nước.

Hỡi anh em binh sĩ, tự vệ, dân quân!

Giờ cứu quốc đã đến. Ta phải hy sinh đến giọt máu cuối cùng để giữ gìn đất nước.

Dù phải gian lao kháng chiến, nhưng với một lòng kiên quyết hy sinh, thắng lợi nhất định về dân tộc ta!

Việt Nam độc lập và thống nhất muôn năm!

Kháng chiến thắng lợi muôn năm!"

Đó là lời hịch cứu nước, thể hiện ý chí quyết tâm sắt đá của cả dân tộc, khơi dậy sức mạnh chủ nghĩa yêu nước, truyền thống anh hùng bất khuất; động viên, thôi thúc, cổ vũ toàn Đảng, toàn dân, toàn quân ta bước vào cuộc kháng chiến giành lại độc lập, tự do cho Tổ quốc.

Lời kêu gọi Toàn quốc kháng chiến của Chủ tịch Hồ Chí Minh cùng với Chỉ thị Toàn dân kháng chiến của Ban Thường vụ Trung ương Đảng (viết xong ngày 12/12/1946) và tác phẩm Kháng chiến nhất định thắng lợi của Tổng Bí thư Trường Chinh đã xác lập đường lối kháng chiến toàn dân, toàn diện, trường kỳ và dựa vào sức mình là chính; trở thành ánh sáng soi đường cho dân tộc ta đi đến thắng lợi trong cuộc kháng chiến chống thực dân Pháp xâm lược.

Chấp hành mệnh lệnh của Trung ương Đảng và Bộ Tổng chỉ huy, quân dân ta ở các tỉnh Bắc vĩ tuyến 16 có quân Pháp chiếm đóng đồng loạt nổ súng. Chiến sự diễn ra rất quyết liệt, đặc biệt là trong các thành phố lớn. Tại Thủ đô Hà Nội, khoảng 20h ngày 19/12/1946, công nhân Nhà máy Điện Yên Phụ phá máy, cả thành phố tắt điện. Đó là hiệu lệnh chiến đấu toàn thành, mở đầu kháng chiến toàn quốc. Dù quân ta trang bị vũ khí thô sơ chống lại kẻ địch tinh nhuệ trang bị vũ khí hiện đại, nhưng với tinh thần “Quyết tử để Tổ quốc quyết sinh”, chiến sĩ ta có sự hỗ trợ tích cực của nhân dân vẫn ngày đêm kiên cường bám trụ, giành giật với địch từng căn nhà, từng góc phố. Nhiều trận đánh diễn ra quyết liệt tại Bắc Bộ phủ, chợ Đồng Xuân, nhà bưu điện... diệt nhiều địch, gây hoang mang cho kẻ thù.

Cùng với Hà Nội, quân dân các địa phương khắp Bắc, Trung, Nam anh dũng đứng lên chống thực dân Pháp xâm lược. Cả dân tộc chung sức đồng lòng đánh giặc cứu nước với ý chí sục sôi, niềm tin tất thắng. Đến tháng 2/1947, khi địch tăng viện phá vòng vây, lực lượng ta được lệnh rút về hậu phương, cuộc chiến đấu trong các đô thị tạm thời kết thúc để chuyển sang giai đoạn chiến đấu mới.

Trải qua gần hai tháng liên tục chiến đấu, quân dân ta giành thắng lợi quan trọng: thực hiện tiêu hao, tiêu diệt, giam chân địch trong thành phố, làm thất bại kế hoạch “đánh nhanh, thắng nhanh” của thực dân Pháp; tạo điều kiện di chuyển các cơ quan, kho tàng, vật chất (ta đã vận chuyển được gần 40.000 tấn máy móc, nguyên liệu ra vùng căn cứ); tranh thủ thời gian tổ chức cho hàng chục vạn nhân dân tản cư về vùng căn cứ xây dựng thế trận kháng chiến lâu dài.

Đoàn kết vì khát vọng hòa bình

Đã 77 năm trôi qua nhưng lời kêu gọi bất hủ có giá trị lịch sử sâu sắc của Chủ tịch Hồ Chí Minh vẫn còn nguyên giá trị, khẳng định bài học lớn về phát huy sức mạnh đại đoàn kết toàn dân tộc trong xây dựng và bảo vệ Tổ quốc, vì một Việt Nam hùng cường, thịnh vượng. Chúng ta càng nhận thức sâu sắc, toàn diện hơn về chủ trương phát động toàn quốc kháng chiến của Trung ương Đảng và Chủ tịch Hồ Chí Minh (19/12/1946). Trước hết, đó là kết quả từ một quá trình đấu tranh đầy cam go, phức tạp, thể hiện bản lĩnh và trí tuệ Việt Nam trước thử thách ngặt nghèo, mà biểu hiện cụ thể là những quyết sách đúng đắn, sáng tạo vừa linh hoạt, mềm dẻo, nhưng cũng rất kiên quyết.

Kết quả đem lại là chúng ta từng bước loại bỏ bớt kẻ thù, tranh thủ được thời gian chuẩn bị tiềm lực để bước vào kháng chiến. Mặt khác, quyết định phát động toàn quốc kháng chiến còn thể hiện rõ sức mạnh to lớn của cách mạng Việt Nam, sức mạnh ấy được tạo ra từ truyền thống yêu nước nồng nàn kết hợp với chiến tranh nhân dân toàn dân, toàn diện, nhờ đó mà ngay từ đầu chúng ta đập tan âm mưu “đánh nhanh, thắng nhanh” của thực dân Pháp, buộc chúng phải chuyển sang đánh lâu dài, mở ra thắng lợi đầu tiên trong cuộc trường chinh 30 năm chiến tranh giải phóng dân tộc và bảo vệ Tổ quốc (1945-1975). Bao trùm hơn tất cả, quyết định ấy góp phần khẳng định cho đường lối chính trị, đường lối quân sự độc lập, tự chủ, đúng đắn, sáng tạo của Đảng Cộng sản Đông Dương trong cuộc đụng đầu lịch sử với thực dân Pháp.

Trong công cuộc đổi mới, để giữ vững và bảo vệ nền độc lập, tự do, hòa bình lâu dài của đất nước, tư tưởng “hòa bình” mà Chủ tịch Hồ Chí Minh thắp lên từ ngày đầu phát động nhân dân bước vào cuộc kháng chiến chống thực dân Pháp xâm lược đã luôn soi đường, chỉ lối cho Đảng ta, nhân dân và các lực lượng vũ trang ta tập trung vào thực hành và giải quyết tốt mối quan hệ giữa hai nhiệm vụ chiến lược là xây dựng và bảo vệ Tổ quốc. Khát vọng hòa bình, ngăn chặn và đẩy lùi các nguy cơ phá hoại, xâm lược, bảo vệ vững chắc nền độc lập, tự do đất nước ta không chỉ được nuôi dưỡng, hun đúc, phát huy trong mọi tầng lớp nhân dân và các lực lượng vũ trang ta, mà còn được cụ thể hóa bằng những hành động, việc làm cụ thể trong xây dựng đất nước ngày càng phồn vinh, hạnh phúc và chủ trương bảo vệ Tổ quốc từ sớm, từ xa bằng biện pháp hòa bình.

Đến nay, Việt Nam đã cử 789 lượt cán bộ, nhân viên tham gia hoạt động gìn giữ hòa bình Liên hợp quốc tại ba phái bộ và trụ sở Liên hợp quốc, trong đó có 782 cán bộ Quân đội và 7 cán bộ Công an. Theo đánh giá của các phái bộ và cơ quan Liên hợp quốc, các sĩ quan Việt Nam đã có rất nhiều nỗ lực trong thực hiện các nhiệm vụ được giao tại các phái bộ, thể hiện sự chuyên nghiệp, kỷ luật cao; có nhiều sáng tạo; để lại nhiều ấn tượng tốt đẹp với lãnh đạo phái bộ, chỉ huy lực lượng quân sự và đồng nghiệp quốc tế bằng những đóng góp cụ thể, thiết thực, mang tính nhân văn cao. Những cán bộ, chiến sĩ của Quân đội nhân dân Việt Nam tham gia hoạt động gìn giữ hòa bình tại các phái bộ không những thể hiện được bản lĩnh, năng lực, trách nhiệm của Bộ đội Cụ Hồ mà còn lan tỏa hình ảnh đẹp của Việt Nam đến với bạn bè thế giới, trở thành những "sứ giả hòa bình" của đất nước trong mắt bạn bè năm châu.

“Lời kêu gọi Toàn quốc kháng chiến” ra đời cách đây đã 77 năm nhưng ý nghĩa lịch sử và tầm vóc thời đại của nó vẫn còn nguyên giá trị. Không chỉ là biểu tượng sáng ngời về chủ nghĩa anh hùng cách mạng, truyền thống yêu nước, tinh thần đoàn kết, ý chí quật cường, bất khuất và lòng quyết tâm chống ngoại xâm của dân tộc ta, đây còn là Cương lĩnh về khát vọng hòa bình, tiếp thêm sức mạnh cho toàn dân tộc vững bước trên con đường đổi mới, xây dựng và bảo vệ Tổ quốc Việt Nam xã hội chủ nghĩa.
      `,
    },
    {
      id: 6,
      title: "Di Chúc Hồ Chí Minh",
      description:
        "Bản di chúc của Hồ Chí Minh, thể hiện tâm nguyện xây dựng một Việt Nam hòa bình, thống nhất.",
      details:
       `Toàn văn Di chúc của Chủ tịch Hồ Chí Minh:


VIỆT NAM DÂN CHỦ CỘNG HOÀ
Độc lập - Tự do - Hạnh phúc
-------------------------

         Cuộc chống Mỹ, cứu nước của nhân dân ta dù phải kinh qua gian khổ, hy sinh nhiều hơn nữa, song nhất định thắng lợi hoàn toàn.

         Đó là một điều chắc chắn.

         Tôi có ý định đến ngày đó, tôi sẽ đi khắp hai miền Nam Bắc, để chúc mừng đồng bào, cán bộ và chiến sĩ anh hùng; thǎm hỏi các cụ phụ lão, các cháu thanh niên và nhi đồng yêu quý của chúng ta.

         Kế theo đó, tôi sẽ thay mặt nhân dân ta đi thǎm và cảm ơn các nước anh em trong phe xã hội chủ nghĩa, và các nước bầu bạn khắp nǎm châu đã tận tình ủng hộ và giúp đỡ cuộc chống Mỹ, cứu nước của nhân dân ta.

*
* *

         Ông Đỗ Phủ là người làm thơ rất nổi tiếng ở Trung Quốc đời nhà Đường, có câu rằng "Nhân sinh thất thập cổ lai hy", nghĩa là "Người thọ 70, xưa nay hiếm".

         Nǎm nay, tôi vừa 79 tuổi, đã là lớp người "xưa nay hiếm" nhưng tinh thần, đầu óc vẫn rất sáng suốt, tuy sức khoẻ có kém so với vài nǎm trước đây. Khi người ta đã ngoài 70 xuân, thì tuổi tác càng cao, sức khoẻ càng thấp. Điều đó cũng không có gì lạ.

        Nhưng ai mà đoán biết tôi còn phục vụ cách mạng, phục vụ tổ quốc, phục vụ nhân dân được bao lâu nữa?

        Vì vậy, tôi để sẵn mấy lời này, phòng khi tôi sẽ đi gặp cụ Các Mác, cụ Lênin và các vị cách mạng đàn anh khác, thì đồng bào cả nước, đồng chí trong Đảng và bầu bạn khắp nơi đều khỏi cảm thấy đột ngột.

        TRƯỚC HẾT NÓI VỀ ĐẢNG - Nhờ đoàn kết chặt chẽ, một lòng một dạ phục vụ giai cấp, phục vụ nhân dân, phục vụ Tổ quốc, cho nên từ ngày thành lập đến nay, Đảng ta đã đoàn kết, tổ chức và lãnh đạo nhân dân ta hǎng hái đấu tranh tiến từ thắng lợi này đến thắng lợi khác.

        Đoàn kết là một truyền thống cực kỳ quý báu của Đảng và của dân ta. Các đồng chí từ Trung ương đến các chi bộ cần giữ gìn sự đoàn kết nhất trí của Đảng như giữ gìn con ngươi của mắt mình.

        Trong Đảng thực hành dân chủ rộng rãi, thường xuyên và nghiêm chỉnh tự phê bình và phê bình là cách tốt nhất để củng cố và phát triển sự đoàn kết và thống nhất của Đảng. Phải có tình đồng chí thương yêu lẫn nhau.

        Đảng ta là một Đảng cầm quyền. Mỗi đảng viên và cán bộ phải thực sự thấm nhuần đạo đức cách mạng, thật sự cần kiệm liêm chính, chí công vô tư. Phải giữ gìn Đảng ta thật trong sạch, phải xứng đáng là người lãnh đạo, là người đầy tớ thật trung thành của nhân dân.

        ĐOÀN VIÊN VÀ THANH NIÊN ta nói chung là tốt, mọi việc đều hằng hái xung phong, không ngại khó khǎn, có chí tiến thủ. Đảng cần phải chǎm lo giáo dục đạo đức cách mạng cho họ, đào tạo họ thành những người thừa kế xây dựng chủ nghĩa xã hội vừa "hồng" vừa "chuyên".

        Bồi dưỡng thế hệ cách mạng cho đời sau là một việc rất quan trọng và rất cần thiết.

        NHÂN DÂN LAO ĐỘNG ta ở miền xuôi cũng như ở miền núi, đã bao đời chịu đựng gian khổ, bị chế độ phong kiến và thực dân áp bức bóc lột, lại kinh qua nhiều nǎm chiến tranh.

        Tuy vậy, nhân dân ta rất anh hùng, dũng cảm, hǎng hái, cần cù. Từ ngày có Đảng, nhân dân ta luôn luôn đi theo Đảng, rất trung thành với Đảng.

         Đảng cần phải có kế hoạch thật tốt để phát triển kinh tế và vǎn hóa, nhằm không ngừng nâng cao đời sống của nhân dân.

          CUỘC KHÁNG CHIẾN CHỐNG MỸ có thể còn kéo dài. Đồng bào ta có thể phải hy sinh nhiều của, nhiều người. Dù sao, chúng ta phải quyết tâm đánh giặc Mỹ đến thắng lợi hoàn toàn.

Còn non, còn nước, còn người
 Thắng giặc Mỹ, ta sẽ xây dựng hơn mười ngày nay!

         Dù khó khǎn gian khổ đến mấy, nhân dân ta nhất định sẽ hoàn toàn thắng lợi. Đế quốc Mỹ nhất định phải cút khỏi nước ta. Tổ quốc ta nhất định sẽ thống nhất. Đồng bào Nam Bắc nhất định sẽ sum họp một nhà. Nước ta sẽ có vinh dự lớn là một nước nhỏ mà đã anh dũng đánh thắng hai đế quốc to - là Pháp và Mỹ; và đã góp phần xứng đáng vào phong trào giải phóng dân tộc.

         VỀ PHONG TRÀO CỘNG SẢN THẾ GIỚI - là một người suốt đời phục vụ cách mạng, tôi càng tự hào với sự lớn mạnh của phong trào cộng sản và công nhân quốc tế bao nhiêu, thì tôi càng đau lòng bấy nhiêu vì sự bất hoà hiện nay giữa các đảng anh em!

         Tôi mong rằng Đảng ta sẽ ra sức hoạt động, góp phần đắc lực vào việc khôi phục lại khối đoàn kết giữa các đảng anh em trên nền tảng chủ nghĩa Mác-Lênin và chủ nghĩa quốc tế vô sản, có lý có tình.

        Tôi tin chắc rằng các đảng anh em và các nước anh em nhất định sẽ phải đoàn kết lại.

    *
    * *

       VỀ VIỆC RIÊNG - Suốt đời tôi hết lòng hết sức phục vụ Tổ quốc, phục vụ cách mạng, phục vụ nhân dân. Nay dù phải từ biệt thế giới này, tôi không có điều gì phải hối hận, chỉ tiếc là tiếc rằng không được phục vụ lâu hơn nữa, nhiều hơn nữa.

       Sau khi tôi đã qua đời, chớ nên tổ chức điếu phúng linh đình, để khỏi lãng phí thì giờ và tiền bạc của nhân dân.

*
* *

       Cuối cùng, tôi để lại muôn vàn tình thân yêu cho toàn dân, toàn Đảng, cho toàn thể bộ đội, cho các cháu thanh niên và nhi đồng.

       Tôi cũng gửi lời chào thân ái đến các đồng chí, các bầu bạn và các cháu thanh niên, nhi đồng quốc tế.

       Điều mong muốn cuối cùng của tôi là: Toàn Đảng, toàn dân ta đoàn kết phấn đấu, xây dựng một nước Việt Nam hoà bình, thống nhất, độc lập, dân chủ và giàu mạnh, và góp phần xứng đáng vào sự nghiệp cách mạng thế giới".

Hà Nội, ngày 10 tháng 5 nǎm 1969
HỒ CHÍ MINH`,
    },
    // {
    //   id: 7,
    //   title: "Các Bài Viết Về Đạo Đức Cách Mạng",
    //   description:
    //     "Tập hợp các bài viết của Hồ Chí Minh về phẩm chất cần thiết của người cách mạng.",
    //   details:
    //     "Các bài viết này nhấn mạnh sự cần thiết của đạo đức trong công cuộc xây dựng đất nước. Người đã chỉ rõ những phẩm chất cần có của người cách mạng như cần, kiệm, liêm, chính, chí công vô tư.",
    // },
    {
      id: 8,
      title: "Hồ Chí Minh Toàn Tập",
      description:
        "Bộ sưu tập đầy đủ các tác phẩm, bài viết, và diễn văn của Hồ Chí Minh.",
      details:
        `Bộ sách Hồ Chí Minh Toàn Tập là một tập hợp đồ sộ các bài viết, thư từ, bài diễn văn, báo cáo và trả lời phỏng vấn của Chủ tịch Hồ Chí Minh, phản ánh tư tưởng, đường lối cách mạng và những đóng góp của ông đối với Việt Nam và thế giới. Bộ sách được xuất bản qua nhiều lần, với lần tái bản gần nhất gồm 15 tập vào năm 2011.

Tư tưởng Hồ Chí Minh
Hồ Chí Minh là người đặt nền móng cho tư tưởng cách mạng Việt Nam, kết hợp nhuần nhuyễn giữa chủ nghĩa Marx-Lenin, chủ nghĩa yêu nước, và tinh thần dân tộc. Ông nhấn mạnh rằng cách mạng không chỉ là đấu tranh giai cấp mà còn là cuộc chiến giành độc lập dân tộc. Tư tưởng Hồ Chí Minh được thể hiện qua nhiều bài viết, trong đó ông khẳng định rằng độc lập dân tộc gắn liền với chủ nghĩa xã hội, và chỉ có chủ nghĩa xã hội mới đảm bảo được sự tự do, bình đẳng thực sự cho nhân dân.

Cuộc đấu tranh chống thực dân, đế quốc
Hồ Chí Minh là người tiên phong trong việc vạch trần bản chất của chủ nghĩa thực dân. Ngay từ những năm đầu thế kỷ XX, ông đã viết nhiều bài báo lên án sự áp bức của thực dân Pháp đối với nhân dân Việt Nam. Ông kêu gọi nhân dân đứng lên đấu tranh, không chỉ bằng vũ khí mà còn bằng trí tuệ, đoàn kết và lòng yêu nước. Trong các bài viết của mình, Hồ Chí Minh nhấn mạnh rằng cách mạng là sự nghiệp của quần chúng, và chỉ có nhân dân mới có thể giành lại độc lập thực sự.

Lãnh đạo cách mạng Việt Nam
Hồ Chí Minh đóng vai trò quan trọng trong Cách mạng Tháng Tám, dẫn đến sự ra đời của nước Việt Nam Dân chủ Cộng hòa vào năm 1945. Trong các bài viết và bài phát biểu của mình, ông luôn nhấn mạnh rằng độc lập dân tộc phải đi đôi với hạnh phúc của nhân dân. Sau khi giành được độc lập, Hồ Chí Minh tiếp tục lãnh đạo cuộc kháng chiến chống Pháp và sau đó là chống Mỹ, với mục tiêu thống nhất đất nước. Ông đề ra chiến lược trường kỳ kháng chiến, dựa vào sức mạnh của nhân dân và sự đoàn kết toàn dân tộc.

Văn hóa, giáo dục và đạo đức
Hồ Chí Minh không chỉ là một nhà cách mạng mà còn là một nhà giáo dục, một nhà văn hóa lớn. Ông nhấn mạnh rằng giáo dục là chìa khóa để phát triển đất nước, và một dân tộc muốn tiến bộ phải có một nền giáo dục tốt. Ông kêu gọi nhân dân thực hành đời sống mới, loại bỏ những thói quen lạc hậu, xây dựng một xã hội văn minh, tiến bộ. Trong các bài viết của mình, Hồ Chí Minh cũng đề cao đạo đức cách mạng, nhấn mạnh rằng cán bộ, đảng viên phải luôn giữ gìn phẩm chất đạo đức, sống giản dị, gần gũi với nhân dân.

Các bài viết mang tính quốc tế
Hồ Chí Minh không chỉ là lãnh tụ của Việt Nam mà còn là một nhà cách mạng quốc tế. Ông viết nhiều bài báo thể hiện sự đoàn kết với các phong trào cách mạng trên thế giới, đặc biệt là các nước thuộc địa. Ông kêu gọi nhân dân các nước bị áp bức đứng lên đấu tranh giành độc lập, đồng thời nhấn mạnh rằng cách mạng Việt Nam không thể tách rời khỏi cách mạng thế giới. Trong các bài viết của mình, Hồ Chí Minh thể hiện rõ quan điểm hòa bình, hữu nghị, mong muốn xây dựng một thế giới không có chiến tranh, nơi các dân tộc có thể chung sống hòa bình.

Đặc điểm nổi bật của Hồ Chí Minh Toàn Tập
Ngôn ngữ giản dị, dễ hiểu, phù hợp với mọi tầng lớp nhân dân.

Sử dụng nhiều bút danh, tùy theo nội dung và đối tượng độc giả.

Tư tưởng xuyên suốt, dù viết ở thời điểm nào, Hồ Chí Minh vẫn giữ vững lập trường cách mạng.

Gắn liền với thực tiễn, không chỉ là lý luận mà còn là hướng dẫn cụ thể cho cách mạng Việt Nam.`,
    },
  ];

  const handleResourceClick = (resource: Resource) => {
    console.log("Resource clicked:", resource);
    setSelectedResource(resource);
    setIsModalOpen(true);
    console.log("Modal state:", { isOpen: true, resource });
  };

  const handleCloseModal = () => {
    console.log("Closing modal");
    setIsModalOpen(false);
    setSelectedResource(null);
  };

  return (
    <section id="resources" className="section resources-section">
      <h2 className="section-title fade-in">Tài Liệu Tham Khảo</h2>
      <div className="resources-content">
        {resources.map((resource) => (
          <div key={resource.id} className="resource-item modern-card slide-up">
            <div className="resource-icon">
              <FaBookOpen size={32} />
            </div>
            <h3 className="resource-title">{resource.title}</h3>
            <p>{resource.description}</p>
            <button
              className="resource-button"
              title={`Xem chi tiết về ${resource.title}`}
              onClick={() => handleResourceClick(resource)}
            >
              Xem chi tiết
            </button>
          </div>
        ))}
      </div>

      <ResourceModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        resource={selectedResource}
      />
    </section>
  );
}

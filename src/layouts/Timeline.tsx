import { useState, useEffect } from "react";
import BacHoThoiThoAuQueNhaImg from "@/assets/images/BacHoThoiThoAu.jpg"
import HocTapTaiQuocHocHueImg from "@/assets/images/truongquochochue.jpg"
import ThamGiaPhongTraoChongThue1908Img from "@/assets/images/tranhvebieutinhchongthue.jpg"
import ThayGiaoNguyenTatThanhODucThanhImg from "@/assets/images/tranhthaygiaoNTT.jpg"
import benNhaRongImg from "@/assets/images/image00_637585327229311227_HasThumb.jpg";
import tauLatoucheTrevilleImg from "@/assets/images/bh.jpg";
import nguyenTatThanhImg from "@/assets/images/18-06-2019-yeu-sach-cua-nhan-dan-an-nam-mot-the-ky-van-ven-nguyen-gia-tri-57057029.jpg";
import yeuSachImg from "@/assets/images/14470215453_21df093d76.jpg";
import baoThanhNienImg from "@/assets/images/ThanhnienbaocachmangVNdautien_2019061481631.jpg";
import bacONgaImg from "@/assets/images/images2510347_6d.jpg";
import thanhLapDangImg from "@/assets/images/cau-3-hoi-nghi-thanh-lap-dang-10-16-20-13510-8-54-22.jpg";
import bacOThaiLanImg from "@/assets/images/1620981181-13.jpg";
import bacVeNuocImg from "@/assets/images/80-nam-ngay-bac-ho-ve-nuoc-lanh-dao-cach-mang-viet-nam-28-1-1941-28-1-2021-cuoc-tro-ve-don-truoc-thoi-co-lich-su-59296-1400x928.jpg";
import baoLePariaImg from "@/assets/images/bac_ho_va_to_bao_le_paria.jpg";
import bacOTrungQuocImg from "@/assets/images/dsc_6651_ftqq_20200826073940.jpg";
import giaiPhongQuanImg from "@/assets/images/18052016son141.jpg";
import mitTingImg from "@/assets/images/19 thang 8.jpg";
import gianhChinhQuyenSGImg from "@/assets/images/170810ThangCQ06.jpg";
import bacDocTuyenNgonImg from "@/assets/images/bac ho doc tuyen ngon.jpg";
import tongTuyenCuImg from "@/assets/images/tong tuyen cu.jpg";
import bacBoPhieuImg from "@/assets/images/bac ho di bo phieu hang voi.jpg";
import hienPhapDauTienImg from "@/assets/images/Hiến_pháp_Việt_Nam_Dân_chủ_Cộng_hòa_năm_1946_-_Cục_Văn_thư_và_Lưu_trữ_nhà_nước.jpg";
import loiKeuGoiImg from "@/assets/images/Toanquockhangchien.jpg";
import chienDichVietBacImg from "@/assets/images/2110Vietbac3.jpg";
import keoPhaoImg from "@/assets/images/keo - phao-dien-bien-phu-2612-15-46-40.jpg";
import chienThangDBPImg from "@/assets/images/ttxvn0901hc-1578582418-57.jpg";
import thamHoiBacImg from "@/assets/images/thamhoiBac.jpg";
import bacHoMatImg from "@/assets/images/BacHomat.jpg";
import linhCuuBacImg from "@/assets/images/LinhCuuBac.jpg";
import daiTuongAnUiImg from "@/assets/images/daituonganui.jpg";
import BacHoCuoiImg from "@/assets/images/BacHoCuoi.jpg";
import BacHoVietImg from "@/assets/images/BacHoViet.jpg";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const timelineEvents = [
  {
    "year": "1890-1910",
    "description": "Giai đoạn từ 1890 đến 1910 là những năm tháng quan trọng hình thành nhân cách, trí tuệ và chí hướng yêu nước của Nguyễn Sinh Cung - Nguyễn Tất Thành",
    "moreId": "timeline-modal-1890-1910",
    "images": [
      {
        "src": BacHoThoiThoAuQueNhaImg,
        "caption": "Nguyễn Sinh Cung (Chủ tịch Hồ Chí Minh) sinh ngày 19/5/1890 tại làng Hoàng Trù, xã Kim Liên, huyện Nam Đàn, tỉnh Nghệ An. Tuổi thơ của Người gắn liền với mái nhà tranh đơn sơ, sự dạy dỗ của người cha là nhà Nho yêu nước Nguyễn Sinh Sắc và người mẹ hiền thảo Hoàng Thị Loan. Chính truyền thống kiên cường, bất khuất của quê hương Xô Viết anh hùng và nền giáo dục gia đình đã đặt nền móng cho nhân cách và tư tưởng yêu nước của Người."
      },
      {
        "src": HocTapTaiQuocHocHueImg,
        "caption": "Thời niên thiếu, Nguyễn Tất Thành theo học tại trường Quốc Học Huế (khoảng 1907-1908). Đây là một trong những trung tâm giáo dục lớn nhất lúc bấy giờ, nơi Người được tiếp xúc với các trào lưu tư tưởng mới và chứng kiến tinh thần yêu nước của nhiều thầy giáo, bạn học. Chính môi trường này đã góp phần khơi dậy trong Người những nhận thức sâu sắc về vận mệnh đất nước và sự cần thiết phải tìm con đường đấu tranh mới."
      },
      {
        "src": ThamGiaPhongTraoChongThue1908Img,
        "caption": "(Tranh vẽ) Năm 1908, hưởng ứng phong trào chống sưu thuế của nông dân các tỉnh Trung Kỳ, Nguyễn Tất Thành, khi đó đang là học sinh trường Quốc Học Huế, đã tham gia vào các hoạt động của đoàn biểu tình, đảm nhận vai trò liên lạc và phiên dịch. Sự kiện này đánh dấu một bước trưởng thành quan trọng, thể hiện sự đồng cảm sâu sắc của Người với nỗi thống khổ của nhân dân và tinh thần dấn thân vì nghĩa lớn từ rất sớm."
      },
      {
        "src": ThayGiaoNguyenTatThanhODucThanhImg,
        "caption": "(Tranh vẽ) Năm 1910, thầy giáo Nguyễn Tất Thành đến dạy học tại trường Dục Thanh ở thành phố Phan Thiết (tỉnh Bình Thuận). Trong thời gian ngắn ngủi này, Người không chỉ truyền dạy kiến thức văn hóa mà còn khơi gợi lòng yêu nước, ý thức dân tộc cho các học trò. Đây cũng là chặng dừng chân quan trọng trước khi Người vào Sài Gòn và thực hiện quyết định lịch sử: ra đi tìm đường cứu nước vào năm 1911."
      }
    ]
  },
  {
    year: "1911",
    description:
      "Bác rời bến Nhà Rồng lên tàu Amiral Latouche-Tréville bắt đầu hành trình cứu nước.",
    moreId: "timeline-modal-2",
    images: [
      {
        src: tauLatoucheTrevilleImg,
        caption:
          "Bến Nhà Rồng lịch sử (nay thuộc Bảo tàng Hồ Chí Minh - chi nhánh TP. Hồ Chí Minh), nằm trên sông Sài Gòn. Chính tại nơi đây, vào ngày 5 tháng 6 năm 1911, người thanh niên yêu nước Nguyễn Tất Thành (sau này là Chủ tịch Hồ Chí Minh), với lòng yêu nước nồng nàn và quyết tâm cháy bỏng, đã lên con tàu Amiral Latouche-Tréville, bắt đầu cuộc hành trình kéo dài 30 năm đi khắp năm châu bốn biển để tìm ra con đường cứu nước, giải phóng dân tộc Việt Nam khỏi ách đô hộ của thực dân Pháp.",
      },
      {
        src: benNhaRongImg,
        caption:
          "Tàu Amiral Latouche-Tréville, một tàu buôn của hãng Chargeurs Réunis (Pháp). Ngày 5/6/1911, với tên mới là Văn Ba và xin làm phụ bếp trên tàu, Nguyễn Tất Thành đã rời Bến Nhà Rồng trên con tàu này, bắt đầu một chương mới trong cuộc đời mình – hành trình tìm kiếm chân lý và con đường giải phóng cho dân tộc. Đây là bước ngoặt quan trọng, thể hiện ý chí, nghị lực phi thường và tầm nhìn vượt thời đại của Người.",
      },
    ],
  },
  {
    year: "1911-1941",
    description:
      "Trở về nước sau 30 năm, sáng lập Việt Minh, lãnh đạo cách mạng.",
    moreId: "timeline-modal-3",
    images: [
      {
        src: nguyenTatThanhImg,
        caption:
          "Năm 1919, Nguyễn Ái Quốc gia nhập Đảng Xã hội Pháp (Section Française de l'Internationale Ouvrière - SFIO) với mục tiêu tìm hiểu con đường đấu tranh chính trị và tìm sự ủng hộ cho sự nghiệp giải phóng dân tộc Việt Nam. Cùng năm, Người tham gia sáng lập Hội những người An Nam yêu nước tại Pháp (Groupe des Patriotes Annamites) để tập hợp kiều bào, tuyên truyền lòng yêu nước và chuẩn bị cho việc gửi các yêu sách tới các cường quốc.",
      },
      {
        src: yeuSachImg,
        caption:
          "Ngày 18/6/1919, Nguyễn Ái Quốc (lần đầu tiên sử dụng tên này một cách công khai) đã thay mặt Hội những người An Nam yêu nước tại Pháp gửi 'Bản Yêu sách của nhân dân An Nam' tới Hội nghị hòa bình Versailles. Bản yêu sách gồm 8 điểm, đòi các quyền tự do dân chủ cơ bản cho nhân dân Việt Nam như quyền tự quyết, tự do báo chí, tự do hội họp, và ân xá tù chính trị. Mặc dù không được chấp nhận, sự kiện này đã gây tiếng vang lớn, đánh dấu bước ngoặt trong hành trình tìm đường cứu nước của Người.",
      },
      {
        src: baoLePariaImg,
        caption:
          "Báo Le Paria (Người Cùng Khổ), ra số đầu tiên ngày 1/4/1922 tại Paris, là cơ quan ngôn luận của Hội Liên hiệp Thuộc địa (Union Intercoloniale) do Nguyễn Ái Quốc đồng sáng lập, làm chủ nhiệm và là cây bút chính. Tờ báo đóng vai trò quan trọng trong việc tố cáo chính sách cai trị tàn bạo của chủ nghĩa thực dân, đoàn kết các dân tộc thuộc địa và truyền bá tư tưởng cách mạng, trong đó có những mầm mống của chủ nghĩa Mác-Lênin.",
      },
      {
        src: bacONgaImg,
        caption:
          "Tháng 6/1923, Nguyễn Ái Quốc bí mật rời Paris (Pháp) đến Petrograd (nay là St. Petersburg), Liên Xô. Sau đó, Người đến Moscow, bắt đầu một thời kỳ học tập, nghiên cứu sâu sắc về chủ nghĩa Mác-Lênin, kinh nghiệm Cách mạng Tháng Mười Nga và các vấn đề về phong trào giải phóng dân tộc tại trường Đại học Lao động Phương Đông. Người cũng tích cực hoạt động trong Quốc tế Cộng sản, tham dự Đại hội V Quốc tế Cộng sản (1924).",
      },
      {
        src: bacOTrungQuocImg,
        caption:
          "Tháng 11/1924, với tên gọi Lý Thụy, Nguyễn Ái Quốc đến Quảng Châu (Trung Quốc) trong phái đoàn của Chính phủ Liên Xô do Mikhail Markovich Borodin làm trưởng đoàn. Tại đây, Người đã khẩn trương chuẩn bị về tư tưởng, chính trị và tổ chức cho việc thành lập một chính đảng cách mạng ở Việt Nam, trong đó có việc thành lập Hội Việt Nam Cách mạng Thanh niên (tháng 6/1925) và trực tiếp mở các lớp huấn luyện, đào tạo hàng trăm cán bộ cốt cán.",
      },
      {
        src: baoThanhNienImg,
        caption:
          "Báo Thanh Niên, do Nguyễn Ái Quốc sáng lập và trực tiếp chỉ đạo, ra số đầu tiên ngày 21/6/1925 tại Quảng Châu, Trung Quốc, đánh dấu sự ra đời của báo chí cách mạng Việt Nam. Đây là cơ quan ngôn luận trung ương của Hội Việt Nam Cách mạng Thanh niên, có vai trò nòng cốt trong việc truyền bá chủ nghĩa Mác-Lênin và đường lối cách mạng giải phóng dân tộc một cách có hệ thống vào Việt Nam, góp phần quan trọng chuẩn bị về tư tưởng và tổ chức cho sự ra đời của Đảng Cộng sản Việt Nam.",
      },
      {
        src: bacOThaiLanImg,
        caption:
          "Từ tháng 7/1928 đến tháng 11/1929, Nguyễn Ái Quốc (hoạt động với bí danh Thầu Chín, và có thời gian cải trang thành nhà sư với pháp danh Sư Hạnh Đa để che mắt mật thám) đã đến các vùng có đông Việt kiều sinh sống ở Xiêm (Thái Lan) như Udon Thani, Sakon Nakhon, Nakhon Phanom. Người đã gây dựng, củng cố các cơ sở cách mạng, tổ chức các hội thân ái, các lớp học chữ quốc ngữ, tuyên truyền lòng yêu nước, và xây dựng đường dây liên lạc quan trọng về nước, chuẩn bị nhân lực và vật lực cho cách mạng.",
      },
      {
        src: thanhLapDangImg,
        caption:
          "Dưới sự chủ trì của đồng chí Nguyễn Ái Quốc, với tư cách là phái viên của Quốc tế Cộng sản, Hội nghị hợp nhất các tổ chức cộng sản trong nước (Đông Dương Cộng sản Đảng, An Nam Cộng sản Đảng) và một số đại biểu của Đông Dương Cộng sản Liên đoàn đã diễn ra tại một ngôi nhà ở Cửu Long, Hương Cảng (Trung Quốc) từ ngày 6/1 đến ngày 7/2/1930. Hội nghị đã quyết định thống nhất thành một đảng duy nhất là Đảng Cộng sản Việt Nam, thông qua Chính cương vắn tắt, Sách lược vắn tắt, Điều lệ vắn tắt do Người khởi thảo, đánh dấu một bước ngoặt vĩ đại của cách mạng Việt Nam. Ngày 3/2/1930 được Đại hội Đảng toàn quốc lần thứ III (1960) chính thức công nhận là ngày thành lập Đảng.",
      },
      {
        src: bacVeNuocImg,
        caption:
          "Sau 30 năm hoạt động không mệt mỏi ở nước ngoài, ngày 28/1/1941, lãnh tụ Nguyễn Ái Quốc đã bí mật vượt qua biên giới Việt-Trung, đặt chân lên mảnh đất quê hương tại cột mốc 108 thuộc làng Pác Bó, xã Trường Hà, huyện Hà Quảng, tỉnh Cao Bằng. Sự kiện này mở ra một thời kỳ mới, Người trực tiếp lãnh đạo phong trào cách mạng trong nước, xây dựng căn cứ địa, và chủ trì Hội nghị Trung ương lần thứ 8 (tháng 5/1941) quyết định chuyển hướng chiến lược, đặt nhiệm vụ giải phóng dân tộc lên hàng đầu và thành lập Mặt trận Việt Minh.",
      },
    ],
  },
  {
    year: "1944-1954",
    description:
      "Đọc Tuyên ngôn Độc lập tại Quảng trường Ba Đình, khai sinh nước Việt Nam Dân chủ Cộng hòa.",
    moreId: "timeline-modal-4",
    images: [
      {
        src: giaiPhongQuanImg,
        caption:
          "Theo chỉ thị của Chủ tịch Hồ Chí Minh, Đội Việt Nam Tuyên truyền Giải phóng quân được thành lập ngày 22/12/1944 tại khu rừng Trần Hưng Đạo (nay thuộc xã Tam Kim, huyện Nguyên Bình, tỉnh Cao Bằng), gồm 34 chiến sĩ ưu tú do đồng chí Võ Nguyên Giáp trực tiếp chỉ huy. Đây là đội quân chủ lực đầu tiên, tiền thân của Quân đội Nhân dân Việt Nam, với nhiệm vụ 'chính trị nặng hơn quân sự', thực hiện tuyên truyền vũ trang và gây dựng cơ sở cách mạng, mở đầu cho truyền thống vẻ vang của quân đội ta.",
      },
      {
        src: mitTingImg,
        caption:
          "Sáng ngày 19/8/1945, trong không khí sục sôi của Cách mạng Tháng Tám, một cuộc mít tinh lớn do Mặt trận Việt Minh tổ chức đã diễn ra tại Quảng trường Nhà hát Lớn Hà Nội. Cuộc mít tinh nhanh chóng biến thành cuộc biểu tình vũ trang của quần chúng nhân dân, tiến chiếm các cơ quan đầu não của địch, đánh dấu thắng lợi quyết định của cuộc Tổng khởi nghĩa giành chính quyền ở Hà Nội, tạo đà cho thắng lợi trên cả nước.",
      },
      {
        src: gianhChinhQuyenSGImg,
        caption:
          "Ngày 25/8/1945, hưởng ứng lời kêu gọi của Tổng bộ Việt Minh và chỉ đạo của Xứ ủy Nam Kỳ, hàng triệu quần chúng nhân dân Sài Gòn - Chợ Lớn và các tỉnh lân cận đã đồng loạt vùng lên khởi nghĩa giành chính quyền. Các lực lượng cách mạng đã chiếm giữ các vị trí then chốt, làm chủ thành phố, khẳng định thắng lợi to lớn của Cách mạng Tháng Tám tại Sài Gòn và toàn Nam Bộ.",
      },
      {
        src: bacDocTuyenNgonImg,
        caption:
          "Ngày 2/9/1945, tại Quảng trường Ba Đình lịch sử (Hà Nội), trước hàng chục vạn đồng bào các tầng lớp nhân dân, Chủ tịch Hồ Chí Minh đã thay mặt Chính phủ Cách mạng lâm thời đọc bản Tuyên ngôn Độc lập, trịnh trọng tuyên bố với thế giới về sự ra đời của nước Việt Nam Dân chủ Cộng hòa. Bản Tuyên ngôn không chỉ khẳng định quyền tự do, độc lập thiêng liêng của dân tộc Việt Nam mà còn mở ra một kỷ nguyên mới – kỷ nguyên độc lập, tự do và tiến lên chủ nghĩa xã hội.",
      },
      {
        src: tongTuyenCuImg,
        caption:
          "Ngày 6/1/1946, bất chấp sự phá hoại của các thế lực thù địch, lần đầu tiên trong lịch sử dân tộc, toàn thể nhân dân Việt Nam từ 18 tuổi trở lên, từ Bắc chí Nam, đã nô nức tham gia cuộc Tổng tuyển cử tự do, dân chủ để bầu ra Quốc hội khóa I. Sự kiện này đã khai sinh ra Quốc hội đầu tiên của nước Việt Nam Dân chủ Cộng hòa, một cơ quan quyền lực nhà nước cao nhất, đại diện cho ý chí và nguyện vọng của toàn dân.",
      },
      {
        src: bacBoPhieuImg,
        caption:
          "Chủ tịch Hồ Chí Minh, với tư cách là một công dân của nước Việt Nam Dân chủ Cộng hòa, thực hiện quyền và nghĩa vụ của mình, bỏ lá phiếu bầu cử đại biểu Quốc hội khóa I tại hòm phiếu đặt ở nhà số 10 phố Hàng Vôi (nay là phố Lý Thái Tổ), khu phố Đồng Xuân, Hà Nội, vào ngày 6/1/1946. Hành động giản dị của Người là tấm gương sáng về tinh thần dân chủ, bình đẳng và ý thức xây dựng nhà nước pháp quyền của dân, do dân và vì dân.",
      },
      {
        src: hienPhapDauTienImg,
        caption:
          "Hiến pháp đầu tiên của nước Việt Nam Dân chủ Cộng hòa (thường gọi là Hiến pháp 1946) được Quốc hội khóa I, kỳ họp thứ hai, chính thức thông qua vào ngày 9/11/1946. Dưới sự chỉ đạo trực tiếp của Chủ tịch Hồ Chí Minh (Trưởng ban soạn thảo), bản Hiến pháp này đã ghi nhận thành quả của Cách mạng Tháng Tám, xác lập các quyền tự do dân chủ cơ bản của công dân, và đặt nền tảng pháp lý vững chắc cho một nhà nước độc lập, dân chủ, tiến bộ.",
      },
      {
        src: loiKeuGoiImg,
        caption:
          "Trước những hành động xâm lược ngày càng trắng trợn của thực dân Pháp, âm mưu xóa bỏ nền độc lập non trẻ của Việt Nam, tối ngày 19/12/1946, Chủ tịch Hồ Chí Minh đã thay mặt Trung ương Đảng và Chính phủ ra 'Lời kêu gọi toàn quốc kháng chiến'. Lời kêu gọi vang dội như một hịch cứu nước, thể hiện ý chí sắt đá 'Thà hy sinh tất cả, chứ nhất định không chịu mất nước, nhất định không chịu làm nô lệ', khơi dậy mạnh mẽ tinh thần yêu nước, đoàn kết toàn dân tộc bước vào cuộc kháng chiến trường kỳ, gian khổ nhưng vô cùng anh dũng.",
      },
      {
        src: chienDichVietBacImg,
        caption:
          "Hình ảnh thể hiện tinh thần 'cả nước đồng lòng, toàn dân đánh giặc' trong Chiến dịch Việt Bắc Thu - Đông năm 1947. Nhân dân tỉnh Phú Thọ, cùng với quân và dân các tỉnh căn cứ địa Việt Bắc, đã chủ động, sáng tạo tham gia xây dựng làng chiến đấu, cắm chông, gài mìn, đặt bẫy, góp phần quan trọng vào việc bẻ gãy cuộc tiến công chiến lược quy mô lớn của thực dân Pháp, bảo vệ an toàn tuyệt đối cho cơ quan đầu não kháng chiến.",
      },
      {
        src: keoPhaoImg,
        caption:
          "Một trong những hình ảnh huyền thoại, biểu tượng cho ý chí quyết chiến quyết thắng, tinh thần quả cảm và sức mạnh phi thường của bộ đội và dân công Việt Nam trong Chiến dịch Điện Biên Phủ lịch sử năm 1954. Hàng ngàn chiến sĩ đã bí mật, ngày đêm dùng sức người kéo những khẩu pháo hạng nặng hàng tấn vượt qua núi cao, dốc thẳm, đường sá trơn trượt, hiểm trở để vào trận địa, tạo yếu tố bất ngờ và hỏa lực mạnh mẽ, áp đảo quân địch, góp phần quyết định vào thắng lợi vĩ đại.",
      },
      {
        src: chienThangDBPImg,
        caption:
          "Khoảnh khắc lịch sử thiêng liêng vào lúc 17 giờ 30 phút ngày 7/5/1954, lá cờ 'Quyết chiến - Quyết thắng' của Quân đội Nhân dân Việt Nam đã hiên ngang tung bay trên nóc hầm sở chỉ huy của tướng De Castries, đánh dấu sự thất bại hoàn toàn của tập đoàn cứ điểm Điện Biên Phủ. Đây là đỉnh cao thắng lợi của cuộc kháng chiến 9 năm chống thực dân Pháp xâm lược, buộc Chính phủ Pháp phải ký Hiệp định Genève (Giơ-ne-vơ), chấm dứt chiến tranh, lập lại hòa bình ở Đông Dương và công nhận độc lập, chủ quyền, thống nhất và toàn vẹn lãnh thổ của Việt Nam.",
      },
    ],
  },
  {
    year: "1969",
    description:
      "Chủ tịch Hồ Chí Minh từ trần ngày 2/9/1969, để lại di sản vĩ đại cho dân tộc.",
    moreId: "timeline-modal-5",
    images: [
      {
        src: BacHoVietImg,
        caption:
          "Những năm cuối đời, dù sức khỏe giảm sút, Chủ tịch Hồ Chí Minh vẫn dành trọn tâm huyết để hoàn thành bản Di chúc lịch sử - những lời căn dặn cuối cùng đầy trí tuệ, tình cảm và trách nhiệm đối với Tổ quốc và nhân dân. Di chúc của Người là một văn kiện vô giá, là kim chỉ nam cho sự nghiệp cách mạng của dân tộc Việt Nam.",
      },
      {
        src: thamHoiBacImg,
        caption:
          "Trong những ngày cuối cùng của Chủ tịch Hồ Chí Minh vào tháng 8 và những ngày đầu tháng 9 năm 1969, các đồng chí lãnh đạo Đảng, Nhà nước, những người phục vụ và các y bác sĩ luôn túc trực, quây quần bên giường bệnh, tận tình chăm sóc sức khỏe cho Người. Hình ảnh thể hiện sự lo lắng, tình cảm kính yêu và niềm hy vọng của mọi người mong Bác vượt qua cơn bệnh hiểm nghèo.",
      },
      {
        src: bacHoMatImg,
        caption:
          "Chủ tịch Hồ Chí Minh, lãnh tụ thiên tài và người thầy vĩ đại của cách mạng Việt Nam, đã từ trần vào lúc 9 giờ 47 phút ngày 2 tháng 9 năm 1969 tại Hà Nội, hưởng thọ 79 tuổi. Sự ra đi của Người là một tổn thất vô cùng to lớn đối với toàn Đảng, toàn dân, toàn quân ta và phong trào cách mạng thế giới.",
      },
      {
        src: linhCuuBacImg,
        caption:
          "Linh cữu Chủ tịch Hồ Chí Minh quàn tại Hội trường Ba Đình để toàn thể đồng bào, cán bộ và chiến sĩ trong cả nước, cũng như bạn bè quốc tế đến viếng Người trong những ngày tang lễ trọng thể (tháng 9/1969).",
      },
      {
        src: daiTuongAnUiImg,
        caption:
          "Trong những ngày đau thương của dân tộc, Đại tướng Võ Nguyên Giáp, người học trò xuất sắc và cộng sự gần gũi của Chủ tịch Hồ Chí Minh, đã đến thăm hỏi, động viên và an ủi các cháu thiếu nhi. Hình ảnh thể hiện sự quan tâm sâu sắc của các nhà lãnh đạo Đảng, Nhà nước đối với thế hệ tương lai của đất nước, tiếp nối truyền thống yêu nước và cách mạng mà Bác Hồ đã dày công vun đắp. ",
      },
      {
        type: 'video',
        videoId: '3qw45KnyTpg',
        caption:
          "Những giờ phút cuối đời của Chủ tịch Hồ Chí Minh",
      },
      {
        src: BacHoCuoiImg,
        caption:
          "Dù Bác đã đi xa, hình ảnh nụ cười hiền hậu, ấm áp và đức độ của Chủ tịch Hồ Chí Minh vẫn luôn sống mãi trong trái tim mỗi người dân Việt Nam. Nụ cười của Người tượng trưng cho tinh thần lạc quan cách mạng, niềm tin vào thắng lợi cuối cùng và tình yêu thương bao la dành cho đồng bào, chiến sĩ.",
      },
    ],
  },
];

interface TimelineModalProps {
  isOpen: boolean;
  onClose: () => void;
  event: (typeof timelineEvents)[0] | null;
}

function TimelineModal({ isOpen, onClose, event }: TimelineModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev" | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setCurrentImageIndex(0);
      setDirection(null);
      setIsClosing(false);
    }
  }, [isOpen]);

  if (!isOpen || !event) return null;

  const hasImages = event.images.length > 0;
  const hasMultipleImages = event.images.length > 1;

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 400); // Match the animation duration
  };

  const nextImage = () => {
    if (isTransitioning) return;
    setDirection("next");
    setIsTransitioning(true);
    setCurrentImageIndex((prev) =>
      prev === event.images.length - 1 ? 0 : prev + 1
    );
    setTimeout(() => setIsTransitioning(false), 600);
  };

  const prevImage = () => {
    if (isTransitioning) return;
    setDirection("prev");
    setIsTransitioning(true);
    setCurrentImageIndex((prev) =>
      prev === 0 ? event.images.length - 1 : prev - 1
    );
    setTimeout(() => setIsTransitioning(false), 600);
  };

  const goToImage = (index: number) => {
    if (isTransitioning) return;
    setDirection(index > currentImageIndex ? "next" : "prev");
    setIsTransitioning(true);
    setCurrentImageIndex(index);
    setTimeout(() => setIsTransitioning(false), 600);
  };

  return (
    <div
      className={`modal ${isOpen ? "active" : ""} ${
        isClosing ? "closing" : ""
      }`}
      onClick={handleClose}
    >
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={handleClose}>
          ×
        </button>
        <h3 className="modal-title">{event.year}</h3>
        <p className="modal-description">{event.description}</p>

        {hasImages && (
          <div className="modal-images-carousel">
            <div className="modal-image-container">
              <div className="modal-image-wrapper">
                {event.images.map((image, index) => (
                  image.type === 'video' ? (
                    <iframe
                      key={index}
                      className={`modal-video ${
                        index === currentImageIndex ? 'active' : 
                        direction === 'next' && index === (currentImageIndex - 1 + event.images.length) % event.images.length ? 'prev' :
                        direction === 'prev' && index === (currentImageIndex + 1) % event.images.length ? 'next' : ''
                      }`}
                      width="100%"
                      height="100%"
                      src={`https://www.youtube.com/embed/${image.videoId}`}
                      title={image.caption}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      style={{ display: [
                        currentImageIndex,
                        (currentImageIndex - 1 + event.images.length) % event.images.length,
                        (currentImageIndex + 1) % event.images.length
                      ].includes(index) ? 'block' : 'none' }}
                    />
                  ) : (
                    <img 
                      key={index}
                      src={image.src} 
                      alt={image.caption} 
                      className={`modal-image ${
                        index === currentImageIndex ? 'active' : 
                        direction === 'next' && index === (currentImageIndex - 1 + event.images.length) % event.images.length ? 'prev' :
                        direction === 'prev' && index === (currentImageIndex + 1) % event.images.length ? 'next' : ''
                      }`}
                      style={{ display: [
                        currentImageIndex,
                        (currentImageIndex - 1 + event.images.length) % event.images.length,
                        (currentImageIndex + 1) % event.images.length
                      ].includes(index) ? 'block' : 'none' }}
                    />
                  )
                ))}
              </div>
              <p className="modal-image-caption">
                {event.images[currentImageIndex].caption}
              </p>
              {hasMultipleImages && (
                <>
                  <button 
                    className="carousel-button prev" 
                    onClick={prevImage}
                    disabled={isTransitioning}
                    aria-label="Previous image"
                  >
                    <FaChevronLeft />
                  </button>
                  <button 
                    className="carousel-button next" 
                    onClick={nextImage}
                    disabled={isTransitioning}
                    aria-label="Next image"
                  >
                    <FaChevronRight />
                  </button>
                </>
              )}
            </div>
            {hasMultipleImages && (
              <div className="carousel-indicators">
                {event.images.map((_, index) => (
                  <button
                    key={index}
                    className={`carousel-dot ${
                      index === currentImageIndex ? "active" : ""
                    }`}
                    onClick={() => goToImage(index)}
                    disabled={isTransitioning}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default function Timeline() {
  const [selectedEvent, setSelectedEvent] = useState<
    (typeof timelineEvents)[0] | null
  >(null);

  return (
    <section id="timeline" className="timeline-section">
      <h2 className="section-title">Dòng Thời Gian</h2>
      <div className="timeline-container">
        {timelineEvents.map((event, index) => (
          <div
            key={event.year}
            className={`timeline-row ${
              index % 2 === 0 ? "left" : "right"
            } slide-up`}
          >
            <div className="timeline-content">
              <span className="timeline-year">{event.year}</span>
              <p>{event.description}</p>
              <button className="btn" onClick={() => setSelectedEvent(event)}>
                Xem thêm
              </button>
            </div>
            <span className="timeline-dot" />
          </div>
        ))}
        <div className="timeline-line" />
      </div>

      <TimelineModal
        isOpen={!!selectedEvent}
        onClose={() => setSelectedEvent(null)}
        event={selectedEvent}
      />
    </section>
  );
}

import nhaBacHoImg from "@/assets/images/nha-bac-ho.png";

export default function Biography() {
  return (
    <section id="biography" className="biography-section">
      <div className="container">
        <div className="biography-left">
          <img src={nhaBacHoImg} alt="Nhà Bác Hồ" className="biography-image" />
        </div>

        <div className="biography-right">
          <h2>Tiểu Sử Chủ tịch Hồ Chí Minh</h2>
          <div className="biography-text">
            <p>
              Chủ tịch Hồ Chí Minh (1890–1969), tên thật là Nguyễn Sinh Cung, là lãnh tụ vĩ đại của dân tộc Việt Nam.
              Ông sinh tại làng Kim Liên, Nghệ An, trong một gia đình nhà nho yêu nước.
            </p>
            <p>
              Từ nhỏ, ông sớm tiếp thu tư tưởng yêu nước từ cha mình – cụ Nguyễn Sinh Sắc. Năm 1911, ông ra đi tìm đường
              cứu nước, đặt chân đến hơn 30 quốc gia.
            </p>
            <p>
              Năm 1930, ông sáng lập Đảng Cộng sản Việt Nam. Dưới sự lãnh đạo của ông, Cách mạng Tháng Tám 1945 thành
              công, khai sinh nước Việt Nam Dân chủ Cộng hòa.
            </p>
            <p>
              Bên cạnh vai trò lãnh tụ, Hồ Chí Minh còn là nhà thơ, nhà văn hóa lớn với các tác phẩm tiêu biểu như
              “Đường Kách Mệnh”, “Bản án chế độ thực dân Pháp”, “Nhật ký trong tù”.
            </p>
            <p>
              Với lối sống giản dị, đạo đức cách mạng mẫu mực và lòng yêu dân sâu sắc, ông trở thành biểu tượng không
              chỉ của Việt Nam mà còn của phong trào giải phóng dân tộc trên thế giới.
            </p>
            <p>Năm 1987, UNESCO công nhận ông là Anh hùng giải phóng dân tộc và Danh nhân văn hóa thế giới.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

import docLapDanToc from "@/assets/images/doclapdantoc.jpg";
import doanKetDanToc from "@/assets/images/doanketdantoc.jpg";

export default function Thoughts() {
  return (
    <section id="thoughts" className="section-thoughts">
      <div className="thoughts-header-wrapper">
        <h2 className="thoughts-header">Tư Tưởng Hồ Chí Minh</h2>
      </div>
      <div className="thoughts-content">
        <div className="thought-card">
          <img src={docLapDanToc} alt="Độc lập dân tộc" className="thought-image" />
          <h3>Độc Lập Dân Tộc</h3>
          <p>
            Tư tưởng Hồ Chí Minh nhấn mạnh độc lập dân tộc là quyền thiêng liêng của mọi dân tộc. Ông nói: "Không có gì
            quý hơn độc lập, tự do."
          </p>
          <p>
            Độc lập không chỉ là thoát khỏi ách đô hộ mà còn phải gắn liền với xây dựng một xã hội công bằng, dân chủ,
            và văn minh.
          </p>
        </div>

        <div className="thought-card">
          <img src={doanKetDanToc} alt="Đoàn kết dân tộc" className="thought-image" />
          <h3>Đoàn Kết Dân Tộc</h3>
          <p>
            Hồ Chí Minh luôn đề cao sức mạnh đoàn kết: "Đoàn kết, đoàn kết, đại đoàn kết. Thành công, thành công, đại
            thành công."
          </p>
          <p>Đoàn kết là yếu tố then chốt để vượt qua mọi khó khăn.</p>
        </div>

        {/* Các thẻ thought-card còn lại giữ nguyên, bạn chỉ cần thêm thẻ <img src="..."> tương tự */}
      </div>
    </section>
  );
}

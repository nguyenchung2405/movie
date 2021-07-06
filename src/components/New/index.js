import React from "react";
import { Tabs, Row, Col, Card } from "antd";
import {
  LikeOutlined,
  EllipsisOutlined,
  CommentOutlined,
} from "@ant-design/icons";
import quangCao1 from "../../assets/img/quangCao/quangcao1.png";
import quangCao2 from "../../assets/img/quangCao/quangcao2.png";
import quangCao3 from "../../assets/img/quangCao/quangcao3.png";
import quangCao4 from "../../assets/img/quangCao/quangcao4.png";
import quangCao5 from "../../assets/img/quangCao/quangcao5.jpg";
import quangCao6 from "../../assets/img/quangCao/quangcao6.jpg";
import vua1 from "../../assets/img/quangCao/hinhvua1.png";
import vua2 from "../../assets/img/quangCao/vua2.png";
import vua3 from "../../assets/img/quangCao/vua3.png";
import vua4 from "../../assets/img/quangCao/vua4.png";
import vua5 from "../../assets/img/quangCao/vua5.png";
import vua6 from "../../assets/img/quangCao/vua6.jpg";
import hinhnho1 from "../../assets/img/quangCao/hinhNho1.png";
import hinhnho2 from "../../assets/img/quangCao/hinhNho2.png";
import hinhnho3 from "../../assets/img/quangCao/hinhNho3.jpg";
import hinhnho4 from "../../assets/img/quangCao/hinhNho4.jpg";
import rew1 from "../../assets/img/quangCao/rew1.png";
import rew2 from "../../assets/img/quangCao/rew2.jpg";
import rew3 from "../../assets/img/quangCao/rew3.jpg";
import rew4 from "../../assets/img/quangCao/rew4.jpg";
import km1 from "../../assets/img/quangCao/km1.png";
import km2 from "../../assets/img/quangCao/km2.jpg";
import km3 from "../../assets/img/quangCao/km3.jpg";
import km4 from "../../assets/img/quangCao/km4.jpg";

import backNew from "../../assets/img/backNew.png";

const { Meta } = Card;
const { TabPane } = Tabs;
export default function New() {
  return (
    <div className="card-container" id="new">
      <div className="linear__New">
        <img src={backNew} alt="backNew" />
      </div>
      <Tabs type="card" defaultActiveKey="1" centered animated={true}>
        <TabPane tab="Điện Ảnh 24h" key="1">
          <Row gutter={16}>
            <Col xs={24} sm={12}>
              <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src={quangCao1} />}
                actions={[
                  <LikeOutlined key="edit" />,
                  <CommentOutlined key="setting" />,
                  <EllipsisOutlined key="ellipsis" />,
                ]}
              >
                <Meta
                  title="Review: Tàn Tích Quỷ Ám (Relic) - Ba thế hệ và mối liên kết "
                  description="Review: Tàn Tích Quỷ Ám (Relic) - Ba thế hệ và mối liên kết"
                />
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src={quangCao2} />}
                actions={[
                  <LikeOutlined key="edit" />,
                  <CommentOutlined key="setting" />,
                  <EllipsisOutlined key="ellipsis" />,
                ]}
              >
                <Meta
                  title="Review: Dinh Thự Oan Khuất (Ghost Of War)"
                  description="Tuy là một bộ phim có chất lượng tốt, nhưng có vẻ Dinh Thự Oan Khuất vẫn chưa đủ để đem khán giả trở lại phòng vé!"
                />
              </Card>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col xs={24} sm={8}>
              <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src={vua1} />}
                actions={[
                  <LikeOutlined key="edit" />,
                  <CommentOutlined key="setting" />,
                  <EllipsisOutlined key="ellipsis" />,
                ]}
              >
                <Meta
                  title="PROMISING YOUNG WOMAN | Bông hồng nước Anh Carey Mulligan và màn trả thù đàn ông để đời "
                  description="Đề cử giải Oscar danh giá vừa gọi tên Carey Mulligan ở hạng mục nữ chính xuất sắc nhất cho vai diễn đẫm máu nhất sự nghiệp của cô trong phim Promising Young Woman (tựa Việt: Cô Gái Trẻ Hứa Hẹn). "
                />
              </Card>
            </Col>
            <Col xs={24} sm={8}>
              <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src={vua2} />}
                actions={[
                  <LikeOutlined key="edit" />,
                  <CommentOutlined key="setting" />,
                  <EllipsisOutlined key="ellipsis" />,
                ]}
              >
                <Meta
                  title="VỪA ĐẸP LẠI VỪA TÀI NĂNG, DÀN SAO NAM CỦA PHIM “BÀN TAY DIỆT QUỶ” ĐẢM BẢO ĐỐN TIM HỘI CHỊ EM"
                  description="Quy tụ 3 nam tài tử vừa điển trai, vừa được đánh giá cao về năng lực diễn xuất là Park Seo Joon, Woo Do Hwan và Choi Woo Sik, tác phẩm kinh dị – hành động “Bàn Tay Diệt Quỷ” hứa hẹn sẽ làm cho hội chị em phải mê mẩn vào tháng tới."
                />
              </Card>
            </Col>
            <Col xs={24} sm={8}>
              <Row gutter={16}>
                <Col xs={5} sm={6}>
                  <img src={hinhnho1} width="70%" alt="132" />
                </Col>
                <Col xs={19} sm={18}>
                  <p>Khai trương rạp xịn giá ngon, chuẩn xì-tai Sài Gòn</p>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col xs={5} sm={6}>
                  <img src={hinhnho2} width="70%" alt="132" />
                </Col>
                <Col xs={19} sm={18}>
                  <p>
                    “Tiệc Trăng Máu chính thức cán mốc 100 tỷ chỉ sau 2 tuần
                    công chiếu{" "}
                  </p>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col xs={5} sm={6}>
                  <img src={hinhnho3} width="70%" alt="132" />
                </Col>
                <Col xs={19} sm={18}>
                  <p>
                    NGÔ THANH VÂN CHÍNH THỨC KHỞI ĐỘNG CUỘC THI THIẾT KẾ TRANG
                    PHỤC CHO SIÊU ANH HÙNG ĐẦU TIÊN CỦA VIỆT NAM – VINAMAN
                  </p>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col xs={5} sm={6}>
                  <img src={hinhnho4} width="70%" alt="132" />
                </Col>
                <Col xs={19} sm={18}>
                  <p>Khai trương rạp xịn giá ngon, chuẩn xì-tai Sài Gòn</p>
                </Col>
              </Row>
            </Col>
          </Row>
        </TabPane>
        <TabPane tab="Review" key="2">
          <Row gutter={16}>
            <Col xs={24} sm={12}>
              <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src={quangCao3} />}
                actions={[
                  <LikeOutlined key="edit" />,
                  <CommentOutlined key="setting" />,
                  <EllipsisOutlined key="ellipsis" />,
                ]}
              >
                <Meta
                  title="Ấn định chắc nịch ngày khởi chiếu 16.04, Lý Hải tung clip Lật Mặt: 48H đậm chất "
                  description="Trước thềm khởi chiếu 16.04 này, Lý Hải bất ngờ tung clip rượt đuổi gay cấn thót tim fans hâm mộ"
                />
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src={quangCao4} />}
                actions={[
                  <LikeOutlined key="edit" />,
                  <CommentOutlined key="setting" />,
                  <EllipsisOutlined key="ellipsis" />,
                ]}
              >
                <Meta
                  title="[MORTAL KOMBAT: CUỘC CHIẾN SINH TỬ] -  GỌI TÊN NHỮNG PHIM ĐIỆN ẢNH NỔI TIẾNG ĐƯỢC CHUYỂN THỂ TỪ CÁC TỰA GAME ĐÌNH ĐÁM"
                  description="Bên cạnh những kịch bản gốc mới mẻ và đầy bất ngờ, Hollywood cũng không thiếu những tác phẩm đình đám được chuyển thể từ tiểu thuyết, phim hoạt hình"
                />
              </Card>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col xs={24} sm={8}>
              <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src={vua3} />}
                actions={[
                  <LikeOutlined key="edit" />,
                  <CommentOutlined key="setting" />,
                  <EllipsisOutlined key="ellipsis" />,
                ]}
              >
                <Meta
                  title="‘BlacKkKlansman’ - cốc nước lạnh để người Mỹ thức tỉnh "
                  description="Tác phẩm nhận đề cử Phim truyện xuất sắc tại Oscar 2019 của đạo diễn Spike Lee là một lát cắt nữa về nạn phân biệt chủng tộc - nỗi đau gây nhức nhối nước Mỹ cho tới tận hôm nay."
                />
              </Card>
            </Col>
            <Col xs={24} sm={8}>
              <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src={vua4} />}
                actions={[
                  <LikeOutlined key="edit" />,
                  <CommentOutlined key="setting" />,
                  <EllipsisOutlined key="ellipsis" />,
                ]}
              >
                <Meta
                  title="American Sniper - Chính nghĩa hay phi nghĩa?"
                  description="American Sniper khắc họa một tay súng bắn tỉa “huyền thoại” của Hải quân Mỹ với 4 lần tham chiến ở Trung Đông. Câu chuyện phim chậm rãi đưa người xem qua từng thời khắc khác nhau của Kyle, từ thửa nhỏ, thiếu niên, rồi gia nhập quân đội, rồi tham chiến. Từng khoảnh khắc bắt đầu nhẹ nhàng..."
                />
              </Card>
            </Col>
            <Col xs={24} sm={8}>
              <Row gutter={16}>
                <Col xs={5} sm={6}>
                  <img src={rew1} width="70%" alt="132" />
                </Col>
                <Col xs={19} sm={18}>
                  <p>Review: Spider-Man: Into The Spider-Vesre </p>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col xs={5} sm={6}>
                  <img src={rew2} width="70%" alt="132" />
                </Col>
                <Col xs={19} sm={18}>
                  <p>
                    COVID-19 là bản chính thức của MEV-1 phim contagion (2011)
                  </p>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col xs={5} sm={6}>
                  <img src={rew3} width="70%" alt="132" />
                </Col>
                <Col xs={19} sm={18}>
                  <p>
                    [Review] Siêu Vệ Sĩ Sợ Vợ - Giải cứu Tổng thống chưa bao giờ
                    lầy lội và hài hước đến thế
                  </p>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col xs={5} sm={6}>
                  <img src={rew4} width="70%" alt="132" />
                </Col>
                <Col xs={19} sm={18}>
                  <p>
                    [Review] Bloodshot - Mở màn ấn tượng cho Vũ trụ Siêu anh
                    hùng Valiant
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
        </TabPane>
        <TabPane tab="Khuyến Mãi" key="3">
          <Row gutter={16}>
            <Col xs={24} sm={12}>
              <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src={quangCao5} />}
                actions={[
                  <LikeOutlined key="edit" />,
                  <CommentOutlined key="setting" />,
                  <EllipsisOutlined key="ellipsis" />,
                ]}
              >
                <Meta
                  title="BHD 59K/VÉ CẢ TUẦN !!! "
                  description="Tận hưởng Ưu Đãi lên đến 3 VÉ BHD Star mỗi tuần chỉ với giá 59k/vé khi mua vé trên TIX hoặc Mục Vé Phim trên ZaloPay."
                />
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src={quangCao6} />}
                actions={[
                  <LikeOutlined key="edit" />,
                  <CommentOutlined key="setting" />,
                  <EllipsisOutlined key="ellipsis" />,
                ]}
              >
                <Meta
                  title="TIX 1K/VÉ NGẠI CHI GIÁ VÉ"
                  description="Đồng giá 1k/vé cả tuần tất cả các rạp trên TIX + Nhận thêm 02 voucher thanh toán ZaloPay thả ga"
                />
              </Card>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col xs={24} sm={8}>
              <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src={vua5} />}
                actions={[
                  <LikeOutlined key="edit" />,
                  <CommentOutlined key="setting" />,
                  <EllipsisOutlined key="ellipsis" />,
                ]}
              >
                <Meta
                  title="ĐỒNG GIÁ 1K/VÉ KHI MUA VÉ QUA TIX  "
                  description="ĐỒNG GIÁ 1K/VÉ KHI MUA VÉ QUA TIX Hành trình tìm Ròm và Phúc chỉ với 1k cả tuần + nhận thêm 02 voucher khi đặt vé qua TIX."
                />
              </Card>
            </Col>
            <Col xs={24} sm={8}>
              <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src={vua6} />}
                actions={[
                  <LikeOutlined key="edit" />,
                  <CommentOutlined key="setting" />,
                  <EllipsisOutlined key="ellipsis" />,
                ]}
              >
                <Meta
                  title="BHD STAR VÉ CHỈ 59.000Đ CẢ TUẦN!"
                  description="Tận hưởng Ưu Đãi lên đến 3 VÉ BHD Star mỗi tuần chỉ với giá 59k/vé khi mua vé trên TIX và thanh toán bằng ZaloPay hoặc Mục Vé Phim trên ZaloPay."
                />
              </Card>
            </Col>
            <Col xs={24} sm={8}>
              <Row gutter={16}>
                <Col xs={5} sm={6}>
                  <img src={km1} width="70%" alt="132" />
                </Col>
                <Col xs={19} sm={18}>
                  <p>Beta Cineplex trở lại với hàng loạt ưu đãi lớn</p>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col xs={5} sm={6}>
                  <img src={km2} width="70%" alt="132" />
                </Col>
                <Col xs={19} sm={18}>
                  <p>
                    [123Phim] Thứ 6 Không Đen Tối - Ưu đãi huỷ diệt 11k/vé Anh
                    Trai Yêu Quái
                  </p>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col xs={5} sm={6}>
                  <img src={km3} width="70%" alt="132" />
                </Col>
                <Col xs={19} sm={18}>
                  <p>
                    [123Phim] NHẬP MÃ 'PSM30K' - Giảm ngay 30k khi đặt vé Pháp
                    Sư Mù: Ai Chết Giơ Tay
                  </p>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col xs={5} sm={6}>
                  <img src={km4} width="70%" alt="132" />
                </Col>
                <Col xs={19} sm={18}>
                  <p>[Mega GS] Một đoá hoa thay ngàn lời yêu</p>
                </Col>
              </Row>
            </Col>
          </Row>
        </TabPane>
      </Tabs>
      <button className="btn__New">Xem thêm</button>
    </div>
  );
}

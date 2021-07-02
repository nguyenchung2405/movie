import React from "react";
import { Modal, Row, Button, Col } from "antd";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

export default function ModalTaoLichChieu() {
  const [visible, setVisible] = useState(false);
  // biến để làm chọn rạp phim
  const top100Films = [
    { title: "The Shawshank Redemption", year: 1994 },
    { title: "The Godfather", year: 1972 },
    { title: "The Godfather: Part II", year: 1974 },
    { title: "The Dark Knight", year: 2008 },
    { title: "12 Angry Men", year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: "Pulp Fiction", year: 1994 },
    { title: "The Lord of the Rings: The Return of the King", year: 2003 },
    { title: "The Good, the Bad and the Ugly", year: 1966 },
    { title: "Fight Club", year: 1999 },
    { title: "The Lord of the Rings: The Fellowship of the Ring", year: 2001 },
    { title: "Star Wars: Episode V - The Empire Strikes Back", year: 1980 },
    { title: "Forrest Gump", year: 1994 },
    { title: "Inception", year: 2010 },
    { title: "The Lord of the Rings: The Two Towers", year: 2002 },
    { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
    { title: "Goodfellas", year: 1990 },
    { title: "The Matrix", year: 1999 },
    { title: "Seven Samurai", year: 1954 },
  ];
  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2021-07-18T21:11:54")
  );
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  return (
    <div>
      <Button
        className="btnThemPhim"
        type="primary"
        onClick={() => setVisible(true)}
      >
        Tạo Lịch Chiếu
      </Button>
      <Modal
        title="Thông Tin Lịch Chiếu Phim Của Phim The Flash"
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={1200}
      >
        <Row>
          <Col span={10}>
            <Autocomplete
              id="combo-box-demo"
              options={top100Films}
              getOptionLabel={(option) => option.title}
              style={{ width: 300 }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Chọn Hệ Thống Rạp"
                  variant="outlined"
                />
              )}
            />
          </Col>
          <Col span={14}>
            <div className="datePhim">
              <h3> Chọn ngày chiếu giờ chiếu</h3>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  disableToolbar
                  variant="inline"
                  format="MM/dd/yyyy"
                  margin="normal"
                  id="date-picker-inline"
                  label=""
                  value={selectedDate}
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                    "aria-label": "change date",
                  }}
                />
              </MuiPickersUtilsProvider>
            </div>
          </Col>
        </Row>

        <Row>
          <Col span={10}>
            <Autocomplete
              id="combo-box-demo"
              options={top100Films}
              getOptionLabel={(option) => option.title}
              style={{ width: 200, marginTop: "20px" }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Chọn Cụm Rạp"
                  variant="outlined"
                />
              )}
            />
          </Col>
          <Col span={14}>
            <div className="datePhim">
              <h3> Chọn thời lượng phim</h3>
              <h2>120 Phuts</h2>
            </div>
          </Col>
        </Row>

        <Row>
          <Col span={10}>
            <Autocomplete
              id="combo-box-demo"
              options={top100Films}
              getOptionLabel={(option) => option.title}
              style={{ width: 150, marginTop: "20px" }}
              renderInput={(params) => (
                <TextField {...params} label="Chọn Rạp" variant="outlined" />
              )}
            />
          </Col>
          <Col span={14}>
            <div className="datePhim">
              <h3> Mã nhóm: Mặc định theo mã nhóm</h3>
            </div>
            <div className="giaVe">
              <h3>Giá Vé</h3>
              <h2>12356000VND</h2>
            </div>
          </Col>
        </Row>
        <table className="table_Modal">
          <thead className="thead_Modal">
            <tr>
              <th>Mã Lịch Chiếu</th>
              <th>Hệ Thống Rạp</th>
              <th>Cụm Rạp</th>
              <th>Ngày Giờ Chiếu </th>
              <th>Giá vé </th>
              <th>Thời Lượng Phim</th>
              <th>Các Chức Năng</th>
            </tr>
          </thead>
          <tbody className="tbody_Modal">
            <tr>
              <td>1234</td>
              <td>đâsdasd</td>
              <td>Hình Ảnh</td>
              <td>Mô Tả</td>
              <td>Mã Nhóm</td>
              <td>Ngày khởi chiếu</td>
              <td>Các Chức Năng</td>
            </tr>
            <tr>
              <td>Mã Phim</td>
              <td>Tên Phim</td>
              <td>Hình Ảnh</td>
              <td>Mô Tả</td>
              <td>Mã Nhóm</td>
              <td>Ngày khởi chiếu</td>
              <td>Các Chức Năng</td>
            </tr>
          </tbody>
        </table>
      </Modal>
    </div>
  );
}

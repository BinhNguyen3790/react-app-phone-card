import React, { Component } from "react";
class PhonePopup extends Component {
  state = {};
  renderCard = () => {
    let { gioHang } = this.props;
    return gioHang.map((sanpham, index) => {
      return (
        <tr key={index}>
          <td>{sanpham.maSP}</td>
          <td>{sanpham.tenSP}</td>
          <td width="10%">
            <img src={sanpham.hinhAnh} alt={sanpham.maSP} style={{ width: "100%" }} />
          </td>
          <td>
            <button
              className="btn btn-success me-3"
              style={{ width: "40px" }}
              onClick={() => {
                this.props.changeSoLuong(sanpham.maSP, 1);
              }}
            >
              +
            </button>
            {sanpham.soLuong}
            <button
              className="btn btn-success ms-3"
              style={{ width: "40px" }}
              onClick={() => {
                this.props.changeSoLuong(sanpham.maSP, -1);
              }}
            >
              -
            </button>
          </td>
          <td>{sanpham.donGia.toLocaleString()}</td>
          <td>{(sanpham.donGia * sanpham.soLuong).toLocaleString()}</td>
          <td>
            <button
              onClick={() => {
                this.props.deleteProduct(sanpham.maSP);
              }}
              className="btn btn-danger"
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });
  };

  tinhTongTien = () => {
    let { gioHang } = this.props;
    return gioHang
      .reduce((tongTien, spGioHang) => {
        return (tongTien += spGioHang.soLuong * spGioHang.donGia);
      }, 0)
      .toLocaleString();
  };

  render() {
    return (
      <div className="container">
        <div className="d-flex">
          <button className="btn ms-auto" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Card: {this.props.calcProduct()} <i className="fa fa-shopping-cart" aria-hidden="true"></i>
          </button>
          <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" style={{ minWidth: 1000 }}>
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Modal title
                  </h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                </div>
                <div className="modal-body">
                  <div className="table-responsive">
                    <table className="table" style={{ verticalAlign: "middle" }}>
                      <thead>
                        <tr>
                          <th scope="col">Mã Sản Phẩm</th>
                          <th scope="col">Tên Sản Phẩm</th>
                          <th scope="col">Hình Ảnh</th>
                          <th scope="col">Số Lượng</th>
                          <th scope="col">Đơn Giá</th>
                          <th scope="col">Giá Bán</th>
                          <th scope="col">Hành động</th>
                        </tr>
                      </thead>
                      <tbody>{this.renderCard()}</tbody>
                      <tfoot>
                        <tr>
                          <td colSpan="5"></td>
                          <td>Sum Price:</td>
                          <td>{this.tinhTongTien()}</td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                    Close
                  </button>
                  <button type="button" className="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PhonePopup;

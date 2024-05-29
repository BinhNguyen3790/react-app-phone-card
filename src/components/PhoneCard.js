import React, { Component } from "react";
import PhoneList from "./PhoneList";
import PhonePopup from "./PhonePopup";
class PhoneCard extends Component {
  state = {
    gioHang: [],
  };
  addCard = (product) => {
    console.log(product);
    let spGioHang = {
      maSP: product.maSP,
      tenSP: product.tenSP,
      donGia: product.giaBan,
      soLuong: 1,
      hinhAnh: product.hinhAnh,
    };
    let index = this.state.gioHang.findIndex((spGh) => spGh.maSP === spGioHang.maSP);
    if (index !== -1) {
      this.state.gioHang[index].soLuong += 1;
    } else {
      this.state.gioHang.push(spGioHang);
    }
    this.setState({ gioHang: this.state.gioHang });
  };
  render() {
    return (
      <div>
        <PhonePopup gioHang={this.state.gioHang} />
        <PhoneList addCard={this.addCard} />
      </div>
    );
  }
}

export default PhoneCard;

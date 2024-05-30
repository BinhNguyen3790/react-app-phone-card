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

  deleteProduct = (maSP) => {
    console.log(maSP);
    let index = this.state.gioHang.findIndex((spGiohang) => spGiohang.maSP === maSP);
    if (index !== -1) {
      this.state.gioHang.splice(index, 1);
      this.setState({ gioHang: this.state.gioHang });
    }
  };

  calcProduct = () => {
    // let tongsl = 0;
    // for (let i = 0; i < this.state.gioHang.length; i++) {
    //   let spgiohang = this.state.gioHang[i];
    //   tongsl += spgiohang.soLuong;
    // }
    // return tongsl;
    return this.state.gioHang.reduce((tongsl, spGioHang) => {
      return (tongsl += spGioHang.soLuong);
    }, 0);
  };

  changeSoLuong = (maSP, number) => {
    let gioHang = [...this.state.gioHang];
    let index = gioHang.findIndex((spGioHang) => spGioHang.maSP === maSP);
    if (index !== -1) {
      if (gioHang[index].soLuong <= 1 && number === -1) {
        alert("minimum is 1!");
        return;
      }
      gioHang[index].soLuong += number;
      this.setState({ gioHang: gioHang });
    }
  };

  render() {
    return (
      <div>
        <PhonePopup changeSoLuong={this.changeSoLuong} calcProduct={this.calcProduct} deleteProduct={this.deleteProduct} gioHang={this.state.gioHang} />
        <PhoneList addCard={this.addCard} />
      </div>
    );
  }
}

export default PhoneCard;

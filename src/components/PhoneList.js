import React, { Component } from "react";
import PhoneItem from "./PhoneItem";
class PhoneList extends Component {
  state = {};
  dataPhone = [
    { maSP: 1, tenSP: "VinSmart Live", manHinh: "AMOLED, 6.2, Full HD+", heDieuHanh: "Android 9.0 (Pie)", cameraTruoc: "20 MP", cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP", ram: "4 GB", rom: "64 GB", giaBan: 5700000, hinhAnh: "./assets/img/vsphone.jpg" },
    { maSP: 2, tenSP: "Meizu 16Xs", manHinh: "AMOLED, FHD+ 2232 x 1080 pixels", heDieuHanh: "Android 9.0 (Pie); Flyme", cameraTruoc: "20 MP", cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP", ram: "4 GB", rom: "64 GB", giaBan: 7600000, hinhAnh: "./assets/img/meizuphone.jpg" },
    { maSP: 3, tenSP: "Iphone XS Max", manHinh: "OLED, 6.5, 1242 x 2688 Pixels", heDieuHanh: "iOS 12", cameraSau: "Chính 12 MP & Phụ 12 MP", cameraTruoc: "7 MP", ram: "4 GB", rom: "64 GB", giaBan: 27000000, hinhAnh: "./assets/img/applephone.jpg" },
  ];

  renderPhone = () => {
    return this.dataPhone.map((phone, index) => {
      return (
        <div key={index} className="col-4">
          <PhoneItem phone={phone} addCard={this.props.addCard} />
        </div>
      );
    });
  };

  render() {
    return (
      <div className="container mt-3">
        <div className="row">{this.renderPhone()}</div>
      </div>
    );
  }
}

export default PhoneList;

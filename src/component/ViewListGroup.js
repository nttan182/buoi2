import React from "react";

const ViewListGroup = () => {
  return (
    <div>
      <div class="container">
        <h2>DANH SÁCH NHÓM</h2>
        <a href="/user/add" class="btn btn-primary float-end">
          Thêm
        </a>
        <table class="table">
          <thead>
            <tr>
              <th>STT</th>
              <th>Tên nhóm</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Điện thoại</td>
              <td>Xem Sửa Xóa</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewListGroup;

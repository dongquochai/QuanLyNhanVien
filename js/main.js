function getELE(id){
    return document.getElementById(id);
}

function themNguoiDung(){
    var tk = getELE("tknv").value;
    var ten= getELE("name").value;
    var Email= getELE("email").value;
    var Pass= getELE("password").value;
    var ngay= getELE("datepicker").value;
    var luongCB= getELE("luongCB").value;
    var chucvu= getELE("chucvu").value;
    var giolam= getELE("gioLam").value;
    console.log(tk,ten,Email,Pass,ngay,luongCB,chucvu,giolam);

    // var isValid = true ;

    // isValid &= validation.checkEmpty(tk,"tknv","Tài khoản nhân viên không được để trống");
    // isValid &= validation.checkEmpty(ten,"name","Tên nhân viên không được để trống");
    // isValid &= validation.checkEmpty(Email,"email","Email nhân viên không được để trống");
    // isValid &= validation.checkEmpty(Pass,"password","Mật khẩu nhân viên không được để trống");
    // isValid &= validation.checkEmpty(ngay,"datepicker","Ngày sinh nhân viên không được để trống");
    // isValid &= validation.checkEmpty(luongCB,"luongCB","Lương nhân viên không được để trống");
    // isValid &= validation.checkEmpty(chucvu,"chucvu","Chức vụ  không được để trống");
    // isValid &= validation.checkEmpty(giolam,"gioLam","Giờ làm không được để trống");
    // if(isValid){
    //     var nv = new NhanVien(tk,ten,Email,Pass,ngay,luongCB,chucvu,giolam);
    //     dsnv.them(nv)
    // }
}
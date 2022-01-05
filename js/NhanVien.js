function NhanVien(tk,ten,email,pass,ngay,luongCB,chucvu,gioLam){
    this.tknV = tk;
    this.tenNV=ten;
    this.emailNV=email;
    this.matkhauNV=pass;
    this.ngaysinh=ngay;
    this.luongNV=luongCB;
    this.chucvuNV=chucvu;
    this.timeNV=gioLam;
    this.tongLuong= 0;
    this.loai= '';

    this.tongLuong = function(tongLuong){
        if(this.chucvuNV == "Sếp"){
            this.tongLuong = this.luongNV * 3;
        }else if(this.chucvuNV == "Trưởng Phòng"){
            this. tongLuong = this.luongNV * 2;
        }else if(this.chucvuNV == "Nhân Viên"){
            this.tongLuong = this.luongNV;
        }else{
            this.tongLuong = 0;
        }
    }
    this.XepLoai = function(loai){
        if(this.timeNV >= 192){
            this.loai = "Nhân viên xuất sắc";
        }else if(this.timeNV >= 176){
            this.loai = "Nhân viên giỏi";
        }else if(this.timeNV >= 160){
            this.loai = "Nhân viên khá";
        }else if(this.timeNV < 160){
            this.loai = "Nhân viên Trung Bình"
        }else{
            this.loai = "Không thể xếp loại nhân viên"
        }
    }
    
}
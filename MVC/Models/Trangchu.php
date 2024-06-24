<?php
    class Trangchu extends connectDB{
        public function hienThiTatCa(){
            $sql="SELECT * FROM products";
            return mysqli_query($this->con,$sql);
        }
        public function hienThiChiTiet($ID){
            $sql="SELECT * FROM productdetails AS detail INNER JOIN products AS prod WHERE detail.product_id = prod.product_id";
            return mysqli_query($this->con,$sql);
        }
    }
?>
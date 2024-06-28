<?php
    class Chitietsanpham_m extends connectDB{
        public function chiTietSanPham($ID){
            $sql="SELECT * FROM productdetails AS detail INNER JOIN products AS prod WHERE detail.product_id = '$ID'";
            return mysqli_query($this->con,$sql);
        }
    }
?>
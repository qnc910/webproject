<?php
    class Giohang extends connectDB {
        public function giohang() {
            $sql="SELECT * FROM cartitems";
            return mysqli_query($this->con,$sql);
        }
    }
?>
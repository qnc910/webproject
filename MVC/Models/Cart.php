<?php
    class Cart extends connectDB {
        public function giohang_2() {
            $sql="SELECT
            c.cart_id ,
            p.name ,
            p.price,
            ci.quantity ,
            (p.price * ci.quantity) as total,
            c.created_at
        FROM
            carts c
        JOIN
            cartitems ci ON c.cart_id = ci.cart_id
        JOIN
            products p ON ci.product_id = p.product_id
WHERE customer_id = 'customer_2'";
            return mysqli_query($this->con,$sql);
        }
        public function add_to_cart($ID) {
            $sql= "INSERT INTO cartitems (product_id) VALUES ('$ID)";
            return mysqli_query($this->con,$sql);
        }
        public function cartShow(){
            $sql= "SELECT * FROM ";
        }
    }
?>
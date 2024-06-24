<?php
    class Home extends controller{
        private $dssp;
        public function __construct(){
            $this->dssp=$this->model('Trangchu');
        }
        public function Get_data(){
            $product = $this->dssp->hienThiTatCa();
            $this->view('Masterlayout',[
                'page'=>'Home',
                'dulieu'=> $product
            ]);
        }
        public function chiTiet($ID){
            $product = $this->dssp->getProductById($ID);
            $this->view('Masterlayout', [
            'page' => 'Chitietsanpham',
            'product' => $product
        ]);
        }
    }
?>
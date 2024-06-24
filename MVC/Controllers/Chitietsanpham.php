<?php
    class Chitietsanpham extends controller{
        private $ctsp;
        public function __construct(){
            $this->ctsp=$this->model('Chitietsanpham_m');
        }
        function Get_data(){
            $this->view('Masterlayout',[
                'page'=>'Chitietsanpham'
            ]);
        }
        function hienThiChiTiet($ID){
            $dl=$this->ctsp->chiTietSanPham($ID);
            $this->view('Masterlayout',[
                'page'=> 'Chitietsanpham',
                'dulieu'=>$dl
            ]);
        }
    }
?>
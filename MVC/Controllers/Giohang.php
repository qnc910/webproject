<?php
    class Giohang extends controller{
        function Get_data(){
            $this->view('Masterlayout',[
                'page'=>'Giohang'
            ]);
        }
    }
?>
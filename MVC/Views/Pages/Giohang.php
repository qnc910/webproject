<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Giỏ hàng</title>

    <link rel="stylesheet" href="http://localhost/webproject/Public/Css/styles.css">
    <link rel="stylesheet" href="http://localhost/webproject/Public/Css/giohang.css">

</head>

<body>
    <form>
        <table class="listSanPham">
            <tr>
                <th>STT</th>
                <th>Sản phẩm</th>
                <th>Giá</th>
                <th>Số lượng</th>
                <th>Thành tiền</th>
                <th>Thời gian</th>
                <th>Xóa</th>
            </tr>
            <?php
                if(isset($data['dulieu']) && mysqli_num_rows($data['dulieu'])>0){
                    $i=0;
                    while($row = mysqli_fetch_array($data['dulieu'])){
            ?>
            <tr>
                <td><?php echo ++$i ?></td>
                <td><?php echo $row['name'] ?></td>
                <td><?php echo  $row['price'] ?></td>
                <td><?php echo  $row['quantity'] ?></td>
                <td><?php echo  $row['total'] ?></td>
                <td><?php echo  $row['created_at'] ?></td>
                <td><?php echo  '' ?></td>
            </tr>
            <?php
                    }
                }
            ?>
        </table>
    </form>

</body>

</html>
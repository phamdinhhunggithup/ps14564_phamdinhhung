<?php
date_default_timezone_set("Asia/Ho_Chi_Minh");

function format_weekday($weekday)
{
    $weekday_vnm = array(
        "Monday"    => "Thứ 2",
        "Tuesday"   => "Thứ 3",
        "Wednesday" => "Thứ 4",
        "Thursday"  => "Thứ 5",
        "Friday"    => "Thứ 6",
        "Saturday"  => "Thứ 7",
        "Sunday"    => "Chủ nhật"
    );
    return $weekday_vnm[$weekday];
}

require './index.php';

$dataSend = $_POST['dataSend'];

$infoOrder = Array(
    "name"    => ucwords($dataSend['fullname']),
    "phone"   => $dataSend['phone'],
    "address" => $dataSend['address'],
    "color"   => $dataSend['color'],
    "note"    => $dataSend['note'],
    "code"    => $dataSend['code']
);

$infoReceiver = Array(
    1 => ['name' => 'Nguyễn Văn Tiến'   , 'email' => 'vantien.capri@gmail.com'],
    2 => ['name' => 'Phạm Đình Hùng'    , 'email' => 'phamdinhhung212@gmail.com'],
);

$orderTime         = time();
$orderTimeData     = getdate($orderTime);
$weekday           = format_weekday($orderTimeData['weekday']);
$infoOrder['time'] = "({$weekday}) {$orderTimeData['mday']}/{$orderTimeData['mon']}/{$orderTimeData['year']} ({$orderTimeData['hours']}h:{$orderTimeData['minutes']}p)";

$subject         = "⏰Khách hàng {$infoOrder['name']} mã đơn hàng: {$infoOrder['code']} muốn đặt đồng hồ🔥";
$content         = "
<div style='width: 600px; margin: 0 auto;background-color: #eeeeee; border-top: 10px solid #00BCD4; font-family: Arial;'>
    <div style=''>
        <div style='text-align: center; font-size: 1.4rem; font-weight: 100; color: #333; margin: 3px 0; padding: 10px 0;'>
            <h4 style='margin: 5px 0; color: #ec0202; font-size: 1.5rem;'>CHÚC MỪNG CÓ ĐƠN HÀNG MỚI ‼️ 👏</h4>
            <h3 style='margin: 0'>Thông tin đơn hàng</h3>
        </div>
        <div style='width: 85%; margin: 0 auto; padding: 20px; background-color: #fbfbfb; font-size: .9rem;'>
            <div style='padding: 12px 0; '><span style='display: block; font-size: 1.1rem; color: #1d467b;'>Mã đơn hàng: </span><span style='display: block; font-size: 1rem;background-color: #d4effb;padding: 3px 10px; color: #033854; letter-spacing: 1px;'>✔ {$infoOrder['code']}</span></div>
            <div style='padding: 12px 0; '><span style='display: block; font-size: 1.1rem; color: #1d467b;'>Tên khách hàng: </span><span style='display: block; font-size: 1rem;background-color: #d4effb;padding: 3px 10px; color: #033854; letter-spacing: 1px;'>✔ {$infoOrder['name']}</span></div>
            <div style='padding: 12px 0; '><span style='display: block; font-size: 1.1rem; color: #1d467b;'>SĐT: </span><span style='display: block; font-size: 1rem;background-color: #d4effb;padding: 3px 10px; color: #033854; letter-spacing: 1px;'>✔ {$infoOrder['phone']}</span></div>
            <div style='padding: 12px 0; '><span style='display: block; font-size: 1.1rem; color: #1d467b;'>Địa chỉ: </span><span style='display: block; font-size: 1rem;background-color: #d4effb;padding: 3px 10px; color: #033854; letter-spacing: 1px;'>✔ {$infoOrder['address']}</span></div>
            <div style='padding: 12px 0; '><span style='display: block; font-size: 1.1rem; color: #1d467b;'>Màu sắc: </span><span style='display: block; font-size: 1rem;background-color: #d4effb;padding: 3px 10px; color: #033854; letter-spacing: 1px;'>✔ {$infoOrder['color']}</span></div>
            <div style='padding: 12px 0; '><span style='display: block; font-size: 1.1rem; color: #1d467b;'>Ghi chú: </span><span style='display: block; font-size: 1rem;background-color: #d4effb;padding: 3px 10px; color: #033854; letter-spacing: 1px;'>✔ {$infoOrder['note']}</span></div>
            <div style='padding: 12px 0; '><span style='display: block; font-size: 1.1rem; color: #1d467b;'>Thời gian: </span><span style='display: block; font-size: 1rem;background-color: #d4effb;padding: 3px 10px; color: #033854; letter-spacing: 1px;'>✔ {$infoOrder['time']}</span></div>
            <div style='padding: 12px 0; border-top: 1px solid #eeeeee; margin-top: 20px; text-align: center;'>
                <a href='tel:{$infoOrder['phone']}' style='background-color: #00bcd4; text-decoration: none; letter-spacing: 1px; padding: 10px 16px; font-size: 1.1rem; color: #fff; border-radius: 5px; font-weight: bold; display: flex; width: 177px; margin: 0px auto; margin-top: 15px;'>☎ Gọi khách hàng</a>
            </div>
        </div>
        <div style='padding: 20px;'>
            <p style='margin: 3px 0; font-size: .9rem; text-align: center; color: #676565; font-style: italic; font-weight: 100;'>© 2020 bepcapri.com All Right Reserved. Terms of Service & Privacy Policy</p>
        </div>
    </div>
</div>";

$emailReceiver = 'phamdinhhung212@gmail.com';
$nameReceiver  = 'pham dinh hung';

$processSendMail = send_mail($infoReceiver, $subject, $content);
if($processSendMail) {
    $dataSendView = Array(
        "status"    => "success",
        "infoOrder" => $infoOrder
    );
} else {
    $dataSendView = Array(
        "status"    => "error",
        "infoOrder" => []
    );
}
echo json_encode($dataSendView);
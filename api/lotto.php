<?php
header('Access-Control-Allow-Origin: *');

header('Access-Control-Allow-Methods: GET, POST');

header("Access-Control-Allow-Headers: X-Requested-With");

function CallAPI($url, $query)
{
    $ch = curl_init();                                 //curl 초기화
    curl_setopt($ch, CURLOPT_URL, $url.$query);               //URL 지정하기
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);    //요청 결과를 문자열로 반환 
    curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 10);      //connection timeout 10초 
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);   //원격 서버의 인증서가 유효한지 검사 안함
     
    $response = curl_exec($ch);
    curl_close($ch);
     
    return $response;
}
$drwNo = $_GET['drw'];

echo CallAPI("https://www.dhlottery.co.kr/common.do?method=getLottoNumber&drwNo=", $drwNo);
?>
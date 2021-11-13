<template>
  <div>
    test
  </div>
</template>

<script setup>
  import jsSHA from "jssha"

  const TDX_API_KEY = 'E5Zow0RRsldm03i8ER95BFbjJTM'
  const TDX_API_ID = '5c5c8f8f-b9c0-4f7b-b8c9-f8f8f8f8f8f8'
  const TDX_BASE_URL = 'https://ptx.transportdata.tw/MOTC'

  const { data } = await useFetch('/v2/Bus/StopOfRoute/City/taipei', {
    baseURL: TDX_BASE_URL,
    headers: GetAuthorizationHeader()
  })

  console.log(data)

  function GetAuthorizationHeader() {
      var AppID = TDX_API_ID
      var AppKey = TDX_API_KEY

      var GMTString = new Date().toGMTString()
      var ShaObj = new jsSHA('SHA-1', 'TEXT')
      ShaObj.setHMACKey(AppKey, 'TEXT')
      ShaObj.update('x-date: ' + GMTString)
      var HMAC = ShaObj.getHMAC('B64')
      var Authorization = 'hmac username=\"' + AppID + '\", algorithm=\"hmac-sha1\", headers=\"x-date\", signature=\"' + HMAC + '\"'

      return { 'Authorization': Authorization, 'X-Date': GMTString /*,'Accept-Encoding': 'gzip'*/} //如果要將js運行在伺服器，可額外加入 'Accept-Encoding': 'gzip'，要求壓縮以減少網路傳輸資料量
  }
</script>
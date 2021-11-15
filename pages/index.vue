<template>
  <div>
    {{ citySelected }}
    <Listbox as="div" v-model="citySelected">
      <div class="mt-1 relative">
        <ListboxButton class="bg-white relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
          <span class="block truncate">{{ citySelected.name }}</span>
          <span class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            <SelectorIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
          </span>
        </ListboxButton>

        <transition leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
          <ListboxOptions class="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
            <ListboxOption as="template" v-for="city in cityData" :key="city.value" :value="city" v-slot="{ active, selected }"  @click="refresh">
              <li :class="[active ? 'text-white bg-indigo-600' : 'text-gray-900', 'cursor-default select-none relative py-2 pl-3 pr-9']">
                <span :class="[selected ? 'font-semibold' : 'font-normal', 'block truncate']">
                  {{ city.name }}
                </span>

                <span v-if="selected" :class="[active ? 'text-white' : 'text-indigo-600', 'absolute inset-y-0 right-0 flex items-center pr-4']">
                  <CheckIcon class="h-5 w-5" aria-hidden="true" />
                </span>
              </li>
            </ListboxOption>
          </ListboxOptions>
        </transition>
      </div>
    </Listbox>
    {{ data[0] }}
  </div>
</template>

<script setup>
  import jsSHA from "jssha"
  import { Listbox, ListboxButton, ListboxLabel, ListboxOption, ListboxOptions } from '@headlessui/vue'
  import { CheckIcon, SelectorIcon } from '@heroicons/vue/solid'


  const TDX_API_ID = 'bd0538fd14464e0eb17e1c3139015493'
  const TDX_API_KEY = 'E5Zow0RRsldm03i8ER95BFbjJTM'
  const TDX_BASE_URL = 'https://ptx.transportdata.tw/MOTC'

  const cityData = [
    { name: '臺北市', value: 'Taipei' },
    { name: '新北市', value: 'NewTaipei' },
    { name: '桃園市', value: 'Taoyuan' },
    { name: '臺中市', value: 'Taichung' },
    { name: '臺南市', value: 'Tainan' },
    { name: '高雄市', value: 'Kaohsiung' },
    { name: '基隆市', value: 'Keelung' },
    { name: '新竹市', value: 'Hsinchu' },
    { name: '新竹縣', value: 'HsinchuCounty' },
    { name: '苗栗縣', value: 'MiaoliCounty' },
    { name: '彰化縣', value: 'ChanghuaCounty' },
    { name: '南投縣', value: 'NantouCounty' },
    { name: '雲林縣', value: 'YunlinCounty' },
    { name: '嘉義縣', value: 'ChiayiCounty' },
    { name: '嘉義市', value: 'Chiayi' },
    { name: '屏東縣', value: 'PingtungCounty' },
    { name: '宜蘭縣', value: 'YilanCounty' }, 
    { name: '花蓮縣', value: 'HualienCounty' },
    { name: '臺東縣', value: 'TaitungCounty' },
    { name: '金門縣', value: 'KinmenCounty' },
    { name: '澎湖縣', value: 'PenghuCounty' },
    { name: '連江縣', value: 'LienchiangCounty' }
  ]
  const citySelected = ref(cityData[0])

  const getAuthorizationHeader = () => {
      const AppID = TDX_API_ID
      const AppKey = TDX_API_KEY

      const GMTString = new Date().toGMTString()
      const ShaObj = new jsSHA('SHA-1', 'TEXT')
      ShaObj.setHMACKey(AppKey, 'TEXT')
      ShaObj.update('x-date: ' + GMTString)
      const HMAC = ShaObj.getHMAC('B64')
      const Authorization = 'hmac username=\"' + AppID + '\", algorithm=\"hmac-sha1\", headers=\"x-date\", signature=\"' + HMAC + '\"'

      return { 'Authorization': Authorization, 'X-Date': GMTString /*,'Accept-Encoding': 'gzip'*/} //如果要將js運行在伺服器，可額外加入 'Accept-Encoding': 'gzip'，要求壓縮以減少網路傳輸資料量
  }

  const { data, refresh } = await useAsyncData(`/v2/Bus/StopOfRoute/City/${citySelected.value.value}`, () => $fetch(`/v2/Bus/StopOfRoute/City/${citySelected.value.value}`, {
    baseURL: TDX_BASE_URL,
    headers: getAuthorizationHeader()
  }))

  console.log(data)

</script>

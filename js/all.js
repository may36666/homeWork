let buttonZone =[
    {Zone:'苓雅區',
    Color:'bg-[#8A82CC]'},
    {Zone:'三民區',
    Color:'bg-[#FFA782]'},
    {Zone:'新興區',
    Color:'bg-[#F5D105]'},
    {Zone:'鹽埕區',
     Color:'bg-[#559AC8]'}
    ];
    //用set



let xhr = new XMLHttpRequest();
xhr.open('get','https://raw.githubusercontent.com/hexschool/KCGTravel/master/datastore_search.json',true);
xhr.send(null);
xhr.onload =function (){
    let travel =JSON.parse(xhr.responseText);

    if(xhr.status == 200 && xhr.readyState == 4){
    let area = document.getElementById('areaId');
    let mainTitleName = document.getElementById('mainTitleName');
    let travelLen = travel.result.records.length;
    let mainListId = document.getElementById('mainListId');
    let hotBotton = document.getElementById('hotButton');
    let zones =[];

    //選擇區域清單
    zones.push('--請選擇行政區--')
    for(let i = 0; i<travelLen; i++){
        zones.push(travel.result.records[i].Zone);
    } 
    let zoneToSet =new Set(zones);
    let travelZone =[...zoneToSet];
    let str = '';
    let travelZoneLen = travelZone.length;
    for(let i=0 ;i<travelZoneLen ; i++){
        str+= '<option value="'+travelZone[i]+'"> '+travelZone[i]+' </option>'
    }
    area.innerHTML = str;
    


    area.addEventListener('change',function (e){
        let select = e.target.value;
        mainTitleName.textContent = select;      
    },false);

    area.addEventListener('change',updateMainList,false);

    

    
    function hotButtonList(e){
        let str ='';
        let buttonZoneLen = buttonZone.length;
        for(let i=0 ;i<buttonZoneLen ; i++){
            str += '<button type="button" class="border-0 rounded-md text-white w-[20%] lg:w-[16%] h-full '+buttonZone[i].Color+'" value="'+buttonZone[i].Zone+'">'+ buttonZone[i].Zone+'</button>'
        }
        hotBotton.innerHTML = str ;
    }
    hotButtonList();

    
    function updateMainList(e){
        let select = e.target.value;
        let str = '';
        for(let i = 0 ; i <travelLen; i++){
            if(select == travel.result.records[i].Zone){
                str += '<div class="h-[400px] border-2 shadow w-[90%] text-[6px] md:text-base "><img src="'+travel.result.records[i].Picture1+'"class ="h-1/2 w-full "><ul class="p-3 space-y-5 h-1/2 content-center"><li class="flex flex-row space-x-2"><img src="./assets/icons_clock.png" alt="clock"><span>'+travel.result.records[i].Opentime+'</span></li><li class="flex flex-row space-x-2"><img src="./assets/icons_pin.png" alt="pin"><span>'+travel.result.records[i].Add+'</span></li><li class="grid grid-cols-4 pl-1"><div class="col-span-2 flex flex-row space-x-2"><img src="./assets/icons_phone.png" ><span>'+travel.result.records[i].Tel+'</span></div><div class="col-span-2 flex flex-row space-x-2"><img src="./assets/icons_tag.png" alt=""><span>'+travel.result.records[i].Ticketinfo+'</span></div></li></ul></div>';
            }
         }
         mainListId.innerHTML =str; 
    }

    hotBotton.addEventListener('click',function(e){
        if(e.target.nodeName !== 'BUTTON'){return};
        let select = e.target.value;
        mainTitleName.textContent = select; 
    },false);

    hotBotton.addEventListener('click',updateMainList);
    }
    
    else{
        console.log('資料錯誤');
    }
}


    
import React, {useEffect, useState} from 'react';
import DaumPostCode from "react-daum-postcode";
import { addressInfomation } from '../api/MapAPI';
const {kakao} = window;

function KakaoMap(){

    const [address,setAddress] = useState("");

    const [addressInfo,setAddressInfo] = useState({
         address:"",lat:"",lng:""
    });
    const [addressList,setAddressList] = useState([])
    
    const clickHandler = (e) =>{
        setAddressList([...addressList,addressInfo])
    }


    const completeHandler = (data) =>{
       
        setAddress(data.roadAddress);
        document.getElementById('list').value = data.roadAddress;

        const geocoder = new kakao.maps.services.Geocoder();

        geocoder.addressSearch(data.roadAddress,function(result,status){
            if(status === kakao.maps.services.Status.OK){
                
                setAddressInfo({address:data.roadAddress,lat:result[0].y,lng:result[0].x})
                
                // document.getElementById('one').value = data.roadAddress
                // document.getElementById('two').value = result[0].y
                // document.getElementById('three').value = result[0].x

            }
        })

        
    }
    
    useEffect(() => {

        const container = document.getElementById('map')
        const options = {
            center: new kakao.maps.LatLng(33.450701,126.570667),
            level:2
        }
        const map = new kakao.maps.Map(container,options)

        const geocoder = new kakao.maps.services.Geocoder();

        geocoder.addressSearch(address,function(result,status){
            if(status === kakao.maps.services.Status.OK){
                let coords = new kakao.maps.LatLng(result[0].y,result[0].x);
                let marker = new kakao.maps.Marker({
                    map:map,
                    position:coords
                })
                
                map.setCenter(coords);
            }
        })

    },[address]);

    const submitHandler = (e) => {
        addressInfomation(addressList)
        .then((response) => {
          console.log(response.data)
        })
        .catch((error) => {
          console.log(error);
        });
      e.preventDefault();   
    }

    return(
            <>
                <div id="map" style={{
                    width: '500px',
                    height: '500px'
                }}></div>
                <div>

                <input id="list"/> <button onClick={clickHandler}>추가</button>
         
                
                {addressList.map((addressInfo,id)=> <p key={id}>{addressInfo.address},{addressInfo.lat},{addressInfo.lng}</p>)}
                
                
                <button onClick={submitHandler}>전송</button>

                <DaumPostCode
                    onComplete={completeHandler}
                    autoClose={false}
                    defaultQuery="복정로91"
                    style={{
                        width:'200px',
                        height:'500px'
                    }}
                >
                </DaumPostCode>

                </div>
            </>

    );

}

export default KakaoMap;
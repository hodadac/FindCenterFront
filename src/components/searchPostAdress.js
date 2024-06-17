import React from "react";
import DaumPostCode from 'react-daum-postcode'

function searchPostAdress(){

    const completeHandler = (data) =>{
        console.log(data)
        let roadAddress = data.roadAddress
        document.getElementById('list').value = roadAddress
    }

    return(
        <div>
            <input id="list" value="복정로91">

            </input>
            <DaumPostCode
                onComplete={completeHandler}
                autoClose={false}
                defaultQuery='복정로91'
                style={{
                    width:'200px',
                    height:'500px'
                }}
            >

            </DaumPostCode>

        </div>
    )
}

export default searchPostAdress;
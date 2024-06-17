
import React from "react";
const MainLayout = ({ children }) => {
    return (
        <div>
            <div>{children}
                <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=eaaa89c15cb87d0fe64303808ac10a52"></script>
            </div>

        </div>
    );
};

export default MainLayout;

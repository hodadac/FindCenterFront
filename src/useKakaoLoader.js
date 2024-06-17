import { useKakaoLoader as useKakaoLoaderOrigin } from "react-kakao-maps-sdk"

const key = process.env.REACT_APP_KAKAOMAP_API_Key

export default function useKakaoLoader() {
    useKakaoLoaderOrigin({
        appkey: key,
        libraries: ["clusterer", "drawing", "services"],
    })
}
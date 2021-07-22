package io.dcloud.UNIACABF38;

import android.util.Log;
import android.widget.Toast;

import com.amap.api.location.AMapLocation;
import com.amap.api.location.AMapLocationClient;
import com.amap.api.location.AMapLocationClientOption;
import com.amap.api.location.AMapLocationClientOption.AMapLocationMode;
import com.amap.api.location.AMapLocationListener;

import static android.widget.Toast.*;
import static io.dcloud.common.util.ReflectUtils.getApplicationContext;

public class LocationMy {
    //声明AMapLocationClient类对象
    public AMapLocationClient mLocationClient = null;

    public void startMy(){
        //初始化定位
        mLocationClient = new AMapLocationClient(getApplicationContext());
        //设置定位回调监听
        mLocationClient.setLocationListener(mLocationListener);

        //初始化AMapLocationClientOption对象
        mLocationOption = new AMapLocationClientOption();

        //设置定位模式为AMapLocationMode.Battery_Saving，高精度模式。
        mLocationOption.setLocationMode(AMapLocationMode.Hight_Accuracy);

        //设置定位间隔,单位毫秒,默认为2000ms，最低1000ms。
        mLocationOption.setInterval(1000);

        //单位是毫秒，默认30000毫秒，建议超时时间不要低于8000毫秒。
        mLocationOption.setHttpTimeOut(20000);

        //给定位客户端对象设置定位参数
        mLocationClient.setLocationOption(mLocationOption);

        //启动定位
        mLocationClient.startLocation();

        Log.e("aaa","aaaa");


    }




    // 返回当前位置的经纬度
    static double lng = 1.1;
    static double lat = 1.1;


    //声明定位回调监听器
    public final AMapLocationListener mLocationListener = new AMapLocationListener () {
        @Override
        public void onLocationChanged(AMapLocation amapLocation) {
            Log.v ("take", "caijielong");
            // TODO Auto-generated method stub
            if (amapLocation != null) {
                int mycode = amapLocation.getErrorCode ();
                Log.e ("myCode", String.valueOf (mycode));
                if (amapLocation.getErrorCode () == 0) {
                    //可在其中解析amapLocation获取相应内容。
                    double locationType = amapLocation.getLocationType ();//获取当前定位结果来源，如网络定位结果，详见定位类型表
                    double latitude = amapLocation.getLatitude ();//获取纬度
                    double longitude = amapLocation.getLongitude ();//获取纬度
                    Log.e ("Amap==经度：纬度", "locationType:" + locationType + ",latitude:" + latitude);
                    lat = latitude;
                    lng = longitude;

                } else {
                    //定位失败时，可通过ErrCode（错误码）信息来确定失败的原因，errInfo是错误信息，详见错误码表。
                    Log.e ("AmapError", "location Error, ErrCode:"
                            + amapLocation.getErrorCode () + ", errInfo:"
                            + amapLocation.getErrorInfo ());

                    if (mycode ==4){
                        makeText (getApplicationContext (), "定位失败, 请检查网络！"  , LENGTH_SHORT).show ();
                    }else{
                        makeText (getApplicationContext (), "定位失败！"  , LENGTH_SHORT).show ();
                    }

                    //todo mycode 为12时，为缺少定位权限，mycode要传到uni-app 提醒用户开启权限  具体错误码：https://lbs.amap.com/api/android-location-sdk/guide/utilities/errorcode/
                }
            }


        }

    };
    //声明AMapLocationClientOption对象
    public AMapLocationClientOption mLocationOption = null;

    public double rLng(){
        return lng;
    }

    public double rLat(){
        return lat;
    }
}

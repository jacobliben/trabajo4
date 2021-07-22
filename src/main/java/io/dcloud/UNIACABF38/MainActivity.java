package io.dcloud.UNIACABF38;


import android.annotation.SuppressLint;
import android.content.Intent;
import android.os.Bundle;

import android.util.Log;
import android.widget.Toast;




import com.hdgq.locationlib.LocationOpenApi;
import com.hdgq.locationlib.entity.ShippingNoteInfo;
import com.hdgq.locationlib.listener.OnResultListener;


import io.dcloud.WebAppActivity;


public class MainActivity extends WebAppActivity {
    private String data="test";

    public OnResultListener listener = new OnResultListener() {

        @Override
        public void onSuccess() {
            Toast.makeText(MainActivity.this,"succeed!" , Toast.LENGTH_LONG).show();
        }

        public void onFailure(String errorCode, String errorMsg) {
            Log.i(  "errorCode", errorCode);
            Log.i( "errorMsg", errorMsg);

            Toast.makeText(MainActivity.this,"errorCode" + errorCode, Toast.LENGTH_LONG).show();
            Toast.makeText(MainActivity.this,"errorMsg" + errorMsg, Toast.LENGTH_LONG).show();
        }
    };


    @Override
    public void onCreate(Bundle savedInstanceState) {


        //判断文件包名
//        String applicationId = this.getPackageName();
//
//        Log.i("TESTKIM","applicationId:" + applicationId);

        super.onCreate(savedInstanceState);

       //启动保活的前台服务
        Intent intent = new Intent(MainActivity.this, MyService2.class);
         startService(intent);

        //在启动页或 app 首页中，初始化 sdk 服务。context 必须为 activity。
         LocationOpenApi.init( this,"io.dcloud.UNIACABF38","9b471d80340f40a0af42ecc5739cfad19b471d80340f40a0af42ecc5739cfad1",
                 "32080","debug",listener);

//         //停止服务。context 必须为 activity。
//         LocationOpenApi.stop(Context context,ShippingNoteInfo[]
//        shippingNoteInfos,OnResultListener listener)



    }
    // 这几个方法为了正常加载页面，勿删！！！！！
    public boolean isStreamAppMode() {
        return false;
    }
    public String getResData(){
        return data;
    }



    //照相机
//    public void startCamera(){
//        Toast.makeText(MainActivity.this, "btn1", Toast.LENGTH_SHORT).show();
//    }
}

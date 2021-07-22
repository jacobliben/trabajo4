package io.dcloud.UNIACABF38;

import android.app.Notification;
import android.app.Service;
import android.content.Intent;
import android.os.IBinder;
import android.util.Log;
import android.widget.Toast;

import com.hdgq.locationlib.LocationOpenApi;
import com.hdgq.locationlib.entity.ShippingNoteInfo;

import com.hdgq.locationlib.listener.OnResultListener;

public class ServiceStart extends Service {
    public ServiceStart() {
    }
    private com.hdgq.locationlib.entity.ShippingNoteInfo[] ShippingNoteInfos = new ShippingNoteInfo[]{} ;

    private String shippingNoteNumber;
    private String serialNumber;
    private String startCountrySubdivisionCode;
    private String endCountrySubdivisionCode;


    public OnResultListener listener = new OnResultListener() {

        @Override
        public void onSuccess() {
            Toast.makeText(getApplicationContext (),"Start!" , Toast.LENGTH_LONG).show();
        }

        public void onFailure(String errorCode, String errorMsg) {
            Log.i(  "errorCode", errorCode);
            Log.i( "errorMsg", errorMsg);

            Toast.makeText(getApplicationContext (),"errorCode Start" + errorCode, Toast.LENGTH_LONG).show();
            Toast.makeText(getApplicationContext (),"errorMsg Start" + errorMsg, Toast.LENGTH_LONG).show();
        }
    };

    @Override
    public IBinder onBind(Intent intent) {
        // TODO: Return the communication channel to the service.
        throw new UnsupportedOperationException ("Not yet implemented");
    }


    @Override
    public int onStartCommand(Intent intent, int flags, int startId) {
        //启用服务。context 必须为 activity。

//        ShippingNoteInfos = [
//       "PC0A210722627545","0000","310113","320305"];
         LocationOpenApi.start(this,ShippingNoteInfos, listener);
//["PC0A210722627545","0000","310113","320305"]
//         shippingNoteNumber = intent.getStringExtra("shippingNoteNumber");
//         serialNumber = intent.getStringExtra("serialNumber");
//         startCountrySubdivisionCode = intent.getStringExtra("startCountrySubdivisionCode");
//         endCountrySubdivisionCode = intent.getStringExtra("endCountrySubdivisionCode");


        return super.onStartCommand(intent, flags, startId);
    }
}
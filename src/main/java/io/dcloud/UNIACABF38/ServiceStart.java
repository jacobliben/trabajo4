package io.dcloud.UNIACABF38;

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


    public  ShippingNoteInfo shippingNoteInfo = new ShippingNoteInfo() {
        private String shippingNoteNumber;
        private String serialNumber;
        private String startCountrySubdivisionCode ="310113";;
        private String endCountrySubdivisionCode = "320305";
        private int sendCount;
        private int alreadySendCount;



        public int getAlreadySendCount() {
            return this.alreadySendCount;
        }

        public void setAlreadySendCount(int alreadySendCount) {
            this.alreadySendCount = alreadySendCount;
        }

        public String getShippingNoteNumber() {
            this.shippingNoteNumber ="PC0A210722627545";

            return this.shippingNoteNumber != null && !"null".equals(this.shippingNoteNumber.trim()) ? this.shippingNoteNumber : "";
        }

        public void setShippingNoteNumber(String shippingNoteNumber) {
            this.shippingNoteNumber = shippingNoteNumber;
        }

        public String getSerialNumber() {
            this.serialNumber ="000000";

            return this.serialNumber != null && !"null".equals(this.serialNumber.trim()) ? this.serialNumber : "";
        }


        public String getStartCountrySubdivisionCode() {


            return this.startCountrySubdivisionCode != null && !"null".equals(this.startCountrySubdivisionCode.trim()) ? this.startCountrySubdivisionCode : "";
        }

        public void setStartCountrySubdivisionCode(String startCountrySubdivisionCode) {
            this.startCountrySubdivisionCode = startCountrySubdivisionCode;
        }

        public String getEndCountrySubdivisionCode() {
            return this.endCountrySubdivisionCode = "320305";

           // return this.endCountrySubdivisionCode != null && !"null".equals(this.endCountrySubdivisionCode.trim()) ? this.endCountrySubdivisionCode : "";
        }

        public void setEndCountrySubdivisionCode(String endCountrySubdivisionCode) {
            this.endCountrySubdivisionCode = endCountrySubdivisionCode;
        }

        public int getSendCount() {
            return this.sendCount;
        }

        public void setSendCount(int sendCount) {
            this.sendCount = sendCount;
        }
    };


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

          ShippingNoteInfo[] ShippingNoteInfos = new ShippingNoteInfo[4];
         LocationOpenApi.start(this,ShippingNoteInfos, listener);
//["PC0A210722627545","0000","310113","320305"]
//         shippingNoteNumber = intent.getStringExtra("shippingNoteNumber");
//         serialNumber = intent.getStringExtra("serialNumber");
//         startCountrySubdivisionCode = intent.getStringExtra("startCountrySubdivisionCode");
//         endCountrySubdivisionCode = intent.getStringExtra("endCountrySubdivisionCode");


        return super.onStartCommand(intent, flags, startId);
    }
}
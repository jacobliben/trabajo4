package io.dcloud.UNIACABF38;

import android.app.Application;
import android.util.Log;
import android.widget.Toast;

import com.hdgq.locationlib.LocationOpenApi;
import com.hdgq.locationlib.entity.ShippingNoteInfo;
import com.hdgq.locationlib.listener.OnResultListener;

import java.util.Arrays;

import static com.bun.miitmdid.content.ContextKeeper.getApplicationContext;

public class StartIt<shippingNoteInfos, shippingNoteInfo0, shippingNoteInfo1> {

    public OnResultListener listener = new OnResultListener() {


        @Override
        public void onSuccess() {
             Toast.makeText(getApplicationContext (),"succeed Start!" , Toast.LENGTH_LONG).show();
        }

        public void onFailure(String errorCode, String errorMsg) {
            Log.i(  "errorCode", errorCode);
            Log.i( "errorMsg", errorMsg);

            Toast.makeText(getApplicationContext (),
                    "errorCode" + errorCode,
                    Toast.LENGTH_LONG).show();
            Toast.makeText(getApplicationContext (),"errorMsg" + errorMsg, Toast.LENGTH_LONG).show();
        }
    };



    ShippingNoteInfo shippingNoteInfo0 = new ShippingNoteInfo();







    public void getShippingNoteInfosData(String shippingNoteNumber){

        Log.i("mmm shippingNoteNumber",shippingNoteNumber);
        shippingNoteInfo0.setShippingNoteNumber( shippingNoteNumber);


    };

    public void getSerialNumberData(String serialNumber){

        Log.i("mmm serialNumber",serialNumber);
        shippingNoteInfo0.setSerialNumber( serialNumber);
    };

    public void getStartCountrySubdivisionCodeData(String startCountrySubdivisionCode){

        Log.i("mmm startCountry",startCountrySubdivisionCode);
        shippingNoteInfo0.setStartCountrySubdivisionCode(startCountrySubdivisionCode);
    };

    public void getEndCountrySubdivisionCodeData(String endCountrySubdivisionCode){

        Log.i("mmm endCountry",endCountrySubdivisionCode);
        shippingNoteInfo0.setEndCountrySubdivisionCode(endCountrySubdivisionCode);


    };


    ShippingNoteInfo[] shippingNoteInfos = new  ShippingNoteInfo[]{shippingNoteInfo0};




    public void start(){

        LocationOpenApi.start((Application) getApplicationContext(),
                shippingNoteInfos, listener);
    }


}

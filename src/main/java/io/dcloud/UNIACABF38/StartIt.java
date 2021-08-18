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
    ShippingNoteInfo shippingNoteInfo1 = new ShippingNoteInfo();
    ShippingNoteInfo shippingNoteInfo2 = new ShippingNoteInfo();
    ShippingNoteInfo shippingNoteInfo3 = new ShippingNoteInfo();






    public void getShippingNoteInfosData(String shippingNoteNumber){

        Log.i("mmm shippingNoteNumber",shippingNoteNumber);
        shippingNoteInfo0.setShippingNoteNumber( shippingNoteNumber);


    };

    public void getSerialNumberData(String serialNumber){

        Log.i("mmm serialNumber",serialNumber);
        shippingNoteInfo1.setSerialNumber( serialNumber);
    };

    public void getStartCountrySubdivisionCodeData(String startCountrySubdivisionCode){

        Log.i("mmm startCountry",startCountrySubdivisionCode);
        shippingNoteInfo2.setStartCountrySubdivisionCode(startCountrySubdivisionCode);
    };

    public void getEndCountrySubdivisionCodeData(String endCountrySubdivisionCode){

        Log.i("mmm endCountry",endCountrySubdivisionCode);
        shippingNoteInfo3.setEndCountrySubdivisionCode(endCountrySubdivisionCode);


    };


    ShippingNoteInfo[] shippingNoteInfos = new  ShippingNoteInfo[]{shippingNoteInfo0,shippingNoteInfo1,shippingNoteInfo2,shippingNoteInfo3};




    public void start(){
        //Log.i("mmm ok", Arrays.toString(shippingNoteInfos));
        LocationOpenApi.start((Application) getApplicationContext(),
                shippingNoteInfos, listener);
    }


}

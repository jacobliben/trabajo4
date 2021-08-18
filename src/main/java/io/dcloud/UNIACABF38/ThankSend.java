package io.dcloud.UNIACABF38;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.widget.TextView;

public class ThankSend extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate (savedInstanceState);
        setContentView (R.layout.activity_thank_send);

        WebView mWebview;
        WebSettings mWebSettings;
        TextView loading,mtitle;



        mWebview = (WebView) findViewById(R.id.webView1);
        loading = (TextView) findViewById(R.id.text_endLoading);

        mWebSettings = mWebview.getSettings();

        mWebview.loadUrl("http://www.baidu.com/");
    }
}
package io.dcloud.UNIACABF38;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.widget.TextView;

public class SendActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {

        WebView mWebview;
        WebSettings mWebSettings;
        TextView loading,mtitle;

        super.onCreate (savedInstanceState);
        setContentView (R.layout.activity_send);


        mWebview = (WebView) findViewById(R.id.webView1);
        loading = (TextView) findViewById(R.id.text_endLoading);

        mWebSettings = mWebview.getSettings();

        mWebview.loadUrl("http://www.baidu.com/");
    }
}
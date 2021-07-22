package io.dcloud.UNIACABF38;

import android.content.Context;
import android.content.Intent;

import com.hdgq.locationlib.keeplive.KeepLive;
import com.hdgq.locationlib.keeplive.config.ForegroundNotification;
import com.hdgq.locationlib.keeplive.config.ForegroundNotificationClickListener;
import com.hdgq.locationlib.keeplive.config.KeepLiveService;

import io.dcloud.application.DCloudApplication;


public class MyApplication extends DCloudApplication {

    public void onCreate() {
        super.onCreate();
        ForegroundNotification foregroundNotification = new ForegroundNotification ("测试","描述", R.drawable.icon,
                //定义前台服务的通知点击事件
                new ForegroundNotificationClickListener () {

                    @Override
                    public void foregroundNotificationClick(Context context, Intent intent) {

                    }
                });
        //启动保活服务

        KeepLive.startWork (
                this,
                KeepLive.RunMode.ENERGY,
                foregroundNotification,
                new  KeepLiveService () {

                    /**
                     * 运行中
                     * 由于服务可能会多次自动启动，该方法可能重复调用
                     */
                    @Override
                    public void onWorking() {

                    }
                    /**
                     * 服务终止
                     * 由于服务可能会被多次终止，该方法可能重复调用，需同onWorking配套使用，如注册和注销broadcast
                     */
                    @Override
                    public void onStop() {

                    }
                }
        );

    }





}

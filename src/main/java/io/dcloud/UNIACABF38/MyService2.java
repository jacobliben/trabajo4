package io.dcloud.UNIACABF38;

import android.app.Application;
import android.app.Notification;
import android.app.Service;
import android.content.Context;
import android.content.Intent;
import android.os.IBinder;
import android.util.Log;

import com.hdgq.locationlib.keeplive.KeepLive;
import com.hdgq.locationlib.keeplive.config.ForegroundNotification;
import com.hdgq.locationlib.keeplive.config.ForegroundNotificationClickListener;
import com.hdgq.locationlib.keeplive.config.KeepLiveService;
import com.hdgq.locationlib.keeplive.config.NotificationUtils;
import com.hdgq.locationlib.keeplive.receiver.NotificationClickReceiver;




public class MyService2 extends Service {
    public String data;
    private int one;
    private int count;

    @Override
    public IBinder onBind(Intent intent) {
        return null;
    }

    @Override
    public void onCreate() {
        super.onCreate();

        final ForegroundNotification foregroundNotification = new ForegroundNotification ("徐工智联司机服务","正在运行，请勿关闭", R.drawable.icon,
                //定义前台服务的通知点击事件
                new ForegroundNotificationClickListener () {

                    @Override
                    public void foregroundNotificationClick(Context context, Intent intent) {

                    }
                });
        //启动保活服务

        KeepLive.startWork((Application) getApplicationContext (), KeepLive.RunMode.ENERGY, foregroundNotification,
                //你需要保活的服务，如socket连接、定时任务等，建议不用匿名内部类的方式在这里写
                new KeepLiveService () {
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

        new Thread(new Runnable() {
            @Override
            public void run() {
                while (true){

                }
            }
        }).start();
    }

    @Override
    public int onStartCommand(Intent intent, int flags, int startId) {
        if (KeepLive.foregroundNotification != null) {
            Intent intent2 = new Intent(getApplicationContext(),
                    NotificationClickReceiver.class);
            intent2.setAction(NotificationClickReceiver.CLICK_NOTIFICATION);

            Notification notification = NotificationUtils.createNotification(MyService2.this, KeepLive.foregroundNotification.getTitle(), KeepLive.foregroundNotification.getDescription(), KeepLive.foregroundNotification.getIconRes(), intent2);
            startForeground(13691, notification);
        }


        return START_STICKY;
    }

    @Override
    public void onDestroy() {
        super.onDestroy();
    }

}
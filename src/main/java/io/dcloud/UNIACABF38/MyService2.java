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

//public class MyService2 extends Service {
//
//    private int one;
//    private int count;
//
//    @Override
//    public IBinder onBind(Intent intent) {
//        return null;
//    }
//
//    @Override
//    public void onCreate() {
//        super.onCreate();
//        startForeground(100,getNotification("标题","内容"));
//        new Thread(new Runnable() {
//            @Override
//            public void run() {
//                while (true){
//                    try {
//                        Log.i("infomationHaha",one+"");
//                        one++;
//                        Thread.sleep(1000);
//                    } catch (InterruptedException e) {
//                        e.printStackTrace();
//                    }
//                }
//            }
//        }).start();
//    }
//
//    @Override
//    public int onStartCommand(Intent intent, int flags, int startId) {
//        return START_STICKY;
//    }
//
//    @Override
//    public void onDestroy() {
//        super.onDestroy();
//    }
//
//    private Notification getNotification(String title, String message){
//        count++;
//        //创建一个跳转到活动页面的意图
//        Intent clickIntent = new Intent(this,LocationMy.class);
//        clickIntent.putExtra("flag",count);
//        //创建一个用于页面跳转的延迟意图
//        PendingIntent contentIntent = PendingIntent.getActivity(this,count,clickIntent
//                ,PendingIntent.FLAG_UPDATE_CURRENT);
//        //创建一个通知消息的构造器
//        Notification.Builder builder = new Notification.Builder(this);
//        if (android.os.Build.VERSION.SDK_INT >= android.os.Build.VERSION_CODES.O) {
//            //Android8.0开始必须给每个通知分配对应的渠道
//            builder = new Notification.Builder(this,"channel_id");
//        }
//        builder.setContentIntent(contentIntent)//设置内容的点击意图
//                .setAutoCancel(true)//设置是否允许自动清除
//                .setSmallIcon(R.drawable.icon)//设置状态栏里的小图标
//                .setTicker("提示消息来啦")//设置状态栏里面的提示文本
//                .setWhen(System.currentTimeMillis())//设置推送时间，格式为"小时：分钟"
//                .setContentTitle(title)//设置通知栏里面的标题文本
//                .setContentText(message);//设置通知栏里面的内容文本
//        //根据消息构造器创建一个通知对象
//        if (android.os.Build.VERSION.SDK_INT >= android.os.Build.VERSION_CODES.JELLY_BEAN) {
//            Notification notify = builder.build();
//            return notify;
//        }
//        return null;
//    }
//
//
//}


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

        final ForegroundNotification foregroundNotification = new ForegroundNotification ("测试","描述", R.drawable.icon,
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
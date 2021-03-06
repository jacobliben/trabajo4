package io.dcloud.UNIACABF38;


import android.Manifest;
import android.content.Context;
import android.content.pm.PackageManager;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.graphics.ImageFormat;
import android.graphics.SurfaceTexture;
import android.hardware.biometrics.BiometricManager;
import android.hardware.camera2.CameraAccessException;
import android.hardware.camera2.CameraCaptureSession;
import android.hardware.camera2.CameraDevice;
import android.hardware.camera2.CameraManager;
import android.hardware.camera2.CameraMetadata;
import android.hardware.camera2.CaptureFailure;
import android.hardware.camera2.CaptureRequest;
import android.hardware.camera2.CaptureResult;
import android.hardware.camera2.TotalCaptureResult;
import android.media.Image;
import android.media.ImageReader;
import android.os.Bundle;
import android.support.annotation.NonNull;
import android.support.v4.app.ActivityCompat;
import android.support.v4.content.ContextCompat;
import android.support.v7.app.AppCompatActivity;
import android.util.Size;
import android.view.Surface;
import android.view.TextureView;
import android.view.View;
import android.widget.Button;
import android.widget.ImageView;

import java.io.ByteArrayInputStream;
import java.nio.Buffer;
import java.nio.ByteBuffer;
import java.util.ArrayList;
import java.util.Arrays;

public class Camera extends AppCompatActivity {
    TextureView textureView;
    TextureView.SurfaceTextureListener surfaceTextureListener;
    CameraManager cameraManager;
    CameraDevice.StateCallback cam_stateCallback;
    CameraDevice opened_camera;
    Surface texture_surface;
    CameraCaptureSession.StateCallback cam_capture_session_stateCallback;
    CameraCaptureSession.CaptureCallback still_capture_callback;
    CameraCaptureSession cameraCaptureSession;
    CaptureRequest.Builder requestBuilder;
    CaptureRequest.Builder requestBuilder_image_reader;
    ImageReader imageReader;
    Surface imageReaderSurface;
    Bitmap bitmap;
    CaptureRequest request;
    CaptureRequest takephoto_request;
    Button takephoto_btn;
    ImageView takephoto_imageView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_camera);
        textureView=findViewById(R.id.texture_view);
        takephoto_btn=findViewById(R.id.capture);
        takephoto_imageView= findViewById(R.id.preview);
        surfaceTextureListener=new TextureView.SurfaceTextureListener() {
            @Override
            public void onSurfaceTextureAvailable(SurfaceTexture surface, int width, int height) {
                texture_surface=new Surface(textureView.getSurfaceTexture());
                openCamera();
            }
            @Override
            public void onSurfaceTextureSizeChanged(SurfaceTexture surface, int width, int height) {
            }
            @Override
            public boolean onSurfaceTextureDestroyed(SurfaceTexture surface) {
                return false;
            }
            @Override
            public void onSurfaceTextureUpdated(SurfaceTexture surface) {
            }
        };
        textureView.setSurfaceTextureListener(surfaceTextureListener);
        //B1. ????????????????????????ImageReader
        CameraManager manager = (CameraManager) getSystemService(Context.CAMERA_SERVICE);
        //B2. ?????????????????????ImageReader??????????????????????????????
        imageReader.setOnImageAvailableListener(new ImageReader.OnImageAvailableListener() {
            @Override
            public void onImageAvailable(ImageReader reader) {
                //B2.1 ??????????????????ImageReader?????????????????????????????????Bitmap
                Image image= reader.acquireLatestImage();
                ByteBuffer buffer= image.getPlanes()[0].getBuffer();
                int length= buffer.remaining();
                byte[] bytes= new byte[length];
                buffer.get(bytes);
                image.close();
                bitmap = BitmapFactory.decodeByteArray(bytes,0,length);
                //B2.2 ????????????
                takephoto_imageView.setImageBitmap(bitmap);
            }
        },null);
        //B3 ???????????????ImageReader???Surface
        imageReaderSurface = imageReader.getSurface();

        //B4. ??????????????????
        takephoto_btn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                //B4.1 ??????request????????? ????????????(??????????????????????????????????????? opened_camera???????????????????????????
                try {
                    requestBuilder_image_reader = opened_camera.createCaptureRequest(CameraDevice.TEMPLATE_STILL_CAPTURE);
                } catch (CameraAccessException e) {
                    e.printStackTrace();
                }
                requestBuilder_image_reader.set(CaptureRequest.JPEG_ORIENTATION,90);
                requestBuilder_image_reader.set(CaptureRequest.CONTROL_AF_TRIGGER, CameraMetadata.CONTROL_AF_TRIGGER_START);
                //B4.2 ??????request????????? ???????????????
                requestBuilder_image_reader.addTarget(imageReaderSurface );
                try {
                    //B4.3 ????????????
                    cameraCaptureSession.capture(requestBuilder_image_reader.build(),null,null);
                } catch (CameraAccessException e) {
                    e.printStackTrace();
                }
            }
        });
    }

    private void openCamera() {
        cameraManager= (CameraManager) getSystemService(Context.CAMERA_SERVICE);  // ?????????
        cam_stateCallback=new CameraDevice.StateCallback() {
            @Override
            public void onOpened(@NonNull CameraDevice camera) {
                opened_camera=camera;
                try {
                    requestBuilder = opened_camera.createCaptureRequest(CameraDevice.TEMPLATE_PREVIEW);
                    requestBuilder.addTarget(texture_surface);
                    request = requestBuilder.build();
                    cam_capture_session_stateCallback=new CameraCaptureSession.StateCallback() {
                        @Override
                        public void onConfigured(@NonNull CameraCaptureSession session) {
                            cameraCaptureSession=session;
                            try {
                                session.setRepeatingRequest(request,null,null);
                            } catch (CameraAccessException e) {
                                e.printStackTrace();
                            }
                        }
                        @Override
                        public void onConfigureFailed(@NonNull CameraCaptureSession session) {
                        }
                    };
                    opened_camera.createCaptureSession( Arrays.asList(texture_surface,imageReaderSurface), cam_capture_session_stateCallback,null);
                } catch (CameraAccessException e) {
                    e.printStackTrace();
                }
            }
            @Override
            public void onDisconnected(@NonNull CameraDevice camera) {
            }
            @Override
            public void onError(@NonNull CameraDevice camera, int error) {
            }
        };
        checkPermission();
        try {
            cameraManager.openCamera(cameraManager.getCameraIdList()[0],cam_stateCallback,null);
        } catch (CameraAccessException e) {
            e.printStackTrace();
        }
    }

    private void checkPermission() {
        // ???????????????????????????
        if(ContextCompat.checkSelfPermission(this, Manifest.permission.CAMERA)!= PackageManager.PERMISSION_GRANTED){
            if(ActivityCompat.shouldShowRequestPermissionRationale(this,Manifest.permission.CAMERA)){

            }else{
                ActivityCompat.requestPermissions(this,new String[]{Manifest.permission.CAMERA},1);
            }
        }
    }
    @Override
    protected void onResume() {
        super.onResume();
        // ?????? textureView??????????????????????????????
        if(textureView.isAvailable()){
            openCamera();
        }else{
            // ??????????????????????????????????????????
            textureView.setSurfaceTextureListener(surfaceTextureListener);
        }
    }
    @Override
    protected void onPause() {
        // ???????????????session??????
        if(cameraCaptureSession!=null){
            cameraCaptureSession.close();
        }
        // ???????????????
        if(null!=opened_camera){
            opened_camera.close();
        }
        // ????????????ImageReader
        if(null!=imageReader){
            imageReader.close();
        }
        // ???????????????View?????????
        super.onPause();
    }

}
package com.colourillusion;

import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.webkit.JavascriptInterface;
import android.webkit.WebView;

public class IllusionViewInterface {
    private Context context;
    private Activity activity;

    public IllusionViewInterface(Context context, Activity activity) {
        this.context = context;
        this.activity = activity;
    }

    @JavascriptInterface
    public void stop() {
        activity.finish();
    }
}

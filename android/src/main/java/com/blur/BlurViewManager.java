package com.blur;

import android.graphics.Color;

import androidx.annotation.Nullable;

import com.facebook.react.module.annotations.ReactModule;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.ViewManagerDelegate;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.facebook.react.viewmanagers.BlurViewManagerDelegate;
import com.facebook.react.viewmanagers.BlurViewManagerInterface;

@ReactModule(name = BlurViewManager.NAME)
public class BlurViewManager extends SimpleViewManager<BlurView> implements BlurViewManagerInterface<BlurView> {

  public static final String NAME = "BlurView";

  private final ViewManagerDelegate<BlurView> mDelegate;

  public BlurViewManager() {
    mDelegate = new BlurViewManagerDelegate(this);
  }

  @Nullable
  @Override
  protected ViewManagerDelegate<BlurView> getDelegate() {
    return mDelegate;
  }

  @Override
  public String getName() {
    return NAME;
  }

  @Override
  public BlurView createViewInstance(ThemedReactContext context) {
    return new BlurView(context);
  }

  @Override
  @ReactProp(name = "color")
  public void setColor(BlurView view, String color) {
    view.setBackgroundColor(Color.parseColor(color));
  }
}

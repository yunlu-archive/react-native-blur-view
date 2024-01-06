// This guard prevent this file to be compiled in the old architecture.
#ifdef RCT_NEW_ARCH_ENABLED
#import <React/RCTViewComponentView.h>
#import <UIKit/UIKit.h>

#ifndef BlurViewNativeComponent_h
#define BlurViewNativeComponent_h

NS_ASSUME_NONNULL_BEGIN

@interface BlurView : RCTViewComponentView
@end

NS_ASSUME_NONNULL_END

#endif /* BlurViewNativeComponent_h */
#endif /* RCT_NEW_ARCH_ENABLED */

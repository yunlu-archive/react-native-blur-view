#import <React/RCTViewManager.h>
#import <React/RCTUIManager.h>
#import "RCTBridge.h"

@interface BlurViewManager : RCTViewManager
@end

@implementation BlurViewManager

RCT_EXPORT_MODULE(BlurView)

- (UIView *)view
{
  return [[UIView alloc] init];
}

RCT_EXPORT_VIEW_PROPERTY(color, NSString)

@end

#import "BlurView.h"

#import <react/renderer/components/RNBlurViewSpec/ComponentDescriptors.h>
#import <react/renderer/components/RNBlurViewSpec/EventEmitters.h>
#import <react/renderer/components/RNBlurViewSpec/Props.h>
#import <react/renderer/components/RNBlurViewSpec/RCTComponentViewHelpers.h>

#import "RCTFabricComponentsPlugins.h"

using namespace facebook::react;

@interface BlurView () <RCTBlurViewViewProtocol>

@end

@implementation BlurView {
    UIVisualEffectView * _view;
}

+ (ComponentDescriptorProvider)componentDescriptorProvider
{
    return concreteComponentDescriptorProvider<BlurViewComponentDescriptor>();
}

- (instancetype)initWithFrame:(CGRect)frame
{
  if (self = [super initWithFrame:frame]) {
    static const auto defaultProps = std::make_shared<const BlurViewProps>();
    _props = defaultProps;

    _view = [[UIVisualEffectView alloc] initWithEffect:[UIBlurEffect effectWithStyle:UIBlurEffectStyleLight]];

    self.contentView = _view;
  }

  return self;
}

- (void)updateProps:(Props::Shared const &)props oldProps:(Props::Shared const &)oldProps
{
    const auto &oldViewProps = *std::static_pointer_cast<BlurViewProps const>(_props);
    const auto &newViewProps = *std::static_pointer_cast<BlurViewProps const>(props);

    if (oldViewProps.type != newViewProps.type) {
        UIBlurEffect *blurEffect = [UIBlurEffect effectWithStyle:newViewProps.type == BlurViewType::Dark ? UIBlurEffectStyleDark : UIBlurEffectStyleLight];
        _view.effect = blurEffect;
    }

    [super updateProps:props oldProps:oldProps];
}

Class<RCTComponentViewProtocol> BlurViewCls(void)
{
    return BlurView.class;
}

- hexStringToColor:(NSString *)stringToConvert
{
    NSString *noHashString = [stringToConvert stringByReplacingOccurrencesOfString:@"#" withString:@""];
    NSScanner *stringScanner = [NSScanner scannerWithString:noHashString];
    
    unsigned hex;
    if (![stringScanner scanHexInt:&hex]) return nil;
    int r = (hex >> 16) & 0xFF;
    int g = (hex >> 8) & 0xFF;
    int b = (hex) & 0xFF;
    
    return [UIColor colorWithRed:r / 255.0f green:g / 255.0f blue:b / 255.0f alpha:1.0f];
}

@end

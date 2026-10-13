import ExpoModulesCore
import WidgetKit

/// Which of the app's widgets are on the Home Screen (a Smart Stack counts),
/// read from WidgetKit. Nothing is asked of the person: an app may always
/// read its own widgets' configurations.
public class WidgetPresenceModule: Module {
  public func definition() -> ModuleDefinition {
    Name("WidgetPresence")

    /// One entry per placed widget: its kind (the `name` in app.json's
    /// expo-widgets config) and its family ("systemSmall", "systemMedium").
    AsyncFunction("placedWidgets") { (promise: Promise) in
      WidgetCenter.shared.getCurrentConfigurations { result in
        switch result {
        case .success(let widgets):
          promise.resolve(widgets.map { ["kind": $0.kind, "family": String(describing: $0.family)] })
        case .failure(let error):
          promise.reject("ERR_WIDGET_CONFIGURATIONS", error.localizedDescription)
        }
      }
    }
  }
}

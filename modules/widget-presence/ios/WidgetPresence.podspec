Pod::Spec.new do |s|
  s.name           = 'WidgetPresence'
  s.version        = '1.0.0'
  s.summary        = 'Which of the app\'s widgets are on the Home Screen'
  s.description    = 'Reads WidgetKit\'s current configurations for the app, so it can tell whether its widget was added.'
  s.author         = 'Walkito'
  s.homepage       = 'https://walkito.site'
  s.license        = 'MIT'
  s.platforms      = { :ios => '16.4' }
  s.source         = { git: '' }
  s.static_framework = true

  s.dependency 'ExpoModulesCore'
  s.frameworks = 'WidgetKit'

  s.source_files = '**/*.{h,m,swift}'
end

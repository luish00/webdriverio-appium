# Webdriver I/O with Appium

## Requeriments
* Java JRE
* Java SDK and JDK  (for android)
* [Appium Desktop Apps](http://appium.io/downloads.html)


## Scrips
Run android tests
> `npm run android-test`  

Run web tests
> `npm run web-tesst` 

## Appium configuration sample
```js
{
  "platformName": "Android",
  "platformVersion": "8.1",
  "deviceName": "Pixel_3a_API_27",
  "automationName": "UiAutomator2",
  "app": "C:/Users/Mind/proyect/webdriverio-appium/apps/test-appium.apk"
}
```
### TABLE OF CONTENTS
##### [TEST & BUILD THE APPLICATION](#test-and-build-the-application)
##### [BROWSE THE WEBSITE](#browse-the-website)
##### [ON THE DESIGN CHOICES](#on-the-design-choices)


### <a name="test-and-build-the-application"></a> TEST & BUILD THE APPLICATION

     $ gradle clean integrationTest jshint jsdoc
     
For integration tests, you will need to install ChromeDriver. For Ubuntu Linux:

    $ sudo apt-get install chromium-chromedriver
    
You might have to change 'CHROME_DRIVER' on 'mainIT' to point to the proper driver location.

    // TODO: Make this configurable through a properties file.

JSDoc generated documentation will be available in the following folder:

     ./build/jsdoc

JSHint reports will be available in the following folder:

     ./build/jshint.out

This application has been built using Gradle version 2.10.

### <a name="browse-the-website"></a> BROWSE THE WEBSITE

If you have IntelliJ simply right-click on 'main.html' and choose 'Open in Browser'.

If you want to use the Gretty plugin run the following command on a terminal:

    $ gradle run
    
Then open [this link](http://localhost:4453/main.html) with a browser.

### <a name="on-the-design-choices"></a> ON THE DESIGN CHOICES

The only purpose of this project is to teach myself JavaScript and UI development with AngularJS.

The following frameworks and tools are being used:

* [AngularJS](http://angularjs.org/): For developing a single page web application.
* [Jasmine](http://jasmine.github.io/): For unit tests.
* [Selenium WebDriver](http://www.seleniumhq.org/projects/webdriver/): For integration tests.
* [Karma Plugin](https://github.com/craigburke/karma-gradle): For running automated tests from Gradle.
* [JS Plugin](https://github.com/eriwen/gradle-js-plugin): For running JSHint (code check) and JSDoc (generated documentation) from Gradle.
* [Gretty Plugin](https://github.com/akhikhl/gretty): To run a local webserver for integration tests.

I'm following the book [Unraveling AngularJS 1.4](http://www.amazon.com/Unraveling-AngularJS-With-Complete-Samples-ebook/dp/B00ULTPP00).

Unfortunately the author does not follow TDD, so I setup Jasmine and Selenium (integration) tests on my own.

For my own reference, the book's examples are located [here](https://onedrive.live.com/?authkey=%21AOrZVkcC_sB8S-Q&id=79DA757D3D2B5BAA%21207784&cid=79DA757D3D2B5BAA).

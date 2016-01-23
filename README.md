### TABLE OF CONTENTS
##### [TEST & BUILD THE APPLICATION](#test-and-build-the-application)
##### [BROWSE THE WEBSITE](#browse-the-website)
##### [ON THE DESIGN CHOICES](#on-the-design-choices)


### <a name="test-and-build-the-application"></a> TEST & BUILD THE APPLICATION

     $ gradle karmaClean karmaRun jshint jsdoc

JSDoc generated documentation will be available in the following folder:

     ./build/jsdoc

JSHint reports will be available in the following folder:

     ./build/jshint.out

This application has been built using Gradle version 2.10.

### <a name="browse-the-website"></a> BROWSE THE WEBSITE

 Click [here](http://marciogualtieri.github.io) to open this web application.
 I'm hosting this website on [GitHub](https://pages.github.com/).

### <a name="on-the-design-choices"></a> ON THE DESIGN CHOICES

The only purpose of this project is to teach myself JavaScript and UI development with AngularJS.

The following frameworks and tools are being used:

* [AngularJS](http://angularjs.org/): For developing a single page web application.
* [Jasmine](http://jasmine.github.io/): For BDD automated tests.
* [Karma Plugin](https://github.com/craigburke/karma-gradle): For running automated tests from Gradle.
* [JS Plugin](https://github.com/eriwen/gradle-js-plugin): For running JSHint (code check) and JSDoc (generated documentation) from Gradle.

I'm following the book [Unraveling AngularJS 1.4](http://www.amazon.com/Unraveling-AngularJS-With-Complete-Samples-ebook/dp/B00ULTPP00).
For my own reference, the book's examples are located [here](https://onedrive.live.com/?authkey=%21AOrZVkcC_sB8S-Q&id=79DA757D3D2B5BAA%21207784&cid=79DA757D3D2B5BAA).

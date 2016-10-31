import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.junit.AfterClass;
import org.junit.Assert;
import org.junit.BeforeClass;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import java.util.concurrent.TimeUnit;

public class mainIT {
    private static final int PORT = 4453;
    private static final int BROWSER_TIMEOUT_SECS = 10;
    private static final String URL_FORMAT = "http://localhost:" + PORT + "/%s";
    private static final String CHROME_DRIVER = "/usr/lib/chromium-browser/chromedriver";

    private static ChromeDriver browser;

    @BeforeClass
    public static void openBrowser() {
        System.setProperty("webdriver.chrome.driver", CHROME_DRIVER);
        browser = new ChromeDriver();
        browser.manage().timeouts().implicitlyWait(BROWSER_TIMEOUT_SECS, TimeUnit.SECONDS);
    }

    @AfterClass
    public static void closeBrowser() {
        browser.quit();
    }

    @Test
    public void whenLoadMainPage_thenOk() {
        Document doc = getInnerHtmlAsDocument("main.html");
        String title = doc.title();
        Assert.assertEquals("AngularJS Fun", title);
    }

    private Document getInnerHtmlAsDocument(String resource) {
        browser.get(String.format(URL_FORMAT, resource));
        WebElement htmlElement = browser.findElement(By.tagName("html"));
        String htmlString = htmlElement.getAttribute("innerHTML");
        return Jsoup.parseBodyFragment(htmlString);
    }
}
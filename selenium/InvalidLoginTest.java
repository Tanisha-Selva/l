
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.openqa.selenium.support.ui.ExpectedConditions;
import java.time.Duration;

public class InvalidLoginTest {
    public static void main(String[] args) {

        WebDriver driver = new ChromeDriver();
        WebDriverWait wait = new WebDriverWait(
            driver, Duration.ofSeconds(5)
        );

        driver.get("http://localhost:3000/login.html");

        driver.findElement(By.id("username"))
              .sendKeys("wrong");

        driver.findElement(By.id("password"))
              .sendKeys("wrong");

        driver.findElement(By.id("loginBtn")).click();

        WebElement error = wait.until(
            ExpectedConditions.visibilityOfElementLocated(
                By.id("error")
            )
        );

        if (error.isDisplayed()) {
            System.out.println("Invalid login test passed");
            System.out.println(error.getText());
        }

        driver.quit();
    }
}

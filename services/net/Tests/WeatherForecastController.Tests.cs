using net.Controllers;
using Xunit;

namespace net.tests;

public class WeatherForecastController_Tests
{
    [Fact]
    public void Test1()
    {
        Assert.True(1 == 1, "1 == 1");
    }

    [Fact]
    public void WeatherForecastController_Get_IsNotNull()
    {
        var sut = new WeatherForecastController(null);
        var response = sut.Get();
        Assert.NotNull(response);
    }

    [Fact]
    public void WeatherForecastController_Get_ReturnsCollection()
    {
        var sut = new WeatherForecastController(null);
        var response = sut.Get();
    }
}
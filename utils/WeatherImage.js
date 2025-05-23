const getWeatherImage = (description) => {
    if (!description) return "/src/assets/autumn.webm"; // fallback if undefined

    const desc = description.toLowerCase();

    if (desc.includes("clear")) return "/src/assets/sunny.webm";
    if (desc.includes("cloud")) return "/src/assets/clouds.mp4";
    if (desc.includes("rain")) return "/src/assets/rain.mp4";
    if (desc.includes("drizzle")) return "/src/assets/rainy.webm";
    if (desc.includes("thunderstorm")) return "/src/assets/storm.mp4";
    if (desc.includes("snow")) return "/src/assets/winter2.webm";
    if (desc.includes("smoke")) return "/src/assets/air-pollution.mp4";
    if (desc.includes("haze")) return "/src/assets/haze.mp4";
    if (
      desc.includes("mist") ||
      desc.includes("fog")
    )
      return "/src/assets/foggy.mp4";

    return "/src/assets/autumn.webm";
  };

export default getWeatherImage;
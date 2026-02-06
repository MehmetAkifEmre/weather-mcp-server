import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";


const API_KEY = "YOUR WEATHER API";

const server = new McpServer({
  name: "weather-server",
  version: "1.0.0",
});

server.tool(
  "get-weather",
  "Hava durumunu getirir",
  {
    city: z.string().describe("Şehir adı (Örn: Konya)"),
  },
  async ({ city }) => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=tr`;
      const response = await fetch(url);
      
      const data = await response.json() as any;

      if (data.cod !== 200) {
        return {
          content: [{ type: "text", text: `HATA: ${data.message}` }],
          isError: true,
        };
      }

      return {
        content: [
          {
            type: "text",
            text: `📍 ${data.name}\n🌡️ Sıcaklık: ${data.main.temp}°C\n☁️ Durum: ${data.weather[0].description}`,
          },
        ],
      };
    } catch (error) {
      return {
        content: [{ type: "text", text: "Bir hata oluştu." }],
        isError: true,
      };
    }
  }
);

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("Mcp Sunucusu Hazir!");
}

main();

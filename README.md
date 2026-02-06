# Weather MCP Server 🌤️

This project is a server providing real-time weather data for Claude Desktop or other LLM tools using the **Model Context Protocol (MCP)**. It is built using the **Bun** runtime and **TypeScript**.

<img width="1841" height="996" alt="image" src="https://github.com/user-attachments/assets/618f1b52-fd16-4162-8533-f18617794b8c" />
<img width="1850" height="992" alt="image" src="https://github.com/user-attachments/assets/e162c0b6-54b4-4a4e-a637-f76caade21e4" />

## 🚀 Installation

1. Clone the repository:
   ```bash
   git clone [https://github.com/MehmetAkifEmre/weather-mcp-server.git](https://github.com/MehmetAkifEmre/weather-mcp-server.git)
   cd weather-mcp-server

2. Install dependencies:

       bun install

5. IMPORTANT: Open the index.ts file and paste your own OpenWeatherMap API key into the API_KEY variable. (The provided placeholder key is invalid for security reasons)

## ⚡ Usage

To test the server using the MCP Inspector:
    
    npx @modelcontextprotocol/inspector bun index.ts

🛠️ Technologies

    Runtime: Bun

    Language: TypeScript

    Protocol: Model Context Protocol (MCP) SDK

    Validation: Zod

    API: OpenWeatherMap

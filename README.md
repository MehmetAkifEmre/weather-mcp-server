# Weather MCP Server 🌤️

This project is a server that provides real-time weather information for Claude Desktop or other LLM tools using the **Model Context Protocol (MCP)**. It is developed using **Bun** runtime and **TypeScript**.

## 🚀 Installation

1. Clone the repository:
```terminal/bash
   git clone [https://github.com/MehmetAkifEmre/weather-mcp-server.git](https://github.com/MehmetAkifEmre/weather-mcp-server.git)
   cd weather-mcp-server

   Install dependencies:
   bun install

   IMPORTANT: Open the index.ts file and paste your own OpenWeatherMap API key into the API_KEY variable. (The current key has not been entered for security reasons).

   ⚡ Run

To test the server with MCP Inspector:
Bash

npx @modelcontextprotocol/inspector bun index.ts

🛠️ Technologies

    Runtime: Bun

    Language: TypeScript

    Protocol: MCP SDK

    Validation: Zod

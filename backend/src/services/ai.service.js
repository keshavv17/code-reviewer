const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({ apiKey: process.env.GOOGLE_GEMINI_KEY });

async function generateContent(prompt) {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: prompt,
    config: {
      systemInstruction: "You are a code reviewer, who have an expertise in development and you look for the code and find the problems and improvements and suggests best solutions to users, give consice solution and improvements",
    },
  });
  console.log(response.text);
}

module.exports = generateContent
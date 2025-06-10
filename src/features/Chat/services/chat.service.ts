import { API_KEY } from "@/constants";
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: API_KEY });

export async function sendChatMessage(prompt: string) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: prompt,
    });
    return {
      success: true,
      data: { message: response.text || "" },
    };
  } catch (error) {
    return {
      success: false,
      message: error instanceof Error ? error.message : "Đã xảy ra lỗi không xác định",
    };
  }
}

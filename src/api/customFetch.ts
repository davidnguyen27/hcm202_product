import { API_BASE_URL } from "@/constants";

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T | undefined;
}

export async function customFetch<T>(url: string, options: RequestInit = {}): Promise<ApiResponse<T>> {
  const baseUrl = url.startsWith("http") ? url : `${API_BASE_URL}${url}`;

  try {
    const res = await fetch(baseUrl, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...(options.headers || {}),
      },
    });

    const contentType = res.headers.get("content-type") || "";
    const isJson = contentType.includes("application/json");
    const json = isJson ? await res.json() : null;

    if (!res.ok) {
      return {
        success: false,
        message: json?.message ?? res.statusText ?? "Lỗi không xác định",
        data: undefined,
      };
    }

    return {
      success: json?.success ?? true,
      message: json?.message ?? "Thành công",
      data: json?.data as T,
    };
  } catch (error) {
    const err = error as Error;
    return {
      success: false,
      message: err.message ?? "Lỗi không xác định",
      data: undefined,
    };
  }
}

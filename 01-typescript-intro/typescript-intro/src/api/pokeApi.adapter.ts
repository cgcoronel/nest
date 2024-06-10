import axios from "axios";

export interface HttpAdapter {
  get<T>(url: string): Promise<T>;
  post<T>(url: string, body: any): Promise<T>;
  patch<T>(url: string, body: any): Promise<T>;
  delete<T>(url: string): Promise<T>;
}

export class PokeApiFetchAdapter implements HttpAdapter {
  async get<T>(url: string): Promise<T> {
    console.log("PokeApiFetchAdapter");
    const response = await fetch(url);
    const data: T = await response.json();

    return data as T;
  }

  async post<T>(url: string, body: any) {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const data: T = await response.json();
    return data;
  }

  async patch<T>(url: string, body: any) {
    const response = await fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const data: T = await response.json();
    return data;
  }

  async delete<T>(url: string) {
    const response = await fetch(url, {
      method: "DELETE",
    });
    const data: T = await response.json();
    return data;
  }
}

export class PokeApiAdapter implements HttpAdapter {
  private readonly axios = axios;

  async get<T>(url: string): Promise<T> {
    console.log("PokeApiAdapter");
    const { data } = await this.axios.get<T>(url);
    return data;
  }

  async post<T>(url: string, body: any) {
    const { data } = await this.axios.post(url, body);
    return data;
  }

  async patch<T>(url: string, body: any) {
    const { data } = await this.axios.patch(url, body);
    return data;
  }

  async delete<T>(url: string) {
    const { data } = await this.axios.delete(url);
    return data;
  }
}

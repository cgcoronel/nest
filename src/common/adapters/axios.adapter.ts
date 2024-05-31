import { HttpAdapter } from '../interfaces/http-adapter.interface';
import axios, { AxiosInstance } from 'axios';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AxiosAdapter implements HttpAdapter {
  private axios: AxiosInstance = axios;

  async get<T>(url: string): Promise<T> {
    const { data } = await this.axios.get<T>(url);
    return data;
  }

  async post(url: string, body: any): Promise<any> {
    const { data } = await this.axios.post(url, body);
    return data;
  }

  async patch(url: string, body: any): Promise<any> {
    const { data } = await this.axios.patch(url, body);
    return data;
  }

  async delete(url: string): Promise<any> {
    const { data } = await this.axios.delete(url);
    return data;
  }
}

import { Injectable } from '@angular/core';

@Injectable()
export class Constants {
    public readonly API_ENDPOINT: string = 'https://localhost:44370/api';
    public readonly API_MOCK_ENDPOINT: string = 'https://next.json-generator.com/api/json/get';
  static API_ENDPOINT: string='https://localhost:44370/api';
}
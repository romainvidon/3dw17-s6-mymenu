import { HttpHeaders } from "@angular/common/http";

export const apiURL: String = "http://127.0.0.1:3030";
export const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
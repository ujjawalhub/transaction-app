import { Injectable } from '@angular/core';
import { HttpClientService } from './HttpService';
import { environment } from '../../environments/environment';
import { lastValueFrom } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class APIService {

    public loader = false;

    private baseUrl = environment.API_URL + "/";
    // private baseUrl = "https://app.whitebook.world/api/"

    constructor(private httpService: HttpClientService) { }

    getParentData(page:number, size:number): Promise<any> {
        let self = this;
        return new Promise<any>((resolve, reject) => {
            let url = this.baseUrl + "parent/" + page + "/" + size;
            self.httpService.get(url).then((res: any) => {
                resolve(res);
            }), (err: any) => {
                reject(err);
            }
        });
    }

    getChildData(id:number): Promise<any> {
        let self = this;
        return new Promise<any>((resolve, reject) => {
            let url = this.baseUrl + "parent/" + id + "/";
            self.httpService.get(url).then((res: any) => {
                resolve(res);
            }), (err: any) => {
                reject(err);
            }
        });
    }

}
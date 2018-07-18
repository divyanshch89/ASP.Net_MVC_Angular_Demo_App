import { Component } from '@angular/core';
import { AppDataService } from '../app-date.service';

@Component({
    selector: 'app-changedate',
    templateUrl: './changedate.component.html',
    providers: [AppDataService]
})
export class ChangeDateComponent {
    currentTimeObj: CurrentTime;
    currTime: string;
    postDataStatus = '';
    constructor(private dataservice: AppDataService) {
    }
    GetCurrentTime() {
        this.dataservice.getCurrentTime().subscribe((data) => {
            this.currentTimeObj = JSON.parse(JSON.stringify(data)) as CurrentTime;
            this.currTime = this.currentTimeObj.time;
            // post data to server
            this.PostDataToServer(this.currentTimeObj);
        });
    }
    PostDataToServer(data: any) {
        this.dataservice.SendDataToDB(data).subscribe((data) => {
            this.postDataStatus = 'Data updated to SQL DB successfully';
            console.log(this.postDataStatus);
        });
    }
}
interface CurrentTime {
    time: string
}

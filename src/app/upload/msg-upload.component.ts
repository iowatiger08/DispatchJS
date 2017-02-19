import {environment}            from "../environment";
import {Component,Injectable }  from  '@angular/core';

import 'rxjs/add/operator/toPromise';
//import {Load } from './load';
require('./aws-sdk/dist/aws-sdk');
declare var AWS: any;

@Component({
    moduleId: module.id,
    selector: 'upload',
    template: `
        <h1>Msg Upload</h1>
        <input type="file" (change)="fileEvent($event)" />
    `
})

class AWSS3Config extends Object  {
    public accessKeyId: string;
    public secretAccessKey: string;
    public region: string;
    public bucket: string;
    public storeKey: string;
}

@Injectable()
export class MsgUploadComponent {
    private config: AWSS3Config = {
        accessKeyId     : '',
        secretAccessKey : '',
        region          : '',
        bucket          : environment.dispatchBucket,
        storeKey        : 'todo'
    };

    private bucket: any;

    public constructor() { 

        AWS.config.update({
            region: environment.bucketRegion,
            accessKeyId : environment.accessKeyId,
            secretAccessKey: environment.secretAccessKey
        });
        /*AWS.config.credentials = new AWS.CognitoIdentityCredentials({
            IdentityPoolId: 'us-west-2:identity-pool-id',
        });*/

        this.bucket = new AWS.S3({
            params: { Bucket :environment.dispatchBucket }
        });
        AWS.config.credentials.get(function(err) {
            if (err) console.log(err);
        });
    }
    

    fileEvent(fileInput: any): Promise<boolean> {
        let fileName:string = fileInput.name;

        let fileKey:string = 'messages/'+fileName;
        let cfg: Object = {
            Key: fileKey,
            Body: JSON.stringify(fileInput) 
        }
        return new Promise((resolve, reject) => {
            this.bucket.putObject(cfg, (err, data) => {
                if (err) {
                    reject(false);
                }
                resolve(true);
            }).on('httpUploadProgress', function(progress) {
                console.log(Math.round(progress.loaded / progress.total * 100) + '% done');
            });
        });
    }
 
}
export class Load{
  
  constructor(
    public loadid: number,
    public version: string,
    public manifest: string,
    public fillStart: string,
    public fillEnd: string,
    public departOrigin: string,
    public deliveryArrival: string,
    public driver: string,
    public loadStatus: string,
    public deliveryLabel:string,
    public departLabel:string,
    public carrier?: string,
  ){ }
}
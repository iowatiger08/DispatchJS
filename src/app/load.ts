export class Load{
  
  constructor(
    public id: number,
    public version: string,
    public manifest: string,
    public fillStart: string,
    public fillEnd: string,
    public departOrigin: string,
    public deliveryArrival: string,
    public driver: string,
    public loadStatus: string,
    public carrier?: string,
  ){ }
}
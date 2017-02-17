export class Load{
  
  constructor(
    public id: number,
    public manifest: string,
    public fillStart: string,
    public departPoint: string,
    public deliveryPoint: string,
    public driver: string,
    public loadStatus: string,
    public carrier?: string,
  ){ }
}
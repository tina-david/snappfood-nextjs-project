interface DeliveryType{
  icon: string,
                type: string,
                price: number
}

export interface RestaurantsType{
      id: number,
            catId: number[],
            otherCats: string[],
            name: string,
            star: number,
            rate: number,
            logo: string,
            image:string,
delivery:DeliveryType,
    
            address: string,
            worktime: string,
            pay: string,
            tax: number,
            basketminimum: string
}

export interface FoodsType{
    id: number,
            catId: number[],
            subCatId: number[],
            restId: number,
            restCatId: number,
            name: string,
            image: string,
            price: number,
            rate: number,
            desc:string,
            count?:number
}
export interface HistoryType{
         purchaseData:FoodsType[],
        totalPurchase:number,
        restaurantData:{
            name:string,
            image:string,
            address:string

        }
}
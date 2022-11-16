import {readdir} from "fs";

interface ProductType {
    id: number;
    title: string;
    description: string;
    price: number;
    image: any;
}
readdir("/src/assets/images", (err,files) => {});

export const products: ProductType[] = [
    {id: 1, title: "snak 1", description: "I am the best snak1", price: 10, image:"https://www.snickysnaks.com/wp-content/uploads/2021/08/Poppers-Snicky-Home-Page-Image-2.png" },
    {id: 2, title: "snak 2", description: "I am the best snak1", price: 5, image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkBVGPxXhLtnCy-FO_f1Izny0XxLDG8jLZcQ&usqp=CAU" },
    {id: 3, title: "snak 3", description: "I am the best snak1", price: 7, image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToQNvmBDZio0lCCysz-GNc9_7EVVhzp_wbrg&usqp=CAU" },
    {id: 4, title: "snak 4", description: "I am the best snak1", price: 4, image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-aHOxSRYNicD0Lf9hlt49bKGkFHYzqGCPMw&usqp=CAU" },
    {id: 5, title: "snak 5", description: "I am the best snak1", price: 9, image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeSsrgMN5LXO1ReuPXzx7IM1hTfORkTrZfqA&usqp=CAU" },
    {id: 6, title: "snak 6", description: "I am the best snak1", price: 11, image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSugtsPoUlvIILq42TW7pFofUyh42tlvx9YjNhPNi4_9uOJedweFXKYKaP3e0BF6hkttIg&usqp=CAU" },
    {id: 7, title: "snak 7", description: "I am the best snak1", price: 12, image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4dIRv3OtdOGHxD5n-3kAHKU8JFzPXnBPeZw&usqp=CAU" },
    {id: 8, title: "snak 8", description: "I am the best snak1", price: 3, image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5fSRfac7gUt0Wlze0R6rwY-2GHhD6Sm3EIg&usqp=CAU" },
    {id: 9, title: "snak 9", description: "I am the best snak1", price: 9, image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhjBeIvAaYcYesRQQgfAM7rxsz0hzpkhCDlw&usqp=CAU" },
    {id: 10, title: "snak 10", description: "I am snak namber one", price: 8, image:"https://cdnprod.mafretailproxy.com/sys-master-root/h34/h8a/14503198097438/706840_main.jpg_480Wx480H" },
]

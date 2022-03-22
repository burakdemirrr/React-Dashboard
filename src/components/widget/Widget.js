import { AccountBalanceOutlined, KeyboardArrowUp, MonetizationOnOutlined, PersonOutlined, ShoppingCart } from '@mui/icons-material'
import React from 'react'
import "./widget.scss"
const Widget = ({type}) => {


    let data;   
    const amount=100;
    const diff=20;

    switch(type){
        case "user":
            data={
                title:"USERS",
                isMoney:false,
                link:"See All Users",
                icon:<PersonOutlined className="icon"/>
            };
            break;
            case "order":
            data={
                title:"ORDERS",
                isMoney:false,
                link:"View All Orders",
                icon:<ShoppingCart className="icon"/>
            };
            break;
            case "earnings":
            data={
                title:"EARNINGS",
                isMoney:true,
                link:"View Net Earnings",
                icon:<MonetizationOnOutlined className="icon"/>
            };
            break;
            case "balance":
                data={
                    title:"BALANCE",
                    isMoney:true,
                    link:"See details",
                    icon:<AccountBalanceOutlined className="icon"/>
                };
                break;
            default:
                break;
    } 
  return (
    <div className='widget'>


        <div className="left">
            <span className="title">{data.title}</span>
            <span className="counter">{data.isMoney && '$'} {amount}</span>
            <span className="link">{data.link}</span>
        </div>

        <div className="right">
            
            <div className="percentage positive"><KeyboardArrowUp/>  {diff} %</div >
            {data.icon}
        </div>



    </div>
  )
}

export default Widget
import React, { Component } from "react"; 
import { FaTorah, FaCocktail, FaBabyCarriage, FaPaw } from "react-icons/fa";
import Title from "./Title";

export default class Services extends Component {
    state={
        Services:[
            {
                icon:<FaTorah/>,
                title:"Kosher L'mehadrin",
                info:"Under the supervision of the Rabbinate of Yavne"
            },
            {
                icon:<FaCocktail/>,
                title:"Free cocktailes",
                info:"A variety of cocktails are provided at the bar according to your choice"
            },
            {
                icon:<FaBabyCarriage/>,
                title:"Baby friendly",
                info:"Rooms suitable for babies with all the necessary equipment"
            },
            {
                icon:<FaPaw/>,
                title:"Quadruped friendly",
                info:"Suitable for the entry of dogs, cats and all your pets"
            }
        ]
    }

    render() {
        return (
            <section className="services">
                <Title title="services" />
                <div className="services-center">
                    {this.state.Services.map((item, index) => {
                        return (
                            <article key={index} className="service">
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                            </article>
                        );
                    })}
                </div>
            </section>
        )
    } 
}
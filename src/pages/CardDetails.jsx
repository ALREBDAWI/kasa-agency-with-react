import React, { useEffect } from "react";
import data from "../logements.json";
import Carousel from "../components/Carousel";
import { useParams, useNavigate } from "react-router-dom";
import Rating from "../components/Rating";
import Collapse from "../components/Collapse";
import Tags from "../components/Tags";
import OwnerData from "../components/OwnerData";

const CardDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const item = data.items.find(item => item.id.toString() === id);

    useEffect(() => {
        if (!item) {
            navigate('/error');
        }
    }, [item, navigate]);

    if (!item) {
        return <div>Chargement...</div>;
    }

    return (
        <>
            <section className="cardDetailsContainer">
                <div className="imgSlider">
                    <Carousel imgSource={item.pictures} imgAlt={`image de ${item.title}`} />
                </div>
                <div className="upperContainer">
                    <div className="firstContainer">
                        <div>                
                            <h1>{item.title}</h1>
                            <p> {item.location} </p>
                            <div className="tagContainer">
                                <Tags tagsSource={item.tags} />
                            </div>
                        </div>
                    </div>
                    <div className="ownerData">
                        <div className="imgAndName">
                            <OwnerData ownerName={item.host.name} ownerImg={item.host.picture} />
                        </div>
                        <Rating ratingValue={item.rating} />
                    </div>
                </div>
                <div className="collapseContainer">
                    <div>
                        <Collapse title={'Description'} message={item.description} />
                    </div>
                    <div>
                        <Collapse title={'Équipements'} message={<ul>{item.equipments.map((equipment, index) => (<li key={index}>{equipment}</li>))}</ul>} />
                    </div>
                </div> 
            </section>    
        </>
    );
};

export default CardDetails;
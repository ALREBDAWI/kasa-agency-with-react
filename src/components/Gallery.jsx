import CardsData from '../logements.json'


function RenderCards (){
return(
    <section className='home_gallery'>
        {CardsData.map(card => {
            return(
                    
                        <figure key={card.id}>
                            <a href={`caroussel/${card.id}`} ><img src={card.cover}></img></a>
                            <p> {card.title} </p>

                        </figure>
                    
            )
        })}
    </section>
)
};

export default RenderCards
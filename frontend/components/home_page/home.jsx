import React, {Component} from 'react';

class Home extends Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        const animeTitle = e.target.dataset.anime.split(" ").join("-");
        this.props.history.push(`/anime?${animeTitle}`);
    }

    componentDidMount(){
        this.props.navDropdown(false);

        this.props.fetchAnimeTitles().then(() => {
            const titlesArray = this.props.anime.allTitles;

            let recs = {};
            let i= 0;

            while (i < 7){
                let randomAnime = titlesArray[Math.floor(Math.random() * titlesArray.length)]; //sb an arr of objects (object.values(fetched anime))
                if (!Object.values(recs).includes(randomAnime.title)){
                    recs[i] = randomAnime.title;
                    i++;
                }
            }
            this.props.fetchRecs(recs);
        });
    }

    render(){
        if(this.props.recs.length === 0) return <h1>Loading...</h1>;

        let recs = [];
        let deals = [];

        this.props.recs.forEach((anime, idx) => {
            if(idx < 4){
                recs.push(
                    <li className="anime-lis" key={`${idx}${anime.title}`}>
                        <img src={window.animePH} alt="" data-anime={anime.title} onClick={this.handleClick} />
                        <h4 data-anime={anime.title} onClick={this.handleClick}>{anime.title}</h4>
                        <span className="details"><h6>Price:</h6><h5>${anime.price.toFixed(2)}</h5></span>
                    </li>
                )
            } else {
                deals.push(
                    <li className="anime-lis" key={`${idx}${anime.title}`}>
                        <img src={window.animePH} alt="" data-anime={anime.title} onClick={this.handleClick} />
                        <h4 data-anime={anime.title} onClick={this.handleClick}>{anime.title}</h4>
                        <span id="list-price"><h6>List Price:</h6>${((anime.price * 1.25) + 0.99).toFixed(2)}</span>
                        <span className="details"><h6>Price:</h6><h5 id="amount">${anime.price.toFixed(2)}</h5></span>
                    </li>
                )
            }
        })

        if(deals.length === 0) deals = "No deals to display, DON'T FORGET TO SEED THE DATABASE!";

        const modalToggle = ((this.props.shouldGreyOut) ? "modal-on" : "modal-off");

        const recLang = (this.props.language === "EN") ? "Recommended items" : "オススメ"
        const dealLang = (this.props.language === "EN") ? "Discounted items" : "割り引き"

        return (
            <div className="home-page">
                <div className={modalToggle}>.</div>
                <h2>{recLang}</h2>
                <ul>
                    {recs}
                </ul>

                <h2>{dealLang}</h2>
                <ul>
                    {deals}
                </ul>
            </div>
        )
    }
}

export default Home;
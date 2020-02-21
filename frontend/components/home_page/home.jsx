import React, {Component} from 'react';

class Home extends Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleModalOff = this.handleModalOff.bind(this);
    }

    handleModalOff(e) {
        e.preventDefault();
        this.props.navLiClicked(true);
        this.props.navDropdown(false);
        this.props.searchDropdownHide(true);
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

            while (i < 8){
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
            const image = (typeof anime.imageURL === "string") ? <img src={anime.imageURL} alt="" data-anime={anime.title} onClick={this.handleClick} /> : <img id="ph"  src={window.animePHC} alt="" data-anime={anime.title} onClick={this.handleClick} />
            let stars = [];
            for (let i = 1; i < 6; i++) {
                let starStatus = window.starUnclicked;

                if (parseInt(anime.rating) >= i) {
                    starStatus = window.starClicked;
                }

                let star = <img
                    style={{
                        "height": "18px",
                        "width": "18px",
                        "border": "none",
                        "margin": "0"
                    }}
                    id="star"
                    src={starStatus}
                    key={i} />;

                stars.push(star);
            }

            const titleLang = (this.props.language === "EN") ? <h4 data-anime={anime.title} onClick={this.handleClick}>{anime.title}</h4> : <h4 data-anime={anime.title} onClick={this.handleClick}>{anime.titleJP}</h4>
            
            if(idx < 4){
                recs.push(
                    <li className="anime-lis" key={`${idx}${anime.title}`}>
                        {image}
                        {titleLang}
                        {stars}
                        <br/>
                        <span className="details"><h6>Price:</h6><h5>${anime.price.toFixed(2)}</h5></span>
                    </li>
                )
            } else {
                deals.push(
                    <li className="anime-lis" key={`${idx}${anime.title}`}>
                        {image}
                        {titleLang}
                        {stars}
                        <br/>
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
                <div className={modalToggle} onClick={this.handleModalOff}>.</div>
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
import React, { Component } from "react";

class StudioShow extends Component{
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

    handleClick(e){
        e.preventDefault();
        const animeTitle = e.target.dataset.anime.split(" ").join("-");
        this.props.fetchAnime(animeTitle)
            .then(() => this.props.history.push(`/anime?${animeTitle}`));
    }

    componentDidMount() {
        if (this.props.refPos.current !== null){
            this.props.refPos.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        };
        this.props.fetchStudio(this.props.history.location.search.slice(1));
    }

    render(){
        if (this.props.studio === null || this.props.studio.name === undefined) return <div></div>;
        const {name, description, site_url} = this.props.studio;
        const producedAnime = this.props.anime.map((show) => {
            if(typeof show === "object" && show !== null){
                const image = (typeof show.imageURL === "string") ? <img src={show.imageURL} alt="" data-anime={show.title} onClick={this.handleClick} /> : <img src={window.animePHC} alt="" data-anime={show.title} onClick={this.handleClick} />

                let stars = [];
                for (let i = 1; i < 6; i++) {
                    let starStatus = window.starUnclicked;

                    if (parseInt(show.rating) >= i) {
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
                return (
                    <li className="anime-lis" key={`${Date.now()+Math.random()}ani`}>
                        {image}
                        <h4 data-anime={show.title} onClick={this.handleClick}>{show.title}</h4>
                        {stars}
                        <p>({show.release_year})</p>
                    </li>
                )
            }
        })

        const modalToggle = ((this.props.shouldGreyOut) ? "modal-on" : "modal-off");

        return (
            <div className="outermost">
                <div className={modalToggle} onClick={this.handleModalOff}>.</div>
                <h1>Studio Show Page</h1>
                <a href={site_url}><h2>{name}</h2></a>
                <h3>{description}</h3>
                <br /><br />
                <ul>
                    {producedAnime}
                </ul>
            </div>
        )
    }
}

export default StudioShow;
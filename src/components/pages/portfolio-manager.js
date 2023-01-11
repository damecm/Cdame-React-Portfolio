import axios from 'axios';
import React, { Component } from 'react';
import PortSbList from "../portfolio/port-sb-list";
import PortForm from "../portfolio/port-form";

export default class PortfolioManager extends Component {
    constructor () {

        super();
    
        this.state = {
            portfolioItems: [],
            portfolioToEdit: {}
        };

        this.handleNewFormSubm = this.handleNewFormSubm.bind(this);
        this.handleEditFormSubm = this.handleEditFormSubm.bind(this);
        this.handleSuccessFormSubmErr = this.handleSuccessFormSubmErr.bind(this);
        this.handleDeleteClick = this.handleDeleteClick.bind(this);
        this.handleEditClick = this.handleEditClick.bind(this);
        this.clearPortfolioToEdit = this.clearPortfolioToEdit.bind(this);
    }

    clearPortfolioToEdit() {
        this.setState({
            portfolioToEdit: {}
        });
    }

    handleEditClick(portfolioItem) {
        this.setState({
            portfolioToEdit: portfolioItem
        });
    }

    handleDeleteClick(portfolioItem) {
        axios.delete(`https://api.devcamp.space/portfolio/portfolio_items/${portfolioItem.id}`, {withCredentials: true}
        ).then(response => {
            this.setState({
                portfolioItems: this.state.portfolioItems.filter(item => {
                    return item.id !== portfolioItem.id;
                })
            })

            return response.data;
        }).catch(error => {
            console.log("handleDeleteClick error", error);
        });
    }

    handleEditFormSubm() {
        this.getPortfolioItems();

    }

    handleNewFormSubm(portfolioItem) {
        this.setState({
            portfolioItems: [portfolioItem].concat(this.state.portfolioItems)
        });

    }

    handleSuccessFormSubmErr(error) {
        console.log("handleformsubmerror", error);

    }
    getPortfolioItems() {
        axios.get("https://dameframe.devcamp.space/portfolio/portfolio_items?order_by=created_at&direction=desc", {withCredentials: true
        }).then(response => {console.log("portfolioItems",response); this.setState({portfolioItems: [... response.data.portfolio_items]});
        }).catch(error => {console.log("error in getPortfolioItems", error);});
    }
    componentDidMount() {
        this.getPortfolioItems();
    }
    render() {
        return (
            <div className= "port-mngr-wrapper">
                <div className= "left-column">
                    <PortForm 
                    handleNewFormSubm = {this.handleNewFormSubm}
                    handleEditFormSubm = {this.handleEditFormSubm}
                    handleSuccessFormSubmErr = {this.handleSuccessFormSubmErr}
                    clearPortfolioToEdit = {this.clearPortfolioToEdit}
                    portfolioToEdit={this.state.portfolioToEdit}
                    />
                </div>
                <div className="right-column">
                    <PortSbList 
                    handleDeleteClick={this.handleDeleteClick}
                    data={this.state.portfolioItems}
                    handleEditClick={this.handleEditClick}
                    />
                    
                </div>
            </div>
        )
    }
}

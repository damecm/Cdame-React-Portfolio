import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PortSbList = (props) => {
    const portfolioList = props.data.map(portfolioItem => {
        return (

            <div className="port-item-thum" key={portfolioItem.id}>
                <div className="port-thum-img">
                    <img src={portfolioItem.thumb_image_url} />
                </div>
                <div className="text-content">
                    <div className="title">
                        {portfolioItem.name}
                    </div>
                    <div className="actions">
                        <a className="edit-icon" onClick={() => props.handleEditClick(portfolioItem)}>
                            <FontAwesomeIcon icon="edit" />
                        </a>
                        <a className="delete-icon" onClick={() => props.handleDeleteClick(portfolioItem)}>
                            <FontAwesomeIcon icon="trash" />
                        </a>
                    </div>
                </div>
            </div>
        );

    });

    return <div className="port-sb-list-wrapper">{portfolioList}</div>;
};
export default PortSbList;
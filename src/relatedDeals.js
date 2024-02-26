import React from "react";
import "./relatedDeals.css";  

function DealCard({ imageSrc, title, description, price, discount,offer,orignal }) {
    return (
        <div className="card">
            <img src={imageSrc} alt={title} />
            <div className="discount-offer">
            <p className="discount">{discount}</p> <p className="offer">{offer}</p></div>
            <p className="tit">{title}</p>
            <p className="description">{description}</p>
            <div className="price-orignal-dis">
            <p className="price">{price} </p> <p className="orignal">{orignal}</p> <p className="dis">{discount}</p>
            </div>
            <button>View Deal</button>
        </div>
    );
}

function Bottom() {
    return (
        <div className="related-cards">
            <h2 className="title">Related deals you might like for</h2>
            <div className="card-container">
                <DealCard
                    imageSrc="https://s3-alpha-sig.figma.com/img/3250/2fc6/187db358671328189d3da83955a6ffe9?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ax2xncFBKe1xE2EsxdvElceh8oIqKj5N0jH4NJTiBcahukOzPxx4h1z6yHWL5iAGwcZziaBWfUhJnOIkYfeTkuKTAQ3cZ0jcc19S7zOzX3YtV8qd2foEnwflcvKEK8-iqw~VegstF5Nw8QROw9i36ihQaXHBsSdmfGb7V~XdDUKn2fabEOEcm2tN9ETF0zbCn6Tq~PYk9pxyghi5P3ugATGWGP8ljAH8tlJzjgbGXnUBNNTS4sfQDZNsmBvFmdtbDb28LeFrh~MRRFxi7hGf1M9mBH8gyb7qPYFk0pRsrwIdNrDPTsn0IaF8FPwAR8zL3wCBUlfMgzxP1E-gqRbjxQ__"
                    title="Webbuilder1"
                    description="Computer Modern classic with Wix support"
                    price="$39.96"
                    orignal="$49.96"
                    discount="(20% Off)"
                    offer="Limited Offer"
                />
                <DealCard
                    imageSrc="https://s3-alpha-sig.figma.com/img/3250/2fc6/187db358671328189d3da83955a6ffe9?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ax2xncFBKe1xE2EsxdvElceh8oIqKj5N0jH4NJTiBcahukOzPxx4h1z6yHWL5iAGwcZziaBWfUhJnOIkYfeTkuKTAQ3cZ0jcc19S7zOzX3YtV8qd2foEnwflcvKEK8-iqw~VegstF5Nw8QROw9i36ihQaXHBsSdmfGb7V~XdDUKn2fabEOEcm2tN9ETF0zbCn6Tq~PYk9pxyghi5P3ugATGWGP8ljAH8tlJzjgbGXnUBNNTS4sfQDZNsmBvFmdtbDb28LeFrh~MRRFxi7hGf1M9mBH8gyb7qPYFk0pRsrwIdNrDPTsn0IaF8FPwAR8zL3wCBUlfMgzxP1E-gqRbjxQ__"
                    title="Webbuilder1"
                    description="Computer Modern classic with Wix support"
                    price="$39.96"
                    orignal="$49.96"
                    discount="(20% Off)"
                    offer="Limited Offer"
                />
                <DealCard
                    imageSrc="https://s3-alpha-sig.figma.com/img/3250/2fc6/187db358671328189d3da83955a6ffe9?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ax2xncFBKe1xE2EsxdvElceh8oIqKj5N0jH4NJTiBcahukOzPxx4h1z6yHWL5iAGwcZziaBWfUhJnOIkYfeTkuKTAQ3cZ0jcc19S7zOzX3YtV8qd2foEnwflcvKEK8-iqw~VegstF5Nw8QROw9i36ihQaXHBsSdmfGb7V~XdDUKn2fabEOEcm2tN9ETF0zbCn6Tq~PYk9pxyghi5P3ugATGWGP8ljAH8tlJzjgbGXnUBNNTS4sfQDZNsmBvFmdtbDb28LeFrh~MRRFxi7hGf1M9mBH8gyb7qPYFk0pRsrwIdNrDPTsn0IaF8FPwAR8zL3wCBUlfMgzxP1E-gqRbjxQ__"
                    title="Webbuilder1"
                    description="Computer Modern classic with Wix support"
                    price="$39.96"
                    orignal="$49.96"
                    discount="(20% Off)"
                    offer="Limited Offer"
                />
            </div>
        </div>
    );
}

export default Bottom;
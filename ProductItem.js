import React, { Component } from 'react';
// import product1 from '../Vendors/Images/prodcuct1.jpg';
class ProductItem extends Component {
    render() {
        return (
            <div className=" product-item col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-12">
                <div className="product-item-wrap-image">
                    <img alt="Có thể là ảnh" src={this.props.url} />
                    <div className="product-item-menu df">
                        <div title="Love" className="product-item-menu-icon"><i className="far fa-heart"></i></div>
                        <div title="Add to cart" className="product-item-menu-icon"><i className="fas fa-shopping-bag"></i></div>
                        <div title="Quick view" className="product-item-menu-icon"><i className="fas fa-external-link-alt"></i></div>
                    </div>
                </div>
                <div className="product-item-fulldetail pd20">
                    <div className="  top-detail  df jtfspb">
                        <div className=' top-detail-title'>{this.props.item.studio}</div>
                        <div className=' top-detail-rate df '>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        </div>
                    </div>
                    <div className="product-item-title">
                        <a  className="tdcrtn" href="/">{this.props.item.title} </a>
                    </div>
                    <div className="product-item-price df jtfspb">
                        <div className="product-item-price_old">{this.props.item.price}</div>
                        <div className="product-item-price_new">By now</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductItem;

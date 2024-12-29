function Card({ title, category, description, content, originPrice, price, imageUrl, imagesUrl }) {
    return (
        <div className="card mb-3">
            <img src={imageUrl} className='card-img-top primary-image' alt="main images" />
            <div className="card-body">
                <h5 className="card-title">
                    {title} <span className="badge bg-primary ms-2">{category}</span>
                </h5>
                <p className="card-text">商品描述：{description}</p>
                <p className="card-text">商品內容{content}</p>
                <div className="d-flex">
                    <p className="card-text">
                        商品價格：<del>{originPrice}</del>元 / {price}元
                    </p>
                </div>
                <h5 className="mt-3">更多圖片：</h5>
                <div className="d-flex flex-wrap">
                    {imagesUrl.map((url, index) => (<img className='images' src={url} key={index} alt="other images" />))}
                </div>
            </div>
        </div>
    )
}

export default Card
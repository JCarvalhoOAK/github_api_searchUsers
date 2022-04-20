import './styles.css';

// import ProductPrice from 'components/ProductPrice';
// import { Product } from 'types/product';
import { GitUser } from 'types/gitUser';

type Props = {
    gitUser: GitUser;
}

const GitUserCard = ( { gitUser } : Props) => {

    return (
        <div className="base-card product-card">
            <div className="card-top-container">
                <img src={gitUser.imgUrl} alt={gitUser.name} />
            </div>
            <div className="card-bottom-container">
                <h6>{gitUser.name}</h6>
                {/* <ProductPrice price={product.price} /> */}
            </div>
        </div>
    );
}

export default GitUserCard;
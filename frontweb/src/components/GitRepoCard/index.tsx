import './styles.css';

import { GitUser } from 'types/gitUser';

type Props = {
    gitUser: GitUser;
}

const GitRepoCard = ( { gitUser } : Props) => {

    return (
        <div className="base-card product-card">
            <div className="card-top-container">
                <img src={gitUser.imgUrl} alt={gitUser.name} />
            </div>
            <div className="card-bottom-container">
                <h6>{gitUser.name}</h6>
            </div>
        </div>
    );
}

export default GitRepoCard;
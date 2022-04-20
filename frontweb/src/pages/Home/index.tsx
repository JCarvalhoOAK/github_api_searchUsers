import ButtonIcon from 'components/ButtonIcon';
import { Link } from 'react-router-dom';

import './styles.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="base-card home-card">
        <div className="home-content-container">
          <div>
            <h1>J.Carvalho - Github API</h1>
            <p>
            Bootcamp Spring React - DevSuperior.
            </p>
          </div>
          <div>
            <Link to="/gitusers">
              <ButtonIcon text="Começar" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

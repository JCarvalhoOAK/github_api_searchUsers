import GitReposSearch from './GitReposSearch';
import GitSearch from './GitSearch';
import './styles.css';





const GitUsers = () => {

    return (
    <>
      <div className=" container my-4 catalog-container">
        <div className="row catalog-title-container">
          <GitSearch></GitSearch>
          <GitReposSearch></GitReposSearch>
          </div>
      </div>

      
    </>
  );
};

export default GitUsers;
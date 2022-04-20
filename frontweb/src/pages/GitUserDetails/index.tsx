import { ReactComponent as ArrowIcon } from 'assets/images/arrow.svg';
import axios from 'axios';
//import GitUserPrice from 'components/GitUserPrice';
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { GitUser } from 'types/gitUser';
//import { BASE_URL } from 'util/requests';
import GitUserInfoLoader from './GitUserInfoLoader';
import GitUserDetailsLoader from './GitUserDetailsLoader';

import './styles.css';

type UrlParams = {
  gitUserId: string;
};

const GitUserDetails = () => {
  const { gitUserId } = useParams<UrlParams>();

  const [isLoading, setIsLoading] = useState(false);
  const [gitUser, setGitUser] = useState<GitUser>();

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`https://api.github.com/users/${gitUserId}`)
      .then((response) => {
        setGitUser(response.data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [gitUserId]);

  return (
    <div className="gitUser-details-container">
      <div className="base-card gitUser-details-card">
        <Link to="/gitUsers">
          <div className="goback-container">
            <ArrowIcon />
            <h2>BACK</h2>
          </div>
        </Link>
        <div className="row">
          <div className="col-xl-6">
            {isLoading ? (
              <GitUserInfoLoader />
            ) : (
              <>
                <div className="img-container">
                  <img src={gitUser?.imgUrl} alt={gitUser?.name} />
                </div>
                <div className="name-price-container">
                  <h1>{gitUser?.name}</h1>
                  {/* {gitUser && <GitUserPrice price={gitUser?.price} />} */}
                </div>
              </>
            )}
          </div>
          <div className="col-xl-6">
            {isLoading ? (
              <GitUserDetailsLoader />
            ) : (
              <div className="description-container">
                <h2>GitUser description</h2>
                <p>{gitUser?.description}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GitUserDetails;

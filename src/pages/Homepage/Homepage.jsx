import { useSelector } from 'react-redux';

import { HomeMain, HomeTitle } from './Homepage.styled';
import { selectLogStatus, selectUserName } from 'redux/selectors';

const Homepage = () => {
  const isLoggedIn = useSelector(selectLogStatus);
  const name = useSelector(selectUserName);
  return (
    <HomeMain>
      {isLoggedIn ? (
        <>
          <HomeTitle>Welcome to your Phonebook, {name}</HomeTitle>
        </>
      ) : (
        <>
          <HomeTitle>Welcome to Phonebook!</HomeTitle>
        </>
      )}
    </HomeMain>
  );
};

export default Homepage;
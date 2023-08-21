import { useDispatch, useSelector } from 'react-redux';
import { LogoutBtn, WelcomeText } from './UserLogoutMenu.styled';
import { selectUserName } from 'redux/selectors';
import { logoutUser } from 'redux/authOperations';

export const UserLogoutMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(selectUserName);

  return (
    <div>
      <WelcomeText> Welcome back, {name}</WelcomeText>
      <LogoutBtn type="button" onClick={() => dispatch(logoutUser())}>
        Log out
      </LogoutBtn>
    </div>
  );
};
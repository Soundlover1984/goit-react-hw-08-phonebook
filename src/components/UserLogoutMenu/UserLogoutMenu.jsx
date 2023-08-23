import { useDispatch, useSelector } from 'react-redux';
import { BiHappy} from 'react-icons/bi';
import { Wrapper, WelcomeText } from './UserLogoutMenu.styled';
import { logoutUser } from '../../redux/authOperations';
import { selectUserName } from 'redux/selectors';
import { ButtonForm } from 'components/ButtonForm/ButtonForm';

export const UserLogoutMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(selectUserName);

  return (
    <Wrapper>
      <WelcomeText>
        <span>
          <BiHappy size={24} />
        </span>
        <p>Welcome back, {name} !</p>
      </WelcomeText>
      <ButtonForm
        status="logout"
        type="button"
        text="Log out"
        onClick={() => dispatch(logoutUser())}
      />
    </Wrapper>
  );
};
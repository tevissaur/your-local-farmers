import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { BsTreeFill } from 'react-icons/bs';
import styled from 'styled-components';
import authenticationService from '../../services/authentication.service';

const StyledProfileDropdownContainer = styled(Dropdown)`
    border-radius: 50px;
`;
const StyledProfileDropdownToggle = styled(Dropdown.Toggle)`
    border-radius: 50px;
    border: 1px solid black;
	box-shadow: 2px 2px 0 black;
    background-color: gray;
    &:focus {
        background-color: gray;
        border: 1px solid black;
    }
    &:hover {
        background-color: darkgray;
        border: 1px solid black;
    }
`;

const ProfileDropdown = () => {


  const handleLogout = () => {
    authenticationService.logout();
  }

  return (
    <StyledProfileDropdownContainer>
      <StyledProfileDropdownToggle id="dropdown-basic">
        <BsTreeFill />
      </StyledProfileDropdownToggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item onClick={handleLogout}>Log out</Dropdown.Item>
      </Dropdown.Menu>
    </StyledProfileDropdownContainer>
  );
}

export default ProfileDropdown;
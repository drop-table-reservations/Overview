import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  ExpandButton,
  Items,
  MenuButton,
  MenuTitles,
  MenuList,
  ButtonBox,
  H3,
} from './styles';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 0,
      collapsed: true,
      buttonText: 'View Full Menu',
    };
    this.setActiveMenu = this.setActiveMenu.bind(this);
  }

  setActiveMenu(value) {
    this.setState({
      active: value,
    });
  }

  createMenuButtons() {
    const { menus } = this.props;
    const { active } = this.state;
    return menus.map((menu, i) => (
      <MenuButton active={active} i={i} onClick={() => this.setActiveMenu(i)}>
        {menu.title}
      </MenuButton>
    ));
  }

  populateMenuItems() {
    const { menus } = this.props;
    const { active } = this.state;
    return menus[active].menu.map(item => (
      <Items>
        <span>{item[0]}</span>
        <span>{item[1]}</span>
      </Items>
    ));
  }

  handleExpansion() {
    const { collapsed, buttonText } = this.state;
    this.setState({
      collapsed: !collapsed,
      buttonText: buttonText === 'View Full Menu' ? 'Collapse Menu' : 'View Full Menu',
    });
  }

  render() {
    const { collapsed, buttonText } = this.state;
    return (
      <div>
        <H3>Menu</H3>
        <MenuTitles>{this.createMenuButtons()}</MenuTitles>
        <MenuList collapsed={collapsed}>{this.populateMenuItems()}</MenuList>
        <ButtonBox>
          <ExpandButton onClick={() => this.handleExpansion()}>{buttonText}</ExpandButton>
        </ButtonBox>
      </div>
    );
  }
}

Menu.propTypes = {
  menus: PropTypes.instanceOf(Object).isRequired,
};

export default Menu;

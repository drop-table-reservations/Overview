import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
    return menus.map((menu, index) => (
      <button
        type="button"
        className={active === index ? 'active menu-button' : 'menu-button'}
        id={`${menu.title}`}
        onClick={() => this.setActiveMenu(index)}
      >
        {menu.title}
      </button>
    ));
  }

  populateMenuItems() {
    const { menus } = this.props;
    const { active } = this.state;
    return menus[active].menu.map(item => (
      <div className="items">
        <span>{item[0]}</span>
        <span>{item[1]}</span>
      </div>
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
      <div className="menu">
        <h3>Menu</h3>
        <div className="menu-titles">{this.createMenuButtons()}</div>
        <div className={collapsed ? 'menu-collapsed' : 'menu-list'}>{this.populateMenuItems()}</div>
        <div className="button-box">
          <button type="button" className="expand-button" onClick={() => this.handleExpansion()}>{buttonText}</button>
        </div>
      </div>
    );
  }
}

Menu.propTypes = {
  menus: PropTypes.instanceOf(Object).isRequired,
};

export default Menu;

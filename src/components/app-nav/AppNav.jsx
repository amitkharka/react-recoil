import React, { useEffect } from 'react';
import {
  Link
} from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { themeState } from '../../store';

const AppNav = () => {
  const isDarkTheme = useRecoilValue(themeState);
  const setDarkTheme = useSetRecoilState(themeState);

  useEffect(() => {
    const body = document.body;
    if (body) {
      if (isDarkTheme) {
        body.classList.add('app--dark');
      } else {
        body.classList.remove('app--dark');
      }
    }
  }, [isDarkTheme]);

  return (
    <nav className="app-navigation">
      <ul className="app-navigation__items">
        <li className="app-navigation__item">
          <Link to="/">All Todos</Link>
        </li>
        {/* <li className="app-navigation__item">
        <Link to="/todays-todo">Todays Todo</Link>
      </li> */}
      </ul>
      <div className="app-theme-selector">
        <label htmlFor="app-theme">Dark Mode</label>
        <input
          id="app-theme"
          type="checkbox"
          checked={isDarkTheme}
          onChange={(event) => setDarkTheme(event.currentTarget.checked)}
        />
      </div>
    </nav>
  );
};

export default AppNav;
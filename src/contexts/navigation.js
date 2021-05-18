/* eslint-disable react/jsx-props-no-spreading */
import React, {
  createContext,
  createElement,
  useContext,
  useEffect,
  useState,
} from 'react';

const NavigationContext = createContext({});
const useNavigation = () => useContext(NavigationContext);

function NavigationProvider(props) {
  const [navigationData, setNavigationData] = useState({});

  return (
    <NavigationContext.Provider
      value={{ navigationData, setNavigationData }}
      {...props}
    />
  );
}

function withNavigationWatcher(Component) {
  return ({ match: { path } }) => {
    const { setNavigationData } = useNavigation();

    useEffect(() => {
      setNavigationData({ currentPath: path });
    }, [path, setNavigationData]);

    return createElement(Component, path);
  };
}

export { NavigationProvider, useNavigation, withNavigationWatcher };

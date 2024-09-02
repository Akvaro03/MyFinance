import { createNavigationContainerRef } from "@react-navigation/native";
import type { ParamListBase } from "@react-navigation/native";

export const navigationRef = createNavigationContainerRef<ParamListBase>();

export function goBack() {
  return navigationRef?.goBack();
}

export function navigate(
  name: keyof ParamListBase,
  params?: Record<string, any>
) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}

function push(routeName: string, params?: Record<string, any>) {
  throw new Error("Missing implementation of push");
}

function reset(routeName: string) {
  throw new Error("Missing implementation of reset");
}

function getCurrentRoute() {
  throw new Error("Missing implementation of getCurrentRoute");
}

const getRouteName = () => {
  return navigationRef.getCurrentRoute()?.name ?? "";
};

const NavigationService = {
  navigate,
  push,
  goBack,
  reset,
  getCurrentRoute,
  getRouteName,
};

export default NavigationService;

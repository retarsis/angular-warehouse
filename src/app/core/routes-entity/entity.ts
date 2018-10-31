import { RSBaseRoute, RSEntity, RSEntities } from '$routes-entity/interfaces';
import {
  AppRoutes,
  LocationRoutes,
  ShopRoutes,
  UserCenterRoutes
} from '$routes-entity/routes';
import {
  app,
  auth,
  cart,
  home,
  location,
  shop,
  userCenter
} from '$routes-entity/entities';

export interface Entity {
  app: RSEntity<AppRoutes>;
  auth: RSEntity<RSBaseRoute>;
  cart: RSEntity<RSBaseRoute>;
  home: RSEntity<RSBaseRoute>;
  location: RSEntity<LocationRoutes>;
  shop: RSEntity<ShopRoutes>;
  userCenter: RSEntity<UserCenterRoutes>;
}

export const routesEntity: RSEntities<Entity> = {
  app,
  auth,
  cart,
  home,
  location,
  shop,
  userCenter
};

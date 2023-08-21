import { APP_ROUTES } from './app-routes';

export function PublicRoutes(asPath: string) {
  const publicRoutes = Object.values(APP_ROUTES.public);

  for(let key in publicRoutes){
    if(publicRoutes[key].path === asPath){
      return true
    }
  }
}